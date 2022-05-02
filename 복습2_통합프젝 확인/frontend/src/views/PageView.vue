<template>
    <div>
        <h2>{{pagememo.title}}</h2>
        <p>{{pagememo.memo}}</p>
    </div>
</template>

<script>
export default {
    created() {
        this.$http.get(`/api/memo/${this.$route.params.id}`)
        .then((response) => {
            this.pagememo = response.data;
        })
    },
    data () {
        return {
            pagememo : {}
        }
    }
    
}
</script>

<style>

</style>