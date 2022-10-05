# Vue pad signature [![npm](https://flat.badgen.net/npm/v/vue-pad-signature)](https://www.npmjs.com/package/vue-pad-signature)
A simple pad signature for Vue 3

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
