import {IAppBaseModuleInterface} from "./inversion/interfaces/AppBaseModule.interface";

declare module '#app' {

  interface NuxtApp {
    $app: IAppBaseModuleInterface
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $app: IAppBaseModuleInterface
  }
}
