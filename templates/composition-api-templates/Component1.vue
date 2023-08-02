<template>

</template>

<style scoped>

</style>

<script lang="ts">
    import { defineComponent, reactive, computed} from '@nuxtjs/composition-api'
    
    export default defineComponent({
        name: 'Component',
        setup() {
            const componentState = reactive({

            })

            return {
                componentState
            }
        }
    })
</script>
  

  