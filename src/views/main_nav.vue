<template>
    <ul class="menu">
        <!-- <p>{{NavMainList}}</p> -->
        <MainNavLi :MainLi="NavMainList" />
        <SubNavLi :subLi="NavSublist" />
    </ul>
</template>
<script>

import MainNavLi from './Main-NavLi.vue';
import SubNavLi from './Sub-NavLi.vue';
export default {
    props :{
        NavMainList : Object,
        NavSublist : Array,
    },
    components:{
        SubNavLi,
        MainNavLi,
    }
}
</script>
<style>
.menu{
    list-style: none;
}
</style>