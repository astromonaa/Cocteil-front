export const saveToLocalStorage = (key:string, value: any) => {
	localStorage.setItem(key, JSON.stringify(value))
}
export const getFromLocaleStorage = (key:string) => localStorage.getItem(key)

export const removeFromLocalStorage = (key: string) => localStorage.removeItem(key)