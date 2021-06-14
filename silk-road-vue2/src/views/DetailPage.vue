<template>
    <div class="detailpage">
        <div class="detailpage-card">
            <h1 class="card-title">{{ $t('DetailPage.card-title') }}</h1>
            <div class="card-about">
                <img src="../assets/img/catalog/card-img-1.png" alt="" />
                <main class="card-about-info">
                    <h2>{{ $t('DetailPage.card-title-album') }}</h2>
                    <h1>{{ $t('DetailPage.card-title-bottom') }}</h1>
                    <div>
                        <ul class="card-ul-1">
                            <li>{{ $t('DetailPage.card-ul-1-avtor') }}</li>
                            <li>{{ $t('DetailPage.card-ul-1-who') }}</li>
                            <li>{{ $t('DetailPage.card-ul-1-year') }}</li>
                        </ul>
                        <ul class="card-ul-2">
                            <li>Фирдавс Абдухалликов</li>
                            <li>Эдвард Ртвеладзе</li>
                            <li>2006</li>
                        </ul>
                    </div>
                </main>
            </div>
            <div class="card-detail">
                <h1>{{ $t('DetailPage.card-detail') }}</h1>
                <text>
                    <img
                        class="card-detail-before"
                        src="../assets/img/detailpage/before-small.png"
                    />
                    Viverra tortor bibendum sed amet, ut vitae donec ut arcu.
                    Condimentum vitae nisl faucibus pulvinar magnis mi lacus
                    porttitor. At magna malesuada enim, quam penatibus ut
                    rhoncus. Sed consectetur neque pretium sapien lorem orci id
                    ut. Semper nisl accumsan est egestas blandit id enim id. A
                    nunc tristique mi, quam. Fermentum, pharetra magnis quis
                    turpis. Ridiculus ipsum mauris nibh orci, ultricies
                    porttitor eu consequat feugiat. Nisi, sagittis, molestie in
                    non at elementum. Neque mattis in turpis a quis venenatis
                    vitae eget porttitor. Pellentesque porttitor risus in in mus
                    sed odio. Consequat vitae aliquet odio orci. Non bibendum
                    enim pretium volutpat amet semper. Faucibus tristique nunc
                    blandit volutpat diam tristique vitae ac, in. Ullamcorper
                    nec ac tincidunt mi, lorem semper. Interdum erat porta
                    purus, eu pharetra felis purus morbi. Aliquam dolor egestas
                    mauris gravida ut ac pharetra. Imperdiet diam, ultricies
                    ultrices vitae phasellus euismod lobortis et.
                    <span>
                        Arcu, facilisis nunc parturient pellentesque enim. Sit
                        nunc ultrices ultrices erat enim hendrerit ut fames.
                        Venenatis turpis in est quisque maecenas nibh. In sed
                        varius enim at. Tortor massa erat sagittis orci ipsum
                        ipsum feugiat molestie elementum. Vitae sollicitudin
                        tincidunt bibendum non neque dignissim vitae cursus est.
                        Erat vulputate sit maecenas sed ut felis parturient
                        rhoncus. Lorem viverra imperdiet tincidunt porttitor
                        aliquam. Arcu amet egestas tincidunt ut ultricies varius
                        pellentesque sit. Diam eget cursus duis erat morbi
                        consectetur quam amet. In vestibulum eu eu sed aliquam
                        pellentesque. Elementum morbi viverra aenean semper in
                        diam adipiscing sed. Leo nibh non curabitur arcu dui.
                        Vitae mattis turpis hendrerit nec in et id. Id urna vel
                        metus, purus sed proin gravida molestie orci. Quis id
                        posuere cursus libero lorem id et interdum. Sodales
                        nullam enim molestie erat sodales enim massa. Odio urna
                        mus sem ut. Sem eget donec tristique sed eu, viverra
                        bibendum. Quisque fames ut adipiscing volutpat et et,
                        etiam congue. Nulla sed nulla vulputate massa
                        pellentesque quis. Hac mauris orci, est cursus non nunc
                        ipsum. Pharetra sapien pellentesque at accumsan nulla
                        consequat varius at. Turpis proin elementum, facilisi
                        rhoncus nunc. Sed sed in eleifend nulla. Praesent
                        faucibus eget ut tincidunt nisi, morbi nec tortor,
                        vulputate. Purus eget feugiat cursus sem. Montes, risus
                        id placerat consequat, massa. Libero, leo quis sed in at
                        in fringilla placerat. Lorem tristique cursus gravida
                        non.
                    </span>
                </text>
            </div>
            <div class="price">
                <h1>{{ $t('DetailPage.card-price') }}</h1>
                <h2>1.450.000</h2>
            </div>
            <div class="card-button">
                <button>{{ $t('DetailPage.card-btn-buy') }}</button>
                <button>{{ $t('DetailPage.card-btn-put') }}</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['id'],
    mounted() {
        console.log(this.id);
    },
};
</script>
<style scoped>
.detailpage {
    width: 100%;
    height: auto;
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
}
.detailpage-card {
    width: 100%;
    max-width: 1678px;
    background-color: #e5e5e5;
    border-radius: 55px;
    font-family: 'Montserrat Regular';
    font-style: normal;
    margin-bottom: 484px;
}
.card-title {
    font-weight: 300;
    font-size: 40px;
    line-height: 49px;
    text-align: center;
    letter-spacing: -0.06em;
    color: #594602;
    text-align: end;
    margin-right: 243px;
    margin-top: 36px;
    margin-bottom: 5px;
}

