<template>
    <div class="">
        <a-layout>
            <Header />
            <a-layout-content>
                <div class="layout-content main-content">
                    <slot />
                </div>
            </a-layout-content>
            <Footer />
        </a-layout>
    </div>
</template>

<script>
import footer from '~/components/footer.vue';
import header from '~/components/header.vue';

export default {
    components: {
        header, footer
    }
};
</script>

<style scoped>
@import '@/assets/scss/pages/home/home.scss';
</style>