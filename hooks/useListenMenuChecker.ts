const useListenMenuChecker = () => {
	const handleMenuClose = (e:MouseEvent) => {
		const menuChecker:HTMLInputElement = document.getElementById('user-info-check')
		const menu = document.querySelector('.menu-container')
		if (menuChecker && e.target !== menuChecker && !menu?.contains(e.target as Node)) {
			menuChecker.checked = false
		}
	}
	const init = () => {
		document.addEventListener('click', e => handleMenuClose(e))
	}

	onUnmounted(() => document.removeEventListener('click', handleMenuClose))

	return {init}

}

export default  useListenMenuChecker