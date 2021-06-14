<template>
    <div class="header">
        <div :class="{ blackfon: ActiveCard }"></div>
        <div class="header-top">
            <div class="header-top-left">
                <div class="header-top-left-left">
                    <img src="../assets/img/header/header-logo.png" alt="" />
                    <div>
                        <h1>Silk</h1>
                        <h2>Road</h2>
                        <h3>Media</h3>
                    </div>
                </div>

                <div class="header-top-left-right">
                    <local-switcher />
                    <h1>{{ $t('Header.title') }}</h1>
                </div>
            </div>

            <div class="header-top-right-right">
                <h1>
                    <span>{{ $t('Header.phone') }}</span> +998900020243
                </h1>
                <button v-on:click="openCard">
                    <img src="../assets/img/header/header-shop.png" alt="" />
                </button>
            </div>
        </div>
        <nav class="header-nav">
            <button v-on:click="leftNav" :disabled="BtnNone">
                <img src="../assets/img/header/nav-left.png" alt="" />
            </button>

            <div class="header-slider " ref="headerslider">
                <router-link
                    ref="catalog"
                    :to="{ name: 'Catalog' }"
                    @click.prevent="leftNav"
                >
                    {{ $t('Nav.Catalog') }}
                </router-link>

                <router-link ref="main" :to="{ name: 'Main' }">
                    {{ $t('Nav.Main') }}
                </router-link>

                <router-link
                    ref="about"
                    :to="{ name: 'About' }"
                    class="problem-nav"
                >
                    {{ $t('Nav.About') }}
                </router-link>

                <router-link ref="gallery" :to="{ name: 'Gallery' }">
                    {{ $t('Nav.Gallery') }}
                </router-link>
            </div>

            <button v-on:click="rightNav" :disabled="BtnNone">
                <img src="../assets/img/header/nav-right.png" alt="" />
            </button>
        </nav>

        <div
            id="basket"
            class="basket none"
            :class="{ basketon: ActiveCard, basketoff: !ActiveCard }"
        >
            <span>
                <h1>{{ $t('Card.title') }}</h1>
                <img
                    v-on:click="closeCard"
                    class="basket-close"
                    src="../assets/img/header/basket-close.png"
                    alt=""
                />
            </span>

            <div class="basket-put">
                <div
                    class="basket-card"
                    v-for="card in cards"
                    :key="card.index"
                >
                    <img
                        v-on:click="ActiveCard = false"
                        src="../assets/img/header/select-img.png"
                        alt=""
                    />
                    <div>
                        <h1>{{ card.title }}</h1>
                        <ul class="card-about">
                            <li>
                                <h1>{{ $t('Card.who') }}</h1>
                                <h2>{{ card.avtor }}</h2>
                            </li>
                            <li>
                                <h1>{{ $t('Card.tovar') }}</h1>
                                <h2>2 шт.</h2>
                            </li>
                        </ul>
                        <div class="card-btn">
                            <button>
                                <img src="../assets/img/header/-.png" alt="" />
                            </button>
                            <h1>2</h1>
                            <button>
                                <img src="../assets/img/header/+.png" alt="" />
                            </button>
                        </div>
                        <span class="card-price">
                            <h1>{{ $t('Card.price') }}</h1>
                            <h2>{{ card.price }}</h2>
                        </span>
                        <button class="basket-delete">
                            <img src="../assets/img/header/delete.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <button class="btn-sell">
                Оплатить
            </button>
        </div>
    </div>
