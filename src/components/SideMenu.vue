<template>
    <div class="card side-menu bg-light d-none d-md-block">
        <div class="logo">
            <img src="../../assets/svg/logo.svg" alt="logo" width="101" height="62">
        </div>
        <div class="btn-vertical">
            <router-link to="/station">
                <button type="button" class="btn bg-light">
                    <img src="../../assets/svg/map-pin.svg" alt="logo" width="26" height="26">
                </button>
            </router-link>

            <button button type="button" class="btn bg-light">
                <img src="../../assets/svg/search.svg" alt="logo" width="26" height="26">
            </button>

            <router-link to="/news">
                <button button type="button" class="btn bg-light">
                    <img src="../../assets/svg/bell.svg" alt="logo" width="26" height="26">
                </button>
            </router-link>
        </div>
    </div> 
</template>

<style lang="sass" scope>

.side-menu
    float: left
    height: 100%
    border-radius: 16px
    z-index: 100
    box-shadow: 3px 2px 6px rgba(121, 121, 121, 0.25)
    .logo
        display: block
        padding: 39px 20px 46px 20px
        border-bottom: solid 1px #FFF
.btn-vertical
    width: 100%
    margin-top: 27px
    display: flex
    flex-direction: column
    align-items: center
    .btn
        width: 62.45px
        height: 62.45px
        margin-bottom: 38.55px
        border-radius: 16px
        color: #FFF
        transition: all 0.3s ease-in-out
        img
            opacity: 0.75
        &:hover
            background-color: #2A4AC3 !important
            img
                opacity: 1
        &:active,&:focus
            background-color: #2A4AC3  !important
            img
                opacity: 1 !important
    .active
        background-color: #2A4AC3  !important
        img
            opacity: 1 !important
</style>