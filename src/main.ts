import { createApp } from 'vue'

// Middleware
import { router } from './router/index'

// Components
import App from './App.vue'

// Styles
import './index.css'
import { key as storeKey, store } from './store'

createApp(App)
  .use(store, storeKey)
  .use(router)
  .mount('#app')
