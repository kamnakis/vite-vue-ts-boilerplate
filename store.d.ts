import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { StateInterface } from './src/store'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<StateInterface>
  }
}