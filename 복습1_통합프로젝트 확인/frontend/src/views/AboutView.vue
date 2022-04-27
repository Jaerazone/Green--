<template>
  <div class="about">
    <h1>메모</h1>
      <table v-for ="(memo,i) in memo" :key="i"> <!-- v-for=" 이부분 띄워쓰기 금지 -->
      <tr>
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
    // axios 는 fetch와 사용법 유사함
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