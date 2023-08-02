import { defineStore } from 'pinia'
import { EntityDTO } from '~/types/EntityDTO'

export interface State {

}

export const useEntitiesStore = defineStore('entities', {
    state: (): State => ({

    }),
    actions: {
        async getUsers () {

        },

        async getUserByName (payload) {
            return await window.$nuxt.$axios.$get(`users/${payload}`)
        },
        
        async createUser (payload: EntityDTO) {
            const response = await window.$nuxt.$axios.$post('entities', payload)
            return response
        },
    }
})
