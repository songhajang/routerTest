<template>
  <div>
    <h1>상세보기</h1>
    <hr>
    <div class="main">
      <router-link :to="{ name: 'board' }" class="backButton">돌아가기</router-link>
      <div class="boardDetailList">
        <h3>ID - {{ Id }}</h3>

        <img :src="this.$boardList[pageId].img" alt="">
        <div class="boardTitle">
          <h3>제목 </h3>
          <h2>{{ this.$boardList[pageId].title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routerParams: this.$route.params,
      pageId: this.$route.params.pageId,
      Id: this.$route.params.Id,
    }
  }
}
</script>

<style>
.backButton {
  padding: 10px;
  background-color: blue;
  color: white;
  text-decoration: none;
  border-radius: 10px;
}

.boardDetailList {
  width: 800px;
  height: 500px;
  background: #eee;

  border-radius: 20px;
  margin: 50px auto;
  padding: 50px 0;
}

.boardDetailList>img {
  width: 500px;
}
</style>