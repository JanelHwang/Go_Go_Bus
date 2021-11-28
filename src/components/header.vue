<template>
    <div class="title roboto text-left">
        <h1 v-if="this.$router.currentRoute.value.path === '/'">BUS STOP | 附近站牌</h1>
        <h1 v-if="this.$router.currentRoute.value.path === '/station'">BUS STOP | 附近站牌</h1>
        <h1 v-if="this.$router.currentRoute.value.path === '/search'">ROAD SEARCH | 路線搜尋</h1>
        <h1 v-if="this.$router.currentRoute.value.path === '/news'">LATEST NEWS | 最新消息</h1>
    </div>
</template>


<script>
export default {
  name: 'Title'
};
</script>

<style lang="sass" scoped>
.title 
  h1 
    font-weight: 700
    font-size: 26px
    color: #486ae8
    margin-bottom: 43px
</style>