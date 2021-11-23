<template>
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

export default {
  name: 'Home',
  components: {
    Navbar,
    Station
  }
}
</script>
