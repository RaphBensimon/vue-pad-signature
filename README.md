# Vue pad signature [![npm](https://flat.badgen.net/npm/v/vue-pad-signature)](https://www.npmjs.com/package/vue-pad-signature)
A simple pad signature for Vue 3
![image (1)](https://user-images.githubusercontent.com/28560613/205606928-e30c33ca-0ec8-45c8-8b72-e02862c38ebe.jpg)

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
    import VuePadSignature from 'vue-pad-signature'
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