</template>
<script>
import LocalSwitcher from './LocalSwitcher.vue';
export default {
    name: 'Header',
    data() {
        return {
            ActiveCard: false,
            BtnNone: false,
            cards: [
                {
                    id: '0',
                    img: '../assets/img/catalog/card-img-1.png',
                    title: 'Собрание государственной Третьяковской галереи',
                    avtor: 'Фирдавс Абдухалликов',
                    price: '1.500.000',
                },
                {
                    id: '0',
                    img: '../assets/img/catalog/card-img-1.png',
                    title: 'Собрание государственной Третьяковской галереи',
                    avtor: 'Фирдавс Абдухалликов',
                    price: '1.500.000',
                },
                {
                    id: '0',
                    img: '../assets/img/catalog/card-img-1.png',
                    title: 'Собрание государственной Третьяковской галереи',
                    avtor: 'Фирдавс Абдухалликов',
                    price: '1.500.000',
                },
                {
                    id: '0',
                    img: '../assets/img/catalog/card-img-1.png',
                    title: 'Собрание государственной Третьяковской галереи',
                    avtor: 'Фирдавс Абдухалликов',
                    price: '1.500.000',
                },

                {
                    id: '0',
                    img: '../assets/img/catalog/card-img-1.png',
                    title: 'Собрание государственной Третьяковской галереи',
                    avtor: 'Фирдавс Абдухалликов',
                    price: '1.500.000',
                },
            ],
        };
    },
    watch: {
        $route(to) {
            console.log(to);
        },
    },
    components: {
        LocalSwitcher,
    },
    methods: {
        getUnits: function() {
            console.log(this.$route);
            let url_full = window.location.href.split('/');
            let url = url_full[url_full.length - 1];
            setTimeout(() => {
                let i = 0;
                if (url == 'detailpage') {
                    console.log('fsdf');
                } else if (url == 'about' && i == 0) {
                    i++;
                    this.rightAlterNav();
                } else {
                    this.$router.push({ name: 'Main' });
                    console.log(window.location.href);
                }
            }, 100);
        },
        openCard() {
            this.ActiveCard = true;
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            document.getElementById('basket').style.display = 'block';
        },
        closeCard() {
            this.ActiveCard = false;
            document.getElementsByTagName('body')[0].style.overflow = 'visible';
        },
        rightAlterNav() {
            let slider = this.$refs.headerslider;
            slider.appendChild(slider.children[0]);
        },
        rightNav() {
            let slider = this.$refs.headerslider;
            let url_full = slider.children[2].href.split('/');
            let url = url_full[url_full.length - 1];
            url = url[0].toUpperCase() + url.substring(1);

            slider.children[1].classList.add('navAnim1');
            slider.children[2].classList.add('navAnim2');
            this.BtnNone = true;
            setTimeout(() => {
                slider.children[1].classList.remove('navAnim1');
                slider.children[2].classList.remove('navAnim2');
                this.$router.push({ name: url });
                slider.appendChild(slider.children[0]);
                setTimeout(() => {
                    this.BtnNone = false;
                }, 100);
            }, 750);
        },
        leftNav() {
            let slider = this.$refs.headerslider;
            let url_full = slider.children[0].href.split('/');
            let url = url_full[url_full.length - 1];
            url = url[0].toUpperCase() + url.substring(1);

            slider.children[0].classList.add('navAnim1');
            slider.children[1].classList.add('navAnim2');
            this.BtnNone = true;
            setTimeout(() => {
                slider.children[0].classList.remove('navAnim1');
                slider.children[1].classList.remove('navAnim2');
                this.$router.push({ name: url });

                slider.insertBefore(
                    slider.children[slider.children.length - 1],
                    slider.children[0]
                );
                setTimeout(() => {
                    this.BtnNone = false;
                }, 100);
            }, 750);
        },
    },
};
</script>
<style scoped>
.none {
    display: none;
}
.header {
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    background: #bba773;
    z-index: -200;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
}
.blackfon {
    position: absolute;
    width: 100%;
    height: 3000px;
    left: 0;
    top: 0;
    backdrop-filter: blur(4);
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 120;
    transition: background-color 0.5s, transform 0.5s;
}
.header-top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}
.header-top-left {
    display: flex;
    align-items: center;
    margin-top: 21px;
    margin-left: 55px;
}

/*header-top-left-left */

