<template>
    <div class="card search-box">
        <h2 class="title dm-sans">Where are you going?</h2> 
        <div class="dropdown">
            <a id="dLabel" role="button" data-toggle="dropdown" data-target="#" href="/page.html">
                下拉菜单（Dropdown） <span class="caret"></span>
            </a>
            <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
               <li></li>
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
        width: 381px
        height: 336px
        padding: 44px 40px 56px 40px
        .title
            font-size: 24px
            font-weight: 700
            color: #7D7D7D
 
</style>