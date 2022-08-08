<template>
    <div>
        <router-view></router-view>
        <MainHeader />
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