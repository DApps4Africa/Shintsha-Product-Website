<template>
<v-app id="inspire">
    <v-app-bar app class="nav-header" flat dark>
        <v-btn class="websiteFont" v-ripple="{ center: true }" height="64px" text>
            <v-toolbar-title class="websiteFont" @click="$vuetify.goTo(home, options)">Shintsha</v-toolbar-title>
        </v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-for="item in menu" :key="item.title" @click="$vuetify.goTo(item.to, options)" text>
                {{ item.title }}
            </v-btn>
        </v-toolbar-items>
        <v-menu>
            <template v-slot:activator="{ on }">
                <v-app-bar-nav-icon slot="activator" v-on="on" class="hidden-md-and-up"></v-app-bar-nav-icon>
            </template>
            <v-list>
                <v-list-item v-for="item in menu" :key="item.title" @click="gotTo(item.to)">
                    <v-list-item-content>
                        <v-list-item-title :href="item.to">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>

    <v-content>
        <v-container class="fill-height spanwidth" justify="center" align="center">
            <v-row>
                <v-row>
                    <v-col class="atf-wrap" id="home">
                        <!--LEFT COL-->
                        <v-flex class="col-wrap col-wrap-flex">
                            <div class="row-container">
                                <div class="left-col-atf">
                                    <div class="app-header text-center" justify="center">
                                        <h1>Shintsha </h1>
                                        <h2>A Decentralized Online Market built on <i class="fa fa-ethereum" aria-hidden="true"></i>
                                            Ethereum Connecting Farmers with Buyers In Minutes!!!</h2>
                                    </div>
                                    <div class="cta-container">
                                        <div class="playstore-div" v-ripple="{ center: true }" v-for="(button,i) in supportedMediaButtons" :key="i">
                                            <v-tooltip top>
                                                <template v-slot:activator="{ on }">
                                                    <a :href="button.href" @click="activateStep(button.command)" class="cta-btn playstore-btn" v-on="on">
                                                        <i :class="button.class"></i>
                                                    </a>
                                                </template>
                                                <span>{{button.description}}</span>
                                            </v-tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </v-flex>

                        <!--RIGHT COL-->
                        <v-row class="pad_left " justify="center" align="center">
                            <div class="app-image text-center">
                                <figure>
                                    <div class="base">
                                        <div class="buttons-left">
                                            <div class="volume"></div>
                                            <div class="assistant"></div>
                                        </div>
                                        <div class="lock"></div>
                                        <div class="front">
                                            <div class="top">
                                                <div class="sensor sensor-tiny"></div>
                                                <div class="sensor sensor-large"></div>
                                                <div class="sensor sensor-medium"></div>
                                                <div class="sensor sensor-tiny"></div>
                                                <div class="speaker"></div>
                                                <div class="camera"></div>
                                                <div class="sensor sensor-tiny"></div>
                                            </div>
                                            <div class="screen" v-ripple="{ center: true }"></div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </v-row>
                    </v-col>
                    <!--End Section 1 -->
                    <!--Start Section 2 -->

                    <main id="btf-section" class="below-the-fold">
                        <section id="how_it_works" class="why-our-app">
                            <div class="woa-wrap text-center">
                                <div class="row-container">
                                    <div class="woa-title">
                                        <h1>How It Works?</h1>
                                    </div>
                                    <div class="col-container-woa">
                                        <div class="left-col-woa">
                                            <div class="heading_font">
                                                <h1>Farmer</h1>
                                            </div>
                                            <ul v-for="(item,i) in instructionsFarmer" :key="i">
                                                <h3 class="h3">{{item.title}}</h3>
                                                <li class="row-flex-it"><i :class="item.iconName"></i><span class="list-text">{{item.text}}</span><br></li>
                                            </ul>
                                        </div>
                                        <div class="right-col-woa">
                                            <div class="heading_font">
                                                <h1>Consumer</h1>
                                            </div>
                                            <ul v-for="(item,i) in instructionsConsumers" :key="i">
                                                <h3 class="h3">{{item.title}}</h3>
                                                <li class="row-flex-it"><i :class="item.iconName"></i>
                                                    <p class="list-text ow">{{item.text}}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                    <!--End Section 2 -->
                    <!--Start Section 3 -->
                    <v-col class="pad_top pad_left_small" id="use_cases">
                        <main id="btf-section">
                            <section id="use_cases" class="why-our-app">
                                <div class="woa-wrap text-center">
                                    <div class="row-container">
                                        <div class="woa-title">
                                            <h2>Shintsha Use Cases</h2>
                                        </div>
                                        <v-container class="col-container-woa">
                                            <v-row>
                                                <v-col cols="12" md="6" v-for="(usecase, i) in usecases" :key="i">
                                                    <v-card class="mx-auto" max-width="390" v-ripple="{ center: true }">
                                                        <v-img :src="usecase.img" height="300px" width="100%" contain>
                                                        </v-img>
                                                        <div class="text-xs-center">
                                                            <v-card-title class="card_title_style pa-2" style="width:100%; padding:0%;  display:inline-block; font-weight:bold; color:black;">
                                                                {{usecase.title}}
                                                            </v-card-title>
                                                        </div>
                                                        <v-divider></v-divider>
                                                        <v-card-text class="card_content">
                                                            {{usecase.text}}
                                                        </v-card-text>
                                                    </v-card>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </div>
                                </div>
                            </section>
                        </main>
                    </v-col>
                    <!--End Section 3 -->
                </v-row>

                <v-row class="green_blue">
                    <v-col v-for="(accolade,n) in accoladesList " :key="n" class="d-flex child-flex pad_bot_top" cols="12" md="4">
                        <v-card class="mx-auto" max-width="390" v-ripple="{ center: true }">
                            <v-img :aspect-ratio="16/9" contain class="white--text align-end" height="250px" :src="accolade.image">
                            </v-img>
                            <v-card-text class="text--primary">
                                <div class="acc_font_size"><a :href="accolade.url">{{accolade.text}}</a></div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row>
                    <!--Start Footer -->
                    <v-footer dark style="width:100%;" padless>
                        <v-card flat class=" nav-header lighten-1 white--text text-center" style="width:100%;">
                            <v-card-text>
                                <a href="mailto:dapps4Africa@yahoo.com">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn class="mx-4 white--text" icon>
                                                <v-icon size="30px" v-on="on">fa fa-envelope</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Send Email</span>
                                    </v-tooltip>
                                </a>
                            </v-card-text>

                            <v-card-text class="white--text pt-1 footer_font">
                                Contact Us
                            </v-card-text>
                            <a href="mailto:dapps4Africa@yahoo.com">
                                <v-card-text class="white--text pt-1 footer_font">
                                    {{email}}
                                </v-card-text>
                            </a>
                            <v-divider></v-divider>

                            <v-card-text class="white--text">
                                {{ new Date().getFullYear() }} — <strong>Shinstha</strong>
                            </v-card-text>
                        </v-card>
                    </v-footer>
                    <!--End Footer -->
                    <!-- WhatsApp Stepper Start-->
                    <v-row justify="center">
                        <v-dialog v-model="whatsAppSteps" max-width="600">
                            <template>
                                <v-stepper v-model="whatsAppNext">
                                    <v-stepper-header class="green_blue">
                                        <v-stepper-step step="1">Alert</v-stepper-step>
                                        <v-divider></v-divider>
                                        <v-stepper-step step="2">SandBox</v-stepper-step>
                                        <v-divider></v-divider>
                                        <v-stepper-step step="3">Activation</v-stepper-step>
                                        <v-divider></v-divider>
                                        <v-stepper-step step="4">Done</v-stepper-step>
                                    </v-stepper-header>
                                    <v-stepper-items>
                                        <v-stepper-content step="1">
                                            <v-card class="mb-12" color="lighten-1">
                                                <v-container>
                                                    <v-card-text class="text-center">
                                                        Please note this is a beta version of the steps required to
                                                        use the <b>Shintsha</b> Platform in the near future these
                                                        steps will change as this version is the initial Prototype
                                                    </v-card-text>
                                                </v-container>
                                            </v-card>
                                            <v-btn color="green" @click="whatsAppNext = 2">
                                                Continue
                                            </v-btn>
                                            <v-btn text @click="whatsAppSteps=false">Cancel</v-btn>
                                        </v-stepper-content>
                                        <v-stepper-content step="2">
                                            <v-card class="mb-12" color="lighten-1">
                                                <v-container>
                                                    <v-card-text class="text-center">
                                                        Save the following number
                                                        <br>
                                                        <b>+14155238886</b> <br>
                                                        as a contact on your mobile device
                                                        Preferably as <b>Shintsha</b>
                                                    </v-card-text>
                                                </v-container>
                                            </v-card>
                                            <v-btn color="green" @click="whatsAppNext = 3">
                                                Continue
                                            </v-btn>
                                            <v-btn text @click="whatsAppSteps=false">Cancel</v-btn>
                                        </v-stepper-content>
                                        <v-stepper-content step="3">
                                            <v-card class="mb-12" color="lighten-1">
                                                <v-container>
                                                    <v-card-text class="text-center">
                                                        Once the number is saved send the <b>Join using-forth</b>
                                                        command illustrated by the screenshot below
                                                    </v-card-text>
                                                    <v-card-text class="text-center">
                                                        <v-img :src="joinImg" />
                                                    </v-card-text>
                                                </v-container>
                                            </v-card>
                                            <v-btn color="green" @click="whatsAppNext = 4">
                                                Continue
                                            </v-btn>
                                            <v-btn text @click="whatsAppSteps=false">Cancel</v-btn>
                                        </v-stepper-content>
                                        <v-stepper-content step="4">
                                            <v-card class="mb-12" color="lighten-1">
                                                <v-container>
                                                    <v-card-text class="text-center">
                                                        Once the number is saved send the following command
                                                        <b>Menu</b> illustrated by the screenshot below
                                                    </v-card-text>
                                                    <v-card-text class="text-center">
                                                        <v-img :src="activateImg" />
                                                    </v-card-text>
                                                </v-container>
                                            </v-card>
                                            <v-btn color="green" @click="whatsAppNext = 1">
                                                Continue
                                            </v-btn>
                                            <v-btn text @click="whatsAppSteps=false">Cancel</v-btn>
                                        </v-stepper-content>
                                    </v-stepper-items>
                                </v-stepper>
                            </template>
                        </v-dialog>
                    </v-row>
                    <!-- WhatsApp Stepper End-->
                </v-row>
            </v-row>
        </v-container>
    </v-content>

    <v-row id="contact" no-gutters>

    </v-row>
