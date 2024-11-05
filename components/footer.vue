<template>
  <div class=" footer mt-30 mb-19">
    <div class="mb-10 main-content position-rel">
      <a-row :gutter="[0,16]">
        <a-col :xs="24" :md="5" :lg="5">
          <div class="logo">
            <img src="/images/purge.svg" alt="">
          </div>
        </a-col>
        <a-col :xs="24" :md="14" :lg="14">
          <div class="footer-menu d-flex justify-content-between">
            <a-list v-for="section in data" :key="section.title"
               :data-source="section.items">
              <template #header>
                <div class="heading fw-4 font-lg-17 font-sm-15  lh-19 white-text mb-5 p-0">{{ section.title }}</div>
              </template>
              <template #renderItem="{ item }">
                <a-list-item class="lh-17 font-lg-15 font-sm-13 fw-4 smoke-text p-0">{{ item }}</a-list-item>
              </template>
            </a-list>
          </div>
        </a-col>
        <a-col :xs="24" :md="{offset:1, span:4}" :lg="{offset:1, span:4}">
          <div class="footer-menu">
            <div class="heading fw-4 font-lg-17 font-sm-15  lh-19 white-text mb-5 text-left">Follow Us</div>
            <div class="social-media">
              <img src="/images/twitter.svg" alt="" class="mr-4">
              <img src="/images/linkedin.svg" alt="" class="mr-4">
              <img src="/images/insta.svg" alt="" class="mr-4">
              <img src="/images/yt-icon.svg" alt="" class="mr-4">
              <img src="/images/fb-icon.svg" alt="" class="mr-4">
            </div>
          </div>
        </a-col>
      </a-row>


      <div class="left-blue-circle"></div>
    </div>
    <a-divider style="height: 1px; background-color: #222222" />
    <div class="main-content copyrights col-alignment">
      <p class="lh-17 font-lg-15 font-sm-13 fw-4 light-grey mx-0 pr-5">Copyright 2024 Purge All Rights Reserved</p>
      <p class="lh-17 font-lg-15 font-sm-13 fw-4 light-grey pointer mx-0 pr-5">Privacy Policy</p>
      <p class="lh-17 font-lg-15 font-sm-13 fw-4 light-grey pointer mx-0">Terms & Conditions</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: 'Company',
          items: [
            'About us',
            'Careers',
            'Hire us',
            'Our team',
            'Contact',
          ],
        },
        {
          title: 'Services',
          items: [
            'Web Development',
            'Mobile App Development',
            'Blockchain Development',
            'Web & Graphics Designing',
            'Digital Marketing',
            'Search Engine Optimization',
          ],
        },
        {
          title: 'Contact Us',
          items: [
            'purgepvtltd@gmail.com',
            '+34 602 02 55 97',
            '+92 330 6985794',
            'Prism Arcade 2 Bahria Town Phase 7',
          ],
        },
      ],
    }
  }
};
</script>

<style scoped>
@import '@/assets/scss/pages/footer.scss'
</style>