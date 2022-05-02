<template>
    <div class="search">
        <input type="text" v-model="writer" placeholder="작성자 이름을 입력하시오">
        <button>작성자 찾기</button>

        <table>
            <tr>
                <td>글번호</td>
                <td>작성자</td>
                <td>제목</td>
                <td>메모 내용</td>
            </tr>
            <tr v-for="memo in memo" :key="memo.i">
                <td>{{memo.id}}</td>
                <td>{{memo.writer}}</td>
                <td>{{memo.title}}</td>
                <td>{{memo.memo}}</td>
            </tr>
            
        </table>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>