</v-app>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    components: {},

    data: () => ({
        menu: [{
                to: "#how_it_works",
                title: "How It Works?"
            },
            {
                to: "#use_cases",
                title: "Use Cases"
            },
            {
                to: "#contact",
                title: "Contact"
            }
        ],
        instructionsFarmer: [{
                text: "Farmers can create an account on the Shintsha platform through the different supported mediums.",
                iconName: "fas fa-user-edit",
                title: "Create Account"
            },
            {
                text: "Farmers can use the Shintsha platform to register their crops",
                iconName: "fas fa-plus",
                title: "Crop Listing"
            },
            {
                text: "Farmers can interact with the different harvests or Produce listed on the Shintsha platform which interacts with blockchain",
                iconName: "fas fa-exchange-alt",
                title: "Access to Consumers"
            },
            {
                text: "Through the use of the Blockchain, new business models are enabled which enable farmers to, CrowdFund, and sell their products directly to consumers",
                iconName: "fa fa-ethereum",
                title: "Business Models"
            }
        ],
        instructionsConsumers: [{
                text: "Consumers can create an account through<br> the supported mediums.",
                iconName: "fas fa-user-edit",
                title: "Create Account"
            },
            {
                text: "Consumers can use the Shinstha platform to purchase crops listed by farmers directly",
                iconName: "fa fa-ethereum",
                title: "Purchase Crops"
            }
        ],
        usecases: [{
                img: "./assets/usecases/proof-of-crop.jpg",
                text: "Shintsha Uses Smart Contracts to give transparency and proof of ownership of crops listed by Farmers, which enables trust amongt all actors of the shintsha platform value chain",
                title: "Proof of Crop"
            }, {
                img: "./assets/usecases/business-model.jpg",
                text: "Shintsha allows the creation of new business models and decentralized finances such crowdfunding, and decentralised loans for farmers",
                title: "Business Models"
            }, {
                img: "./assets/usecases/supply-chain1.jpg",
                text: "Farmers who list their crops on Shintsha will allow consumers to easily trace the origin of the crop through different supported mediums",
                title: "Supply Chain"
            },
            {
                img: "./assets/usecases/delivery.png",
                text: "Members of the Community can signup to deliver crops and earn",
                title: "Community Driven Delivery Services"
            }
        ],
        profiles: [{
                name: "Owanate Amachree",
                role: "Backend Developer and Technical Writer",
                about: "Project Shintsha Developer",
                github: "https://github.com/owans",
                img: require("./assets/Team/owans.jpg")
            },
            {
                name: "Badara Diakhate",
                role: "Blockchain Developer, React Developer",
                about: "Project Shintsha Developer",
                github: "#",
                img: require("./assets/Team/pape.jpg")
            }, {
                name: "Siphamandla Mjoli",
                role: "Blockchain Engineer, Blockchain Game Developer",
                about: "Project Shintsha Developer",
                github: "https://github.com/Brianspha",
                img: require("./assets/Team/spha.jpg")
            }

        ],
        icons: [{
            icon: 'fab fa-google-plus',
            description: "Send Email"
        }],
        email: "dapps4Africa@yahoo.com",
        supportedMediaButtons: [{
                href: "#",
                class: "fas fa-sms",
                description: "SMS",
                command: "SMS"
            },
            {
                href: "#",
                class: "fa fa-desktop",
                description: "Web App",
                command: "WebApp"
            },
            {
                href: "#",
                class: "fab fa-whatsapp",
                description: "WhatsApp",
                command: "WhatsApp"
            }
        ],
        whatsAppSteps: false,
        whatsAppNext: 0,
        joinImg: "./assets/screenshots/join.jpg",
        activateImg: "./assets/screenshots/activate.jpg",
        accoladesList: [{
                "text": "Overall Winners of the Road to Devcon Open Finance Bounty",
                "image": './assets/road_to_devcon1.png',
                "url": "https://gitcoin.co/hackathon/road-to-devcon/?"
            },
            {
                "text": "Consensys Lab Realy Alumni",
                "image": './assets/labs.png',
                "url": "https://labs.consensys.net/relays"
            },
            {
                "text": "Joint Winners of the Decentralised Research Award by Consensys Labs",
                "image": './assets/labs.png',
                "url": "https://github.com/ConsenSys/Road-To-Devcon-Relay/issues/3"
            }
        ],
        duration: 600,
        offset: 0,
        easing: 'easeInOutQuad',
        home: "#home"
    }),
    mounted() {
        this.warnUser()
    },
    methods: {

        options() {
            return {
                duration: this.duration,
                offset: this.offset,
                easing: this.easing,
            }
        },
        warnUser() {
            Swal.fire({
                title: 'Beta',
                text: "This Website is under development",
                icon: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
            })
        },
        gotTo(id) {

        },
        activateStep(feature) {
            switch (feature) {
                case "WhatsApp":
                    this.whatsAppSteps = true
                    break;
                default:
                    break
            }
        },
        onScroll(e) {
            this.offsetTop = e.target.scrollTop
        }
    }
}
</script>

