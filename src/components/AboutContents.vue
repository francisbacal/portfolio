<template>
    <div class="about-me">
        <div class="row">
            <div class="col-2">
                <div class="about">
                    <p class="about__me">
                        Hi! I am <span class="about__me__name">Francis Bacal</span>.
                    </p>
                </div>
            </div>
            <div class="col-2">
            </div>
        </div>
        <div class="row content">
            <div class="col-2">
            </div>
            <div class="col-2">
                <div class="about-content">
                    <p class="about-content__me">
                       Certified full stack web developer currently in Metro Manila, Philippines.
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-2">
                <div class="about-content">
                    <p class="about-content__work">
                        I am available for <span class="about__me__highlight">work</span>.
                    </p>
                </div>
            </div>
            <div class="col-2"></div>
        </div>
        <div class="row">
            <div class="col-2">
            </div>
            <div class="col-2">
                <div class="about-content">
                    <p class="about-content__me">
                        You may reach me thru:
                    </p>
                </div>
                <div class="contact">
                    <a href="https://www.linkedin.com/in/francisbacal/" target="_blank" class="contact__link contact__link--linkedin">
                            <span class="contact__label">Linkedin</span> <font-awesome-icon :icon="['fab', 'linkedin']" />
                        </a>
                        <a href="https://github.com/francisbacal" target="_blank" class="contact__link">
                            <span>Github</span> <font-awesome-icon :icon="['fab', 'github']" />
                        </a>
                        <a href="mailto:francisbacal@gmail.com" target="_blank" class="contact__link">
                            <span class="contact__label">Email</span> <font-awesome-icon :icon="['far', 'envelope']" />
                        </a>
                </div>
            </div>
        </div>
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

            document.body.style.overflowY = "scroll";
        },
        beforeDestroy()
        {
            document.body.style.overflowY = "";
        }
    }
</script>

<style lang='scss'>
    .about-me {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 3rem;
        z-index: 0;
    }
    .about {
        margin-left: auto;
        margin-right: auto;
        margin-top: 3rem;
        margin-bottom: 3rem;
        z-index: 0;

        &__me {
            color: $primary;
            font-size: 2rem;
            font-family: $secondary-font;

            &__name {
                color: $gold;
            }
            &__highlight {
                color: $gold;
            }
        }
    }
    .row .content {
        margin-bottom: 5rem;
    }
    .about-content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: auto;
        
        &__me {
            font-size: 1.5rem;
            font-family: $secondary-font;
            margin-top: 1rem;
        }

        &__work {
            font-size: 2rem;
            font-family: $secondary-font;
            margin-top: 6rem;
        }

        &__now {
            color: $gold;
        }
    }
    .contact {
        display: block;
        font-size: 1.5rem;
        margin-top: 2rem;
        color: $primary;

        &__link {
            display: block;
            margin-top: 7px;
            margin-left: 7px;
            font-size: 1.5rem;
            text-decoration: none;
            color: $gold;

            &:hover {
                color: $active;
            }
        }
    }

    .slide-top {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-2.5rem);
    }
    .slide-rl {
        opacity: 0;
        visibility: hidden;
        transform: translateX(2.5rem);
    }
</style>