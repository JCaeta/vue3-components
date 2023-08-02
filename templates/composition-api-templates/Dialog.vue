<template>
    <v-dialog
        v-model="dialog"
        persistent>
        <v-card>
            <v-card-title>{{ title }}</v-card-title>
            <v-card-text>
                <v-row class="justify-center">
                    <v-col cols="10">
                        <v-text-field
                            label="Text input">
                        </v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn
                    v-show="showYes"
                    color="success"
                    :loading="loading"
                    text
                    @click="$emit('yes')">
                    {{ yesText }}
                </v-btn>
                <v-btn v-show="showNo" color="error" text @click="$emit('no')">
                    {{ noText }}
                </v-btn>
                <v-btn
                    v-show="showCancel"
                    color="default"
                    text
                    @click="$emit('cancel')">
                    Cancel
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style scoped>

</style>

<script lang="ts">
    import { defineComponent, reactive, computed, ref} from '@nuxtjs/composition-api'
    // import {useEntitiesStore} from '~/composables/useEntitiesStore';
    
    export default defineComponent({
        name: 'Component',
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            yesText: {
                type: String,
                default: 'Ok'
            },
            noText: {
                type: String,
                default: 'No'
            },
            actions: {
                type: Array,
                default: () => {
                    // return ['yes', 'no', 'cancel']
                    return ['yes', 'cancel']
                }
            },
            required: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: 'Title'
            }
        },
        setup (props) {
            const loading = ref(false)

            const dialog = computed(() => {
                return props.visible
            })
        
            const showYes = computed(() => {
                return props.actions.includes('yes')
            })
        
            const showNo = computed(() => {
                return props.actions.includes('no')
            })
        
            const showCancel = computed(() => {
                return props.actions.includes('cancel')
            })

            const title = computed(() => {
                return props.title
            })
        
            return {
                dialog,
                showYes,
                showNo,
                showCancel,
                loading,
                title
            }
        }
    })
</script>
  

  