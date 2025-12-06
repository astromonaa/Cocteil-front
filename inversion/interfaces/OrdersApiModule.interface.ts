import type {IRestModuleInterface} from "~/inversion/interfaces/RestModule.interface";
import type {IOrderData} from "~/types/types";

export interface IOrderApiModuleInterface {
  readonly _name: string;
  readonly _adapter: IRestModuleInterface;

  createOrder: (orderData: IOrderData) => Promise<ICreateOrderResponse>;
  fetchOrders: () => Promise<any>;
}

export interface ICreateOrderResponse {
  confirmation_url: string;
}