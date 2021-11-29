<template>
  <SideMenu/>
  <Navbar/>
  <div class="station">
    <Title/>
    <div class="news-bg">
      <Station :tabData="tabData">
        <template v-slot:bus-station-300>
          <h3 v-if="nearbyBusSite300.length === 0">您目前所在的地方，附近沒有公車站牌 !</h3>
          <div class="station-txt" v-for="item in nearbyBusSite300" :key="item.StationID">
            <h3>
              {{ item.StationName.Zh_tw }}
              <span v-if="item.Bearing === 'E'">(東行)</span>
              <span v-if="item.Bearing === 'W'">(西行)</span>
              <span v-if="item.Bearing === 'S'">(南行)</span>
              <span v-if="item.Bearing === 'N'">(北行)</span>
              <span v-if="item.Bearing === 'SE'">(東南行)</span>
              <span v-if="item.Bearing === 'NE'">(東北行)</span>
              <span v-if="item.Bearing === 'SW'">(西南行)</span>
              <span v-if="item.Bearing === 'NW'">(西北行)</span>
            </h3>
            <p v-for="item2 in item.Stops" :key="item2">
              {{ item2.RouteName.Zh_tw }}
            </p>
          </div>
        </template>
        <template v-slot:bus-station-500>
          <h3 v-if="nearbyBusSite500.length === 0">您目前所在的地方，附近沒有公車站牌 !</h3>
          <div class="station-txt" v-for="item500 in nearbyBusSite500" :key="item500.StationID">
            <h3>
              {{ item500.StationName.Zh_tw }}
              <span v-if="item500.Bearing === 'E'">(東行)</span>
              <span v-if="item500.Bearing === 'W'">(西行)</span>
              <span v-if="item500.Bearing === 'S'">(南行)</span>
              <span v-if="item500.Bearing === 'N'">(北行)</span>
              <span v-if="item500.Bearing === 'SE'">(東南行)</span>
              <span v-if="item500.Bearing === 'NE'">(東北行)</span>
              <span v-if="item500.Bearing === 'SW'">(西南行)</span>
              <span v-if="item500.Bearing === 'NW'">(西北行)</span>
            </h3>
            <p v-for="stop in item500.Stops" :key="stop">
              {{ stop.RouteName.Zh_tw }}
            </p>
          </div>
        </template>
      </Station>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Title from '@/components/header.vue';
import Station from '@/components/StationInfo.vue';
import SideMenu from '@/components/SideMenu.vue';
import Footer from '@/components/Footer.vue';
import getAuthorizationHeader from '../tools/AuthorizationHeader';

export default {
  name: 'Home',
  components: {
    Navbar,
    Title,
    Station,
    Footer,
    SideMenu
  },
  data(){
    return {
      longtiude: 0,
      latitude: 0,
      nearbyBusSite300: [],
      nearbyBusSite500: [],
      tabData: [
        {
          tab: '300 M',
        },
        {
          tab: '500 M',
        },
      ]
    }
  },
  methods: {
    getData(url, dataName) {
      this.axios
        .get(url, {
          headers: getAuthorizationHeader(),
        })
        .then((response) => {
          this[dataName] = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.longitude = position.coords.longitude;
            this.latitude = position.coords.latitude;
            this.getNearbyBusSite(300);
            this.getNearbyBusSite(500);
          },
          (e) => {
            const msg = e.message;
            console.error(msg);
          },
        );
      }
    },
    getNearbyBusSite(m) {
      this.getData(
        `https://ptx.transportdata.tw/MOTC/v2/Bus/Station/NearBy?$spatialFilter=nearby(${this.latitude}%2C%20${this.longitude}%2C%20${m})&$format=JSON`,
        `nearbyBusSite${m}`,
      );
    },
  },
  mounted() {
    this.getUserLocation();
  },
};
</script>
