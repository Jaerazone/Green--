<template>
  <div class="write">
    <h1>글을 작성하는 공간입니다</h1>
    <form action="/api/memo/writeform" method="post">
      <input type="text" name="title">
      <textarea name="memo" cols="30" rows="10"></textarea>
      <input type="submit" value="전송">
    </form>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>