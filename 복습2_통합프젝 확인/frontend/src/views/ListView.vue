<template>
  <div class="home">
    <h1>메모</h1>
    <table v-for="(memo, i) in memo" :key="i">
      <tr>
        <td>{{memo.id}}</td>
        <td @click ="$router.push(`/page/${memo.id}`)" >{{memo.title}}</td>
        <td>{{memo.memo}}</td>
        <td>{{memo.writer}}</td>
      </tr>
    </table>
    <h3>제목을 클릭하면 페이지로 이동합니다</h3>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  created() {
    this.$http.get('/api/memo')
    .then((response) => {
      console.log(response.data);
      this.memo = response.data;

    })
  },
  data () {
    return {
      memo : []
    }
  }
}
</script>
