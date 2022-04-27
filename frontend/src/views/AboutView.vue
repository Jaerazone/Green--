<template>
  <div class="about">
    <h1>메모</h1>
    <table>
      <tr> 
        <td>번호</td>
        <td>작성자</td>
        <td>제목</td>
      </tr>
      <!-- 13. 저장된 memo 출력 -->
      <tr v-for="(memo, i) in memo" :key="i">
        <td>{{memo.id}}</td>
        <td>{{memo.writer}}</td>
        <!-- title을 클릭했을때 pageview 화면으로 넘어감 -->
        <!-- 보여지는 화면은 Vue이기에 뷰컴포넌트와 라우터가 존재해야함 -->
        <td @click="$router.push(`/about/${memo.id}`)">{{memo.title}}</td>
      </tr>
    </table>

  </div>
</template>

<script>
/* 
  (2실행순서) app.vue에서 about링크를 눌렀을 때, AboutView.vue 컴포넌트 호출된다
  (3) axios를 통해서 백엔드(/api/memo)에 http 객체로 request 보냄
*/

export default {
  // 11. created : 뷰 컴포넌트가 실행(생성)될때마다 아래 함수를 실행하기 위해서
  // created() 함수에 작성함
  created() {
    // 생성될때!, 메모값을 vue가 생성될때 들고오도록함
    // axios 는 fetch와 사용법이 거의 유사하다
    // 주소 '/api/memo'로 get메소드로 request를 보냄
    this.$http.get('/api/memo')
    .then((response) => {  // fetch의 then과 거의 유사함
    // response이 오면 실행한다
      console.log(response.data)
      // 12. response 메모에 저장 
      this.memo = response.data
      /*
        (6 실행순서) memo.js에서 보내준 memos의 값을 response를 통해 전달 받음
      */
      
    })
  },
  data() {
    return {
      memo : []
    }
  }
}
</script>
