<template>
    <div class="work-wrapper">
        <div class="work-container">
            <div @click="showWorkPage($event)" @mouseover="animateThumb()" @mouseout="mouseOut()" class="work-container__thumb">
                <img :src="require(`@/assets/img/${work.image}`)">
                <p class="work-container__thumb__view" :class="{'work-container__thumb__view--show': showView}">
                    <font-awesome-icon icon="eye" /> View
                </p>
            </div>
            <p>{{ work.name }}</p>
        </div>
        <div class="modal" :class="{'modal--show': showWork}">
            <div class="modal__close">
                <a @click="closeWorkPage" href="#"><font-awesome-icon icon="times" /></a>
            </div>
            <div class="modal__content" :class="{'modal__content--show': showWork}">
                <div class="work-banner">
                    <img :src="require(`@/assets/img/${work.image}`)">
                </div>
                <div class="work-content">
                    <div class="work-content__title">
                         <h1>{{ work.name }}</h1>
                    </div>
                    <ul class="work-content__techs">
                        <li class="work-content__tech" v-for="tech in work.techs" :key="tech.name">{{ tech.name }}</li>
                    </ul>
                    <div class="work-content__links">
                        <a :href="work.demo" target="_blank"><font-awesome-icon icon="eye" /> Demo</a>
                        <a :href="work.code" target="_blank"><font-awesome-icon icon="file-code" /> Code</a>
                    </div>
                    <p class="work-content__desc" v-for="desc in work.descs" :key="desc.part">
                        {{ desc.part }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props: ['work'],
    data()
    {return{
        showWork: false,
        showView: false
    }},
    methods: 
    {
        showWorkPage: function(e) {
            document.body.style.overflow = 'hidden';

            this.showWork = true; 
            let viewportOffset = e.target.getBoundingClientRect();
            console.log(viewportOffset.top, viewportOffset.left);

        },
        closeWorkPage: function() {

            document.body.style.marginRight = '';
            document.body.style.overflowX = 'hidden';
            document.body.style.overflowY = 'auto';

            this.showWork = false;
        },
        animateThumb: function() {
            this.showView = true;

        },
        mouseOut: function() {
            this.showView = false;
        }
    }
}
</script>

<style lang='scss'>
    .work-wrapper {
        transition: all 0.5s ease-out;
        -moz-transition: all 0.5s ease-out; /* Firefox 4 */
        -webkit-transition: all 0.5s ease-out; /* Safari and Chrome */
        -o-transition: all 0.5s ease-out; /* Opera */
        -ms-transition: all 0.5s ease-out; 
    }

    .work-container {
        width: 100%;
        display: flex;
        
        &__thumb {
            display: inline-block;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 10px;

            &__view {
                opacity: 1;
                margin-top: 3px;
                color: $gold;
                transition: all 0.2s ease-out;

                @media (min-width: 1200px) {
                    opacity: 0;

                    &--show {
                        opacity: 1;
                        transition: all 0.2s ease-out;
                    }
                }
            }
        }

        p {
            text-align: center;
            font-family: $secondary-font;
            font-size: 1rem;
            line-height: 1.5rem;

            &:not(:last-child){
                margin-top: 1rem;
            }
        }
        img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            object-fit: cover;
            width: 100%;
            height: 250px;

            @media (min-width: 576px) {
                width: 300px;
            }

            @media (min-width: 992px) {
                width: 350px;
            }

            &:hover {
                cursor: pointer;
            }
        }
    }
    .modal {
        position:fixed;
        opacity: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        transform: scale(0.1);
        transition: all 0.3s ease-in-out;
        z-index: -1;

        &__close {
            position: fixed;
            top: .5rem;
            right: 1rem;
            text-align: right;
            z-index: 3000;
            a {
                font-size: 2rem;
                color: $primary;
            }
            @media (min-width: 576px) {
                top: calc(5vh + 5px);
                right: calc(5vw + 15px);
            }
            @media (min-width: 992px) {
                top: calc(10vh + 5px);
                right: calc(10vw + 15px);
            }
            @media (min-width: 1200px) {
                top: calc(10vh + 5px);
                right: calc(20vw + 20px);
            }
        }

        &--show {
            opacity: 1;
            transform: scale(1);
            transition: all 0.2s ease-in-out;
            z-index: 200;
        }
    
        &__content {
            position: relative;
            opacity: 0;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100%;
            background: $white;
            transform: translateY(-100%);
            transition: all 0.4s ease-in-out;
            z-index: -1;
            
            @media (min-width: 576px) {
                top: 50%;
                left: 50%;
                width: 90vw;
                height: 90%;
                transform: translate(-50%, -200%);
            }
            @media (min-width: 992px) {
                top: 50%;
                left: 50%;
                width: 80vw;
                height: 80%;
                transform: translate(-50%, -200%);
            }
            @media (min-width: 1200px) {
                top: 50%;
                left: 50%;
                width: 60vw;
                height: 80%;
                transform: translate(-50%, -200%);
            }

            &--show {
                opacity: 1;
                z-index: 300;
                transform: translateY(0);
                transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                overflow-x: hidden;

                @media (min-width: 576px) {
                    transform: translate(-50%, -50%);
                }

                h2 {
                    font-size: 120vh;
                }
            }
        }
    }
    .work-banner {
        background: $bg;

        img {
            width: 100vw;
            height: 350px;
            object-fit: cover;
            object-position: 50% 0;

            @media (min-width: 1200px) {
                width: 100%;
                height: 450px;
                object-position: 50% 25%;
            }
        }
    }
    .work-content {
        margin-top: 2rem;
        padding: 0 15px;

        &__title {
            color: $bg;
            letter-spacing: 0.3rem;
            text-align: left;
            
            h1 {
                padding-left: 15px;
                font-size: 3.6rem;

                @media (min-width: 576px) {
                    font-size: 5rem;
                    text-align: center;
                }
            }
        }

        &__techs {
            margin-top: 1rem;
            margin-bottom: 3rem;
            list-style: none;
            padding: 0 15px;
            font-size: 2rem;
            text-align: center;
            color: $black;
        }

        &__tech {
            display: inline-block;
            margin: .5rem;
            border: 1px solid $teal;
            border-radius: 20px;
            padding-left: 7px;
            padding-right: 3px;
            line-height: 1.5rem;
            color: $teal;
            letter-spacing: 0.3rem;
            font-weight: lighter;
            font-size: 1rem;
        }

        &__links {
            text-align: center;
            margin-top: 3rem;
            margin-bottom: 3rem;
            a {
                background: $primary;
                margin-left: 1rem;
                padding-top: 0.25rem;
                padding-bottom: 0.25rem;
                padding-left: 0.7rem;
                padding-right: 0.7rem;
                font-size: 1.5rem;
                font-weight: lighter;
                color: $black;
                text-decoration: none;
                border: 1px solid $black;
                border-radius: 15px;
                transition: all 0.2s ease-in-out;

                &:hover {
                    background: $bg;
                    color: $gold;
                    border: 1px solid $gold;
                    transition: all 0.2s ease-in-out;
                }
            }
        }

        &__desc {
            margin-top: 2rem;
            padding-left: 15px;
            padding-right: 15px;
            font-size: 2rem;
            color: $primary-dark2;
            font-weight: lighter;
            line-height: 2.5rem;
            text-align: left;

            &:last-child {
                margin-bottom: 3rem;
            }
        }
    }
</style>