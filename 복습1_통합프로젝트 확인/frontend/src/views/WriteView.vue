<template>
    <div class="write">
        <h1>글작성 공간</h1>
        <input type="text" v-model="title" placeholder="제목을 입력하시오">
        <textarea name="" cols="30" rows="10" v-model="memo" placeholder="메모를 입력하시오"></textarea>
        <button @click="addmemo">전송</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>