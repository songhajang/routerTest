<template>
  <header>
    <MainNav :NavMainList="mainNav"/>
    <MainNav :NavSublist="subNav"/>
  </header>
</template>

<script>
import MainNav from './main_nav.vue';

export default {
  components: {
    MainNav,
  },
  data(){
    return{
      mainNav :[
        {
          title : '첫화면',
          link : 'home'
        },
        {
          title : '소개',
          link : 'about'
        },
        {
          title : '게시판',
          link : 'board'
        },
        {
          title : '문의',
          link : 'contact'
        },

      ],
      subNav:['로그인','로그아웃']
    }
  },
}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;

  padding: 0 20px;
  box-sizing: border-box;
}
</style>