.header-top-left-left {
    display: flex;
}
.header-top-left-left > img {
    width: 114px;
    height: 113.06px;
}
.header-top-left-left > div {
    font-family: 'Krona One Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    letter-spacing: 0.1em;
    color: #ffffff;
}
.header-top-left-left > div > h2 {
    margin-left: 21px;
    margin-top: 5px;
}
.header-top-left-left > div > h3 {
    margin-left: 51px;
    margin-top: 5px;
}

/*header-top-left-right */

.header-top-left-right {
    display: flex;
    flex-direction: column;
    height: 93px;
    border-left: 4px solid #000000;
    margin-left: 30px;
    margin-bottom: 10px;
    position: relative;
}
.header-top-left-right > select {
    width: 50px;
    height: 16px;
    margin-left: 14px;
    font-family: 'PT Mono Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 17px;
    color: #000000;
    text-transform: uppercase;
    position: relative;
    margin-top: 15px;
}
.header-top-left-right::after {
    content: url('../assets/img/header/select.png');
    position: absolute;
    z-index: 100;
    width: 8px;
    height: 7px;
    left: 45px;
    color: black;
    top: 14px;
}
.header-top-left-right:before {
    position: absolute;
    content: '';
    width: 29px;
    height: 2px;
    background-color: #000000;
    top: 32px;
    left: 15px;
}

.header-top-left-right > h1 {
    font-family: 'Oswald Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    color: #000000;
    padding-left: 14px;
}
.header-top-right-right {
    display: flex;
    margin-right: 75px;
}
.header-top-right-right > button > img {
    width: 60px;
    height: 60px;
    background-color: #bba773;
}
.header-top-right-right > h1 {
    font-family: 'Oswald Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
    color: #000000;
    border: 3px solid #453220;
    padding-top: 3px;
    padding-left: 7px;
    padding-right: 4px;
    margin-right: 34px;
    margin-top: 9px;
}

/*nav*/

.header-nav {
    margin-left: auto;
    margin-right: auto;
    margin-top: 64px;
    margin-bottom: 147px;
    display: flex;
    align-items: center;
    position: relative;
}
.header-slider {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header-nav > div > a {
    position: relative;
    display: block;
    font-family: 'PT Mono Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    color: rgba(0, 0, 0, 0.8);
    margin-right: 50px;
    text-align: center;
    margin-left: 17px;
    margin-right: 17px;
    z-index: 100;
}
.header-nav > div > a:nth-child(2) {
    position: relative;
    font-size: 50px;
    color: #000000;
    z-index: 100;
    position: relative;
    display: flex;
    justify-content: center;
}

.navAnim1 {
    /*анимация для nav */
    animation-name: navAnim1;
    animation-duration: 1s;
}
@keyframes navAnim1 {
    0% {
        right: 0px;
    }
    50% {
        right: 40px;
    }
    100% {
        right: -300px;
    }
}
.navAnim2 {
    animation-name: navAnim2;
    animation-duration: 1s;
}
@keyframes navAnim2 {
    0% {
        left: 0px;
    }
    50% {
        left: 50px;
    }
    100% {
        left: -300px;
    }
}

.header-nav > div > a:last-child {
    display: none;
}

.header-nav > button {
    width: 46px;
    height: 36px;
    margin-left: 15px;
    margin-right: 15px;
    background: inherit;
}
.header-nav > button:last-child > img {
    float: right;
}

.header-slider > a:nth-child(2):after {
    /*выделенный ссылка */
    position: absolute;
    content: '';
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    background-color: #572121;
    opacity: 0.68;
    width: 154px;
    height: 142px;
    top: -40px;
    z-index: -200;
}

/*basket */
.basket {
    position: absolute;
    width: 888px;
    background: #d7d3bb;
    background-blend-mode: color-burn;
    border-radius: 51px;
    z-index: 230 !important;
    margin-top: 20px;
}
.basketon {
    /*анимация при нажатие на корзину */
    opacity: 0;
    animation-name: basketOn;
    animation-fill-mode: forwards;
    animation-duration: 0.6s;
}
@keyframes basketOn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
        display: none;
    }
}
.basketoff {
    /*анимация при закрытие корзины */
    opacity: 1;
    animation-name: basketOff;
    animation-fill-mode: forwards;
    animation-duration: 0.35s;
}
@keyframes basketOff {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        display: none;
    }
}

