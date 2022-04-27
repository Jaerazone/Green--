<template>
  <div>
      <h1>{{memo.title}}</h1>
      <p>{{memo.memo}}</p>
  </div>
</template>

<script>   // 서버에서 값을 들고오자마자 템플릿이 보여야하니깐 created를 사용함
export default {
    created() {
        // this.$http.get('/api/memo') 이걸 적으면 전체다들고오게 되서 특정메모만 들고오기위해 파람값 적는다
        // /api/memo/파람id를 넣어서 전달
        // memo.id로 구분해서 그 객체만 들고올 수 있다
        // id 값은 어디에서 들고오는가? ->라우트의 파람 id값을 들고온다
        this.$http.get(`/api/memo/${this.$route.params.id}`)
        .then((response) => {
            console.log(response.data)
            this.memo = response.data;
        })
    },
    data () {
        return ({
            memo : {}
        })
    }
}
</script>

<style>

</style>