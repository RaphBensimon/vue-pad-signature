import VueSignaturePad from '@/components/VueSignaturePad.vue'
export default {
	install(Vue) {
		Vue.component('vue-signature-pad', VueSignaturePad)
	}
}
export { VueSignaturePad }