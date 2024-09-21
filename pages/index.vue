<template>
  <div class="home-page-body">
    <HomePage/>
  </div>
</template>

<script>
import HomePage from '~/components/HomePage.vue';

export default {
     layout: 'default',
     components:{
        HomePage
     }
};  
</script>

<style scoped>
@import '@/assets/scss/main.scss';
</style>