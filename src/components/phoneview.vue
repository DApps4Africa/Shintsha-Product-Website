<template>
<div class="app-image">
            <figure>
                <div class="base">
                    <div class="buttons-left">
                        <div class="volume" />
                        <div class="assistant" />
                    </div>
                    <div class="lock" />
                    <div class="front">
                        <div class="top">
                            <div class="sensor sensor-tiny" />
                            <div class="sensor sensor-large" />
                            <div class="sensor sensor-medium" />
                            <div class="sensor sensor-tiny" />
                            <div class="speaker" />
                            <div class="camera" />
                            <div class="sensor sensor-tiny" />
                        </div>
                        <div class="screen" v-ripple="{ center: true }" />
                    </div>
                </div>
            </figure>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/*App Image*/
.app-image img {
    max-width: 100%;
}
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
    background: url("../assets/phone.jpg") no-repeat center center;
    background-size: cover;
    border-radius: 28px;
}

/**Android Mockup styling End */
</style>
