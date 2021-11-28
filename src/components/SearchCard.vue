<template>
    <div class="card search-box">
        <h2 class="title dm-sans">Where are you going?</h2> 
        <div class="dropdown text-left dm-sans my-3">
            <a id="dLabel" role="button" data-toggle="dropdown" data-target="#" href="#">
                選擇<strong>縣市</strong>  <span class="caret"></span>
            </a>
            <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
                <li>123</li>
                <li>456</li>
                <li>789</li>
                <li>789</li>
                <li>789</li>
            </ul>
        </div>
        <div class="border-daah"></div>
        <div class="dropdown text-left dm-sans my-3">
            <a id="dLabel" role="button" data-toggle="dropdown" data-target="#" href="#">
                選擇<strong>路線</strong>  <span class="caret"></span>
            </a>
            <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
                <li>123</li>
                <li>456</li>
                <li>789</li>
                <li>789</li>
                <li>789</li>
            </ul>
        </div>
    </div>    
</template>
<script>
export default {
    data() {
        return {
            city: [],
            station: [],
        };
    },
}
</script>
<style lang="sass" scoped>
    .search-box
        width: 383px
        height: 336px
        padding: 44px 40px 56px 40px
        .title
            font-size: 24px
            font-weight: 700
            color: #7D7D7D
</style>