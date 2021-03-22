import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import todo, { ITodo } from './todo'

export interface StateInterface {
  todo: ITodo
}

export const key: InjectionKey<Store<StateInterface>> = Symbol()

export const store = createStore<StateInterface>({
  modules: {
    todo
  }
})

export function useStore () {
  return baseUseStore(key)
}