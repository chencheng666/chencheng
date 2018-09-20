export default {
    state: {
        result:{
        }
    },
    getters: {
        // doneTodos: state => {
        //     return state.todos.filter(todo => todo.done)
        // },
        // getTodoById: (state) => (id) => {
        //     return state.todos.find(todo => todo.id === id)
        // }
    },
    mutations: {
        // mutation_01: state => {
        //     state.number += 10;
        // },
        save: (state,data) => {
            state.result = data;
        }
    },
    actions: {
        save: ({ commit, state }, userInfo) => {
            // state.result = userInfo;
            commit('save',userInfo)
        }
    }
}