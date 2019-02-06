import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        comments:[],
        newComment: ''
    },
    mutations: {
        GET_COMMENT(state, comment){
            state.newComment = comment
        },
        ADD_COMMENT(state){
            state.comments.push({
                body: state.newComment
            })
        },
        EDIT_COMMENT(state, comment){
            var comments = state.comments
            comments.splice(comments.indexOf(comment),1)
            state.comments = comments
            state.newComment = comment.body
        },
        CLEAR_FIELD(state){
            state.newComment = ''
        }
    },
    actions: {
        getComment({commit}, c){
            commit('GET_COMMENT', c)
        },
        addComment({commit}){
            commit('ADD_COMMENT')
        },
        editComment({commit}, c){
            commit('EDIT_COMMENT',c)
        },
        clearField({commit}){
            commit('CLEAR_FIELD')
        }
    }
})
