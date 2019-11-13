import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'
import SectionFive from '../components/SectionFive'
import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)
export default new Router({
    routes: [{
            path: "/",
            redirect: "sectionone"
        },
        {
            path: "/sectionone",
            name: "sectionone",
            component: SectionOne
        },
        {
            path: "/sectiontwo",
            name: "sectiontwo",
            component: SectionTwo
        },
        {
            path: "/sectionthree",
            name: "sectionthree",
            component: SectionThree
        },
        {
            path: "/sectionfour",
            name: "sectionfour",
            component: SectionFour
        },
        {
            path: "/sectionfive",
            name: "sectionfive",
            component: SectionFive
        }
    ],
    mode: "history"
})