/*card-about */

.card-about {
    margin-left: 59px;
    margin-right: 109px;
    display: flex;
}
.card-about > img {
    width: 310px;
    height: 415px;
}
.card-about-info {
    margin-left: 80px;
    width: 100%;
}
.card-about-info > h2 {
    font-weight: 700;
    font-size: 29px;
    line-height: 35px;
    color: #000000;
    text-align: end;
    margin-right: 575px;
    margin-top: 27px;
    margin-bottom: 27px;
}
.card-about-info > h1 {
    font-family: 'Oswald Regular';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 42px;
    letter-spacing: 0.2em;
    color: #242424;
    max-width: 945px;
    padding-left: 2px;
    text-align: center;
}
.card-about-info > div {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 39px;
}
.card-about-info > div > ul > li {
    margin-top: 20px;
}
.card-ul-1 {
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
    color: #000000;
    font-family: 'Montserrat Bold';
}
.card-ul-2 {
    font-weight: normal;
    font-size: 31px;
    line-height: 38px;
    color: #000000;
}

/*card-detail */

.card-detail {
    margin-left: 67px;
    margin-right: 117px;
    margin-top: 40px;
    position: relative;
}
.card-detail-before {
    bottom: -350px;
    left: 10px;
    position: absolute;
}
.card-detail > h1 {
    font-family: 'Montserrat Bold';
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 55px;
    color: #000000;
    margin-bottom: 36px;
}
.card-detail > text {
    font-weight: 500;
    font-size: 26px;
    line-height: 37px;
    color: #000000;
}

/*price */
.price {
    background-image: url('../assets/img/detailpage/price.png');
    display: flex;
    width: 763px;
    height: 136px;
    margin-left: auto;
    margin-top: 127px;
    align-items: center;
    justify-content: flex-end;
}
.price > h1,
h2 {
    font-family: 'Montserrat Bold';
    font-style: normal;
    font-weight: 600;
    font-size: 88px;
    line-height: 107px;
    color: #313131;
}
.price > h2 {
    color: #812e00;
    margin-left: 20px;
}