<style lang="css" scoped>
/**Responsive text Styling start */

/**Responsive stylign end */

/**Misc styling start */
.pad_bot_top {
    padding-top: 80px;
    padding-bottom: 80px;
}

.acc_font_size {
    font-size: 20px;
}

.acc_font_size a {
    color: black;
}

.green_blue {
    background-image: linear-gradient(45deg, skyblue, green);
}

.pad_left {
    margin-left: 20px;
}

.card_title_style {
    width: 100%;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.70);
}

html {
    scroll-behavior: smooth;
    max-width: 100%;
}

.pad_top {
    padding: 0%;
}

.v-content__wrap {
    max-width: "";
}

.h3 {
    font-size: 30px;
}

.heading_font {
    font-size: 35px;
    text-align: center;
    margin: auto;
}

.websiteFont {
    font-family: Tahoma, Verdana, Segoe, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-variant: normal;
    font-weight: 700;
    line-height: 26.4px;
}

.footer_font {
    font-size: 25px;
}

.nav_links {
    font-family: Tahoma, Verdana, Segoe, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-variant: normal;
    font-weight: 700;
    line-height: 15.4px;
}

.center_items {
    margin: auto;
    width: 100%;
    white-space: nowrap;
}

.card_title_cutsom {
    width: 100%;
    font-size: 19px;
    color: rgba(0, 0, 0, 1);
    font-weight: bold;
    margin: auto;
}

