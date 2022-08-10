<template>
  <div>
    <h1>About</h1>
    <hr>
    <div class="main">
      <h3>우리집 귀여미를 소개해드리겠슴니다요</h3>
      <div class="cardBox">
        <div class="card">
          <img src="../assets/고냥이.jpg" alt="">
          <div>
            <p><strong>나이</strong> : <span>2개월</span></p>
            <p><strong>특징</strong> : <span>눈이 이쁘다</span></p>
            <p><strong>귀여운 점수</strong> : <span>백만점</span></p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/미미.jpg" alt="">
          <div>
            <p><strong>나이</strong> : <span>6-7개월</span></p>
            <p><strong>특징</strong> : <span>고양이 같은 강아지</span></p>
            <p><strong>귀여운 점수</strong> : <span>백만점</span></p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/슈슈.jpg" alt="">
          <div>
            <p><strong>나이</strong> : <span>6-7개월</span></p>
            <p><strong>특징</strong> : <span>댕청함</span></p>
            <p><strong>귀여운 점수</strong> : <span>백만점</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.cardBox{
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}
.card{
  width: 400px;
  height: 500px;
  background: #dedede;
  border-radius: 15px;

  box-sizing: border-box;
  padding: 30px;
}
.card > img {
  width: 100%;
  border-radius: 10px;
}
</style>