<template>
    <div>
        <MainHeader />
        <router-view></router-view>
    </div>
</template>
<script>
import MainHeader from './views/Main_header.vue';

export default {
    name: 'App',
    components:{
        MainHeader,
    }
}
</script>

<style>
    
</style>