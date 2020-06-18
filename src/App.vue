<template>
  <div id="app">
    <PageHeader></PageHeader>
    <router-view></router-view>
  </div>
</template>

<script>
    import PageHeader from "./components/PageHeader.vue";

    export default {
        components: {PageHeader}
    }
</script>

<style lang="scss">

    #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
    
</style>
