<template>
  <div class="home">
    <h1>게시판 화면</h1>

      <table>
        <tr>
          <td>글번호</td>
          <td>작성자</td>
          <td>제목</td>
        </tr>
        
      <tr v-for ="memo in memo" :key="(memo.i)">
        <td>{{memo.id}}</td>
        <td>{{memo.writer}}</td>
        <!-- title을 클릭했을 때 pageview 화면으로 넘어감-->
        <!-- 보여지는 화면은 Vew의 화면이기에 뷰컴포넌트와 라우터가 존재해야함-->
        <td @click="$router.push(`/about/${memo.id}`)">{{memo.title}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  created() {
    // 메모값을 vue가 생성 될 때 들고옴
    this.$http.get('/api/memo')
    .then((response)=> {
      console.log(response.data)
      this.memo = response.data
    })
  },
  data() {
    return {
      memo :[]
    }
  }
}
</script>