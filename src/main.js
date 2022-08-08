import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
// import Main_headerVue from './Main_header.vue'
import App from './app.vue'

import Home from './page/home.vue'

const routes =[
  {path: '/', component: Home},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')