/*card-button */
.card-button {
    display: flex;
    margin-top: 73px;
    margin-bottom: 28px;
    align-items: center;
}
.card-button > button:first-child {
    background: #c59752;
    border-radius: 41px;
    font-family: 'Oswald Bold';
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 67px;
    padding-left: 55px;
    padding-right: 55px;
    letter-spacing: 1px;
    color: #1b1b1b;
    margin-left: auto;
    transition-property: all;
    transition-duration: 0.6s;
}
.card-button > button:first-child:hover {
    transition-property: all;
    transition-duration: 0.4s;
    background: white;
}
.card-button > button:last-child {
    background: rgba(26, 26, 26, 0.9);
    border-radius: 41px;
    font-family: 'Oswald Bold';
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 67px;
    padding-left: 18px;
    padding-right: 10px;
    letter-spacing: 1px;
    color: #c59752;
    margin-right: 79px;
    margin-left: 33px;
    transition-property: all;
    transition-duration: 0.5s;
}
.card-button > button:last-child:hover {
    transition-property: all;
    transition-duration: 0.5s;
    background: white;
}
@media (min-width: 1600px) and (max-width: 1820px) {
    .detailpage-card {
        max-width: 1500px;
    }
}
@media (min-width: 1300px) and (max-width: 1600px) {
    .detailpage-card {
        max-width: 1250px;
        margin-bottom: 304px;
    }
    .card-title {
        font-weight: 300;
        font-size: 32px;
        line-height: 59px;
        text-align: center;
        letter-spacing: -0.06em;
        color: #594602;
        text-align: end;
        margin-right: 153px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .card-about {
        margin-left: 40px;
        margin-right: 69px;
    }
    .card-about > img {
        width: 300px;
        height: 405px;
    }
    .card-about-info {
        margin-left: 60px;
    }
    .card-about-info > h2 {
        font-size: 27px;
        line-height: 30px;
        margin-right: 50px;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 20px;
    }
    .card-about-info > h1 {
        font-size: 35px;
        line-height: 40px;
        letter-spacing: 0.1em;
        max-width: 100%;
        padding-left: 0px;
        text-align: center;
    }
    .card-about-info > div {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        margin-bottom: 35px;
    }
    .card-about-info > div > ul > li {
        margin-top: 25px;
    }
    .card-ul-1 {
        font-size: 30px;
        line-height: 40px;
    }
    .card-ul-2 {
        font-size: 30px;
        line-height: 40px;
    }
    .card-detail-before {
        bottom: -250px;
        left: 0;
        position: absolute;
    }
    .card-detail {
        margin-left: 47px;
        margin-right: 77px;
        margin-top: 20px;
    }
    .card-detail > h1 {
        font-size: 40px;
        line-height: 50px;
        margin-bottom: 25px;
    }
    .card-detail > text {
        font-size: 23px;
        line-height: 30px;
    }
    .price {
        width: 663px;
        height: 106px;
        margin-top: 67px;
    }
    .price > h1,
    h2 {
        font-size: 70px;
        line-height: 87px;
    }
    .price > h2[data-v-7407503a] {
        margin-left: 20px;
    }
    .card-button {
        margin-top: 43px;
        margin-bottom: 28px;
    }
    .card-button > button:first-child {
        font-size: 27px;
        line-height: 60px;
        padding-left: 50px;
        padding-right: 50px;
        letter-spacing: 1px;
    }
    .card-button > button:last-child {
        font-size: 27px;
        line-height: 60px;
        padding-left: 20px;
        padding-right: 20px;
        letter-spacing: 1px;
    }
}
@media (min-width: 1000px) and (max-width: 1300px) {
    .detailpage-card {
        max-width: 980px;
        margin-bottom: 254px;
    }
    .card-title {
        font-size: 26px;
        line-height: 50px;
        text-align: center;
        letter-spacing: -0.06em;
        color: #594602;
        text-align: end;
        margin-right: 133px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .card-about {
        margin-left: 40px;
        margin-right: 69px;
    }
    .card-about > img {
        width: 200px;
        height: 265px;
    }
    .card-about-info {
        margin-left: 40px;
    }
    .card-about-info > h2 {
        font-size: 21px;
        line-height: 20px;
        margin-right: 40px;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .card-about-info > h1 {
        font-size: 25px;
        line-height: 40px;
        letter-spacing: 0.05em;
        max-width: 100%;
        padding-left: 0px;
        text-align: center;
    }
    .card-about-info > div {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .card-about-info > div > ul > li {
        margin-top: 20px;
    }
    .card-ul-1 {
        font-size: 20px;
        line-height: 35px;
    }
    .card-ul-2 {
        font-size: 20px;
        line-height: 35px;
    }
    .card-detail {
        margin-left: 40px;
        margin-right: 70px;
        margin-top: 20px;
    }
    .card-detail-before {
        width: 400px;
        height: 500px;
        bottom: -140px;
        left: -20px;
        position: absolute;
    }
    .card-detail > h1 {
        font-size: 34px;
        line-height: 30px;
        margin-bottom: 25px;
    }
    .card-detail > text {
        font-size: 21px;
        line-height: 26px;
    }
    .price {
        width: 543px;
        height: 80px;
        margin-top: 30px;
    }
    .price > h1,
    h2 {
        font-size: 54px;
        line-height: 77px;
    }
    .price > h2 {
        margin-left: 20px;
    }
    .card-button {
        margin-top: 33px;
        margin-bottom: 20px;
    }
    .card-button > button:first-child {
        font-size: 25px;
        line-height: 52px;
        padding-left: 40px;
        padding-right: 40px;
        letter-spacing: 1px;
    }
    .card-button > button:last-child {
        font-size: 25px;
        line-height: 52px;
        padding-left: 15px;
        padding-right: 15px;
        letter-spacing: 1px;
    }
}
@media (min-width: 800px) and (max-width: 1000px) {
    .detailpage-card {
        max-width: 780px;
        margin-bottom: 154px;
    }
    .card-title {
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        letter-spacing: -0.06em;
        text-align: end;
        margin-right: 133px;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .card-about {
        margin-left: 30px;
        margin-right: 39px;
    }
    .card-about > img {
        width: 180px;
        height: 225px;
    }
    .card-about-info {
        margin-left: 30px;
    }
    .card-about-info > h2 {
        font-size: 19px;
        line-height: 17px;
        margin-right: 40px;
        text-align: center;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .card-about-info > h1 {
        font-size: 22px;
        line-height: 33px;
        letter-spacing: 0.05em;
        max-width: 100%;
        padding-left: 0px;
        text-align: center;
    }
    .card-about-info > div {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .card-about-info > div > ul > li {
        margin-top: 10px;
    }
    .card-ul-1 {
        font-size: 18px;
        line-height: 32px;
    }
    .card-ul-2 {
        font-size: 18px;
        line-height: 32px;
    }
    .card-detail {
        margin-left: 30px;
        margin-right: 50px;
        margin-top: 15px;
    }
    .card-detail-before {
        width: 290px;
        height: 450px;
        bottom: -140px;
        left: -20px;
        position: absolute;
    }
    .card-detail > h1 {
        font-size: 28px;
        line-height: 20px;
        margin-bottom: 20px;
    }
    .card-detail > text {
        font-size: 18px;
        line-height: 23px;
    }
    .price {
        width: 483px;
        height: 70px;
        margin-top: 15px;
    }
    .price > h1,
    h2 {
        font-size: 50px;
        line-height: 70px;
    }
    .price > h2 {
        margin-left: 17px;
    }
    .card-button {
        margin-top: 27px;
        margin-bottom: 18px;
    }
    .card-button > button:first-child {
        font-size: 20px;
        line-height: 43px;
        padding-left: 30px;
        padding-right: 30px;
        letter-spacing: 1px;
    }
    .card-button > button:last-child {
        font-size: 20px;
        line-height: 43px;
        padding-left: 12px;
        padding-right: 12px;
        letter-spacing: 1px;
    }
}
@media (min-width: 550px) and (max-width: 800px) {
    .detailpage-card {
        max-width: 540px;
        margin-bottom: 104px;
        border-radius: 35px;
    }
    .card-title {
        font-size: 15px;
        line-height: 25px;
        text-align: center;
        letter-spacing: -0.06em;
        text-align: end;
        margin-right: 73px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .card-about {
        margin-left: 15px;
        margin-right: 19px;
    }
    .card-about > img {
        width: 120px;
        height: 155px;
    }
    .card-about-info {
        margin-left: 20px;
    }
    .card-about-info > h2 {
        font-size: 15px;
        line-height: 15px;
        margin-right: 40px;
        text-align: center;
        margin-top: 2px;
        margin-bottom: 2px;
    }
    .card-about-info > h1 {
        font-size: 18px;
        line-height: 20px;
        letter-spacing: 0.05em;
        max-width: 100%;
        padding-left: 0px;
        text-align: center;
    }
    .card-about-info > div {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .card-about-info > div > ul > li {
        margin-top: 2px;
    }
    .card-ul-1 {
        font-size: 14.5px;
        line-height: 26px;
    }
    .card-ul-2 {
        font-size: 14.5px;
        line-height: 26px;
    }
    .card-detail {
        margin-left: 20px;
        margin-right: 35px;
        margin-top: 10px;
    }
    .card-detail > text > span {
        display: none;
    }
    .card-detail-before {
        width: 230px;
        height: 320px;
        bottom: -70px;
        left: -20px;
        position: absolute;
    }
    .card-detail > h1 {
        font-size: 22px;
        line-height: 15px;
        margin-bottom: 15px;
    }
    .card-detail > text {
        font-size: 15px;
        line-height: 18px;
    }
    .price {
        width: 343px;
        height: 50px;
        margin-top: 15px;
    }
    .price > h1,
    h2 {
        font-size: 35px;
        line-height: 60px;
    }
    .price > h2 {
        margin-left: 15px;
    }
    .card-button {
        margin-top: 15px;
        margin-bottom: 13px;
    }
    .card-button > button:first-child {
        font-size: 15px;
        line-height: 30px;
        padding-left: 15px;
        padding-right: 15px;
        letter-spacing: 0.5px;
    }
    .card-button > button:last-child {
        font-size: 15px;
        line-height: 30px;
        padding-left: 12px;
        padding-right: 12px;
        letter-spacing: 0.5px;
    }
}
@media (min-width: 300px) and (max-width: 550px) {
    .detailpage-card {
        max-width: 350px;
        margin-bottom: 44px;
        border-radius: 25px;
        position: relative;
    }

    .card-title {
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: -0.06em;
        margin-right: 23px;
        margin-top: 10px;
        margin-bottom: 10px;
        max-width: 250px;
        position: absolute;
        top: 5px;
        left: 85px;
    }
    .card-about {
        margin-left: 15px;
        margin-right: 19px;
    }
    .card-about > img {
        width: 70px;
        height: 100px;
        margin-top: 20px;
    }
    .card-about-info {
        margin-left: 9px;
    }
    .card-about-info > h2 {
        font-size: 12px;
        line-height: 15px;
        margin-right: 40px;
        text-align: center;
        margin-top: 48px;
        margin-bottom: 2px;
    }
    .card-about-info > h1 {
        display: none;
    }
    .card-about-info > div {
        display: flex;
        justify-content: space-between;
        margin-top: 0px;
        margin-bottom: 10px;
    }
    .card-about-info > div > ul > li {
        margin-top: 5px;
    }
    .card-ul-1 {
        font-size: 10px;
        line-height: 12px;
    }
    .card-ul-2 {
        font-size: 10px;
        line-height: 12px;
    }
    .card-detail {
        margin-left: 18px;
        margin-right: 14px;
        margin-top: 8px;
        position: relative;
    }
    .card-detail-before {
        width: 170px;
        height: 240px;
        bottom: -80px;
        left: 10px;
        position: absolute;
    }
    .card-detail > h1 {
        font-size: 12px;
        line-height: 15px;
        margin-bottom: 5px;
    }
    .card-detail > text {
        font-size: 12px;
        line-height: 15px;
    }
    .card-detail > text > span {
        display: none;
    }
    .price {
        width: 174px;
        height: 28px;
        margin-top: 50px;
        background-image: url('../assets/img/detailpage/price-small.png');
    }
    .price > h1,
    h2 {
        font-size: 18.5px;
        line-height: 23px;
    }
    .price > h2 {
        margin-left: 10px;
    }
    .card-button {
        margin-top: 30px;
        margin-bottom: 19px;
    }
    .card-button > button:first-child {
        font-size: 15px;
        line-height: 25px;
        padding-left: 15px;
        padding-right: 15px;
        letter-spacing: -0.06em;
    }
    .card-button > button:last-child {
        font-size: 15px;
        line-height: 25px;
        padding-left: 13px;
        padding-right: 13px;
        letter-spacing: -0.06em;
        text-transform: none;
        margin-right: 14px;
        margin-left: 33px;
    }
}
</style>
