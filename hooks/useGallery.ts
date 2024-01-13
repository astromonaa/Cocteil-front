import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const useGallery = (items) => {


	const show = (index: number) => {

		Fancybox.show(items, {
			startIndex: index,
			on: {
				init(d) {
					Promise.resolve().then(() => {
						const slider = d.container.querySelector('.fancybox__carousel')
						slider.style.padding = '2% 0'
						setTimeout(() => {
							const thumbs = d.container.querySelectorAll('.f-thumbs__slide__img')
							thumbs.forEach((i: HTMLElement) => i.setAttribute('src', i.getAttribute('data-lazy-data-src')!))
						}, 20)
					})
				},
			}
		})

	}


	const close = () => Fancybox.close()


	onUnmounted(close)


	return {
		show,
		close
	}
}

export default useGallery