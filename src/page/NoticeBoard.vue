<template>
  <div>
    <h1>Board</h1>
    <hr>
    <div class="main">
      <ul class="board">
        <li class="boardList title">
          <p>제목</p>
          <p>아이디</p>
        </li>
        <li v-for="(data,key) in this.$boardList " :key="key">
          <router-link class="boardList" :to="{name: 'show' , params: {pageId : key, Id : data.id}}" >
              <p>{{data.title}}</p>
              <p>{{data.id}}</p>
        </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
    }
  },
}
</script>

<style>
.board{
  list-style: none;
  width: 1200px;
  margin: 0 auto;
}
.boardList{
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;

  box-sizing: border-box;
  padding: 20px;

  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  color: rgb(129, 129, 129);
}
.title:nth-child(1){
  font-weight: bold;
  font-size: 18px;
  color: black;
}
.boardList:hover {
  color: blue;
  font-weight: bold;
}
.title:nth-child(1):hover{
  color: black;
}
</style>