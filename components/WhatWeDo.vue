<template>
    <div class="main-content">
        <div class="text-center mb-15">
            <p class="mb-0 fw-7 font-35 lh-45 white-text">What We Do</p>
            <p class="mb-0 smoke-text font-20 lh-30 fw-4">Transforming your business processes for the digital future
            </p>
        </div>
        <a-row :gutter="[8,12]" type="flex" justify="center">
            <a-col :lg="6">
                <div class="service-card">
                    <a-card :bordered="false">
                        <img src="/static/images/dev-icon.svg" alt="">
                        <p class="mb-2 mt-3 fw-5 font-20 lh-40 white-text">Custom Development</p>
                        <p class="mb-0 smoke-text font-14 lh-25 fw-3 mt-0">We deliver web, mobile, and desktop software solutions tailored to your business processes across all verticals.</p>
                    </a-card>
                </div>
            </a-col>
            <a-col :lg="6">
                <div class="service-card">
                    <a-card :bordered="false">
                        <img src="/static/images/blockchain-icon.svg" alt="">
                        <p class="mb-2 mt-3 fw-5 font-20 lh-40 white-text">Blockchain Development</p>
                        <p class="mb-0 smoke-text font-14 lh-25 fw-3 mt-0">We design solutions like smart contracts, DEXs, DeFi, NFTs, gamification, etc., based on blockchain technology.</p>
                    </a-card>
                </div>
            </a-col>
            <a-col :lg="6">
                <div class="service-card">
                    <a-card :bordered="false">
                        <img src="/static/images/game-icon.svg" alt="">
                        <p class="mb-2 mt-3 fw-5 font-20 lh-40 white-text">Game Development</p>
                        <p class="mb-0 smoke-text font-14 lh-25 fw-3 mt-0">We develop pixel-perfect games with future-proof architecture and high resolution, using the latest technologies.</p>
                    </a-card>
                </div>
            </a-col>
            <a-col :lg="6">
                <div class="service-card">
                    <a-card :bordered="false">
                        <img src="/static/images/teams-icon.svg" alt="">
                        <p class="mb-2 mt-3 fw-5 font-20 lh-40 white-text">Dedicated Teams</p>
                        <p class="mb-0 smoke-text font-14 lh-25 fw-3 mt-0">We provide dedicated resources and staff augmentation to enterprises worldwide for IT support and success.</p>
                    </a-card>
                </div>
            </a-col>
            <a-col :lg="6">
                <div class="service-card">
                    <a-card :bordered="false">
                        <img src="/static/images/cloud-icon.svg" alt="">
                        <p class="mb-2 mt-3 fw-5 font-20 lh-40 white-text">Cloud Services</p>
                        <p class="mb-0 smoke-text font-14 lh-25 fw-3 mt-0">We solve modern business challenges with a cloud-native approach towards enterprise-grade apps and services.</p>
                    </a-card>
                </div>
            </a-col>
            <a-col :lg="6">
                <div class="service-card">
                    <a-card :bordered="false">
                        <img src="/static/images/marketing.svg" alt="">
                        <p class="mb-2 mt-3 fw-5 font-20 lh-40 white-text">Digital Marketing</p>
                        <p class="mb-0 smoke-text font-14 lh-25 fw-3 mt-0">We craft, manage and publish interactive and engaging content to grow brands using data-driven strategies.</p>
                    </a-card>
                </div>
            </a-col>
            <a-col :lg="6">
                <div class="service-card">
                    <a-card :bordered="false">
                        <img src="/static/images/it-icon.svg" alt="">
                        <p class="mb-2 mt-3 fw-5 font-20 lh-40 white-text">IT Consultancy</p>
                        <p class="mb-0 smoke-text font-14 lh-25 fw-3 mt-0">As your advisor, we help you make the decisions that are right for your business growth, now and for the future.</p>
                    </a-card>
                </div>
            </a-col>
            <a-col :lg="6">
                <div class="service-card">
                    <a-card :bordered="false">
                        <img src="/static/images/tech-icon.svg" alt="">
                        <p class="mb-2 mt-3 fw-5 font-20 lh-40 white-text">Trending Technologies</p>
                        <p class="mb-0 smoke-text font-14 lh-25 fw-3 mt-0">With core expertise in MEAN, MERN, LAMP, AI/ML, Data Science, etc., we help businesses grow with resilience.</p>
                    </a-card>
                </div>
            </a-col>
        </a-row>
        <div class="mt-10 col-alignment justify-content-center">
            <span class="font-15 fw-4 lh-72 smoke-text pointer">More cases</span> <img src="/static/images/grey-right-arrow.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style scoped></style>