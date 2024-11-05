<template>
    <div class="">
        <div class="our-services">
            <a-row class="banner">
                <a-col :xs="24" :lg="24" align="middle">
                    <p class="mb-0 fw-7 font-lg-45 font-sm-43  lh-46 white-text">Expert Care for Your Ideas!
                    </p>
                    <a-button class="primary-btn bounce-button mt-10 z-index-9">Get a Proposal</a-button>
                </a-col>
            </a-row>
        </div>
        <div class="main-content">
            <a-row>
                <a-col :xs="24" :md="16" :lg="16" class="position-rel">
                    <p class="mb-0 fw-7 font-lg-35 font-sm-33  lh-45 white-text">Our Services</p>
                    <p class="mb-0 smoke-text font-lg-20 font-sm-18  lh-30 fw-4">As an all-rounder in marketing, Purge excels in B2B,
                        blockchain, fintech, software, and high-growth startups. Our digital marketing and strategic
                        services are designed to scale your business to new heights. See how we can help you grow below:
                    </p>
                    <div class="right-pink-circle"></div>
                </a-col>
            </a-row>
            <a-row class="mt-22 service-cards position-rel" :gutter="8">
                <a-col :xs="24" :sm="8" :lg="6" v-for="(service, index) in services" :key="index"  class="">
                    <div class="s-card p-5 col-alignment pointer">
                        <div class="z-index">
                            <img :src="`/images/${service.icon}`" alt="">
                            <p class="mb-0 fw-5 font-lg-20 font-sm-18  lh-40 white-text">{{ service.title }}</p>
                            <p class="mb-0 smoke-text font-lg-14 font-sm-12  lh-25 fw-3">{{ service.desc }}</p>
                        </div>
                    </div>
                </a-col>
                <a-col class="position-rel" :xs="24"><div class="right-blue-circle"></div></a-col>
                                
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
    },
    data() {
        return {
            services: [
                {
                    icon: 'devp-icon.svg',
                    title: 'Custom Development',
                    desc: 'We deliver web, mobile, and desktop software solutions tailored to your business processes across all verticals.'
                },
                {
                    icon: 'block-icon.svg',
                    title: 'Blockchain Development',
                    desc: 'We design solutions like smart contracts, DEXs, DeFi, NFTs, gamification, etc., based on blockchain technology.'
                },
                {
                    icon: 'gameboy.svg',
                    title: 'Game Development',
                    desc: 'We develop pixel-perfect games with future-proof architecture and high resolution, using the latest technologies.'
                },
                {
                    icon: 'seo-icon.svg',
                    title: 'SEO',
                    desc: 'Boost your visibility and attract more targeted traffic with strategic SEO techniques'
                },
                {
                    icon: 'cloud.svg',
                    title: 'Cloud Services',
                    desc: 'We solve modern business challenges with a cloud-native approach towards enterprise-grade apps and services.'
                },
                {
                    icon: 'ranking.svg',
                    title: 'Digital Marketing',
                    desc: 'We craft, manage and publish interactive and engaging content to grow brands using data-driven strategies.'
                },
                {
                    icon: 'message-programming.svg',
                    title: 'IT Consultancy',
                    desc: 'As your advisor, we help you make the decisions that are right for your business growth, now and for the future.'
                },
                {
                    icon: 'programming-arrow.svg',
                    title: 'Social Media',
                    desc: 'Connect with your audience on their favorite platforms, building trust and meaningful relationships'
                },
                {
                    icon: 'cloud.svg',
                    title: 'PPC',
                    desc: 'Get the most out of your ad spend with targeted PPC campaigns that maximize ROI.'
                },
                {
                    icon: 'video-play.svg',
                    title: 'Video Production',
                    desc: 'Captivate your audience with engaging video content that meets the growing demand for multimedia'
                },
                {
                    icon: 'diagram.svg',
                    title: 'Influencer Marketing',
                    desc: 'Amplify your brand’s reach and drive sales through impactful influencer partnerships'
                },
                {
                    icon: 'pen.svg',
                    title: 'Web Design',
                    desc: 'Create a visually stunning, high-performance website that serves as the foundation of your digital strategy'
                },
                {
                    icon: 'money-recive.svg',
                    title: 'Paid Social',
                    desc: 'Expand your brand’s reach with precise social media ads that increase awareness and drive sales'
                },
                {
                    icon: 'money-recive.svg',
                    title: 'Branding',
                    desc: 'Make your brand stand out with inspired campaigns that generate positive buzz and recognition'
                },
                {
                    icon: 'sms.svg',
                    title: 'Email Marketing',
                    desc: 'Encourage specific actions from your audience with personalized email campaigns that promote your brand'
                },
                {
                    icon: 'people.svg',
                    title: 'Lead Generation',
                    desc: 'Supercharge your marketing efforts with proven lead generation strategies that elevate your brand'
                },
                {
                    icon: 'cloud.svg',
                    title: 'PR',
                    desc: 'Increase your brand’s exposure and shape public opinion with expert media relations.'
                },
                {
                    icon: 'profile-2user.svg',
                    title: 'Community Management',
                    desc: 'Build a strong online presence and lasting connections with your audience through effective community management'
                },
                {
                    icon: 'status-up.svg',
                    title: 'Video Marketing',
                    desc: 'Drive conversions and tell your brand’s story with a creative video strategy'
                },
            ]
        }
    },
};
</script>

<style scoped>
@import '@/assets/scss/pages/services.scss'
</style>