.card_content {
    font-weight: bold;
    width: 100%;
    font-size: 25px;
    color: rgba(0, 0, 0, 0.65);
    font-weight: bold;
    font-family: Tahoma, Verdana, Segoe, sans-serif;
}

.col-wrap-flex {
    margin: auto;

}

.spanwidth {
    margin: 0;
    padding: 0;
    max-width: 100%;
}

.body {
    scroll-behavior: smooth;
    box-sizing: border-box;
    font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));

}

/* Defaults */
.row-flex-it {
    display: flex;
    padding-bottom: 10%;
}

.column-flex-it {
    display: flex;
    flex-direction: column;
}

.grid-it {
    display: grid;
}

.inline-it {
    display: inline-block;
}

figure {
    text-align: center;
}

/*ABOVE THE FOLD */
.atf-wrap {
    background-image: linear-gradient(45deg, skyblue, green);
    min-height: 100vh;
}

.nav-header {
    background-image: linear-gradient(45deg, skyblue, green);

}

a {
    text-decoration: none;
}

.transparent_background {
    background-color: transparent;
}

/**Misc Styling Code End */

/*App Description Left Column Start*/
.app-header {
    text-align: center;
    font-family: Montserrat, sans-serif;
    color: #fff;
}

.app-header h1 {
    font-size: calc(40px + (60 - 40) * ((100vw - 320px) / (1200 - 320)));
    margin-bottom: 20px;
}

