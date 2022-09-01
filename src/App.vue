<template>
	<div>
		<vue-signature-pad v-model="signature" />
	</div>
</template>

<script >
import VueSignaturePad from './components/VueSignaturePad.vue'
export default {
	name       : 'App',
	components : { VueSignaturePad },
	data() {
		return { signature : null }
	}
}
</script>

<style>
</style>
