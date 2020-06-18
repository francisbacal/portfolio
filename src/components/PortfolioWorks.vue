<template>
    <div class="projects">
        <div class="row">
            <div class="col-2">
                <portfolio-works-individual :work="works.avmph" :class="{'slide-top': loading}"></portfolio-works-individual>
            </div>
            <div class="col-2">
                <portfolio-works-individual :work="works.ams" :class="{'slide-top': loading}"></portfolio-works-individual>
            </div>
            <div class="col-2">
                <portfolio-works-individual :work="works.portfolio" :class="{'slide-top': loading}"></portfolio-works-individual>
            </div>
            <div class="col-2">
                <portfolio-works-individual :work="works.hoteldelluna" :class="{'slide-top': loading}"></portfolio-works-individual>
            </div>
        </div>
    </div>
</template>
    
<script>
    import PortfolioWorksIndividual from './PortfolioWorksIndividual'
    export default {
        components: {PortfolioWorksIndividual},
        data(){
            return{
                loading: true,
                works: 
                {
                    avmph:
                    {
                        name: 'AVM Philippines',
                        image: 'avmph.png',
                        demo: 'https://nciscal.gitlab.io/avmph/#',
                        code: 'https://gitlab.com/nciscal/avmph',
                        techs: 
                        [
                            {name: 'HTML'},
                            {name: 'CSS'},
                            {name: 'SASS'},
                            {name: 'Bootstrap'},
                            {name: 'JavaScript'},
                            {name: 'jQuery'},
                            {name: 'Mobile-first'},
                            {name: 'Responsive'}
                        ],
                        descs: 
                        [
                            {part: 'A capstone project to showcase my skills in responsive static web page design with the aide of Bootstrap front-end framework and a little bit of Javascript & jQuery.'},
                            {part: 'A site that promotes awareness about a rare medical condition called, Arteriovenous Malformation (AVM).'},
                            {part: 'Brain arteriovenous malformation (AVM) is a tangle of abnormal blood vessels connecting arteries and veins in the brain.'}
                        ]
                    },
                    ams:
                    {
                        name: 'AMS | Asset Management System',
                        image: 'ams.png',
                        demo: 'https://ams-management.herokuapp.com/',
                        code: 'https://github.com/francisbacal/ams',
                        techs: 
                        [
                            {name: 'HTML'},
                            {name: 'CSS'},
                            {name: 'SASS'},
                            {name: 'Bootstrap'},
                            {name: 'JavaScript'},
                            {name: 'jQuery'},
                            {name: 'PHP'},
                            {name: 'Laravel'},
                            {name: 'Responsive'}
                        ],
                        descs: 
                        [
                            {part: 'A capstone project to showcase my skills in PHP and Laravel framework.'},
                            {part: 'This project mainly focus on back-end design with a little bit of Javascript/jQuery to familiarize myself with fetch/ajax, to dynamically load contents.'},
                            {part: 'AdminLTE template was used for the front-end design to easily visualize the Management System feature.'},
                            {part: 'This is a site to monitor the assets of a company. This includes CRUD of assets as well as it\'s categories. Moreover, allocation and withholding of assets to and from employees is also present.'}
                        ]
                    },
                    portfolio:
                    {
                        name: 'My Portfolio',
                        image: 'portfolio.png',
                        demo: '#',
                        code: '#',
                        techs: 
                        [
                            {name: 'HTML'},
                            {name: 'SASS'},
                            {name: 'JavaScript'},
                            {name: 'Vue'},
                            {name: 'Responsive'}
                        ],
                        descs: 
                        [
                            {part: 'Online portfolio made with Vue.'},
                            {part: 'I made this from scratch to make things simple. This is also my first take on Vue-cli and I had fun doing this project.'},
                        ]
                    }, 
                    hoteldelluna:
                    {
                        name: 'Hotel Del Luna',
                        image: 'hoteldelluna.png',
                        demo: 'https://hotel-del-luna.herokuapp.com/',
                        code: 'https://github.com/francisbacal/hoteldelluna-backend',
                        techs: 
                        [
                            {name: 'MongoDB'},
                            {name: 'ExpressJS'},
                            {name: 'React'},
                            {name: 'NodeJS'},
                            {name: 'Mongoose'},
                            {name: 'JavaScript'},
                            {name: 'Recoil JS'},
                            {name: 'Axios'},
                            {name: 'SASS'},
                            {name: 'Single Page Application'},
                        ],
                        descs: 
                        [
                            {part: 'Third Capstone project using MERN Stack.'},
                            {part: 'This is a hotel room booking app. The idea of the theme is based on the korean drama, Hotel Del Luna.'},
                            {part: 'I kind of struggle doing this compared to my past projects as I integrated features such as the facebookexperimental/Recoil.js.'},
                            {part: 'I experimented on the API and had some trouble using the hooks specially the useRecoilValueLoadable() which is used to read'+
                                    ' the data of asynchronous selectors. I even ended up dealing with delayed fetched data using axios.'
                            },
                            {part: 'I managed to solve the problem by creating a different child components to read the global state from the parent and using '+
                                'another state to determine if the resolved promise is already available.'},
                            {part: 'I am planning to further study and improve this project in both front-end and back-end aspect.'},
                        ]
                    } 
                    
                }
            }
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
    .projects {
        margin-left: auto;
        margin-right: auto;
        margin-top: 3rem;
        margin-bottom: 3rem;
        z-index: 0;
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