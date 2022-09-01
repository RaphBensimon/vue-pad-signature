<template>
	<div>
		<vue-signature-pad v-model="signature" />
	</div>
</template>

<script >
export default {
	name       : 'App',
	data() {
		return { signature : null }
	}
}
</script>

<style>
</style>
