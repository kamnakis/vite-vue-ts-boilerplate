import { Module, GetterTree, MutationTree, ActionTree } from 'vuex'
import { StateInterface } from '../'

export interface ITodo {
  todos: string[]
}

const state: ITodo = {
  todos: [
    'Buy milk',
    'Clean the house',
    'Study'
  ]
}

const getters: GetterTree<ITodo, StateInterface> = {
  todos: (state) => state.todos
}

const mutations: MutationTree<ITodo> = {
  ADD_TODO (state, todo: string) {
    state.todos.push(todo)
  },
  REMOVE_TODO (state, index: number) {
    state.todos.splice(index, 1)
  }
}

const actions: ActionTree<ITodo, StateInterface> = {
  addTodo ({ commit }, todo: string) {
    commit('ADD_TODO', todo)
  },
  removeTodo ({ commit }, index: number) {
    commit('REMOVE_TODO', index)
  }
}

const todo: Module<ITodo, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default todo
