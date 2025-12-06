import type {ICreateOrderResponse, IOrderApiModuleInterface} from "~/inversion/interfaces/OrdersApiModule.interface";
import {injectable, inject} from "inversify";
import {TYPES} from "~/inversion/types/types";
import type {IRestModuleInterface} from "~/inversion/interfaces/RestModule.interface";
import type {IOrderData} from "~/types/types";

@injectable()
export class OrderApiModule implements IOrderApiModuleInterface {
  readonly _name = 'orders-api'

  constructor(
    @inject(TYPES._restAdapter) public readonly _adapter: IRestModuleInterface
  ) {}

  async createOrder(orderData: IOrderData): Promise<ICreateOrderResponse> {
    try {
      return this._adapter.post<ICreateOrderResponse>({
        url: '/api/orders/create',
        data: orderData
      })
    }catch (error) {
      return Promise.reject(error);
    }
  }

  async fetchOrders(): Promise<any[]> {
    return this._adapter.get({
      url: '/api/orders',
    })
  }
}