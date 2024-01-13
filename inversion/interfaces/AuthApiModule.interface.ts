import type {IRestModuleInterface} from "~/inversion/interfaces/RestModule.interface";
import type {IUser} from "~/types/types";


export default interface IAuthApiModuleInterface {
	readonly _name: string;
	readonly _adapter: IRestModuleInterface
	registration: (email: string, password: string) => Promise<any>
	login: (email: string, password: string) => Promise<any>
	auth: () => Promise<any>
}