.app-header h2 {
    font-size: calc(20px + (45 - 40) * ((100vw - 320px) / (1200 - 320)));
    margin-bottom: 20px;
    margin-left: 20px;
}

.cta-container {
    text-align: center;
    padding-left: 60px;
}

.ios-div {
    margin-bottom: 10px;
}

.cta-btn {
    display: inline-block;
    font-family: Tahoma, Verdana, Segoe, sans-serif;
    font-size: calc(18px + (25 - 18) * ((100vw - 320px) / (1200 - 320)));
    text-decoration: none;
    padding: 5px 10px;
    width: 200px;
}

.cta-btn i {
    padding-right: 5px;
}

.ios-btn {
    background-color: #000;
    color: #fff;
    border: 2px solid #000;
    border-radius: 30px;
    transition: all 0.3s ease-in;
}

.ios-btn:hover {
    background-color: transparent;
}

.playstore-btn {
    background-color: #0d9436;
    color: #fff;
    border: 2px solid #0d9436;
    border-radius: 30px;
    transition: all 0.3s ease-in;
    margin-left: 20px;
}

.playstore-btn:hover {
    background-color: transparent;
}

/*App Description Left Column END*/

/*App Image*/
.app-image img {
    max-width: 100%;
}

/*WHEN DESKTOP MEDIA QUERY*/

