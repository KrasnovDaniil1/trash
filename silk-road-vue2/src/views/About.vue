<template>
    <div class="about">
        <div v-bind:class="{abouthover: activeBackground}" ></div>
        <div class="about-quote">
            <div>
                <text>
                    <img src="../assets/img/about/quotes-start.png" alt="" />
                    {{ $t('About.about-quote-text') }}
                    <img src="../assets/img/about/quotes-end.png" alt="" />
                </text>
                <h1>{{ $t('About.about-quote-h1') }}</h1>
            </div>
        </div>

        <div class="about-center">
            <h1>{{ $t('About.about-center-h1') }}</h1>
            <span v-html="$t('About.about-center-span')"> </span>
            <text>
                {{ $t('About.about-center-text') }}
            </text>
        </div>

        <div class="about-slider">
            <div
                @mouseover="(activeHover1 = true), (activeBackground = true)"
                @mouseleave="(activeHover1 = false), (activeBackground = false)"
            >
                <div>
                    <img src="../assets/img/about/slider-1.png" alt="" />
                    <span class="aboutslidertextsee">
                        {{ $t('About.about-center-card1-anim-text') }}
                    </span>
                </div>
                <span>
                    <h1>{{ $t('About.about-center-card1-bottom-h1') }}</h1>
                    <text>{{
                        $t('About.about-center-card1-bottom-text')
                    }}</text>
                </span>
            </div>
            <div
                @mouseover="(activeHover2 = true), (activeBackground = true)"
                @mouseleave="(activeHover2 = false), (activeBackground = false)"
            >
                <div>
                    <img src="../assets/img/about/slider-2.png" alt="" />
                    <span class="aboutslidertextsee">{{
                        $t('About.about-center-card2-anim-text')
                    }}</span>
                </div>
                <span>
                    <h1>{{ $t('About.about-center-card2-bottom-h1') }}</h1>
                    <text>{{
                        $t('About.about-center-card2-bottom-text')
                    }}</text>
                </span>
            </div>
            <div
                @mouseover="(activeHover3 = true), (activeBackground = true)"
                @mouseleave="(activeHover3 = false), (activeBackground = false)"
            >
                <div>
                    <img src="../assets/img/about/slider-3.png" alt="" />
                    <span class="aboutslidertextseeleft">{{
                        $t('About.about-center-card3-anim-text')
                    }}</span>
                </div>
                <span>
                    <h1>{{ $t('About.about-center-card3-bottom-h1') }}</h1>
                    <text>{{
                        $t('About.about-center-card3-bottom-text')
                    }}</text>
                </span>
            </div>
        </div>
        <div class="about-bottom">
            <h1>
                Amet morbi<br/> volutpat amet ultrices<br/> ut mauris adipiscing elit. 
            </h1>
            <div class="border-h1"></div>
            <img class="about-img-top" src="../assets/img/about/about-img-top.png" />
            <section class="section-1">
                <img src="../assets/img/about/about-top-1.png" alt="">
                <text>Et semper vestibulum id sed facilisi eget. At mattis at morbi luctus cras duis praesent sit. Nulla id malesuada donec et libero. Fringilla feugiat phasellus montes, suspendisse interdum nisi ligula lacus erat. Lectus amet tristique molestie dui.</text>
                <text>Et semper vestibulum id sed facilisi eget. At mattis at morbi luctus cras duis praesent sit. Nulla id malesuada donec et libero. Fringilla feugiat phasellus montes, suspendisse interdum nisi ligula lacus erat. Lectus amet tristique molestie dui.</text>
                <div class="border-text"></div>
                <text>Et semper vestibulum id sed facilisi eget. At mattis at morbi luctus cras duis praesent sit. Nulla id malesuada donec et libero. Fringilla feugiat phasellus montes, suspendisse interdum nisi ligula lacus erat. Lectus amet tristique molestie dui.</text>
            </section>
            <section class="section-2">
                <img src="../assets/img/about/about-top-2.png" alt="">
                <text>
                    <span>Senectus massa aliquet et at. Lectus pellentesque massa, tellus pulvinar ut. Suspendisse quis eget eu, sem at. Massa congue euismod bibendum orci dis sapien accumsan nibh. Tellus nullam ac, elementum, donec. Viverra id elit nulla id at id. Cursus eleifend nisi aenean congue ipsum tortor ut morbi. Elit elit faucibus turpis facilisi at amet. Velit morbi vel eros, blandit posuere proin egestas gravida etiam. Egestas netus sed odio quis 
                    </span>
                    <span>malesuada est pretium diam id. Donec viverra morbi at nisi, ligula. Amet mauris habitasse sagittis morbi ac lacus. Aliquet arcu rutrum tortor mauris ullamcorper velit, ornare turpis. Leo bibendum aliquam orci lacus, massa enim diam. Nisi porttitor et faucibus pellentesque id.
                    Sit vel vestibulum pellentesque facilisis. Pellentesque molestie rutrum dignissim at sit dolor. Justo habitant sed magna vitae quam sit. Dignissim libero arcu luctus consectetur adipiscing pulvinar.
                    </span>
                </text>
            </section>

        </div>
       
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeHover1: false,
            activeHover2: false,
            activeHover3: false,
            activeBackground: false,
        };
    },
    methods: {},
};
</script>
<style scoped>
.about {
    background-color: #bba773;
    width: 100%;
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
    z-index: -2;
    overflow: hidden;
}
.abouthover {
    /*Анимация для слайдера затемнение фона*/
    position: absolute;
    width: 100%;
    height: 4000px;
    left: 0;
    top: 0;
    backdrop-filter: blur(5px);
    animation-duration: 0.3s;
    animation-name: activehover;
    animation-fill-mode: forwards;
    z-index: 20;
    background-color: black;
}

