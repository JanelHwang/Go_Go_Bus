<template>
    <div class="tabs">
      <a 
      v-for="(item,index) in tabs" 
      :key='index' 
      :class="{active:index == activetab}"
      @click="tab(index)">
      {{item}}
      </a>
        <!-- <a v-on:click="activetab='1'" v-bind:class="[ activetab === '1' ? 'active' : '' ]">100 m</a>
        <a v-on:click="activetab='2'" v-bind:class="[ activetab === '2' ? 'active' : '' ]">300 m</a> -->
    </div>

    <div class="content">
        <div 
        v-for='(itemCon,index) in tabContents' 
        :key="index"
        v-show=" index == activetab"
        class="tabcontent">{{itemCon}}</div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        activetab: '0',
        tabs: ["標題一", "標題二"],
        tabContents: ["內容1","內容2"]
    };
  },
  methods: {
    tab(index) {
      this.activetab = index;
    }
  },
};
</script>
<style lang="sass" scope>
    /* Style the tabs */
    .tabs 
        overflow: hidden
        margin-bottom: -2px
    .tabs a
        float: left
        cursor: pointer
        width: 50%
        padding: 12px 24px
        transition: background-color 0.2s
        border-right: none
        background-color: #BFCDFF
        color: #fff !important
        border-radius: 16px 0 0 0
        font-weight: bold
    
    .tabs a:last-child  
        border-right: 1px solid #ccc
        border-radius: 0 16px 0 0
    

    /* Change background color of tabs on hover */
    .tabs a:hover 
        background-color: lighten(#486AE8, 10)
    

    /* Styling for active tab */
    .tabs a.active 
        background-color: #486AE8
        cursor: default
    

    /* Style the tab content */
    .tabcontent 
        padding: 21.25px 22px 27px 22px
        border-radius: 0 0 16px 16px
        box-shadow: 2px 4px 7px rgba(196, 196, 196, 0.2)
    @media (max-width: 768px)
        .tabcontent
            max-height: 453px
            overflow-y: auto
    .data  
        width: 120px 
</style>