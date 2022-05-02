<template>
    <div>
        <h1>메모</h1>
        <!--  메모의 아이디와 작성자와 제목 출력 -->
        <table>
            <tr>
                <td>아이디</td>
                <td>작성자</td>
                <td>제목</td>
            </tr>
            <tr v-for="memo in memo" :key="memo.i">
                <td>{{memo.id}}</td>
                <td>{{memo.writer}}</td>
                <!-- 타이틀을 눌렀을때 /list/:id 링크로 이동 -->
                <td @click="$router.push(`/list/${memo.id}`)">{{memo.title}}</td>
                <!-- memo의 값을 수정하기 위해 updateform으로 이동 -->
                <td> <button @click="$router.push(`/updateform/${memo.id}`)">수정</button> </td>
                <!-- 화면을 이동하지않고 현재위치에서 삭제하기위해 여기서바로 메소드사용! (서버) 
                        전부 삭제할생각이 아니라서 유일한값인id를 인자로 같이넘겨준다-->
                <td> <button @click="deletememo(memo.id)">삭제</button> </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            //v-for로 확인하기 위해 배열
            memo : [ {
                id :1,
                title : "첫번째 메모입니다",
                writer : "green"
            }]
        }
    },
    // 컴포지션이 처음 생성될때 값을 가져와야 화면에 출력할수 있다
    created() {
        // axios를 통해 값을 가져옴 - get
        // this.memo에 가져온 값 넣어줌
        this.$http.get('/api/memo')
        .then((response) => {
            // data를 통해서 값 가져올 수 있다.
            console.log(response.data);
            this.memo = response.data
        })
    },
    methods : {
        deletememo(id) {    // 서버에 요청해서 삭제할거임
            this.$http.delete(`/api/memo/${id}`) // id값을 통해 메모를 삭제했다면
            .then ((response) => { //삭제된 메모제외, 나머지 메모들을 화면에 뿌려줘야하니, 
            // response를 받아와서 data쪽 memo배열에 다시 넣어준다
            // 이때ㅡ 서버측에서 프엔으로 메모배열로 보내기로 약속 
            //!★백엔드랑 함께 작업할때 데이터가 어떤형식으로 주고받아지는지 꼭 얘기해야함
            this.memo = response.data;
            })
        }
    }
}
</script>