@keyframes activehover {
    0% {
        background-color: rgba(0, 0, 0, 0);
    }

    100% {
        background-color: rgba(0, 0, 0, 0.7);
    }
}

/*about-quote */
.about-quote {
    background-color: #776d54;
    min-height: 414px;
    display: flex;
    flex-direction: column;
    align-items: center;
        position: relative;
}
.about-quote > div {
    max-width: 1150px;
    min-height: 234px;
    font-family: 'PT Mono Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 39px;
    letter-spacing: -0.06em;
    color: #272727;
    margin-top: 86px;
}
.about-quote::before {
    content: url('../assets/img/about/about-center-before.svg');
    position: absolute;
    display: block;
    left: 1px;
    top: 330px;
    z-index: 30;
}
.about-quote > div > text {
    display: block;
    text-indent: 20px;
    position: relative;
}
.about-quote > div > text > img {
    position: absolute;
    display: inline;
}
.about-quote > div > text > img:first-child {
    bottom: 160px;
    left: -23px;
}
.about-quote > div > text > img:last-child {
    top: 137px;
}
.about-quote > div > h1 {
    margin-top: 30px;
}

/*about-center */
.about-center {
    margin-top: 131px;
    margin-bottom: 110px;
    max-width: 1672px;
    min-height: 586px;
    text-align: center;
    color: #282828;
    margin-right: auto;
    margin-left: auto;

}

.about-center > h1 {
    font-family: 'Oswald Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 96px;
    line-height: 142px;
    letter-spacing: -0.06em;
}
.about-center > span {
    display: block;
    font-family: 'Montserrat Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 29px;
    line-height: 90px;
    text-align: center;
    letter-spacing: -0.06em;
    color: #000000;
}
.about-center > text {
    font-family: 'Montserrat Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 29px;
    line-height: 40px;
    text-align: center;
    letter-spacing: -0.06em;
    color: #000000;
}

