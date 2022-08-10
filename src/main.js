import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
// import Main_headerVue from './Main_header.vue'
import App from './app.vue'

import Home from './page/home.vue'
import about from './page/MainMyProfile.vue'
import conteact from './page/MainContact.vue'
import board from './page/NoticeBoard.vue'
import show from './page/BoardShow.vue'


const routes =[
  {name: 'home', path: '/', component: Home},
  {name: 'about', path: '/about', component: about},
  {name: 'board', path: '/board/', component: board},
  {name: 'show', path: '/board/show/:pageId?', component: show},
  {name: 'contact', path: '/contact', component: conteact},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')

app.config.globalProperties.$boardList =[
    {
      id : 1,
      title : '고양이 귀여워',
      name : 'board',
      img : 'https://file.mk.co.kr/meet/neds/2021/06/image_readtop_2021_535745_16226846584668330.jpg',
    },
    {
      id : 2,
      title : '강아지 귀여워',
      name : 'board',
      img : 'https://images.mypetlife.co.kr/content/uploads/2021/10/22152410/IMG_2087-scaled-e1634883900174-1024x739.jpg',
    },
    {
      id : 3,
      title : '고양이 귀여워',
      name : 'board',
      img : 'https://file.mk.co.kr/meet/neds/2021/06/image_readtop_2021_535745_16226846584668330.jpg',
    },
    {
      id : 4,
      title : '강아지 귀여워',
      name : 'board',
      img : 'https://images.mypetlife.co.kr/content/uploads/2021/10/22152410/IMG_2087-scaled-e1634883900174-1024x739.jpg',
    },
    {
      id : 5,
      title : '고양이 귀여워',
      name : 'board',
      img : 'https://file.mk.co.kr/meet/neds/2021/06/image_readtop_2021_535745_16226846584668330.jpg',
    },
    {
      id : 6,
      title : '강아지 귀여워',
      name : 'board',
      img : 'https://images.mypetlife.co.kr/content/uploads/2021/10/22152410/IMG_2087-scaled-e1634883900174-1024x739.jpg',
    },
    {
      id : 7,
      title : '고양이 귀여워',
      name : 'board',
      img : 'https://file.mk.co.kr/meet/neds/2021/06/image_readtop_2021_535745_16226846584668330.jpg',
    },
    {
      id : 8,
      title : '강아지 귀여워',
      name : 'board',
      img : 'https://images.mypetlife.co.kr/content/uploads/2021/10/22152410/IMG_2087-scaled-e1634883900174-1024x739.jpg',
    },
    {
      id : 9,
      title : '고양이 귀여워',
      name : 'board',
      img : 'https://file.mk.co.kr/meet/neds/2021/06/image_readtop_2021_535745_16226846584668330.jpg',
    },
    {
      id : 10,
      title : '강아지 귀여워',
      name : 'board',
      img : 'https://images.mypetlife.co.kr/content/uploads/2021/10/22152410/IMG_2087-scaled-e1634883900174-1024x739.jpg',
    },
    
]