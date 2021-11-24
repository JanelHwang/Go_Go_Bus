<template>
  <SideMenu></SideMenu>
  <Navbar></Navbar>
  <div class="w-100">
    <Station>
      <template v-slot:tabPanel-1> Content 1</template>
      <template v-slot:tabPanel-2> Content 2</template>
    </Station>
    <Clock></Clock>
    <SearchCard></SearchCard>
  </div>
  
  
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import Station from '@/components/StationInfo'
import SideMenu from '@/components/SideMenu'
import Clock from '@/components/Clock'
import SearchCard from '@/components/SearchCard'
export default {
  name: 'Home',
  components: {
    Navbar,
    Station,
    SideMenu,
    Clock,
    SearchCard,
  }
}
</script>

<style lang="sass" scope>
  html,body
    width: 100%
    height: 100%
    overflow: hidden
    background-color: #F5F6FF !important
</style>
