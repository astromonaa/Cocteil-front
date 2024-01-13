

export interface IUsersApiModuleInterface {
	readonly _name: string;
	readonly adapter: any;

	createUserAsync: (data: any) => any
	updateUserAsync: (data: any) => any
	deleteUserAsync: (id: number) => any
}