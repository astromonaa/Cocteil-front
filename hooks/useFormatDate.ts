const useFormatDate = (date:string) => {
	return new Date(date).toLocaleDateString('ru', {day: 'numeric', month: 'short', year: 'numeric'})
}

export default useFormatDate