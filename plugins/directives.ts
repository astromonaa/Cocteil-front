import directives from "~/directives";

export default defineNuxtPlugin(({vueApp}) => {
	directives.forEach(d => vueApp.directive(d.name, d.callback))
})