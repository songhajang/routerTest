<template>
  <header>
    <MainNav :list="mainNav"/>
    <MainNav :list="subNav"/>
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
      mainNav:['HOME','DODS','CATS'],
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
