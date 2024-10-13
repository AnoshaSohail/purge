<template>
    <div class="header" :key="resize">
        <a-row class="main-content py-5" type="flex" justify="space-between">
            <a-col :xs="4" :lg="4">
                <img src="/images/purge.svg" alt="">
            </a-col>
            <a-col :xs="16" :lg="16" align="middle" class="header-menu">
                <a-menu v-model="current" mode="horizontal">
                    <a-menu-item key="home">
                        <nuxt-link to="/">
                            Home</nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="services">
                        <nuxt-link to="/services">Services</nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="team">
                        <nuxt-link to="/teams">Team</nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="portfolio">
                        Portfolio
                    </a-menu-item>
                    <a-menu-item key="company">
                        <a-popover :title="false" trigger="hover" placement="bottomLeft"
                            overlay-class-name="menu-popover">
                            <template #content>
                                <div class="header-list">
                                    list item 1
                                </div>
                                <div class="header-list">
                                    list item 2
                                </div>
                            </template>
                            Company <img src="/images/down-arrow-white.svg" alt="">
                        </a-popover>
                    </a-menu-item>
                    <a-menu-item key="aboutUs" class="mr-0">
                        About Us
                    </a-menu-item>
                </a-menu>
            </a-col>
            <a-col :xs="8" :sm="6" :md="4" :lg="4" align="end" class="col-alignment menu-btn">
                <MenuOutlined @click="showDrawer" style="color:#ffffff; font-size:24px" class="drawer-btn" />
                <a-button class="primary-btn bounce-button contact-btn">Get in touch</a-button>
            </a-col>
        </a-row>
        <a-drawer :visible.sync="open" class="custom-class" root-class-name="root-class-name"
            :root-style="{ color: 'blue' }" style="color: red" :title="false" :closable="false" placement="right"
            :maskClosable="true" @close="close" width="313">
            <p class="font-16 lh-18 fw-5 white-text"><nuxt-link to="/">
                    Home</nuxt-link></p>
            <p class="font-16 lh-18 fw-5 white-text"><nuxt-link to="/services">Services</nuxt-link></p>
            <p class="font-16 lh-18 fw-5 white-text"><nuxt-link to="/teams">Team</nuxt-link></p>
            <p class="font-16 lh-18 fw-5 white-text">Portfolio</p>
            <a-collapse accordion :expandIconPosition="'end'">
                <a-collapse-panel key="1">
                    <template #header>
                        <p class="font-16 lh-18 fw-5 white-text m-0">Company</p>
                    </template>
                    
                        <div class="header-list">
                            list item 1
                        </div>
                        <div class="header-list">
                            list item 2
                        </div>
                </a-collapse-panel>
            </a-collapse>
            <p class="font-16 lh-18 fw-5 white-text"> About Us</p>
            <a-button class="primary-btn bounce-button contact-btn">Get in touch</a-button>
        </a-drawer>
    </div>
</template>

<script>
import { MenuOutlined } from '@ant-design/icons-vue';
export default {
    components: {
        MenuOutlined
    },
    data() {
        return {
            current: ['home'],
            open: false,
            resize:1
        };
    },
    methods: {
        showDrawer() {
            console.log('showDrawer method called');
            this.open = true;
        },
        close() {
            this.open = false;
        }
    },
    mounted(){
        const _self = this
        window.addEventListener('resize', ()=>{
            _self.resize++
        })
    }
};
</script>

<style scoped>
@import '@/assets/scss/pages/header.scss'
</style>