.basket > span {
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
    justify-content: center;
}
.basket > span > h1 {
    font-family: 'Montserrat Bold';
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 44px;
    color: #3a3a3a;
    text-align: center;
    margin-left: 316px;
}
.basket > span > img {
    width: 32.46px;
    height: 32.46px;
    margin-left: auto;
    margin-right: 30px;
}
.basket-put {
    margin-left: auto;
    margin-right: auto;
    max-height: 789px;
    overflow-y: scroll;
    margin-right: 27px;
    margin-bottom: 12px;
}
/* полоса прокрутки (скроллбар) */
::-webkit-scrollbar {
    width: 3px; /* ширина для вертикального скролла */
    background-color: #d7d3bb;
}

/* ползунок скроллбара */
::-webkit-scrollbar-thumb {
    background-color: #48433a;
}

::-webkit-scrollb20pxar-thumb:hover {
    background-color: #253861;
}

/* Стрелки */

::-webkit-scrollbar-button:vertical:start:decrement {
    display: none;
}

::-webkit-scrollbar-button:vertical:end:increment {
    display: none;
}
.header-slider > a {
    pointer-events: all;
}
.basket-put > div {
    height: 253px;
    width: 742px;
    background: #f2f2f2;
    border-radius: 9px;
    display: flex;
    margin-bottom: 12px;
    position: relative;
    margin-left: 68px;
}

.basket-card > img {
    width: 167px;
    height: 212px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 30px;
}
.basket-card > div > h1 {
    font-family: 'Montserrat SemiBold';
    font-style: normal;
    font-weight: 600;
    font-size: 23px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.06em;
    color: #000000;
    padding-left: 104px;
    padding-right: 99px;
    margin-top: 15px;
    margin-bottom: 13px;
}
.card-about > li {
    display: flex;
    font-family: 'Montserrat Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.06em;
    margin-left: 51px;
}
.card-about > li > h1 {
    color: #8f5c2c;
    margin-right: 20px;
    margin-bottom: 5px;
}

.card-btn {
    display: flex;
    margin-top: 12px;
    margin-left: 73px;
    height: 29px;
}
.card-btn > button {
    border: 1px solid #000000;
    box-sizing: border-box;
    width: 33px;
}
.card-btn > button > img {
    margin: auto;
}
.card-btn > h1 {
    font-family: 'Montserrat Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: -0.06em;
    color: #000000;
    width: 43px;
    border-bottom: 1px solid #000000;
    margin-left: 25px;
    margin-right: 25px;
}
.card-price {
    display: flex;
    font-family: 'Montserrat Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 29px;
    line-height: 35px;
    letter-spacing: -0.06em;
    color: #854c0a;
    margin-top: 24px;
    margin-right: 78px;
    justify-content: flex-end;
}
.card-price > h2 {
    color: #000000;
    margin-left: 20px;
}
.basket-delete {
    position: absolute;
    bottom: 10px;
    right: 10px;
}
.btn-sell {
    margin-left: auto;
    margin-right: auto;
    display: block;
    background: #10358a;
    border-radius: 21px;
    font-family: 'Oswald Bold';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 38px;
    color: #ececec;
    padding: 5px 70px;
    margin-bottom: 17px;
}

@media (min-width: 1100px) and (max-width: 1300px) {
    .header-top-left {
        margin-left: 25px;
    }
    .header-top-right-right {
        margin-right: 25px;
    }
    .header-top-right-right > h1 {
        margin-right: 25px;
    }
    .header-nav > div > a {
        font-size: 35px;
    }
    .header-nav > div > a:nth-child(2) {
        font-size: 45px;
    }
    .header-slider > a:nth-child(2):after {
        width: 137px;
        height: 131px;
        top: -35px;
    }

    @keyframes navAnim1 {
        0% {
            right: 0px;
        }
        50% {
            right: 30px;
        }
        100% {
            right: -250px;
        }
    }
    @keyframes navAnim2 {
        0% {
            left: 0px;
        }
        50% {
            left: 40px;
        }
        100% {
            left: -250px;
        }
    }
}

