import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        message: ''
    },
    getters: {
        getMessage: state => state.message
    },
    mutations: {
        updateMessage (state, payload) {
            state.message = payload
        }
    },
    actions: {
        updateMessage(context, message) {
            context.commit('updateMessage', message)
        }
    },
})
