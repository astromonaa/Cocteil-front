export default {
	name: 'showBlock',
	callback: (el:HTMLElement, binding:object) => {
		const {isMobile} = useDevice()
		let options = {
			rootMargin: '0px',
			threshold: isMobile ? 0 : 0.2
		}

		let callback = (entries:Array<any>) => {
			if (entries[0].isIntersecting){
				el.classList.remove('start-pos')
			}
		}

		let observer = new IntersectionObserver(callback, options)
		observer.observe(el)
	}
}