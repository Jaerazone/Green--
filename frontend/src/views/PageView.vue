<template>
    <div>
        <p>{{memo.memo}}</p>
    </div>
</template>

<script>
export default {
    created() {
        // memo의 id 값을 가져오기 위해서, route의 params 값을 사용해보자
        // axios의 반환값도 promise 객체
        this.$http.get(`/api/memo/${this.$route.params.id}`)
        .then((response) => {  
        console.log(response.data)
        this.memo = response.data
        })
    },
    data () {
        return {
            memo : []
        }
    }
}

</script>

<style>

</style>