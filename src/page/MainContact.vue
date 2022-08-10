<template>
  <div>
    <h1>Contact</h1>
    <hr>
    <div class="main">
      <form action="">
        <input type="text" placeholder="이름을 입력해주세요">
        <input type="text" placeholder="연락처를 입력해주세요">
        <input type="text" placeholder="이메일을 입력해주세요">
        <textarea type="text" placeholder="문의 내용을 입력해주세요"></textarea>

        <div class="buttons">
          <input type="reset" value="취소">
          <input type="submit" value="저장">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
form{
  width: 1000px;
  height: 600px;
  border: 2px solid #dedede;
  margin: 50px auto;
  border-radius: 20px;
  box-shadow: 1px 1px 30px #ddd;
  box-sizing: border-box;
  padding: 70px;
}
form  input{
  width: 600px;
  height: 50px;
  font-size: 15px;

  box-sizing: border-box;
  padding: 0 30px;

  display: block;
  border: none;
  border-bottom: 1px solid #ddd;
  margin: 20px auto 0;
}
form textarea{
  width: 600px;
  height: 150px;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 30px;
}
.buttons > *{
  width: 250px;
  margin: 50px;
  display: inline-block;
}
</style>