<template>
 <li class="menuList">
     <router-link class="links" v-for="(values, key) in MainLi" :key="key" :to="{name : values.link}">{{values.title}}</router-link>
 </li>
</template>

<script>
export default {
   props:{
     MainLi : Object,
   }
}
</script>

<style>
.menuList{
    float: left;
    margin: 10px;
    font-size: 18px;
}
.links {
    padding: 10px;
    color: black;
    text-decoration: none;
}
.links:hover {
    color: blue;
}
</style>