/*about-slider*/
.about-slider {
    display: flex;
    justify-content: space-around;
    text-align: center;
}
.about-slider > div {
    width: 392px;
    transition: 0.4s;
}
.about-slider > div:hover {
    /*анимация для card при наведение*/
    transform: scale(1.13);
    z-index: 1000;
    position: relative;
}
.about-slider > div > div {
    position: relative;
    display: flex;
    align-items: center;
    z-index: 99 !important;
}
.about-slider > div > div > img {
    width: 338px;
    height: 634px;
    margin-left: auto;
    margin-right: auto; /*из слайдера выезжает в право*/
}
.aboutslidertextsee {
    position: absolute;
    font-family: 'Montserrat Regular';
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    line-height: 40px;
    color: white;
    width: 450px;
    height: 620px;
    opacity: 0;
    padding-left: 30px;
    padding-right: 64px;
    background-color: #312c1e;
    letter-spacing: -0.06em;
    text-align: start;
    z-index: 99 !important;
    transition-property: all;
    transition-duration: 0.5s;
    top: -80px;
    left: 0;
}
.about-slider > div:hover .aboutslidertextsee {
    transition-property: all;
    transition-duration: 0.4s;
    left: 365px;
    top: 10px;
    opacity: 0.9;
}
.about-slider > div:hover .aboutslidertextseeleft {
    left: -425px;
    top: 10px;
    opacity: 0.9;
    transition-property: all;
    transition-duration: 0.4s;
}
.aboutslidertextseeleft {
    /*из слайдера выезжает в лево*/
    position: absolute;
    font-family: 'Montserrat Regular';
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    line-height: 40px;
    color: white;
    width: 450px;
    height: 620px;
    padding-right: 30px;
    padding-left: 64px;
    background-color: #312c1e;
    letter-spacing: -0.06em;
    text-align: start;
    z-index: 99 !important;
    left: 0;
    top: -80px;
    opacity: 0;
    transition-property: all;
    transition-duration: 0.5s;
}

.none {
    display: none;
}

.about-slider > div > span {
    display: inline-block;
    margin-top: 9px;
    margin-bottom: 73px;
    border-bottom: 5px solid #000000;
    position: relative;z-index: 99  !important;
}
.about-slider > div > span > h1 {
    font-family: 'Oswald Regular';
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 47px;
    text-align: center;
    letter-spacing: -0.06em;
    color: #000000;
}
.about-slider > div > span > text {
    font-family: 'Montserrat Regular';
    display: inline-block;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.06em;
    color: #000000;
    margin-top: 9px;
    padding-bottom: 5px;
}

.about-bottom {
    font-family: "Montserrat Regular";
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 44px;
    color: #000000;
    padding-left: 97px;
    padding-right: 52px;
    position: relative;
}
.about-bottom>h1 {
    font-family: "Oswald Bold";
    font-style: normal;
    font-weight: 500;
    font-size: 65px;
    line-height: 80px;
    text-align: center;
    letter-spacing: 0.155em;
    color: #000000;
}

