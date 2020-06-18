<template>
    <div class="about-header">
        <h1>
            <slot></slot>
        </h1>
    </div>
</template>
    
<script>
    export default {
        data() {
        return { loading: true }
        },

        mounted()
        {
            setTimeout(() => 
            {
                this.loading = false
            }, 200)
        }
    }
</script>

<style lang='scss'>
    .about-header {
        position: relative;
        margin-left: 0.5rem;
        margin-top: 2rem;
        text-align: center;
        font-size: 1.5rem;
        height: 100%;
        letter-spacing: 0.5rem;
        z-index: 0;
        transition: all 0.5s ease-out;
        -moz-transition: all 0.5s ease-out; /* Firefox 4 */
        -webkit-transition: all 0.5s ease-out; /* Safari and Chrome */
        -o-transition: all 0.5s ease-out; /* Opera */
        -ms-transition: all 0.5s ease-out; 
    }
</style>