<template>
  <div class="reviews mt-37 main-content">
    <p class="mb-0 fw-7 font-lg-35 font-sm-33  lh-45 white-text text-center">What people are saying</p>
    <swiper :slides-per-view="3" class="mySwiper mt-25" :space-between="0" @swiper="onSwiper"
      @slideChange="onSlideChange" :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }" :modules="modules">
      <swiper-slide v-for="(review, index) in reviews" :key="index" class="col-alignment">
        <div class="rating font-lg-20 font-sm-18  lh-40 fw-4 white-text">
          <div class="ratings-stars mb-10 col-alignment">
            <span class="mr-5">{{ review.rating }}</span>
            <span class="stars col-alignment">
              <img src="/images/active-star.svg" alt="" class="mr-3">
              <img src="/images/active-star.svg" alt="" class="mr-3">
              <img src="/images/active-star.svg" alt="" class="mr-3">
              <img src="/images/active-star.svg" alt="" class="mr-3">
              <img src="/images/star.svg" alt="" class="mr-3">
            </span>
          </div>
          <p class="project-name font-lg-20 font-sm-18  lh-35 fw-5 white-text mt-0 mb-5">
            {{ review.projectName }}
          </p>
          <p class="remarks fw-3 font-lg-14 font-sm-12  lh-30 smoke-text mb-7 mt-0">
            {{ review.remarks }}
          </p>
          <div class="user col-alignment">
            <img src="/images/review-user.svg" alt="">
            <div class="ml-3">
              <p class="name fw-3 font-lg-16 font-sm-14  lh-30 white-text my-0">{{ review.userName }}</p>
              <p class="role fw-3 font-13 lh-30 smoke-text my-0">{{ review.userRole }}</p>
            </div>
          </div>
        </div>
        <div class="border"></div>
      </swiper-slide>

      <!-- Custom Navigation Buttons -->
      <div class="mt-25 mb-38 navigation-btns">
        <div class="swiper-button-prev">
          <img src="/images/back-arrow-gray.svg" alt="Previous" />
        </div>
        <div class="swiper-button-next">
          <img src="/images/forward-arrow-white.svg" alt="Next" />
        </div>
      </div>

    </swiper>
    <!--  <div class="all-reviews"> -->
    <!-- </div> -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
      reviews: [
        {
          rating: 4.0,

          projectName: 'Digital Marketing for Private Investment Firm',
          remarks: 'In a competitive market like crypto, there is a bunch of highly skilled professionals, but not all of them have amazing people skills and work ethic. Working with the Ninjas is a pleasure because they really adapt to the work dynamic of the client. Always ready for discussion and looking for the best solutions for the project even when the going gets rough. The way how they helped us meet some of the demanding deadlines was truly impressive.',
          userImage: '/images/review-user.svg',
          userName: 'Jacob Kappus',
          userRole: 'CMO Ultron Foundation',
        },
        {
          rating: 4.0,

          projectName: 'Digital Marketing for Private Investment Firm',
          remarks: 'In a competitive market like crypto, there is a bunch of highly skilled professionals, but not all of them have amazing people skills and work ethic. Working with the Ninjas is a pleasure because they really adapt to the work dynamic of the client. Always ready for discussion and looking for the best solutions for the project even when the going gets rough. The way how they helped us meet some of the demanding deadlines was truly impressive.',
          userImage: '/images/review-user.svg',
          userName: 'Jacob Kappus',
          userRole: 'CMO Ultron Foundation',
        },
        {
          rating: 4.0,

          projectName: 'Digital Marketing for Private Investment Firm',
          remarks: 'In a competitive market like crypto, there is a bunch of highly skilled professionals, but not all of them have amazing people skills and work ethic. Working with the Ninjas is a pleasure because they really adapt to the work dynamic of the client. Always ready for discussion and looking for the best solutions for the project even when the going gets rough. The way how they helped us meet some of the demanding deadlines was truly impressive.',
          userImage: '/images/review-user.svg',
          userName: 'Jacob Kappus',
          userRole: 'CMO Ultron Foundation',
        },
        {
          rating: 4.0,

          projectName: 'Digital Marketing for Private Investment Firm',
          remarks: 'In a competitive market like crypto, there is a bunch of highly skilled professionals, but not all of them have amazing people skills and work ethic. Working with the Ninjas is a pleasure because they really adapt to the work dynamic of the client. Always ready for discussion and looking for the best solutions for the project even when the going gets rough. The way how they helped us meet some of the demanding deadlines was truly impressive.',
          userImage: '/images/review-user.svg',
          userName: 'Jacob Kappus',
          userRole: 'CMO Ultron Foundation',
        },
        {
          rating: 4.0,

          projectName: 'Digital Marketing for Private Investment Firm',
          remarks: 'In a competitive market like crypto, there is a bunch of highly skilled professionals, but not all of them have amazing people skills and work ethic. Working with the Ninjas is a pleasure because they really adapt to the work dynamic of the client. Always ready for discussion and looking for the best solutions for the project even when the going gets rough. The way how they helped us meet some of the demanding deadlines was truly impressive.',
          userImage: '/images/review-user.svg',
          userName: 'Jacob Kappus',
          userRole: 'CMO Ultron Foundation',
        },
        {
          rating: 4.0,

          projectName: 'Digital Marketing for Private Investment Firm',
          remarks: 'In a competitive market like crypto, there is a bunch of highly skilled professionals, but not all of them have amazing people skills and work ethic. Working with the Ninjas is a pleasure because they really adapt to the work dynamic of the client. Always ready for discussion and looking for the best solutions for the project even when the going gets rough. The way how they helped us meet some of the demanding deadlines was truly impressive.',
          userImage: '/images/review-user.svg',
          userName: 'Jacob Kappus',
          userRole: 'CMO Ultron Foundation',
        },
      ],
    };
  },
};
</script>

<style scoped></style>
