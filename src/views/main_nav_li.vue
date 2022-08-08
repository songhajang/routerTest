<template>
  <li v-for="(values, key) in count" :key="key" >{{values}}</li>
</template>

<script>
export default {
    props:{
        count: Array,
    }
}
</script>

<style>

</style>