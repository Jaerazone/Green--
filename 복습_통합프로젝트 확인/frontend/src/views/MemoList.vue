<template>
  <div>
      <table>
          <tr>
              <td>번호</td>
              <td>제목</td>
          </tr>
          <!-- (4 write->memo) -->
          <tr v-for='(memo,i) in memo' :key=i>
              <td>{{memo.id}}</td>
              <td @click="$router.push(`/list/${memo.id}`)" >{{memo.title}}</td>
          </tr>
      </table>
  </div>
</template>
<script>
export default {
  data () {
    return ({
      memo : []
    })
  },
  created() {
    // (1) 서버로 접근해서 데이터를 가져올 함수
    // axios 비동기로 값을 가져옴 : get을 사용해서 가져올 예정
    this.$http.get('/api/memo') // (2 main.js->write) main.js에서 들고온 $http
    .then((response) => {
      // (3) 서버에서 어떤값이 들어왔는지 알기 위해서는 콘솔로 확인 해본다!
      console.log(response.data); // 브라우저에서 찍히기때문에 배포할땐 지우는게 좋다
      this.memo = response.data;
    }) // (4.memo.vue) 서버에 접근해서 값을 가져왔다...! 위 템플릿에서 이내용을 사용해보자

  }
}
</script>

<style>

</style>

