<template>
    <div class="">
        <div class="our-services">
            <a-row class="banner">
                <a-col :lg="24" align="middle">
                    <p class="mb-0 fw-7 font-45 lh-46 white-text">Expert Care for Your Ideas!
                    </p>
                    <a-button class="primary-btn bounce-button mt-10 z-index">Get a Proposal</a-button>
                </a-col>
            </a-row>
        </div>
        <div class="main-content">
            <a-row>
                <a-col :lg="16">
                    <p class="mb-0 fw-7 font-35 lh-45 white-text">Our Services</p>
                    <p class="mb-0 smoke-text font-20 lh-30 fw-4">As an all-rounder in marketing, Purge excels in B2B,
                        blockchain, fintech, software, and high-growth startups. Our digital marketing and strategic
                        services are designed to scale your business to new heights. See how we can help you grow below:
                    </p>
                </a-col>
            </a-row>
            <a-row class="mt-22 service-cards">

            </a-row>
            <div class="mt-130">
                <Reviews />
            </div>
        </div>

    </div>
</template>

<script>
import Reviews from './Reviews.vue';
export default {
    components: {
        Reviews
    }
};
</script>

<style scoped>
@import '@/assets/scss/pages/services.scss'
</style>