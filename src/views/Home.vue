<template>
    <div class="hero-container-fluid hero-height-100" :class="{'slide-top': loading}">
        <div ref="image" @click="()=> this.$router.push('Portfolio')" @mouseover="mouseOver($event)" @mouseout="mouseOut()" @mousemove="mouseMove($event)" class="hero mt" :class="{'shadow': hover}">
            <p :class="{'show': hover}">VIEW PORTFOLIO</p>
            <img class="profile-photo-desat" src='./../assets/img/img002.png' alt="profile image">
            <img ref="clip1" class="profile-photo1" src='./../assets/img/img0001.png' alt="profile image" :class="{'profile-photo1__show': !loading, 'profile-photo1__show--expand': hover }">
            <img ref="clip2" class="profile-photo2" src='./../assets/img/img0001.png' alt="profile image" :class="{'profile-photo2__show': !loading, 'profile-photo2__show--expand': hover}">
            <img ref="clip3" class="profile-photo3" src='./../assets/img/img0001.png' alt="profile image" :class="{'profile-photo3__show': !loading, 'profile-photo3__show--expand': hover}">
        </div>
        <div class="title" ref="title">
            <p class="title__name">Francis Bacal</p>
            <p class="title__desc">FULL STACK WEB DEVELOPER</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                heroImage: null,
                loading: true,
                hover: false,
                counter: 0,
                updateRate: 10,
                mouse: {
                    _x: 0,
                    _y: 0,
                    x: 0,
                    y: 0,
                },
            };
        },
        mounted() {
            this.setOrigin(this.$refs.image);

            setTimeout(() => {
            this.loading = false;
            }, 300);
            
            window.addEventListener('resize', this.onResize);
        },
        beforeDestroy() {
            window.addEventListener('resize', this.onResize);     
        },
        methods:
        {
            update: function(e) {
                this.updatePosition(e);
                this.updateTransformStyle(
                    ((this.mouse.y * 5)/ this.$refs.image.offsetHeight).toFixed(2),
                    ((this.mouse.x * 5) / this.$refs.image.offsetWidth).toFixed(2)
                );
            },
            updateTransformStyle: function(x, y) {
                let value = "perspective(300px) rotateX(" + x + "deg) rotateY(" + y + "deg) scale3d(1.05,1.05,1.05)";
                let value2 = "perspective(300px) rotateX(" + x + "deg) rotateY(" + y + "deg) scale3d(1.1,1.1,1.1)";
        

                this.$refs.image.style.transform = value;
                this.$refs.image.style.webkitTransform = value;
                this.$refs.image.style.mozTransform = value;
                this.$refs.image.style.msTransform = value;
                this.$refs.image.style.oTransform = value;

                this.$refs.title.style.transform = value2;
                this.$refs.title.style.webkitTransform = value2;
                this.$refs.title.style.mozTransform = value2;
                this.$refs.title.style.msTransform = value2;
                this.$refs.title.style.oTransform = value2;

            },
            mouseOver: function (e) {
                this.hover = true;
                this.update(e);
            },
            mouseOut: function () {
                this.hover = false;
                this.$refs.image.style.transform = "perspective(300px) rotateX(0deg) rotateY(0deg)";
                this.$refs.title.style.transform = "perspective(300px) rotateX(0deg) rotateY(0deg)";
                this.$refs.clip1.style.transform = "perspective(300px) rotateX(0deg) rotateY(0deg)";
                this.$refs.clip2.style.transform = "perspective(300px) rotateX(0deg) rotateY(0deg)";
            },
            mouseMove: function (e) {
                if (this.updateNow()) {
                    this.update(e)
                }
            },
            updatePosition: function (e) {
                this.mouse.x = e.clientX - this.mouse._x;
                this.mouse.y = (e.clientY - this.mouse._y) * -1;
            },
            setOrigin: function (div) {
                this.mouse._x = div.offsetLeft + Math.floor(div.offsetWidth/2);
                this.mouse._y = div.offsetTop + Math.floor(div.offsetHeight/2);
                        
            },
            updateNow: function () {
                return this.counter++ % this.updateRate === 0;
            },
            onResize: function() {
                let imageDiv = this.$refs.image;

                if (imageDiv != undefined) {
                    clearTimeout(this.heroImage);
                    this.heroImage = setTimeout(()=>{this.setOrigin(imageDiv);}, 500, imageDiv);
                }
            }
        }
    }
