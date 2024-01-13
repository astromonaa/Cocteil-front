export const useFormValidation = (form:HTMLElement) => {
	const requiredElements = form.querySelectorAll('input:required')
	for (const input of requiredElements) {
		if (input.dataset.valid !== 'true') return false
	}
	return true
}