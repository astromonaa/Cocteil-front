

export interface ICategoryApiModuleInterface {
	readonly _name: string;
	readonly adapter: any;

	createCategoryAsync: (data: any) => any
	updateCategoryAsync: (data: any) => any
	deleteCategoryAsync: (id: number) => any
}