</script>

<style lang='scss'>
    .title {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        margin-top: -2.5rem;
        align-items: center;
        justify-content: center;
        text-align: center;
        z-index: 2;
        @media (min-width: 1200px) {
            margin-top: -4rem;
        }

        &__name {
            font-size: 4rem;
            color: $gold;
            letter-spacing: 0.25rem;
            @media (min-width: 576px) {
            font-size: 5rem;
            }
            @media (min-width: 1200px) {
            font-size: 4rem;
            }
        }

        &__desc {
            font-family: $secondary-font;
            font-size: 1.5rem;
            color: $primary;
            margin-top: 1rem;

        }
    }

    .hero {
        position: relative;
        width: 80vw;
        height: 60vh;
        object-fit: cover;
        margin-left: auto;
        margin-right: auto;
        z-index: 0;
        transition: transform 0.5s;

        p {
            position: absolute;
            border: 1px solid #d4af37;
            background: $bg;
            padding-left: 5px;
            padding-right: 5px;
            font-size: 2rem;
            line-height: 2rem;
            opacity: 1;
            z-index: 3;
            top: 65%;
            transform: translate(50%, 50%);
            transition: all 0.4s ease-in;

        }

        @media (min-width: 576px) {
            width: 75vw;
            height: 75vh;

            p {
                font-size: 3rem;
                opacity: 1;
                line-height: 3rem;
                top: 67%;
                left: 50%;
                transform: translate(-50%, 50%);
                transition: all 0.4s ease-in;
            }
        }
        @media (min-width: 992px) {
            width: 70vw;
            height: 70vh;
            p {
                font-size: 4rem;
                line-height: 4rem;
                opacity: 1;
                top: 69%;
                left: 52%;
                transform: translate(-50%, 50%);
                transition: all 0.4s ease-in;
            }
        }
        @media (min-width: 1200px) {
            width: 30vw;
            height: 70vh;
            p {
                font-size: 2rem;
                line-height: 2rem;
                color: $primary-dark1;
                border: 1px solid #d4af37;
                border-color: $bg2;
                top: 69%;
                left: 52%;
                transform: translate(-50%, 50%);
                transition: all 0.4s ease-in;
                opacity: 1;

                &.show {
                    color: $white;
                    border-color: $gold;
                }
            }
        }
    }

    .profile-photo-desat {
        position: absolute;
        width: 100%;
        height: 100%;
        clip-path: inset(5% 20% 25% 20%);
    }

    .profile-photo1 {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        clip-path: polygon(25% 43%, 35% 50%, 35% 50%, 25% 43%);
        transition: all .4s ease-in-out;

        &__show {
           clip-path: polygon(65% 0%, 75% 7%, 35% 50%, 25% 43%);
           transition: all .4s ease-in-out;

           &--expand {
               clip-path: polygon(65% 0%, 75% 7%, 10% 77%, 0% 70%);
               transition: all .4s ease-in-out;
           }
        }
        
    }

    .profile-photo2 {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        clip-path: polygon(55% 30%, 65% 37%, 65% 37%, 55% 30%);

        &__show {
           clip-path: polygon(55% 30%, 65% 37%, 25% 80%, 15% 73%);
           transition: all .4s ease-in-out;

           &--expand {
               clip-path: polygon(80% 3%, 90% 10%, 25% 80%, 15% 73%);
               transition: all .4s ease-in-out;
           }
        }
        
    }
    .profile-photo3 {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        clip-path: polygon(87% 15%, 97% 22%, 97% 22%, 87% 15%);

        &__show {
           clip-path: polygon(87% 15%, 97% 22%, 57% 65%, 47% 58%);
           transition: all .4s ease-in-out;

           &--expand {
               clip-path: polygon(87% 15%, 97% 22%, 32% 92%, 22% 85%);
               transition: all .4s ease-in-out;
           }
        }
    }
    .shadow {
        cursor: pointer;
        -webkit-filter: drop-shadow(20px -10px 5px rgba(0,0,0,.8));
        filter: drop-shadow(10px 10px 5px rgba(0,0,0,.8));
    }
    .slide-top {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-2.5rem);
    }

</style>