.section-1>img {
    margin-left: auto;
    margin-right: auto;
    margin-top: 85px;
    margin-bottom: 80px;
    position: relative;
    z-index: 100;
    width: 921.66px;
    height: 489.44px;
    transform: rotate(0.25deg);

}
.section-1>text {
    display: block;
    margin-bottom: 30px;
}
.section-2 {
    display: flex;
    margin-bottom: 285px;
}
.section-2>img {
    width: 814px;
    height: 1091px;
}
.section-2>text {
    margin-left: 120px;
    margin-right: 88px;
    
}
.section-2>text>span:first-child {
    display: block;
    margin-bottom: 40px;
}
.border-h1 {
    width: 560px;
    height: 12px;
    background: #000000;
    margin-left: auto;
    margin-right: auto;
    margin-top: 17.5px;
}
.border-text {
    width: 651.01px;
    height: 10px;
    background: #000000;
    margin-bottom: 40px;
}
.about-img-top {
    position: absolute;
    width: 840.69px;
    height: 935.68px;
    left: -35px;
    transform: rotate(-0.47deg);
    top: -100px;
}
@media (min-width: 1700px) and (max-width:1920px) {
    .section-2>img {
        width: 701px;
        height: 1020px;
    }
}
@media (min-width: 1300px) and (max-width:1700px) {
    .about-quote {
        min-height: 380px;
    }
    .about-center {
        margin-top: 80px;
        margin-bottom: 40px;
    }
    .about-center > h1[data-v-039c5b43] {
        font-size: 85px;
        line-height: 122px;
        letter-spacing: -0.06em;
    }
    .about-center > span[data-v-039c5b43] {
        font-size: 27px;
        line-height: 75px;
    }
    .about-center > text {
        font-size: 27px;
        line-height: 40px;
        margin-right: 40px;
        margin-left: 40px;
    }
    .about-bottom>h1[data-v-039c5b43] {
        font-size: 50px;
        line-height: 70px;
        text-align: center;
        letter-spacing: 0.155em;
        color: #000000;
    }
    .border-h1[data-v-039c5b43] {
        width: 460px;
        height: 8px;
        background: #000000;
        margin-left: auto;
        margin-right: auto;
        margin-top: 17.5px;
    }
    .section-1>img[data-v-039c5b43] {
        margin-left: auto;
        margin-right: auto;
        margin-top: 60px;
        margin-bottom: 50px;
    }
    .section-1>text[data-v-039c5b43] {
        margin-bottom: 15px;
    }
    .about-bottom[data-v-039c5b43] {
        font-size: 30px;
        line-height: 36px;
        color: #000000;
        padding-left: 97px;
        padding-right: 52px;
        position: relative;
    }
    .border-text {
        width: 651.01px;
        height: 8px;
        background: #000000;
        margin-bottom: 25px;
    }
    .section-2 {
        flex-direction: column;
        margin-bottom: 130px;
    }
    .section-2>img {
        margin-left: auto;
        margin-right: auto;
    }
    .section-2>text {
        margin-top: 30px;
    }
}
@media (min-width: 1000px) and (max-width:1300px) {
    .about-quote {
        min-height: 300px;
    }
    .about-quote>div {
        margin-top: 50px;
        font-size: 30px;
        line-height: 36px;
    }
    .about-center {
        margin-top: 80px;
        margin-bottom: 40px;
        min-height: 500px;
    }
    .about-center > h1 {
        font-size: 70px;
        line-height: 90px;
        letter-spacing: -0.06em;
        
    }
    .about-center > span {
        font-size: 22px;
        line-height: 60px;
    }
    .about-center > text {
        font-size: 22px;
        line-height: 40px;
        margin-right: 40px;
        margin-left: 40px;
    }
    .about-bottom>h1 {
        font-size: 50px;
        line-height: 70px;
        text-align: center;
        letter-spacing: 0.155em;
        color: #000000;
    }
    .border-h1 {
        width: 460px;
        height: 8px;
        background: #000000;
        margin-left: auto;
        margin-right: auto;
        margin-top: 17.5px;
    }
    .section-1>img {
        margin-left: auto;
        margin-right: auto;
        margin-top: 60px;
        margin-bottom: 30px;
        width: 800px;
        height: 450px;
    }
    .section-1>text {
        margin-bottom: 10px;
    }
    .about-bottom {
        font-size: 26px;
        line-height: 34px;
        color: #000000;
        padding-left: 97px;
        padding-right: 52px;
        position: relative;
    }
    .border-text {
        width: 651.01px;
        height: 5px;
        background: #000000;
        margin-bottom: 25px;
    }
    .section-2 {
        flex-direction: column;
        margin-bottom: 130px;
    }
    .section-2>img {
        margin-left: auto;
        margin-right: auto;
        width: 800px;
        height: 700px;
    }
    .section-2>text {
        margin-top: 30px;
    }
    .about-quote>div>text>img:first-child {
        bottom: 145px;
        left: 13px;
    }
    .about-quote>div>text {
        padding-left: 50px;
        padding-right: 50px;
    }
    .about-quote>div>h1 {
        margin-top: 20px;
        padding-left: 40px;
    }
    .about-quote::before {
        position: absolute;
        display: block;
        left: 1px;
        top: 180px;
        z-index: 30;
    }
    .about-slider>div>div>img{
        width: 258px;
        height: 434px;
    }
    .about-slider>div>span {
        display: inline-block;
        margin-top: 9px;
        margin-bottom: 73px;
        border-bottom: 3px solid #000000;
        max-width: 258px;
    }
    .about-slider>div>span>h1 {
        font-size: 22px;
        line-height: 25px;
    }
    .about-slider>div>span>text {
        font-size: 13px;
        margin-top: 9px;
        padding-bottom: 5px;
        margin-left: 5px;
        margin-right: 5px;
        line-height: 20px;
    }
    .aboutslidertextsee {
        font-size: 20px;
        line-height: 32px;
        width: 330px;
        height: 450px;
        padding-left: 30px;
        padding-right: 24px;
        top: -30px;
        left: 0;
    }
    .about-slider>div:hover .aboutslidertextsee {
        left: 290px;
        top: 0px;
        opacity: 0.9;
    }
    .about-slider>div:hover .aboutslidertextseeleft {
        left: -295px;
        top: 0px;
    }

    .aboutslidertextseeleft {
        font-size: 20px;
        line-height: 32px;
        width: 330px;
        height: 450px;
        padding-left: 30px;
        padding-right: 24px;
        top: -30px;
        left: 0;
    }
    .section-2>text {
        margin-left: 10px;
        margin-right: 58px;
    }
}
@media (min-width: 850px) and (max-width:1000px) {
    .about-quote {
        min-height: 280px;
    }
    .about-quote>div {
        margin-top: 40px;
        font-size: 25px;
        line-height: 36px;
    }  
    .about-quote>div>text>img:first-child {
        bottom: 135px;
        left: 30px;
    }
    .about-quote>div>text {
        padding-left: 50px;
        padding-right: 50px;
    }
    .about-quote>div>h1 {
        margin-top: 20px;
        padding-left: 40px;
    }
    .about-quote::before {
        position: absolute;
        display: block;
        left: 1px;
        top: 145px;
        z-index: 10;
    }
    .about-center {
        margin-top: 50px;
        margin-bottom: 20px;
        min-height: 380px;
    }
    .about-center > h1 {
        font-size: 60px;
        line-height: 80px;
        letter-spacing: -0.06em;
    }
    .about-center > span {
        font-size: 19px;
        line-height: 45px;
        letter-spacing: -0.08em;
    }
    .about-center > text {
        font-size: 20px;
        line-height: 40px;
        margin-right: 50px;
        margin-left: 50px;
    }    
    .about-bottom {
        font-size: 21px;
        line-height: 30px;
        color: #000000;
        padding-left: 97px;
        padding-right: 52px;
        position: relative;
    }
    .about-bottom>h1 {
        font-size: 37px;
        line-height: 50px;
        text-align: center;
        letter-spacing: 0.155em;
        color: #000000;
    }
    .border-h1 {
        width: 430px;
        height: 5px;
        background: #000000;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10.5px;
    }
    .section-1>img {
        margin-left: 0;
        margin-right: 0;
        margin-top: 40px;
        margin-bottom: 15px;
        width: 650px;
        height: 380px;
    }
    .section-1>text {
        margin-bottom: 8px;
    }

    .border-text {
        width: 451.01px;
        height: 3px;
        background: #000000;
        margin-bottom: 15px;
    }
    .about-slider>div>div>img{
        width: 238px;
        height: 404px;
    }
    .about-slider>div>span {
        display: inline-block;
        margin-top: 5px;
        margin-bottom: 43px;
        border-bottom: 2px solid #000000;
        max-width: 258px;
    }
    .about-slider>div>span>h1 {
        font-size: 20px;
        line-height: 20px;
    }
    .about-slider>div>span>text {
        font-size: 13px;
        margin-top: 9px;
        padding-bottom: 5px;
        margin-left: 5px;
        margin-right: 5px;
        line-height: 18px;
    }
    .aboutslidertextsee {
        font-size: 18px;
        line-height: 25px;
        width: 240px;
        height: 400px;
        padding-left: 10px;
        padding-right: 13px;
        top: -30px;
        left: 0;
    }
    .about-slider>div:hover .aboutslidertextsee {
        left: 259px;
        top: 0px;
        opacity: 0.9;
    }
    .about-slider>div:hover .aboutslidertextseeleft {
        left: -198px;
        top: 0px;
    }

    .aboutslidertextseeleft {
        font-size: 18px;
        line-height: 25px;
        width: 240px;
        height: 400px;
        padding-left: 10px;
        padding-right: 13px;
        top: -30px;
        left: 0;
    }
    .section-2 {
        flex-direction: column;
        margin-bottom: 80px;
    }
    .section-2>img {
        margin-left: 0;
        margin-right: 0;
        width: 650px;
        height: 400px;
    }
    .section-2>text {
        margin-top: 30px;       
        margin-left: 0px;
        margin-right: 32px;
    }
    .section-2>text>span:first-child {
        margin-bottom: 10px;
    }
}
@media (min-width: 650px) and (max-width:850px) {
    .about-quote {
        min-height: 150px;
    }
    .about-quote>div {
        margin-top: 40px;
        font-size: 18px;
        line-height: 25px;
        min-height: 150px;
    }  
    .about-quote>div>text>img:first-child {
        bottom: 90px;
        left: 40px;
        width: 20px;
        height: 15px;
    }
    .about-quote>div>text>img:last-child {
        top: 85px;
        width: 20px;
        height: 15px;
    } 
    .about-quote>div>text {
        padding-left: 50px;
        padding-right: 50px;
    }
    .about-quote>div>h1 {
        margin-top: 10px;
        padding-left: 60px;
    }
    .about-quote::before {
        position: absolute;
        display: block;
        left: 1px;
        top: 65px;
        z-index: 10;
    }
    .about-center {
        margin-top: 50px;
        margin-bottom: 20px;
        min-height: 280px;
    }
    .about-center > h1 {
        font-size: 40px;
        line-height: 50px;
        letter-spacing: -0.06em;
    }
    .about-center > span {
        font-size: 15px;
        line-height: 34px;
        letter-spacing: -0.08em;
    }
    .about-center > text {
        font-size: 16px;
        line-height: 30px;
        margin-right: 0px;
        margin-left: 0px;
    }    
    .about-bottom {
        font-size: 19px;
        line-height: 26px;
        color: #000000;
        padding-left: 97px;
        padding-right: 69px;
        position: relative;
    }
    .about-bottom>h1 {
        font-size: 30px;
        line-height: 45px;
        text-align: center;
        letter-spacing: 0.155em;
        color: #000000;
    }
    .border-h1 {
        width: 430px;
        height: 3px;
        background: #000000;
        margin-left: auto;
        margin-right: auto;
        margin-top: 5.5px;
    }
    .section-1>img {
        margin-left: 0;
        margin-right: 0;
        margin-top: 20px;
        margin-bottom: 15px;
        width: 460px;
        height: 280px;
    }
    .section-1>text {
        margin-bottom: 8px;
    }

    .border-text {
        width: 351.01px;
        height: 3px;
        background: #000000;
        margin-bottom: 12px;
    }
    .about-slider>div>div>img{
        width: 188px;
        height: 354px;
    }
    .about-slider>div>span {
        display: inline-block;
        margin-top: 5px;
        margin-bottom: 20px;
        border-bottom: 2px solid #000000;
        max-width: 208px;
    }
    .about-slider>div>span>h1 {
        font-size: 17px;
        line-height: 15px;
    }
    .about-slider>div>span>text {
        font-size: 13px;
        margin-top: 5px;
        padding-bottom: 5px;
        margin-left: 15px;
        margin-right: 15px;
        line-height: 16px;
    }
    .aboutslidertextsee {
        font-size: 15px;
        line-height: 20px;
        width: 178px;
        height: 344px;font-size: 18px;
        line-height: 25px;
        width: 240px;
        height: 400px;
        padding-left: 10px;
        padding-right: 13px;
        padding-left: 5px;
        padding-right: 5px;
        top: -30px;
        left: 0;
    }
    .about-slider>div:hover .aboutslidertextsee {
        left: 202px;
        top: 5px;
        opacity: 0.9;
    }
    .about-slider>div:hover .aboutslidertextseeleft {
        left: -165px;
        top: 5px;
    }

    .aboutslidertextseeleft {
        font-size: 15px;
        line-height: 20px;
        width: 178px;
        height: 344px;
        padding-left: 5px;
        padding-right: 5px;
        top: -30px;
        left: 0;
    }
    .section-2 {
        flex-direction: column;
        margin-bottom: 70px;
    }
    .section-2>img {
        margin-left: 0;
        margin-right: 0;
        width: 460px;
        height: 300px;
    }
    .section-2>text {
        margin-top: 30px;       
        margin-left: 0px;
        margin-right: 12px;
    }
    .section-2>text>span:first-child {
        margin-bottom: 8px;
    }
}
@media (min-width: 503px) and (max-width:650px) {
    .about-quote {
        min-height: 140px;
    }
    .about-quote>div {
        margin-top: 25px;
        font-size: 18px;
        line-height: 18px;
        min-height: 140px;
    }  
    .about-quote>div>text>img:first-child {
        bottom: 100px;
        left: 40px;
        width: 16px;
        height: 10px;
    }
    .about-quote>div>text>img:last-child {
        top: 100px;
        width: 16px;
        height: 10px;
    } 
    .about-quote>div>text {
        padding-left: 50px;
        padding-right: 50px;
    }
    .about-quote>div>h1 {
        margin-top: 7px;
        padding-left: 55px;
    }
    .about-quote::before {
        position: absolute;
        display: block;
        left: 1px;
        top: 47px;
        z-index: 10;
    }
    .about-center {
        margin-top: 20px;
        margin-bottom: 20px;
        min-height: 280px;
    }
    .about-center > h1 {
        font-size: 38px;
        line-height: 40px;
        letter-spacing: -0.06em;
    }
    .about-center > span {
        font-size: 13px;
        line-height: 30px;
        letter-spacing: -0.08em;
        margin-left: 30px;
        margin-right: 30px;
    }
    .about-center > text {
        font-size: 13px;
        line-height: 20px;
        margin-right: 0px;
        margin-left: 0px;
    }    
    .about-bottom {
        font-size: 13px;
        line-height: 15px;
        color: #000000;
        padding-left: 97px;
        padding-right: 69px;
        position: relative;
    }

    .about-bottom>h1 {
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        letter-spacing: 0.155em;
        color: #000000;
    }
    .border-h1 {
        width: 230px;
        height: 3px;
        background: #000000;
        margin-left: auto;
        margin-right: auto;
        margin-top: 5.5px;
    }
    .section-1>img {
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        margin-bottom: 15px;
        width: 274px;
        height: 176px;
    }
    .section-1>text {
        margin-bottom: 5px;
    }
    .section-1>text:last-child {
        display: none ;
    }
    .border-text {
        width: 301.01px;
        height: 3px;
        background: #000000;
        margin-bottom: 12px;
        display: none;
    }
    .about-slider>div>div>img{
        width: 105px;
        height: 189px;
    }
    .about-slider>div>span {
        display: inline-block;
        margin-top: 5px;
        margin-bottom: 20px;
        border-bottom: 2px solid #000000;
        max-width: 208px;
    }
    .about-slider>div>span>h1 {
        font-size: 17px;
        line-height: 15px;
        display: none;
    }
    .about-slider>div>span>text {
        font-size: 13px;
        margin-top: 5px;
        padding-bottom: 5px;
        margin-left: 15px;
        margin-right: 15px;
        line-height: 16px;
        display: none;
    }
    .aboutslidertextsee {
        font-size: 9px;
        line-height: 11px;
        width: 121px;
        height: 187px;
        padding-left: 8px;
        padding-right: 5px;
        text-align: center;
        top: -30px;
        left: 0;
    }
    .about-slider>div:hover .aboutslidertextsee {
        left: 142px;
        top: 0px;
        opacity: 0.9;
    }
    .about-slider>div:hover .aboutslidertextseeleft {
        left: -85px;
        top: 0px;
    }
    .aboutslidertextseeleft {
        font-size: 9px;
        line-height: 11px;
        width: 121px;
        height: 187px;
        padding-left: 8px;
        padding-right: 5px;
        text-align: center;
        top: -30px;
        left: 0;
    }
    .section-2 {
        flex-direction: column;
        margin-bottom: 0px;
    }
    .section-2>img {
        margin-left: auto;
        margin-right: auto;
        width: 164px;
        height: 280px;
    }
    .section-2>text {
        margin-top: 30px;       
        margin-left: 0px;
        margin-right: 12px;
    }
    .section-2>text>span:first-child {
        margin-bottom: 8px;
    }
    .about-img-top {
        width: 300px;
        height: 400px;
    }
}
@media (min-width: 300px) and (max-width:503px) {
    .about-quote {
        min-height: 127px;
    }
    .about-quote>div {
        margin-top: 10px;
        font-size: 18px;
        line-height: 18px;
        min-height: 137px;
        text-align: center;
    }  
    .about-quote>div>text>img:first-child {
        display: none;

    }
    .about-quote>div>text>img:last-child {
        display: none;
    } 
    .about-quote>div>text {
        padding-left: 20px;
        padding-right: 20px;
        letter-spacing: -0.08em;
    }
    .about-quote>div>h1 {
        margin-top: 8px;
        margin-bottom: 8px;
        padding-left: 0px;
    }
    .about-quote::before {
        position: absolute;
        display: block;
        left: 1px;
        top: 130px;
        z-index: 10;
        content: url("../assets/img/about/about-img-top-small.png");
    }
    .about-center {
        margin-top: 20px;
        margin-bottom: 20px;
        min-height: 280px;
    }
    .about-center > h1 {
        font-size: 20px;
        line-height: 26px;
        letter-spacing: -0.06em;
        text-transform: uppercase;
    }
    .about-center > span {
        font-size: 14px;
        line-height: 27px;
        letter-spacing: -0.08em;
        margin-left: 11px;
        margin-right: 1px;
        text-align: center;
    }
    .about-center > text {
        font-size: 13px;
        line-height: 20px;
        margin-right: 0px;
        margin-left: 0px;
        text-align: center;
        margin-top: 15px;
        display: block;
    }    
    .about-bottom {
        font-size: 13px;
        line-height: 15px;
        color: #000000;
        padding-left: 33px;
        padding-right: 33px;
        position: relative;
    }

    .about-bottom>h1 {
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        letter-spacing: 0.150em;
        color: #000000;
    }
    .border-h1 {
        width: 252px;
        height: 3px;
        background: #000000;
        margin-left: auto;
        margin-right: auto;
        margin-top: 5.5px;
    }
    .section-1>img {
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        margin-bottom: 15px;
        width: 274px;
        height: 176px;
    }
    .section-1>text {
        margin-bottom: 5px;
        text-align: center;
    }
    .section-1>text:last-child {
        display: none ;
    }
    .border-text {
        width: 301.01px;
        height: 3px;
        background: #000000;
        margin-bottom: 12px;
        display: none;
    }
    .about-slider>div>div>img{
        width: 105px;
        height: 189px;
    }
    .about-slider>div>span {
        display: inline-block;
        margin-top: 5px;
        margin-bottom: 20px;
        border-bottom: 2px solid #000000;
        max-width: 208px;
    }
    .about-slider>div>span>h1 {
        font-size: 17px;
        line-height: 15px;
        display: none;
    }
    .about-slider>div>span>text {
        font-size: 13px;
        margin-top: 5px;
        padding-bottom: 5px;
        margin-left: 15px;
        margin-right: 15px;
        line-height: 16px;
        display: none;
    }
    .aboutslidertextsee {
        font-size: 9px;
        line-height: 11px;
        width: 121px;
        height: 187px;
        padding-left: 8px;
        padding-right: 5px;
        text-align: center;
        top: -30px;
        left: 0;
    }
    .about-slider>div:hover .aboutslidertextsee {
        left: 117px;
        top: 0px;
        opacity: 0.9;
    }
    .about-slider>div:hover .aboutslidertextseeleft {
        left: -105px;
        top: 0px;
    }
    .aboutslidertextseeleft {
        font-size: 9px;
        line-height: 11px;
        width: 121px;
        height: 187px;
        padding-left: 8px;
        padding-right: 5px;
        text-align: center;
        top: -30px;
        left: 0;
    }
    .section-2 {
        flex-direction: column;
        margin-bottom: 0px;
    }
    .section-2>img {
        margin-left: auto;
        margin-right: auto;
        width: 164px;
        height: 280px;
        margin-top: 15px;
        margin-bottom: 0px;
    }
    .section-2>text {
        margin-top: 10px;       
        margin-left: 0px;
        margin-right: 12px;
        text-align: center;
    }
    .section-2>text>span:first-child {
        margin-bottom: 8px;
        display: none;
    }
    .about-img-top {
        top: -45px;
        width: 280px;
        height: 311px;
    }
}
</style>
