<template>
  <div class="">
  <div class="home-page pt-20">
    <div class="banner  main-content">
      <a-row class="banner-row" type="flex" align="middle" justify="center">
      <a-col class="text-center">
        <p class="mb-0 fw-7 font-45 lh-60 white-text">Purge the Old, Power the New!</p>
        <p class="mb-0 smoke-text font-20 lh-30 fw-4">Your all-in-one solution: design, development, content, and <br> ads from a world-leading digital marketing agency.</p>
        <img src="/static/images/header-bg.svg" alt="">
      </a-col>
    </a-row>
    </div>   
  </div>
  <WhatWeDo/>
  </div>
</template>

<script>
import WhatWeDo from './WhatWeDo.vue';


export default {
  components:{
    WhatWeDo
  }
};
</script>

<style scoped>
@import '@/assets/scss/pages/home/home.scss';
</style>