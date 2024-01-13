export const getSignFromSize = (size: number): string | undefined => {
	return {
		46: 'S',
		48: 'M',
		50: 'L',
		52: 'XL'
	}[size]
}