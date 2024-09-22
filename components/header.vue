<template>
    <div class="header">
        <a-row class="main-content py-5">
            <a-col :lg="4">
                <img src="/static/images/purge.svg" alt="">
            </a-col>
            <a-col :lg="16" align="middle">
                <a-menu v-model="current" mode="horizontal">
                    <a-menu-item key="home">
                        Home
                    </a-menu-item>
                    <a-menu-item key="services">
                        Services
                    </a-menu-item>
                    <a-menu-item key="team">
                        Team
                    </a-menu-item>
                    <a-menu-item key="portfolio">
                        Portfolio
                    </a-menu-item>
                    <a-menu-item key="company">
                        <a-popover :title="false" trigger="hover" placement="bottomLeft" overlay-class-name="menu-popover">
                            <template #content>
                                <div class="header-list">
                                    list item 1
                                </div>
                                <div class="header-list">
                                    list item 2
                                </div>
                            </template>
                            Company <img src="/static/images/down-arrow-white.svg" alt="">
                        </a-popover>
                    </a-menu-item>
                    <a-menu-item key="aboutUs" class="mr-0">
                        About Us
                    </a-menu-item>
                </a-menu>
            </a-col>
            <a-col :lg="4" align="end">
                <a-button class="primary-btn bounce-button">Get in touch</a-button>
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