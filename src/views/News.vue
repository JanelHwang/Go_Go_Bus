<template>
  <SideMenu/>
  <Navbar/>
  <div class="news">
    <Title/>
    <div class="news-bg">
      <h2>最新消息</h2>
      <div class="news-content text-left">
        <template v-if="news.length !== 0">
          <div class="news-txt" v-for="item in news" :key="item.NewsID">
            <p>{{ item.PublishTime.replace('T', ' ').replace('+08:00', '') }}</p>
            <h3>{{ item.Description }}</h3>
          </div>
        </template>
      </div>
    </div> 
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import SideMenu from '@/components/SideMenu.vue';
import Title from '@/components/header.vue';
import getAuthorizationHeader from '../tools/AuthorizationHeader';

export default {
  name: 'News',
  components: {
    Navbar,
    Title,
    SideMenu
  },
  data() {
    return {
      news: []
    };
  },
  methods: {
   getData() {
      this.axios
        .get('https://ptx.transportdata.tw/MOTC/v2/Bus/News/City/Kaohsiung?$$format=JSON', {
          headers: getAuthorizationHeader(),
        })
        .then((response) => {
          this.news = response.data;
          console.log(this.news);
        })
        .catch((err) => {
          console.log(err);
        });
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
