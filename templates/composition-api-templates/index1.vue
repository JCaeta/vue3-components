<template>
    <div>
        <LoadingDialog :visible="loading"/>
    </div>

</template>

<style scoped>

</style>

<script lang="ts">
    import { defineComponent, useFetch, reactive, computed} from '@nuxtjs/composition-api'
    import {useEntitiesStore} from '~/composables/useEntitiesStore';
    import LoadingDialog from '~/components/Reusables/LoadingDialog.vue';

    export default defineComponent({
        layout: "index",
        components: {
            LoadingDialog
        },
        setup() {
            const componentState = reactive({
                loading: false
            })

            const entitiesStore = useEntitiesStore()

            const loading = computed(() => {
                return componentState.loading
            })

            useFetch(async () => {
                componentState.loading = true
                await Promise.all([
                    entitiesStore.getEmployees(),
                    entitiesStore.getEmployees()
                ])
                componentState.loading = false
            })
            return {
                componentState,
                loading
            }
        }
    })
</script>
  

  