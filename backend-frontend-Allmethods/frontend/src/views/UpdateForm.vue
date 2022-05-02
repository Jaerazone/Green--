<template>
    <div>
        <h1>글을 수정하는 곳입니다</h1>
        <input type="text" v-model="memo.title"> <br>
        <textarea cols="30" rows="10" v-model='memo.memo'></textarea> <br>
        <button @click="updatememo">수정</button>

</template>

<script>
export default {
    data () {
        return { //! v-model로 값들을 여기로 받아옴 -> 아래 put으로 보내줌
            memo : { // 이러한 형태를 엔티티라고함, 메모객체를 한꺼번에 보냄
                title :'',
                memo : ''
            }
        }
    },
    created() { // 화면이 켜지자마자 기존적혀있던 데이터들이 보여야함
        this.$http.get(`/api/memo/${this.$route.params.id}`)
        .then((response) => {
            this.memo = response.data
        })
    },
    methods : {
        // axios를 이용해 수정 버튼을 눌렀을때 수정된 값을 보내줌 - put
        updatememo() {
            this.$http.put('/api/memo/updateform',{
                data : { 
//! memo 객체를 위 v-model -> memo : { title :'', memo''} 여기서 받고 -> 서버로 보내준다
                    memo : this.memo
                }
            }).then((response)=>{
                console.log(response.data) // 제대로 수정되었다면 데이터받아옴
            });
            this.$router.push('/')
        }
    }
}
</script>