/*WHEN DESKTOP MEDIA END*/

/*How it Works Section Styling Start */
.woa-wrap {
    padding: 10px;
}

.why-our-app {
    background-image: linear-gradient(45deg, skyblue, green);
    color: #fff;
}

.woa-title {
    font-size: calc(30px + (25 - 15) * ((50vw - 160px) / (600 - 160)));
    font-family: Tahoma, Verdana, Segoe, sans-serif;
    margin-bottom: 30px;
}

.col-container-woa ul {
    list-style: none;
}

.col-container-woa i {
    align-self: center;
    font-size: calc(30px + (48 - 30) * ((100vw - 320px) / (1200 - 320)));
    padding-right: 10px;
}

.col-container-woa div {
    padding: 10px;
    font-family: Tahoma, Verdana, Segoe, sans-serif;
    font-weight: 100;
}

.list-text {
    align-self: center;
    font-size: calc(20px + ((10vw - 320px) / (1200 - 320)));
    font-weight: bold;
}

#center {
    text-align: center;
}

/*How it Works Section Styling END */
/**Android Mockup styling start */
.base {
    height: 900px;
    width: 400px;
    border-radius: 32px;
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row-reverse;
}

.base .buttons-left {
    position: absolute;
    left: -2px;
    top: 104px;
}

.base .buttons-left .volume {
    background: black;
    height: 86px;
    width: 2px;
    margin-bottom: 33px;
}

.base .buttons-left .assistant {
    background: black;
    height: 48px;
    width: 2px;
}

.base .lock {
    background: black;
    position: absolute;
    height: 48px;
    width: 2px;
    right: -2px;
    top: 172px;
}

.base .front {
    width: calc(100% - 4px);
    height: calc(100% - 6px);
    background: black;
    border-radius: 30px;
    overflow: hidden;
    position: relative;
}

.base .front:before,
.base .front:after {
    content: "";
    pointer-events: none;
    height: 100%;
    width: 30px;
    top: 0px;
    position: absolute;
    z-index: 100;
}

.base .front:after {
    background: linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(125, 185, 232, 0) 60%);
    left: 0;
}

.base .front:before {
    background: linear-gradient(to left, rgba(255, 255, 255, 0.9) 0%, rgba(125, 185, 232, 0) 60%);
    right: 0;
}

.base .front .top {
    display: flex;
    align-items: center;
    position: absolute;
    height: 30px;
    width: 100%;
    padding: 0 43px;
}

.base .front .top .sensor {
    border-radius: 50%;
}

.base .front .top .sensor-tiny {
    height: 6px;
    width: 6px;
    background: #121a23;
}

.base .front .top .sensor-large {
    height: 11px;
    width: 11px;
    background: #121a23;
    border: solid 2px #1d1e1f;
    margin: 0 12px;
}

.base .front .top .sensor-large {
    height: 13px;
    width: 13px;
    background: #121a23;
    border: solid 2px #1d1e1f;
}

.base .front .top .sensor-medium {
    height: 10px;
    width: 10px;
    background: #121a23;
    border: solid 2px #1d1e1f;
    margin-right: 5px;
}

.base .front .top .speaker {
    margin-left: 23px;
    margin-right: 30px;
    width: 43px;
    height: 5px;
    border: solid #1c1c1d 2px;
    border-radius: 15px;
    background: #101010;
}

.base .front .top .camera {
    height: 13px;
    width: 13px;
    border: solid 2px #1d1e1f;
    border-radius: 50%;
    position: relative;
    background: #121a23;
    margin-right: 30px;
}

.base .front .top .camera:before,
.base .front .top .camera:after {
    content: "";
    background: rgba(255, 255, 255, 0.5);
    width: 5px;
    height: 2px;
    border-radius: 50%;
    position: absolute;
    transform: rotate(-45deg);
    filter: blur(1px);
}

.base .front .top .camera:before {
    bottom: 1px;
    right: 0px;
}

.base .front .top .camera:after {
    top: 1px;
}