@media (min-width: 880px) and (max-width: 1100px) {
    .header-top-left {
        margin-left: 20px;
    }
    .header-top-right-right {
        margin-right: 20px;
    }
    .header-top-right-right > h1 {
        margin-right: 25px;
    }
    .header-top-left-left > img {
        width: 90px;
        height: 90px;
    }
    .header-top-left-left > div {
        font-size: 20px;
    }
    .header-top-left-left > div > h2 {
        margin-left: 17px;
        margin-top: 3px;
    }
    .header-top-left-left > div > h3 {
        margin-left: 35px;
        margin-top: 3px;
    }
    .header-top-left-right {
        margin-left: 20px;
        border-left: 3px solid #000000;
        height: auto;
    }
    .header-top-left-right > h1 {
        padding-left: 10px;
        font-size: 30px;
    }
    .header-top-left-right > select {
        margin-left: 10px;
    }
    .header-top-left-right::before {
        left: 11px;
    }
    .header-top-right-right > h1 {
        margin-right: 20px;
        font-size: 20px;
        border: 3px solid #453220;
        padding-top: 0px;
        padding-left: 5px;
        padding-right: 5px;
        margin-top: 18px;
    }
    .header-top-right-right > button {
        width: 40px;
        height: 40px;
        margin-top: 18px;
    }
    .header-top-right-right > button > img {
        width: 40px;
        height: 40px;
    }
    .header-nav {
        margin-top: 50px;
        margin-bottom: 90px;
    }
    .header-nav > div > a {
        font-size: 30px;
        margin-left: 12px;
        margin-right: 12px;
    }
    .header-nav > div > a:nth-child(2) {
        font-size: 40px;
    }
    .header-slider > a:nth-child(2):after {
        width: 115px;
        height: 110px;
        top: -30px;
    }
    .header-nav > button {
        margin-left: 5px;
        margin-right: 5px;
    }
    .header-nav > button > img {
        width: 40px;
        height: 30px;
    }
    .basket > span {
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .basket > span > img {
        margin-top: 5px;
        margin-right: 20px;
    }
    @keyframes navAnim1 {
        0% {
            right: 0px;
        }
        50% {
            right: 20px;
        }
        100% {
            right: -200px;
        }
    }
    @keyframes navAnim2 {
        0% {
            left: 0px;
        }
        50% {
            left: 30px;
        }
        100% {
            left: -200px;
        }
    }
}
@media (min-width: 740px) and (max-width: 880px) {
    .header-top-left {
        margin-left: 15px;
    }
    .header-top-right-right {
        margin-right: 15px;
    }
    .header-top-right-right > h1 {
        margin-right: 20px;
    }
    .header-top-left-left > img {
        width: 70px;
        height: 70px;
    }
    .header-top-left-left > div {
        font-size: 17px;
    }
    .header-top-left-left > div > h2 {
        margin-left: 14px;
        margin-top: 2px;
    }
    .header-top-left-left > div > h3 {
        margin-left: 27px;
        margin-top: 2px;
    }
    .header-top-left-right {
        margin-left: 15px;
        border-left: 3px solid #000000;
        height: auto;
        margin-bottom: 5px;
    }
    .header-top-left-right > h1 {
        padding-left: 8px;
        font-size: 25px;
    }
    .header-top-left-right > select {
        margin-left: 8px;
        font-size: 13px;
        margin-top: 10px;
    }

    .header-top-left-right::before {
        left: 9px;
        width: 23px;
        height: 2px;
        top: 27px;
    }
    .header-top-left-right::after {
        left: 37px;
        top: 8px;
    }
    .header-top-right-right > h1 {
        font-size: 17px;
        border: 2px solid #453220;
        padding-top: 0px;
        padding-left: 3px;
        padding-right: 3px;
        margin-top: 29px;
        margin-right: 15px;
        line-height: 25px;
    }
    .header-top-right-right > button {
        width: 30px;
        height: 30px;
        margin-top: 27px;
    }
    .header-top-right-right > button > img {
        width: 30px;
        height: 30px;
    }
    .header-nav {
        margin-top: 40px;
        margin-bottom: 80px;
    }
    .header-nav > div > a {
        font-size: 25px;
        margin-left: 8px;
        margin-right: 8px;
    }
    .header-nav > div > a:nth-child(2) {
        font-size: 35px;
    }
    .header-slider > a:nth-child(2):after {
        width: 95px;
        height: 95px;
        top: -24px;
    }
    .header-nav > button {
        margin-left: 3px;
        margin-right: 3px;
    }
    .header-nav > button > img {
        width: 32px;
        height: 23px;
    }
    @keyframes navAnim1 {
        0% {
            right: 0px;
        }
        50% {
            right: 10px;
        }
        100% {
            right: -150px;
        }
    }
    @keyframes navAnim2 {
        0% {
            left: 0px;
        }
        50% {
            left: 20px;
        }
        100% {
            left: -150px;
        }
    }
}
@media (min-width: 540px) and (max-width: 740px) {
    .header-top-left {
        margin-left: 10px;
    }
    .header-top-right-right {
        margin-right: 10px;
    }
    .header-top-right-right > h1 {
        margin-right: 15px;
    }
    .header-top-left-left > img {
        width: 55px;
        height: 55px;
    }
    .header-top-left-left > div {
        font-size: 13px;
    }
    .header-top-left-left > div > h2 {
        margin-left: 10px;
        margin-top: 1px;
    }
    .header-top-left-left > div > h3 {
        margin-left: 21px;
        margin-top: 1px;
    }
    .header-top-left-right {
        margin-left: 7px;
        border-left: 2px solid #000000;
        height: auto;
        margin-bottom: 2px;
    }
    .header-top-left-right > h1 {
        padding-left: 5px;
        font-size: 19px;
    }
    .header-top-left-right > select {
        margin-left: 5px;
        font-size: 12px;
        margin-top: 7px;
    }
    .header-top-left-right::before {
        left: 6px;
        width: 21px;
        height: 2px;
        top: 23px;
    }
    .header-top-left-right::after {
        left: 33px;
        top: 6px;
    }
    .header-top-right-right > h1 {
        font-size: 14px;
        border: 2px solid #453220;
        padding-top: 0px;
        padding-left: 3px;
        padding-right: 3px;
        margin-top: 32px;
        margin-right: 10px;
        line-height: 20px;
    }
    .header-top-right-right > button {
        width: 25px;
        height: 25px;
        margin-top: 31px;
    }
    .header-top-right-right > button > img {
        width: 25px;
        height: 25px;
    }
    .header-nav {
        margin-top: 40px;
        margin-bottom: 80px;
    }
    .header-nav > div > a {
        font-size: 23px;
        margin-left: 7px;
        margin-right: 7px;
    }
    .header-nav > div > a:nth-child(2) {
        font-size: 30px;
    }
    .header-slider > a:nth-child(2):after {
        width: 87px;
        height: 87px;
        top: -24px;
    }
    .header-nav > button {
        margin-left: 0px;
        margin-right: 0px;
    }
    .header-nav > button > img {
        width: 25px;
        height: 26px;
    }
    @keyframes navAnim1 {
        0% {
            right: 0px;
        }
        50% {
            right: 10px;
        }
        100% {
            right: -100px;
        }
    }
    @keyframes navAnim2 {
        0% {
            left: 0px;
        }
        50% {
            left: 20px;
        }
        100% {
            left: -150px;
        }
    }
}
@media (min-width: 300px) and (max-width: 540px) {
    .header-top-left {
        margin-left: 6px;
    }
    .header-top-right-right {
        margin-right: 6px;
    }
    .header-top-right-right > h1 {
        margin-right: 15px;
    }
    .header-top-left-left > img {
        width: 37px;
        height: 38px;
        margin-top: 8px;
    }
    .header-top-left-left > div {
        font-size: 11px;
    }
    .header-top-left-left > div > h2 {
        margin-left: 8px;
        margin-top: 1px;
    }
    .header-top-left-left > div > h3 {
        margin-left: 17px;
        margin-top: 1px;
    }
    .header-top-left-right {
        margin-left: 3px;
        border-left: 2px solid #000000;
        height: auto;
        margin-bottom: 2px;
    }
    .header-top-left-right > h1 {
        padding-left: 2px;
        font-size: 16px;
        line-height: 24px;
    }
    .header-top-left-right > select {
        margin-left: 2px;
        font-size: 7px;
        margin-top: 4px;
        padding-top: 5px;
    }
    .header-top-left-right::before {
        left: 3px;
        width: 13px;
        height: 1px;
        top: 21px;
    }
    .header-top-left-right::after {
        left: 17px;
        top: 4px;
        content: url('../assets/img/header/select-img-small.png');
    }
    .header-top-right-right > h1 {
        font-size: 12px;
        border: 1px solid #453220;
        padding-top: 0px;
        padding-left: 3px;
        padding-right: 3px;
        margin-top: 38px;
        margin-right: 3px;
        line-height: 18px;
    }
    .header-top-right-right > h1 > span {
        display: none;
    }
    .header-top-right-right > button {
        width: 26px;
        height: 26px;
        margin-top: 32px;
    }
    .header-top-right-right > button > img {
        width: 26px;
        height: 26px;
    }
    .header-nav {
        margin-top: 34px;
        margin-bottom: 40px;
    }
    .header-nav > div > a {
        font-size: 17px;
        margin-left: 4px;
        margin-right: 4px;
    }
    .header-nav > div > a:nth-child(2) {
        font-size: 26px;
        letter-spacing: 0px;
    }
    .header-slider > a:nth-child(2):after {
        width: 81px;
        height: 74px;
        top: -19px;
    }
    .header-nav > button {
        margin-left: 1px;
        margin-right: 0px;
    }
    .header-nav > button > img {
        width: 14px;
        height: 11px;
    }
    .header-nav > button:first-child > img {
        float: right;
    }
    .header-nav > button:last-child > img {
        float: left;
    }
    @keyframes navAnim1 {
        0% {
            right: 0px;
        }
        50% {
            right: 5px;
        }
        100% {
            right: -80px;
        }
    }
    @keyframes navAnim2 {
        0% {
            left: 0px;
        }
        50% {
            left: 10px;
        }
        100% {
            left: -80px;
        }
    }
}
/*адаптив для корзины */
@media (min-width: 1000px) and (max-width: 1600px) {
    .basket-put {
        max-height: 700px;
    }
}
@media (min-width: 800px) and (max-width: 1000px) {
    .basket {
        width: 800px;
    }
    .basket-put {
        max-height: 600px;
    }
    .basket > span > h1 {
        font-size: 30px;
        line-height: 40px;
        color: #3a3a3a;
        text-align: center;
        margin-left: 326px;
    }
    .basket > span > img {
        margin-right: 30px;
    }
    .basket-put > div {
        margin-left: 15px;
    }
    .basket-card {
        width: 700px;
    }
    .basket-card > img {
        width: 167px;
        height: 212px;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 20px;
    }
}
@media (min-width: 600px) and (max-width: 800px) {
    .basket {
        width: 600px;
    }
    .basket-put {
        max-height: 500px;
    }
    .basket > span > h1 {
        font-size: 25px;
        line-height: 40px;
        color: #3a3a3a;
        text-align: center;
        margin-left: 206px;
    }
    .basket > span > img {
        margin-right: 30px;
    }
    .basket-put > div {
        width: 550px;
        margin-left: 15px;
    }
    .basket-card {
        width: 500px;
    }
    .basket-card > img {
        width: 137px;
        height: 180px;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 13px;
    }
    .basket-card > div > h1 {
        padding-left: 20px;
        font-size: 20px;
        line-height: 26px;
    }
    .card-about > li {
        font-size: 17px;
        line-height: 20px;
        letter-spacing: -0.06em;
        margin-left: 31px;
    }
    .card-btn {
        margin-left: 50px;
    }
    .card-price {
        font-size: 22px;
        line-height: 30px;
        margin-top: 12px;
    }
}
@media (min-width: 500px) and (max-width: 600px) {
    .basket {
        width: 480px;
    }
    .basket-put {
        max-height: 500px;
    }
    .basket > span > h1 {
        font-size: 22px;
        line-height: 30px;
        color: #3a3a3a;
        text-align: center;
        margin-left: 136px;
    }
    .basket > span > img {
        margin-right: 35px;
    }
    .basket-put > div {
        width: 400px;
        margin-left: 25px;
        height: 180px;
    }
    .basket-card > img {
        width: 127px;
        height: 160px;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 13px;
    }
    .basket-card > div > h1 {
        padding-right: 35px;
        padding-left: 14px;
        font-size: 14px;
        line-height: 20px;
    }
    .card-about > li {
        font-size: 10px;
        line-height: 10px;
        letter-spacing: -0.06em;
        margin-left: 31px;
    }
    .card-btn {
        margin-left: 40px;
        height: 23px;
    }
    .card-btn > h1 {
        font-size: 20px;
        line-height: 25px;
    }
    .card-btn > button {
        width: 25px;
    }
    .card-price {
        font-size: 20px;
        line-height: 30px;
        margin-top: 12px;
        margin-right: 83px;
    }
    .basket-delete {
        bottom: 10px;
        right: 20px;
    }
    .btn-sell {
        font-size: 20px;
        line-height: 25px;
        color: #ececec;
        padding: 5px 70px;
        margin-bottom: 17px;
    }
}
@media (min-width: 300px) and (max-width: 500px) {
    .basket {
        width: 420px;
    }
    .basket-put {
        max-height: 460px;
        margin-bottom: 14px;
    }
    .basket > span > h1 {
        font-size: 11px;
        line-height: 13px;
        color: #3a3a3a;
        text-align: center;
        margin-left: 106px;
    }
    .basket > span > img {
        margin-right: 35px;
        width: 15px;
        height: 15px;
    }
    .basket-put > div {
        width: 351px;
        margin-left: 25px;
        margin-bottom: 6px;
        height: 110px;
    }

    .basket-card > img {
        width: 67px;
        height: 86px;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 13px;
    }
    .basket-card > div > h1 {
        padding-right: 15px;
        padding-left: 10px;
        font-size: 14px;
        line-height: 20px;
        margin-top: 7px;
        margin-bottom: 6px;
    }
    .card-about > li {
        font-size: 8px;
        line-height: 5px;
        letter-spacing: -0.06em;
        margin-left: 18px;
    }
    .card-btn {
        margin-left: 18px;
        height: 18px;
        margin-top: 3px;
    }
    .card-btn > h1 {
        font-size: 20px;
        line-height: 25px;
        font-size: 9px;
        line-height: 11px;
        margin-top: 5px;
    }
    .card-btn > button {
        width: 18px;
    }
    .card-btn > h1 {
        margin-left: 13px;
        margin-right: 13px;
        width: 18px;
        margin-bottom: 1px;
    }
    .card-price {
        position: absolute;
        font-size: 13px;
        line-height: 16px;
        margin-top: 12px;
        margin-right: 83px;
        top: 72px;
        right: -20px;
    }
    .card-price > h2 {
        margin-left: 7px;
    }
    .basket-delete {
        bottom: 10px;
        right: 20px;
    }
    .basket-delete > img {
        width: 15px;
        height: 15px;
    }
    .btn-sell {
        font-size: 20px;
        line-height: 25px;
        color: #ececec;
        padding: 5px 30px;
        margin-bottom: 17px;
    }
}
</style>
