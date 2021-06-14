<template>
    <div class="gallery">
        <img
            class="gallery-img-before"
            src="../assets/img/gallery/gallery-before.png"
            alt=""
        />
        <text class="gallery-title">
            Gravida nascetur ac sit mi. Tellus felis nulla elementum
            platea.Gravida nascetur ac sit mi. Tellus felis nulla elementum
            platea
        </text>

        <div class="slider">
            <button @click="handleCarousel(-1)" :disabled="BtnDisabled">
                <img src="../assets/img/gallery/slider-left.png" alt="" />
            </button>
            <div ref="slider" class="img-slider">
                <div class="" v-for="slide in sliders" :key="slide.index">
                    <img :src="slide.img" alt="" />
                    <h1 class="slider-text-rotate">{{ slide.text }}</h1>
                </div>
            </div>

            <button @click="handleCarousel(1)" :disabled="BtnDisabled">
                <img src="../assets/img/gallery/slider-right.png" alt="" />
            </button>
        </div>
        <text class="text">
            Turpis consequat ut in est quis nunc. Eu tristique urna pellentesque
            odio sit feugiat lorem sed. Arcu adipiscing eget integer orci
            ullamcorper tortor. Suspendisse vitae massa pretium eget eleifend
            aliquam. Feugiat amet enim fermentum pharetra netus amet. Non nunc
            suspendisse bibendum quis. Consequat nulla ultricies posuere at
            condimentum sed. Sit tincidunt ultrices lectus ipsum mattis. Cras
            quis ut tempor iaculis enim mattis nisl accumsan, odio. Nulla sed
            quis ultrices sed ut. Aliquam eget auctor in in nullam amet sit
            cursus. Tristique diam arcu purus vel, risus habitasse. Malesuada
            pellentesque velit sapien neque, odio sapien sociis. Neque, varius
            justo ultrices dolor vitae, enim. Elit diam eget platea volutpat sed
            cursus mauris. Netus ornare.
        </text>
        <img class="before" src="../assets/img/gallery/before.png" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            BtnDisabled: false,
            sliders: [
                {
                    img: require('../assets/img/gallery/slider-1.png'),
                    text: '',
                },
                {
                    img: require('../assets/img/gallery/slider-2.png'),
                    text: '',
                },
                {
                    img: require('../assets/img/gallery/slider-3.png'),
                    text: '',
                },
                {
                    img: require('../assets/img/gallery/slider-4.png'),
                    text: '',
                },
            ],
        };
    },
    mounted() {
        this.addCarouselElems();
    },
    methods: {
        test() {
            this.sliders = this.sliders.concat(this.sliders);
        },
        addCarouselElems() {
            this.sliders = this.sliders.concat(this.sliders);
            // this.sliders = this.sliders.concat(this.sliders);
        },

        handleCarousel(dir) {
            this.$refs.slider.scrollBy({ left: 100 * dir });
            this.BtnDisabled = true;
            setTimeout(() => {
                // this.test()
                this.BtnDisabled = false;
            }, 400);
            if (this.$refs.slider.scrollLeft == 0) {
                console.log(this.$refs.slider.scrollWidth);
                this.$refs.slider.scrollBy({
                    left: this.$refs.slider.scrollWidth,
                });
            }
            // if (dir == -1) {
            //     this.$refs.slider.scrollBy({
            //         right: this.$refs.slider.scrollWidth,
            //     });
            // }
        },
    },
};
</script>
<style scoped>
::-webkit-scrollbar {
    width: 0;
}
.gallery {
    background-color: #bba773;
    width: 100%;
    height: 2200px;
    margin-left: auto;
    margin-right: auto;
}
.gallery-img-before {
    position: relative;
    top: -50px;
    z-index: 30;
    width: 100%;
}

.gallery-title {
    display: block;
    max-width: 1145px;
    font-family: 'Oswald Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 44px;
    line-height: 65px;
    text-align: center;
    color: #000000;
    margin-left: auto;
    margin-right: auto;
}

.img-slider {
    display: flex;
    overflow-x: scroll;
    margin-top: 131px;
    align-items: center;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
}
.img-slider > div {
    margin-right: 48px;
    margin-top: 40px;
    scroll-snap-align: start;
}

.imgLeftSlider {
    /*анимация для слайдера при нажатие на кнопку влево */
    width: 100%;
    animation-duration: 1s;
    animation-name: imgleftslider;
    animation-fill-mode: forwards;
}
@keyframes imgleftslider {
    0% {
        width: 100%;
        margin-right: 94px;
    }

    100% {
        width: 0%;
        margin-right: 0px;
    }
}
.imgRightSlider {
    /*анимация для слайдера при нажатие на кнопку вправо */
    width: 0%;
    margin-left: 0px;
    animation-duration: 5s;
    animation-name: imgrightslider;
    animation-fill-mode: forwards;
    display: block;
}
@keyframes imgrightslider {
    0% {
        width: 0%;
    }

    100% {
        width: 100%;
    }
}