.base .front .screen {
    width: calc(100% - 4px);
    height: calc(100% - 55px);
    margin-top: 30px;
    margin-left: 2px;
    position: relative;
    overflow: hidden;
    background: url("./assets/phone.jpg") no-repeat center center;
    background-size: cover;
    border-radius: 28px;
}

/**Android Mockup styling End */

/** nav bar styling */
/**Profle card styling Start */
@import url(https://fonts.googleapis.com/css?family=Open+sans);
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
@import url(https://fonts.googleapis.com/css?family=Playfair+Display);

.snip1515 {
    font-family: Tahoma, Verdana, Segoe, sans-serif;
    position: relative;
    margin: 10px;
    width: 80%;
    color: #000000;
    text-align: center;
    line-height: 1.4em;
    font-size: 1.125em;
    box-shadow: none !important;
}

.snip1515 * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.snip1515 .profile-image {
    display: inline-block;
    width: 100%;
    z-index: 1;
    position: relative;
    padding: 10px;
    border: 2px solid #ffffff;
}

.snip1515 .profile-image img {
    max-width: 50%;
    vertical-align: top;
}

.profile-image:hover {
    background: #e1e1e1;
    border-top: .05px solid #d0d0d0;
}

.snip1515 figcaption {
    width: 100%;
    background-color: #F2F2F2;
    color: #555;
    padding: 125px 25px 25px;
    margin-top: -100px;
    display: inline-block;
}

.snip1515 h3,
.snip1515 h4,
.snip1515 p {
    margin: 0 0 5px;
}

.snip1515 h3 {
    font-weight: 600;
    font-size: 1.3em;
    font-family: Tahoma, Verdana, Segoe, sans-serif;
}

.snip1515 h4 {
    color: #8c8c8c;
    font-weight: 400;
    letter-spacing: 2px;
}

.snip1515 p {
    font-size: 0.9em;
    letter-spacing: 1px;
    opacity: 0.9;
}

.snip1515 .icons {
    text-align: center;
    width: 100%;
}

.snip1515 i {
    padding: 10px 2px;
    display: inline-block;
    font-size: 18px;
    font-weight: normal;
    color: #020202;
    opacity: 0.75;
}

.snip1515 i:hover {
    opacity: 1;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
}

/**Wrap text Styling start */
.ow {
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
}

/**Wrap text styling end */
/**Profile card styling End */
/**Media Queries Styling Start */
/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 600px) {
    .app-header h2 {
        font-size: calc(13px + (45 - 40) * ((100vw - 320px) / (1200 - 320)));
        margin-bottom: 20px;
        margin-left: 20px;
    }

    .pad_left {
        padding-left: 10px;
    }

    .list-text {
        align-self: center;
        font-weight: bold;
    }

    .ow {
        overflow-wrap: break-word;
        word-wrap: break-word;
        hyphens: auto;
    }
}

@media screen and (max-width: 768px) {

    /**Misc Style Start */
    /* Resize all other text elements when tablet and mobile */
    html {
        font-size: 60.5%;
    }

    .pad_left_small {
        margin-left: 20px;
    }

}

@media (min-width: 768px) {
    .col-wrap-flex .row-container {
        display: flex;
        height: 100%;
        width: 100%;
    }

}

@media screen and (min-width: 768px) {
    .atf-wrap {
        display: grid;
        grid-template-columns: 1fr 1fr;

    }

    .col-container-atf {
        align-items: center;
    }

    .left-col-atf {
        align-self: center;
    }

    .cta-container {
        display: flex;
        margin: 0;
        padding: 0;
    }

    .ios-div {
        width: 50%;
    }

    .playstore-div {
        width: 50%;
    }
}

@media (min-width: 768px) {
    .woa-wrap {
        padding: 50px 10px;
    }

    .col-container-woa {
        display: flex;
    }

    .col-container-woa div {
        width: 100%;
    }

    li.row-flex-it {
        justify-content: center;
    }
}

/**Media Queriesstyling End */
</style>
