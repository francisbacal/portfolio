<template>
    <div class="container">
        <portfolio-title :class="{'slide-lr': loading}">Portfolio</portfolio-title>
        <portfolio-works></portfolio-works>
    </div>
</template>

<script>
    import PortfolioTitle from '../components/PortfolioTitle'
    import PortfolioWorks from '../components/PortfolioWorks'

    export default {
        components: { PortfolioTitle, PortfolioWorks },

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

    .slide-lr {
        opacity: 0;
        visibility: hidden;
        transform: translateX(-2.5rem);
    }

</style>