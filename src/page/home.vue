<template>
    <div>
        <h1>Home</h1>
        <hr>
        <div class="main home">
            <img src="../assets/logo.png" alt="">
            <h2>나는야  메인 페이지데스</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
             Eos aperiam sunt omnis odio nemo! Provident alias error iure adipisci, <br>
             saepe neque, doloremque in nobis cum necessitatibus quidem? Iste, quos labore.</p>
        </div>
    </div>
</template>
<script>

export default {
    name: 'App',
    components:{
    },
}
</script>
<style>
    h1{
        text-align: center;
    }
    .main {
        text-align: center;
        margin: 50px;
    }
    .home > *{
        padding: 10px;
    }
    .home > p{
        color: #cecece;
    }
</style>