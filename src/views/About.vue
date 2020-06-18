<template>
    <div class="container mh-100">
        <div class="wrapper">
            <about-contents :class="{'slide-lr': loading}"></about-contents>
        </div>
    </div>
</template>

<script>
    // import AboutTitle from '../components/AboutTitle'
    import AboutContents from '../components/AboutContents'

    export default {
        components: { AboutContents },

        data() {
            return { loading: true }
        },

        mounted() {
            setTimeout(() => 
            {
                this.loading = false
            }, 200)
        }
    }
</script>

<style lang='scss'>
    .mh-100 {
        min-height: calc(100vh - 60px);
        overflow-y: auto !important;
    }

    .wrapper {
        display: flex;
        align-items: center;
        min-height: calc(80vh - 60px)
    }

    .slide-lr {
        opacity: 0;
        visibility: hidden;
        transform: translateX(-2.5rem);
    }

</style>