import 'reflect-metadata'
import {Container, ContainerModule, type interfaces} from 'inversify'
import {App} from '~/inversion'
import {ApiPack} from '~/inversion/apiPack'
import {ProductApiModule} from '~/inversion/api/ProductApiModule'
import {CartApiModule} from "~/inversion/api/CartApiModule";
import {RestAdapter} from "~/inversion/api/RestAdapter";
import {AuthApiModule} from "~/inversion/api/AuthApiModule";

import {TYPES} from '~/inversion/types/types'
import type {IAppBaseModuleInterface} from "~/inversion/interfaces/AppBaseModule.interface";


const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<App>(TYPES._app).to(App);
	bind<ApiPack>(TYPES._apiPack).to(ApiPack);
	bind<ProductApiModule>(TYPES._productsApi).to(ProductApiModule)
	bind<CartApiModule>(TYPES._cartApi).to(CartApiModule)
	bind<AuthApiModule>(TYPES._authApi).to(AuthApiModule)
	bind<RestAdapter>(TYPES._restAdapter).to(RestAdapter)
})


export default defineNuxtPlugin((nuxtApp) => {
	const container = new Container()
	container.load(appBindings)

	const app: IAppBaseModuleInterface = container.get<App>(TYPES._app)

	nuxtApp.provide('app', app)
})