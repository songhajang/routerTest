<template>
 <li class="menuList">
   <span v-for="(values, key) in subLi" :key="key" >{{values}}</span>
 </li>
</template>

<script>
export default {
    props:{
        subLi: Array,
    }
}
</script>

<style>
.menuList{
    float: left;
    margin: 10px;
    font-size: 18px;
}
.menuList > span {
  padding: 10px;
  cursor: pointer;
}
</style>