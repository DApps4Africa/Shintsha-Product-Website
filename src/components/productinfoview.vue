<template>
<v-row>
    <v-row no-gutters class="text-center">
        <v-col :cols="8">
            <v-card tile>
                <v-card-text>
                    <h1>Shintsha </h1>
                    <h2>
                        A Decentralized Online Market built on <i class="fa fa-ethereum" aria-hidden="true" />
                        Ethereum Connecting Farmers with Buyers In Minutes!!!
                    </h2>
                    <v-row class="text-center" align="center" justify="center" no-gutters>
                        <v-col cols="6" md="4">
                            <v-btn v-ripple="{ center: true }" v-for="(button,i) in supportedMediaButtons" :key="i" rounded>
                                <v-tooltip top>
                                    <template v-slot:activator="{ on }">
                                        <a :href="button.href" @click="activateStep(button.command)" class="cta-btn playstore-btn" v-on="on">
                                            <i :class="button.class" />
                                        </a>
                                    </template>
                                    <span>{{ button.description }}</span>
                                </v-tooltip>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col :cols="4">
            <v-card class="pa-2" tile outlined>
                <phoneview></phoneview>
            </v-card>
        </v-col>
    </v-row>
</v-row>
</template>

<script>
import phoneview from './phoneview'
export default {
    components:{
        phoneview
    },
    data() {
        return {
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
            ]
        }
    }
}
</script>

<style lang="css" scoped>
.atf-wrap {
    background-image: linear-gradient(45deg, skyblue, green);
    min-height: 100vh;
}

.fill_width {
    max-width: 100vw;
    background-image: linear-gradient(45deg, skyblue, green);

}
</style>
