<template>
    <ul>
        <NavLi :count="list"/>
    </ul>
</template>
<script>
import NavLi from './main_nav_li.vue';
export default {
    props :{
        list : Array,
    },
    components:{
        NavLi,
    }
}
</script>
<style>
ul{
    list-style: none;
}
ul > li{
    float: left;
    margin: 10px;
    font-size: 18px;
}
</style>