<template>
  <div>
      <h3>글을 작성하는 공간입니다</h3>
      <input type="text" v-model="title"> <br>
      <textarea name="" cols="30" rows="10" v-model="memo"></textarea> <br>
      <button @click="addmemo"> 전송 </button>


      <!-- form으로 작성/제출 하는 방법 
      비동기가 아닌 값을 새로고침으로 돌아감!
      -->
      <form action="/api/memo/writeform" method="post"> 
      <!-- 
        백엔드 app.js로가서 app.use 똑같은거 있나 찾아보고, 
        app.use('/api/memo/', apiMemoRouter)
        -> const apiMemoRouter = require('./routes/apimemo');
        apimemo.js에 가서 router.post부분 실행한다
        -> router.post('/', 여기 실행함! 
        -->
        <input type="text" name="title"> <br>
        <textarea name="memo" cols="30" rows="10"></textarea> <br>
        <input type="submit" value="전송">
      </form>

  </div>
</template>

<script>
export default {
  data () {
    return{
      title : '',
      memo : ''
    }
  },
  methods :{
    addmemo () {

      //post를 이용해서 서버로 값 전달
      this.$http.post('api/memo', {
        // 객체 형태로 보내려고한다
        data : {
          title : this.title,
          memo : this.memo
        }
        //axios를 통해 받아온값을 출력할 수 있다
      }).then((response)=> console.log(response.data)) 
      this.$router.push('/') 
      // form을 쓰지않고 버튼을 사용했기 때문에 이렇게 값을 전달해준다
      // form submit을 썼으면 생략해도될 내용
    }
  }
}
</script>

<style>

</style>