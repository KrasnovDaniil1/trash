<template>
    <div class="catalog">
        <div class="catalog-top">
            <div>
                <img src="../assets/img/catalog/search.png" alt="" />
                <input
                    type="text"
                    :placeholder="$t('Catalog.input-placeholder')"
                />
            </div>
            <button>
                <img src="../assets/img/catalog/filter.png" alt="" />
                {{ $t('Catalog.filter') }}
            </button>
        </div>

        <section class="section-card">
            <div v-for="(item, index) in displayedPosts" :key="index">
                <img src="../assets/img/catalog/card-img-1.png" alt="" />
                <!--Нужно менять картинку с сервера взята-->
                <span>
                    <h1>{{ item.title }}</h1>
                    <text>{{ item.text }}</text>
                    <div>
                        <button class="btn-card">
                            <img
                                src="../assets/img/catalog/card-icon-2.png"
                                alt=""
                            />
                            {{ $t('Catalog.btn-push-in-shop') }}
                        </button>
                        <router-link
                            :to="{ name: DetailPage, params: { id: item.id } }"
                            v-on:click.prevent="ClickDetail(item.id)"
                            class="a-card"
                        >
                            {{ $t('Catalog.btn-about') }}
                        </router-link>
                    </div>
                </span>
            </div>
        </section>

        <nav class="nav-pagination">
            <ul class="pagination">
                <li class="page-item-left">
                    <button
                        @click="page--"
                        :disabled="page == 1 ? '' : disabled"
                    >
                        <img
                            class="page-link-img-left"
                            src="../assets/img/catalog/pagination-left.png"
                            alt=""
                        />
                    </button>
                </li>
                <li class="page-item-center" ref="center">
                    <button
                        type="button"
                        class="page-link-number"
                        v-bind:class="{ pageactive: pageNumber == page }"
                        v-for="pageNumber in pages.length"
                        @click="page = pageNumber"
                        :key="pageNumber.index"
                    >
                        {{ pageNumber }}
                    </button>
                </li>
                <li class="page-item-right">
                    <button
                        @click="page++"
                        :disabled="page == pages.length ? '' : disabled"
                    >
                        <img
                            class="page-link-img-right"
                            src="../assets/img/catalog/pagination-right.png"
                            alt=""
                        />
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'Catalog',
    data() {
        return {
            page: 1,
            perPage: 4,
            pages: [],
            posts: [
                {
                    id: '0',
                    img: '../assets/img/catalog/card-img-1.png',
                    title: 'Третьяковская галлерея в Стамбуле ',
                    text:
                        'Ut eu volutpat urna, lectus tellus risus nisl scelerisque quis. Dignissim blandit aliquam sagittis consectetur orci, feugiat vitae aliquam. Faucibus interdum ultricies urna quam. Pellentesque viverra et at a gravida amet, convallis. Nisl diam non bibendum et at nibh.',
                    href: '#',
                },
                {
                    id: '0',
                    img: '../assets/img/catalog/card-img-1.png',
                    title: 'Третьяковская галлерея в Стамбуле ',
                    text:
                        'Ut eu volutpat urna, lectus tellus risus nisl scelerisque quis. Dignissim blandit aliquam sagittis consectetur orci, feugiat vitae aliquam. Faucibus interdum ultricies urna quam. Pellentesque viverra et at a gravida amet, convallis. Nisl diam non bibendum et at nibh.',
                    href: '#',
                },
                {
                    id: '0',
                    img: '../assets/img/catalog/card-img-1.png',
                    title: 'Третьяковская галлерея в Стамбуле ',
                    text:
                        'Ut eu volutpat urna, lectus tellus risus nisl scelerisque quis. Dignissim blandit aliquam sagittis consectetur orci, feugiat vitae aliquam. Faucibus interdum ultricies urna quam. Pellentesque viverra et at a gravida amet, convallis. Nisl diam non bibendum et at nibh.',
                    href: '#',
                },
                {
                    id: '0',
                    img: '../assets/img/catalog/card-img-1.png',
                    title: 'Третьяковская галлерея в Стамбуле ',
                    text:
                        'Ut eu volutpat urna, lectus tellus risus nisl scelerisque quis. Dignissim blandit aliquam sagittis consectetur orci, feugiat vitae aliquam. Faucibus interdum ultricies urna quam. Pellentesque viverra et at a gravida amet, convallis. Nisl diam non bibendum et at nibh.',
                    href: '#',
                },
                {
                    id: '0',
                    img: '../assets/img/catalog/card-img-1.png',
                    title: 'Третьяковская галлерея в Стамбуле ',
                    text:
                        'Ut eu volutpat urna, lectus tellus risus nisl scelerisque quis. Dignissim blandit aliquam sagittis consectetur orci, feugiat vitae aliquam. Faucibus interdum ultricies urna quam. Pellentesque viverra et at a gravida amet, convallis. Nisl diam non bibendum et at nibh.',
                    href: '#',
                },
                {
                    id: '0',
                    img: '../assets/img/catalog/card-img-1.png',
                    title: 'Третьяковская галлерея в Стамбуле ',
                    text:
                        'Ut eu volutpat urna, lectus tellus risus nisl scelerisque quis. Dignissim blandit aliquam sagittis consectetur orci, feugiat vitae aliquam. Faucibus interdum ultricies urna quam. Pellentesque viverra et at a gravida amet, convallis. Nisl diam non bibendum et at nibh.',
                    href: '#',
                },
            ],
        };
    },
    methods: {
        setPages() {
            /*количество страниц */
            let numberOfPages = Math.ceil(this.posts.length / this.perPage);
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(posts) {
            /*отвечает за количество обьектов на странице */
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return posts.slice(from, to);
        },
        ClickDetail(id) {
            this.$router.push({ name: 'DetailPage', params: { id: id } });
        },
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.posts);
        },
    },
    watch: {
        /*обновляет количество страниц при изменение posts */
        posts() {
            this.setPages();
        },
    },
    created() {
        /*вызывается при рендеринге страницы */
        this.setPages();
    },
};
</script>
<style scoped>
.catalog {
    width: 100%;
    height: auto;
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 311px;
    position: relative;
}
.catalog:before {
    position: absolute;
    content: url('../assets/img/catalog/background-before.png');
    bottom: -140px;
    left: 20px;
}
.catalog:after {
    position: absolute;
    content: url('../assets/img/catalog/background-after.png');
    top: 23%;
    right: 0;
}
/*catalog-top */
.catalog-top {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 55px;
    margin-bottom: 55px;
    width: 537px;
    justify-content: space-between;
}
.catalog-top > div {
    display: flex;
}
.catalog-top > div::before {
    position: absolute;
    content: url('../assets/img/catalog/border-search.png');
    z-index: 0;
}
.catalog-top > div > img {
    margin-left: 30px;
}
.catalog-top > div > input {
    width: 321px;
    position: relative;
    z-index: 10;
    padding-left: 30px;
    font-family: 'Montserrat Regular';
    font-size: 20px;
}
.catalog-top > button {
    display: flex;
    background: inherit;
    font-family: 'Montserrat Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    padding-left: 40px;
}
/*section-card */
.section-card {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.section-card > div {
    max-width: 1021px;
    display: flex;
    margin-bottom: 21px;
    background: rgba(133, 122, 92, 0.7);
    position: relative;
}
.section-card > div > img {
    width: 236px;
    height: 298px;
}
.section-card > div > span > h1 {
    font-family: 'Oswald Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 71px;
    color: #ededed;
    margin-left: 18px;
    margin-bottom: 26px;
}
.section-card > div > span > text {
    display: inline-block;
    font-family: 'Montserrat Regular';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    letter-spacing: 0.2px;
    line-height: 29px;
    color: #000000;
    margin-left: 24px;
    margin-right: 23px;
}
.section-card > div > span > div {
    display: flex;
    margin-top: 20px;
    align-items: center;
    margin-bottom: 10px;
}
.a-card {
    display: block;
    margin-left: auto;
    font-family: 'Montserrat Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #d9d4d4;
    text-align: end;
    position: relative;
    margin-right: 54px;
    z-index: 30;
}
.a-card::after {
    position: absolute;
    content: url('../assets/img/catalog/card-icon-1.png');
    margin-left: 5px;
}

.btn-card {
    font-family: 'Montserrat Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    background: inherit;
    position: relative;
    margin-left: 320px;
    display: flex;
    align-items: center;
    z-index: 10;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 55px;
    transition-property: all;
    transition-duration: 0.5s;
}
.btn-card > img {
    margin-right: 10px;
}
.btn-card:hover {
    background: white;
    transition-property: all;
    transition-duration: 0.3s;
}

/*nav */
.nav-pagination {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    z-index: 100;
    position: relative;
}
.pagination {
    display: flex;
    height: 38px;
}
.page-item-left {
    display: flex;
    align-items: center;
    background: #e9e9e9;
    border-radius: 30px 0 0 30px;
    padding-left: 15px;
    padding-right: 8px;
}
.page-item-right {
    display: flex;
    align-items: center;
    background: #e9e9e9;
    padding-left: 8px;
    padding-right: 15px;
    border-radius: 0 30px 30px 0;
}
.page-item-center {
    border-left: 1px solid rgba(163, 163, 163, 0.5);
    border-right: 1px solid rgba(163, 163, 163, 0.5);
    display: flex;
    align-items: center;
    background: #e9e9e9;
}
.page-link-number {
    background: #e9e9e9;
    width: 34px;
    height: 33px;
    font-family: 'Montserrat Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 30px;
    color: #000000;
    margin-left: 2px;
    margin-right: 2px;
    border-radius: 23px;
}
.pageactive {
    background-color: #886c25;
}
@media (min-width: 800px) and (max-width: 1100px) {
    .catalog-top {
        margin-top: 20px;
        margin-bottom: 45px;
    }
    .catalog-top > button {
        font-size: 20px;
    }
    catalog-top > div > input {
        font-size: 18px;
    }
    .section-card > div {
        max-width: 900px;
    }
    .section-card > div > span > h1 {
        font-size: 40px;
        margin-left: 28px;
        line-height: 60px;
        margin-bottom: 10px;
        margin-top: 5px;
    }
    .section-card > div > span > text {
        font-size: 20px;
        line-height: 25px;
        margin-left: 20px;
        margin-right: 20px;
    }
    .btn-card {
        margin-left: 110px;
    }
    .section-card > div {
        margin-bottom: 15px;
    }
    .section-card > div > img {
        width: 200px;
        height: 270px;
    }
    .btn-card {
        font-size: 19px;
        line-height: 20px;
        margin-top: 0px;
    }
    .a-card {
        font-size: 19px;
        line-height: 20px;
    }
    .btn-card > img {
        width: 30px;
        height: 30px;
    }
    .catalog {
        margin-bottom: 150px;
    }
}
@media (min-width: 620px) and (max-width: 800px) {
    .catalog-top {
        margin-top: 0px;
        margin-bottom: 35px;
    }
    .catalog-top > button {
        font-size: 18px;
    }
    catalog-top > div > input {
        font-size: 16px;
    }
    .section-card > div {
        max-width: 700px;
    }
    .section-card > div > span > h1 {
        font-size: 27px;
        margin-left: 18px;
        line-height: 40px;
        margin-bottom: 10px;
        margin-top: 5px;
    }
    .section-card > div > span > text {
        font-size: 17px;
        line-height: 19px;
        margin-left: 10px;
        margin-right: 10px;
    }
    .section-card > div > span > div {
        margin-top: 10px;
    }
    .btn-card {
        margin-left: 25px;
    }
    .section-card > div {
        margin-bottom: 12px;
    }
    .section-card > div > img {
        width: 190px;
        height: 230px;
    }
    .btn-card {
        font-size: 17px;
        line-height: 18px;
        margin-top: 0px;
    }
    .a-card {
        font-size: 17px;
        line-height: 18px;
    }
    .btn-card > img {
        width: 22px;
        height: 22px;
    }
    .catalog {
        margin-bottom: 60px;
    }
    .nav-pagination {
        margin-top: 30px;
    }
    .pagination {
        height: 30px;
    }
    .page-link-number {
        width: 25px;
        height: 25px;
    }
    .page-item-center > button {
        font-size: 22px;
    }
    .catalog::after {
        content: url('../assets/img/catalog/background-after-middle.png');
    }
    .catalog::before {
        content: url('../assets/img/catalog/background-before-middle.png');
        bottom: -10px;
    }
}
@media (min-width: 500px) and (max-width: 620px) {
    .catalog-top {
        margin-top: 0px;
        margin-bottom: 35px;
        justify-content: space-around;
    }
    .catalog-top > button {
        font-size: 16px;
        padding-left: 0px;
    }
    .catalog-top > button > img {
        width: 28px;
        height: 28px;
    }
    catalog-top > div > input {
        font-size: 16px;
    }
    .section-card > div {
        max-width: 700px;
    }
    .section-card > div > span > h1 {
        font-size: 23px;
        margin-left: 10px;
        line-height: 30px;
        margin-bottom: 10px;
        margin-top: 5px;
    }
    .section-card > div > span > text {
        font-size: 17px;
        line-height: 19px;
        margin-left: 10px;
        margin-right: 10px;
    }
    .section-card > div > span > div {
        margin-top: 10px;
    }
    .btn-card {
        margin-left: 5px;
    }
    .section-card > div {
        margin-bottom: 12px;
    }
    .section-card > div > img {
        width: 140px;
        height: 190px;
    }
    .btn-card {
        font-size: 16px;
        line-height: 17px;
        margin-top: 0px;
    }
    .a-card {
        font-size: 16px;
        line-height: 17px;
        margin-right: 24px;
    }
    .btn-card > img {
        width: 19px;
        height: 19px;
    }
    .catalog {
        margin-bottom: 60px;
    }
    .nav-pagination {
        margin-top: 30px;
    }
    .pagination {
        height: 30px;
    }
    .page-link-number {
        width: 25px;
        height: 25px;
    }
    .page-item-center > button {
        font-size: 22px;
    }
    .catalog::after {
        content: url('../assets/img/catalog/background-after-middle.png');
    }
    .catalog::before {
        content: url('../assets/img/catalog/background-before-middle.png');
        bottom: 140px;
    }
}
@media (min-width: 300px) and (max-width: 500px) {
    .catalog-top {
        margin-top: 0px;
        margin-bottom: 17px;
        justify-content: space-around;
        width: 250px;
    }
    .catalog-top > div::before {
        content: url('../assets/img/catalog/border-search-small.png');
        left: 28vw;
        top: 20px;
    }
    .catalog-top > button {
        font-size: 10px;
        padding-left: 0px;
        margin-top: 10px;
    }
    .catalog-top > button > img {
        width: 15px;
        height: 15px;
        margin-top: 7px;
    }
    .catalog-top > div > img {
        width: 15px;
        height: 15px;
        margin-top: 14px;
    }
    .catalog-top > div > input {
        font-size: 10px;
        width: 103px;
        padding-left: 5px;
        padding-top: 6px;
    }

    .section-card > div {
        max-width: 700px;
    }
    .section-card > div > span > h1 {
        font-size: 16px;
        margin-left: 26px;
        line-height: 24px;
        margin-bottom: 0px;
        margin-top: 5px;
    }
    .section-card > div > span > text {
        font-size: 12px;
        line-height: 15px;
        margin-left: 8px;
        margin-right: 15px;
    }
    .section-card > div > span > div {
        margin-top: 0px;
        margin-bottom: 0px;
    }
    .section-card > div {
        margin-bottom: 12px;
    }
    .section-card > div > img {
        width: 80px;
        height: 105px;
        margin-top: 7px;
        margin-left: 8px;
    }
    .btn-card {
        font-size: 10px;
        line-height: 12px;
        margin-top: 0px;
        margin-left: auto;
    }
    .a-card {
        font-size: 10px;
        line-height: 12px;
        margin-right: 27px;
    }
    .a-card::after {
        content: url('../assets/img/catalog/card-icon-1-small.png');
    }
    .btn-card > img {
        width: 13px;
        height: 13px;
    }
    .catalog {
        margin-bottom: 10px;
    }
    .nav-pagination {
        margin-top: 30px;
    }
    .pagination {
        height: 20px;
    }
    .pagination > li > button > img {
        width: 7px;
        height: 10px;
    }
    .page-link-number {
        width: 16px;
        height: 17px;
    }
    .page-item-center > button {
        font-size: 15px;
        line-height: 18px;
        margin-left: 5px;
    }
    .catalog::after {
        content: url('../assets/img/catalog/background-after-middle.png');
        display: none;
    }
    .catalog::before {
        content: url('../assets/img/catalog/background-before-middle.png');
        bottom: 140px;
        display: none;
    }
}
@media (min-width: 300px) and (max-width: 435px) {
    .catalog-top > div::before {
        content: url('../assets/img/catalog/border-search-small.png');
        left: 25vw;
        top: 20px;
    }
}
</style>
