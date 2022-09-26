    # Vue pad signature ![npm](https://www.npmjs.com/package/vue-signature-pad)
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
