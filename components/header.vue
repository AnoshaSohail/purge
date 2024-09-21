<template>
    <div class="header">
        <a-row class="main-content py-5">
            <a-col :lg="4">
                <img src="/static/images/purge.svg" alt="">
            </a-col>
            <a-col :lg="16">
                <a-menu v-model="current" mode="horizontal">
                    <a-menu-item key="home" class="fw-4"> Home</a-menu-item>
                    <a-menu-item key="services" class="fw-4"> Services </a-menu-item>
                    <a-menu-item key="team" class="fw-4">
                        Team
                    </a-menu-item>
                    <a-menu-item key="events" class="fw-4"> Events </a-menu-item>
                    <a-menu-item key="privacypolicy" class="fw-4"> Privacy policy </a-menu-item>
                    <a-menu-item key="contactus" class="fw-4"> Contact us </a-menu-item>
                    <a-menu-item key="faqs" class="fw-4"> FAQs </a-menu-item>
                </a-menu>
            </a-col>
            <a-col :lg="4" align="end">
                <a-button class="primary-btn">Get in touch</a-button>
            </a-col>
        </a-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current: ['home'],
        };
    },
};
</script>

<style scoped>
@import '@/assets/scss/pages/header.scss'
</style>