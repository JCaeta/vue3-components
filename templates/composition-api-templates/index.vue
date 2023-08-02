<template>
    <!-- <EasyGantt/> -->
</template>

<style scoped>

</style>

<script lang="ts">
    import { defineComponent, reactive, computed} from '@nuxtjs/composition-api'
    // import EasyGantt from '~/components/Reusables/Charts/GanttChart/EasyGantt.vue'


    export default defineComponent({
        layout: "index",
        components: {
            // EasyGantt
        },
        setup() {
            const componentState = reactive({
                variable1: 0,
                variable2: 0
            })


            const total = computed(() => {
                return componentState.variable1 + componentState.variable2
            })

            const clickVar1 = () => {
                componentState.variable1 += 1
            }

            const clickVar2 = () => {
                componentState.variable2 += 1
            }

            return {
                total,
                clickVar1,
                clickVar2,
                componentState
            }
        }
    })
</script>
  

  