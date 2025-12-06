import 'reflect-metadata'
import {Container, ContainerModule, type interfaces} from 'inversify'
import {TYPES} from "~/inversion/types/types";
import {App} from "~/inversion";
import {ApiPack} from "~/inversion/apiPack";
import {ProductApiModule} from "~/inversion/api/ProductApiModule";
import {CartApiModule} from "~/inversion/api/CartApiModule";
import {AuthApiModule} from "~/inversion/api/AuthApiModule";
import {ChatsApiModule} from "~/inversion/api/ChatsApiModule";
import {SocketApiModule} from "~/inversion/api/SocketApiModule";
import {RestAdapter} from "~/inversion/api/RestAdapter";
import {OrderApiModule} from "~/inversion/api/OrdersApiModule";
import {WebSocketAdapter} from "~/inversion/api/socketClients/websocketAdapter";
import {SocketIOAdapter} from "~/inversion/api/socketClients/SocketIOAdapter";
// import {IAppBaseModuleInterface} from "~/inversion/interfaces/AppBaseModule.interface";
import type {IAppBaseModuleInterface} from "~/inversion/interfaces/AppBaseModule.interface";


const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<App>(TYPES._app).to(App).inSingletonScope()
	bind<ApiPack>(TYPES._apiPack).to(ApiPack).inSingletonScope()
	bind<ProductApiModule>(TYPES._productsApi).to(ProductApiModule).inSingletonScope()
	bind<CartApiModule>(TYPES._cartApi).to(CartApiModule).inSingletonScope()
	bind<AuthApiModule>(TYPES._authApi).to(AuthApiModule).inSingletonScope()
	bind<ChatsApiModule>(TYPES._chatsApi).to(ChatsApiModule).inSingletonScope()
	bind<RestAdapter>(TYPES._restAdapter).to(RestAdapter).inSingletonScope()
	bind<OrderApiModule>(TYPES._ordersApi).to(OrderApiModule).inSingletonScope()
	bind<SocketApiModule>(TYPES._socketApi).to(SocketApiModule).inSingletonScope()
  bind<WebSocketAdapter>(TYPES._websocketAdapter).to(WebSocketAdapter).inSingletonScope()
  bind<SocketIOAdapter>(TYPES._socketIOAdapter).to(SocketIOAdapter).inSingletonScope()
})


export default defineNuxtPlugin((nuxtApp) => {
	const container = new Container()
	container.load(appBindings)

	const app: IAppBaseModuleInterface = container.get<App>(TYPES._app)

	nuxtApp.provide('app', app)
})