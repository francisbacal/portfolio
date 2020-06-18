<template>
    <div class="header">
        <div class="header__wrapper">
            <div class="brand">
                <router-link to="/about">
                    <span class="">About</span>
                </router-link>
                <router-link to="/home">
                    <img class="fb-brand" src="./../assets/img/fb-logo.png">
                </router-link>
                <router-link to="/portfolio">
                    <span>Works</span>
                </router-link>
            </div>
            
            <!-- <div class="menu">
                <a href="#">
                    <svg viewBox="0 0 18 15" width="35px">
                        <path fill="#d4af37" d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z"/>
                        <path fill="#d4af37" d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z"/>
                        <path fill="#d4af37" d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z"/>
                    </svg>
                </a>     
            </div> -->
        </div>
    </div>
</template>

<script>



</script>
<script>
    export default {

    }
</script>


<style lang="scss">
    .header {
        position: relative;
        height: 60px;
        display: block;
        margin-bottom: 3rem;

        a {
            font-size: 2rem;
            font-family: $primary-font;
            color: $gold;
            text-decoration: none;
            text-decoration: underline overline;

            &:hover {
                color: $active;
            }
        }

        &__wrapper {
            display: flex;
            justify-content: center;
            margin-top: 0.5rem;
            width: 100%;
        }
    }
    .brand {
        width: auto;
        // position: absolute;
        // left: 0px;
        // top: 15px;
        // @media (min-width: 576px) {
        //     left: 0px;
        //     top: 30px;
        // }
        // @media (min-width: 1200px) {
        //     left: 5px;
        //     top: 20px;
        // }
    }
    .fb-brand {
        height: 80px;
        @media (min-width: 576px) {
            height: 90px;
        }
        @media (min-width: 992px) {
            height: 120px;
        }
        @media (min-width: 1200px) {
            height: 90px;
        }
    }
    .menu {
        position: absolute;
        top: 0;
        right: 1rem;
        display: inline-block;
        width: auto;
        margin-top: 0.8rem;
    }
</style>