.slider > button {
    position: absolute;
    height: 200px;
    width: 112px;
    background: rgba(142, 142, 142, 0.4);
    border-radius: 28px;
    display: flex;
    top: 1000px;
    align-items: center;
    justify-content: center;
}

.slider > button:first-child {
    left: 0;
}
.slider > button:last-child {
    right: 0;
}
.img-slider > div > h1 {
    font-family: 'Montserrat Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 46, 32px;
    color: #3f3502;
    text-align: center;
    margin-top: 5px;
    position: relative;
}
.slider-text-rotate {
    position: absolute;
    transform: rotate(-90deg);
    white-space: pre;
    top: -210px;
    left: 204px;
}
.text {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 54px;
    max-width: 1456px;
    font-family: 'Montserrat Regular';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 37px;
    color: #000000;
}
.before {
    position: absolute;
    bottom: -1500px;
}
@media (min-width: 1200px) and (max-width: 1500px) {
    .gallery {
        background-color: #bba773;
        width: 100%;
        height: 2100px;
        margin-left: auto;
        margin-right: auto;
    }
    .gallery-title {
        max-width: 1045px;
        font-size: 40px;
        line-height: 55px;
        bottom: -1500px;
    }
    .slider > button {
        height: 190px;
        width: 102px;
        border-radius: 28px;
        top: 950px;
    }
    .img-slider > div {
        margin-right: 40px;
        margin-top: 0px;
    }
    .img-slider > div > img {
    }
    .text {
        margin-top: 30px;
        max-width: 1056px;
        font-family: 'Montserrat Regular';
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 35px;
        color: #000000;
    }
    .before {
        width: 90%;
        height: 90%;
        bottom: -1400px;
    }
}
@media (min-width: 900px) and (max-width: 1200px) {
    .gallery {
        background-color: #bba773;
        width: 100%;
        height: 1500px;
        margin-left: auto;
        margin-right: auto;
    }
    .gallery-title {
        max-width: 845px;
        font-size: 35px;
        line-height: 50px;
    }
    .slider > button {
        height: 180px;
        width: 92px;
        border-radius: 28px;
        top: 800px;
        display: none;
    }
    .slider > button > img {
        width: 80%;
        height: 80%;
    }
    .img-slider > div {
        margin-right: 40px;
        margin-top: 0px;
    }
    .img-slider > div > img {
        width: 220%;
        padding-right: 130px;
    }
    .text {
        margin-top: 30px;
        max-width: 856px;
        font-family: 'Montserrat Regular';
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 32px;
        color: #000000;
    }
    .before {
        width: 80%;
        height: 80%;
        bottom: -1000px;
    }
}
@media (min-width: 600px) and (max-width: 900px) {
    .gallery {
        background-color: #bba773;
        width: 100%;
        height: 1000px;
        margin-left: auto;
        margin-right: auto;
    }
    .gallery-title {
        max-width: 645px;
        font-size: 35px;
        line-height: 50px;
    }
    .slider > button {
        height: 130px;
        width: 72px;
        border-radius: 28px;
        top: 650px;
        display: none;
    }
    .slider > button > img {
        width: 50%;
        height: 50%;
    }
    .img-slider > div {
        margin-right: 40px;
        margin-top: 0px;
    }
    .img-slider > div > img {
        width: 220%;
        padding-right: 130px;
    }
    .text {
        margin-top: 0px;
        max-width: 556px;
        font-family: 'Montserrat Regular';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        color: #000000;
    }
    .before {
        width: 40%;
        height: 40%;
        bottom: -300px;
        left: 150px;
    }
}
@media (min-width: 400px) and (max-width: 600px) {
    .gallery {
        background-color: #bba773;
        width: 100%;
        height: 650px;
        margin-left: auto;
        margin-right: auto;
    }

    .gallery-title {
        max-width: 395px;
        font-size: 15px;
        line-height: 22px;
    }
    .slider > button {
        height: 130px;
        width: 72px;
        border-radius: 28px;
        top: 650px;
        display: none;
    }
    .slider > button > img {
        width: 50%;
        height: 50%;
    }
    .img-slider {
        margin-top: 20px;
    }
    .img-slider > div {
        margin-right: 40px;
        margin-top: 0px;
    }
    .img-slider > div > img {
        width: 220%;
        padding-right: 150px;
    }
    .text {
        margin-top: 0px;
        max-width: 386px;
        font-family: 'Montserrat Regular';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 22px;
        color: #000000;
    }
    .before {
        width: 30%;
        height: 30%;
        bottom: 150px;
        left: 100px;
    }
    .gallery-img-before {
        top: -20px;
    }
}
</style>
