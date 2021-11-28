<template>
  <SideMenu/>
  <Header/>
  <Navbar/>
  <div class="w-100">
    <Station>
      <template v-slot:tabPanel-1> Content 1</template>
      <template v-slot:tabPanel-2> Content 2</template>
    </Station>
    <Clock/>
    <SearchCard/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import Header from '@/components/header'
import Station from '@/components/StationInfo'
import SideMenu from '@/components/SideMenu'
import Clock from '@/components/Clock'
import SearchCard from '@/components/SearchCard'
export default {
  name: 'Home',
  components: {
    Header,
    Navbar,
    Station,
    SideMenu,
    Clock,
    SearchCard,
  }
}
</script>
