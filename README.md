# Vue pad signature [![npm](https://camo.githubusercontent.com/d04a6ac8cdf9f900d65dc30e16da75169bd950b865de1b3171400dbf84d47770/68747470733a2f2f666c61742e62616467656e2e6e65742f6e706d2f762f7675652d7061642d7369676e6174757265)](https://www.npmjs.com/package/vue-pad-signature)
A simple pad signature for Vue 3

<img src="https://user-images.githubusercontent.com/28560613/205606928-e30c33ca-0ec8-45c8-8b72-e02862c38ebe.jpg" width="400">


## Install
```bash
npm install vue-pad-signature
```
### Basic Usage
```vue
<template>
   <div>
        <vue-pad-signature v-model="signature">
    </div>
</template>
<script>
    import { VuePadSignature } from 'vue-pad-signature'
    export default {
        components: { VuePadSignature },
        data () {
            return {
                signature: null
            }
        }
    }
</script>
```
