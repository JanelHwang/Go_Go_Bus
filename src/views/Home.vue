<template>
  <SideMenu></SideMenu>
  <Navbar></Navbar>
  <Station>
      <template v-slot:tabPanel-1> Content 1</template>
      <template v-slot:tabPanel-2> Content 2</template>
  </Station>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import Station from '@/components/StationInfo'
import SideMenu from '@/components/SideMenu'

export default {
  name: 'Home',
  components: {
    Navbar,
    Station,
    SideMenu
  }
}
</script>

<style lang="sass" scope>
  body
    width: 100%
    height: 100%
    overflow: hidden
    background-color: #F5F6FF !important
</style>
