<template>
	<canvas class="vue-signature-pad" @mousedown="mousedown" @mousemove="mousemove"
		@mouseup="sign = false" @mouseout="sign = false" />
</template>
<script>
export default {
	emits : ['update:modelValue'],
	props : {
		modelValue : {
			type     :  null,
			required :  true
		}
	},
	data() {
		return {
			ctx   :  null,
			sign  :  false,
			prevX :  0,
			prevY :  0
		}
	},
	methods : {
		mousedown($event) {
			this.sign = true
			this.prevX = $event.offsetX
			this.prevY = $event.offsetY
		},
		mousemove($event) {
			if(this.sign) {
				const currX = $event.offsetX
				const currY = $event.offsetY
				this.draw(this.prevX, this.prevY, currX, currY)
				this.prevX = currX
				this.prevY = currY
			}
		},
		draw(depX, depY, destX, destY) {
			this.ctx.beginPath()
			this.ctx.moveTo(depX, depY)
			this.ctx.lineTo(destX, destY)
			this.ctx.closePath()
			this.ctx.stroke()

			const img = this.$el.toDataURL('image/png').replace('image/png', 'image/octet-stream')
			this.$emit('update:modelValue', img)
		}
	},
	watch : {
		modelValue(model) {
			if(!model) {
				this.ctx.clearRect(0, 0, this.$el.width, this.$el.height)
			}
		}
	},
	mounted() {
		this.ctx = this.$el.getContext('2d')
		this.ctx.strokeStyle = 'black'
		this.ctx.lineWidth = 2
	}
}
</script>
<style scoped>
.vue-signature-pad {
    border: 1px solid black;
    background-color: white;
    cursor: crosshair;
}
</style>