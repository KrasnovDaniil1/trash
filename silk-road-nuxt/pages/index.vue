<template lang="pug">
.main(
  style='max-width: 1920px; margin-left: auto; margin-right: auto',
  ref='main'
)
  .recomend(ref='recomend')
    #parallax_top.parallax(ref='parallax')
      img.bird(src='../assets/image/main-bird.svg', alt='')
      .para-title(ref='paraTitle')
        h1.para-name(ref='paraName') {{ $t("header.name") }}
        .cont-para(ref='logo')
          span.para-logo Silk
          span.para-logo Road
          span.para-logo Media
          .cont-para.other-color(ref='logoOverflow')
            .toster(ref='logoAlter')
              span.para-logo-alter Silk
              span.para-logo-alter Road
              span.para-logo-alter Media
      .page
        .quote
          span.what {{ $t("index.qiote") }}
          span.who {{ $t("index.quote-name") }}
        .book
          div.lds-roller(v-if="popular.length === 0" style="position:absolute;z-index:500;left:50%;top:50%;transform: translateX(-50%) translateY(-50%);")
            div
            div
            div
            div
            div
            div
            div
            div
          img.bookmark(src='../assets/image/bookmark.svg', alt='SRMEDIA')
          img.book-img(:src='popular_rec.image', :alt='popular_rec.title')
          span.text
            text.md-none {{ $t("header.name-book") }}
            h1.text-none {{ $t("index.author-book") }}
            h2.text-none {{ popular_rec.author }}
            h1.text-none {{ $t("index.year-book") }}
            h2.text-none {{ popular_rec.year }}
            h1.text-none {{ $t("header.price") }}
            h2.text-none(v-if='popular_rec.price') {{ popular_rec.price.toFixed(0).replace(/\d{1,3}(?=(\d{3})*$)/g, "$&.").slice(0, -1)}} {{ $t("header.sum") }}
            ul.text-alter
              li
                h1 {{ $t("index.author-book") }}
                h2 {{ popular_rec.author }}
              li
                h1 {{ $t("index.year-book") }}
                h2 {{ popular_rec.year }}
              li
                h1 {{ $t("header.price") }}
                h2 {{popular_rec.price}} {{ $t("header.sum") }}
            button(@click='handleCart(popular_rec)') {{ checkIfExists(popular_rec.id) ? $t("catalog.added") : $t("catalog.in-cart") }}
        .book-fon
          span.fon-text {{ popular_rec.title }}
          img.fon(src='../assets/image/book-fon.png', alt='')
  SliderRecomen(:slider='popular')
  #thisElement.popular(v-show='bigWindow')
    div.lds-roller(v-if="popular.length === 0" style="position:absolute;z-index:500;left:50%;top:50%;transform: translateX(-50%) translateY(-50%);")
        div
        div
        div
        div
        div
        div
        div
        div
    img.popular-fon(src='../assets/image/popular-fon.png')
    .popular-name {{ $t("index.popular-book") }}
    .popular-book(
      v-for='(item, index) in popular',
      :key='item.id',
      :style='index === 0 ? " margin-top: 0" : ""',
      :class='{ "row-reverse": index % 2 !== 0 }'
    )
      .popular-book-img
        img.popular-img(:src='item.image', :alt='item.title')
        button.book-buy(@click='handleCart(item)')
          img.book-buy-img(
            v-if='checkIfExists(item.id)',
            src='@/assets/image/added-to-cart.png'
          )
          img.book-buy-img(v-else, src='@/assets/image/popular-book-buy.svg')
      .text-book
        h1.book-title {{ item.title }}
        .book-what
          ul.text-center
            li.text-list
              h1.text-list-h1 {{ $t("index.author-book") }}
              h2.text-list-h2 {{ item.author }}
            li.text-list
              h1.text-list-h1 {{ $t("index.year-book") }}
              h2.text-list-h2 {{ item.year }}
            li.text-list
              h1.text-list-h1 {{ $t("header.price") }}
              h2.text-list-h2 {{ item.price.toFixed(0).replace(/\d{1,3}(?=(\d{3})*$)/g, "$&.").slice(0, -1) }} {{ $t("header.sum") }}
            li.text-list
              h1.text-list-h1 {{ $t("index.about-book") }}
              h2.text-list-h2 {{ item.brief }}
      NuxtLink.popular-btn(:to='localePath(`/details/${item.id}`)') {{ $t("index.detail-book") }}
    .go-in-catalog
      NuxtLink(:to='localePath("/catalogue")') {{ $t("index.go-to-catalog") }}
        span
        span
        span
        span
  Carusel(:carusel='reviews')
</template>
<script>
import { BASE_URL } from '@/utils/constants'

export default {
  data() {
    return {
      parallax_scroll: 0,
      popular: [],
      popular_rec: {},
      reviews: [],
      bigWindow: true,
      runAnimScroll: true,
      resetRunAnimation: false,
    }
  },
  /* eslint-enable object-shorthand */
  head() {
    return {
      title: `Silk Road Media`,
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          content: '/main.png',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            "Купить книги культурного наследия Узбекистана Buy books of cultural heritage of Uzbekistan O'zbekiston madaniy merosi kitoblarini sotib olish",
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Книги издательского дома Silk Road Media',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Silk Road Media`,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `книги купить, книги заказать, книги Узбекистан, книги доставка, книги хорошие цены, книги Культурное наследие, книги энциклопедия, книги Иллюстрации, книги большие, книги лучший, книги сборник, книжный магазин купить, книжный магазин заказать, книжный магазин Узбекистан, книжный магазин доставка, книжный магазин хорошие цены, книжный магазин Культурное наследие, книжный магазин энциклопедия, книжный магазин Иллюстрации, книжный магазин большие, книжный магазин лучший, книжный магазин сборник, книга купить, книга заказать, книга Узбекистан, книга доставка, книга хорошие цены, книга Культурное наследие, книга энциклопедия, книга Иллюстрации, книга большие, книга лучший, книга сборник, история купить, история заказать, история Узбекистан, история доставка, история хорошие цены, история Культурное наследие, история энциклопедия, история Иллюстрации, история большие, история лучший, история сборник, купить книгу купить, купить книгу заказать, купить книгу Узбекистан, купить книгу доставка, купить книгу хорошие цены, купить книгу Культурное наследие, купить книгу энциклопедия, купить книгу Иллюстрации, купить книгу большие, купить книгу лучший, купить книгу сборник, books to buy, order books, books Uzbekistan, book delivery, books are good prices, books Cultural heritage, books encyclopedia, books Illustrations, big books, books are the best, books collection, bookstore buy, bookstore order, bookstore Uzbekistan, bookstore delivery, bookstore good prices, bookstore cultural heritage, bookstore encyclopedia, bookstore illustration, bookstore large, the bookstore is the best, bookstore collection, book buy, book order, book Uzbekistan, book delivery, book good prices, book Cultural heritage, book encyclopedia, book Illustrations, book big, book is the best, book collection, history buy, history order, history of Uzbekistan, delivery history, history good prices, history Cultural heritage, history encyclopedia, history Illustrations, history big, history is the best, history collection, buy a book buy, buy a book order, buy book Uzbekistan, buy book delivery, buy a book good prices, buy the book Cultural heritage, buy a book encyclopedia, buy book Illustrations, buy a book big, buy the best book, buy book collection, kitob sotib olish, kitoblarga buyurtma berish, kitoblar O'zbekiston, kitob etkazib berish, kitoblar yaxshi narxlar, madaniy meros, kitoblar entsiklopediyasi, rasmlar kitoblari, katta kitoblar, kitoblar eng zo'r, kitoblar to'plami, kitob do'konini sotib olish, kitob do'koniga buyurtma, O'zbekiston kitob do'koni, kitob do'koniga etkazib berish, kitob do'koni yaxshi narxlar, madaniy meros kitoblari do'koni, kitob do'koni entsiklopediyasi, kitob do'konining illyustratsiyasi, kitob do'koni katta, kitob do'koni eng yaxshisi, kitob do'konlari to'plami, kitob sotib olish, kitob buyurtmasi, kitob O'zbekiston, kitob etkazib berish, yaxshi narxlarni bron qiling, madaniy meros kitobi, kitob entsiklopediyasi, rasmlar kitobi, kitob katta, kitob eng zo'r, kitoblar to'plami, tarixni sotib olish, tarix tartibi, O'zbekiston tarixi, etkazib berish tarixi, tarix yaxshi narxlar, tarixi Madaniy meros, tarix ensiklopediyasi, tarixiy rasmlar, tarix katta, tarix eng yaxshisi, tarixiy kompilyatsiya, kitob sotib olish, kitob buyurtmasini sotib olish, sotib olish kitobi O'zbekiston, kitob etkazib berishni sotib olish, kitobni yaxshi narxlarda sotib oling, madaniy meros kitobini sotib oling, kitob ensiklopediyasini sotib olish, Illyustratsiyalar kitobini sotib oling, katta kitob sotib olish, eng yaxshi kitobni sotib oling, kitob to'plamini sotib olish`,
        },
      ],
    }
  },
  created() {
    this.fetchBooks()
    this.fetchReviews()
  },
  mounted() {
    if (window.innerWidth < 768) {
      this.bigWindow = false
    }
    window.addEventListener('scroll', this.handleScroll)
    this.handleWindow()
    const headerChild = document.getElementById('header').children[1]
    const headerChildEffect = document.getElementById('header').children[0]
    headerChildEffect.children[1].style.display = ''
    if (innerWidth > 968) {
      for (let i = 0; i < 4; i++) {
        headerChild.children[i].style.display = 'none'
      }
    }
  },
  computed: {
    cart() {
      return this.$store.getters.cart
    },
  },
  methods: {
    handleCart(elem) {
      this.$store.commit('handleCart', elem)
    },
    fetchBooks() {
      fetch(`${BASE_URL}${this.$i18n.locale}/books/list/?ordering=-id&limit=3`)
        .then((res) => {
          return res.json()
        })
        .then((json) => {
          this.popular = json.results
          this.popular_rec = this.popular.pop()
        })
    },
    fetchReviews() {
      fetch(`${BASE_URL}${this.$i18n.locale}/reviews/?limit=12&ordering=-id`)
        .then((res) => {
          return res.json()
        })
        .then((json) => {
          this.reviews = json.results
        })
    },
    handleScroll() {
      this.handleWindow()
      const headerChild = document.getElementById('header').children[1]
      const headerChildEffect = document.getElementById('header').children[0]
      if (
        this.$route.name === `index___${this.$i18n.locale}` &&
        window.innerWidth > 768 &&
        window.innerWidth <= 1920
      ) {
        if (window.scrollY < window.innerHeight) {
          this.closeHeader()
        }
        if (window.scrollY > window.innerHeight) {
          this.openHeader()
        }
        if (window.innerWidth < 978) {
          headerChildEffect.style.display = ''
          headerChildEffect.children[1].style.display = ''
          headerChild.style.opacity = '1'
          for (let i = 0; i < 4; i++) {
            headerChild.children[i].style.display = ''
          }
        }
        this.runAnimScroll = false
        const paraTitle = this.$refs.paraTitle
        const paraName = this.$refs.paraName
        const logo = this.$refs.logo
        const logoAlter = this.$refs.logoAlter
        const scrollDevision = window.scrollY / window.innerHeight

        if (5.5 - scrollDevision * 5 > 1.6338) {
          paraTitle.style.top = `-${scrollDevision * 6.7}rem`
          paraName.style.fontSize = `${5.5 - scrollDevision * 5}em`
          logo.style.marginTop = `${0.92 - scrollDevision * 2.5}em`
          for (let i = 0; i < logo.children.length; i++) {
            logo.children[i].style.fontSize = `${6.5 - scrollDevision * 5}em`
          }
        }
        if (scrollDevision * 100 < 65) {
          logo.style.width = `${100 - scrollDevision * 100}vw`
        }
        logo.children[1].style.top = `${scrollDevision * 2.9}rem`
        logo.children[2].style.top = `${scrollDevision * 5.5}rem`
        logo.children[1].style.left = `${-scrollDevision * 5}rem`
        logo.children[2].style.left = `${-scrollDevision * 13}rem`
        if (window.innerWidth < 1500) {
          paraTitle.style.top = `-${scrollDevision * 3.7}rem`
          logo.children[0].style.left = `${scrollDevision * 3}rem`
          logo.children[1].style.left = `${-scrollDevision * 3}rem`
          logo.children[2].style.left = `${-scrollDevision * 10}rem`
          paraName.style.fontSize = `${3 - scrollDevision * 1.8}em`
          logo.style.marginTop = `${0.92 - scrollDevision * 3.3}em`
          for (let i = 0; i < logo.children.length; i++) {
            logo.children[i].style.fontSize = `${5.5 - scrollDevision * 4}em`
          }
        }
        logoAlter.style.display = 'none'

        if (scrollDevision * 5 < 0.3) {
          logoAlter.style.display = 'block'
          logo.style.width = ''
          paraTitle.style.top = ''
          paraName.style.lineHeight = ''
          paraName.style.fontSize = ''
          logo.style.marginTop = ''
          for (let i = 0; i < logo.children.length; i++) {
            logo.children[i].style.fontSize = ''
            logo.children[i].style.top = ''
            logo.children[i].style.left = ''
          }
        }
      } else if (this.$route.name === `catalogue___${this.$i18n.locale}`) {
        const header = document.getElementById('header')
        header.style.position = 'relative'
        header.style.top = ''
        header.style.background = '#f9e6c4'
        headerChildEffect.style.display = ''
        headerChildEffect.children[1].style.display = 'flex'
        headerChildEffect.children[0].style.animation = 'none'
        headerChildEffect.children[1].style.animation = 'none'
        headerChild.style.opacity = '1'
        for (let i = 0; i < 4; i++) {
          headerChild.children[i].style.display = ''
        }
      } else if (
        this.$route.name === `about___${this.$i18n.locale}` ||
        this.$route.name === `details-id___${this.$i18n.locale}`
      ) {
        const header = document.getElementById('header')
        header.style.position = 'absolute'
        header.style.top = ''
        header.style.background = 'transparent'
        headerChildEffect.style.display = ''
        headerChild.style.opacity = '1'
        for (let i = 0; i < 4; i++) {
          headerChild.children[i].style.display = ''
        }
      }
    },
    openHeader() {
      const header = document.getElementById('header')
      header.style.position = 'absolute'
      if (innerWidth <= 1920) {
        header.style.top = '103vh'
      } else {
        header.style.top = '52vh'
      }
      const headerChildEffect = document.getElementById('header').children[0]
      headerChildEffect.style.display = ''
      headerChildEffect.children[1].style.display = 'flex'
      const headerChild = document.getElementById('header').children[1]
      headerChild.style.opacity = '1'
      for (let i = 0; i < 4; i++) {
        headerChild.children[i].style.display = ''
      }
    },
    closeHeader() {
      const header = document.getElementById('header')
      const headerChildEffect = document.getElementById('header').children[0]
      headerChildEffect.style.display = 'none'
      header.style.transition = 'none'
      header.style.position = 'fixed'
      header.style.top = '0'
      const headerChild = document.getElementById('header').children[1]
      headerChild.style.opacity = '0'
      for (let i = 0; i < 4; i++) {
        headerChild.children[i].style.display = 'none'
      }
    },
    handleWindow() {
      const headerChild = document.getElementById('header').children[1]
      const header = document.getElementById('header')
      const headerChildEffect = document.getElementById('header').children[0]
      headerChildEffect.style.display = 'none'
      header.style.position = 'absolute'
      header.style.background = 'inherit'
      headerChild.style.opacity = '0'
      for (let i = 0; i < 4; i++) {
        headerChild.children[i].style.display = 'none'
      }
      if (window.innerWidth < 978 && window.innerWidth > 768) {
        headerChild.style.opacity = '1'
        headerChildEffect.style.display = ''
        headerChildEffect.children[1].style.display = 'flex'
        for (let i = 0; i < 4; i++) {
          headerChild.children[i].style.display = ''
        }
      }
      if (window.innerWidth < 768) {
        header.style.position = 'fixed'
        header.style.background = 'inherit'
        headerChild.style.opacity = '0'
        for (let i = 1; i < 4; i++) {
          headerChild.children[i].style.display = 'none'
        }
      }
      if (window.innerWidth < 540 && window.innerWidth > 430) {
        headerChild.style.opacity = '1'
        headerChildEffect.style.display = ''
        headerChildEffect.children[1].style.display = 'flex'
        for (let i = 0; i < 4; i++) {
          headerChild.children[i].style.display = ''
        }
      }
      if (
        (window.innerWidth > 540 && window.innerWidth < 768) ||
        window.innerWidth < 430
      ) {
        headerChild.style.opacity = '1'
        headerChild.children[0].style.display = ''
        headerChildEffect.style.display = ''
        headerChildEffect.children[1].style.display = 'flex'
        for (let i = 1; i < 4; i++) {
          headerChild.children[i].style.display = 'none'
        }
      }
      if (window.innerWidth > 1920) {
        if (window.scrollY < window.innerHeight / 2) {
          this.closeHeader()
        }
        if (window.scrollY > window.innerHeight / 2) {
          this.openHeader()
        }
      }
    },
    checkIfExists(id) {
      let trial = false
      this.cart.forEach((element) => {
        if (element.id === id) trial = true
      })
      return trial
    },
  },
}
</script>
<style lang="scss" scoped>
.main {
  overflow: hidden;
  .recomend {
    background-color: #f9e6c4;
    color: #3f3f3f;
    position: relative;
    height: 100vh;
    width: 100vw;
    .parallax {
      position: fixed;
      margin-top: 5rem;
      .bird {
        position: absolute;
        top: -4em;
      }
      .para-title {
        position: absolute;
        z-index: 40;
        top: 0;
        .para-name {
          display: inline-block;
          font-family: 'NewBodoni', serif;
          font-style: normal;
          font-weight: normal;
          font-size: 5.6em;
          line-height: 5.3rem;
          margin-left: 4.3rem;
          transition: all 0.5s;
          position: relative;
        }
        .cont-para {
          text-align: center;
          margin-top: 2.5rem;
          position: relative;
          width: 100vw;
          &:nth-child(1) {
            transition: all 0.3s;
          }
          .other-color {
            position: absolute;
            top: 0;
            right: 0;
            margin-top: 0;
            width: 41.4em;
            height: 8.1em;
            overflow: hidden;
            color: #f9e6c4;
            .toster {
              position: absolute;
              right: 0;
              width: 100vw;
              .para-logo-alter {
                position: relative;
                font-family: 'NK147', serif;
                font-style: normal;
                font-weight: 500;
                font-size: 6.5em;
                line-height: 1.5em;
                margin-right: 2.5rem;
                &:nth-child(1) {
                  &::before {
                    position: relative;
                    content: '“';
                  }
                }
                &:nth-child(3) {
                  &::after {
                    position: relative;
                    content: '”';
                  }
                }
              }
            }
          }
          .para-logo {
            position: relative;
            font-family: 'NK147', serif;
            font-style: normal;
            font-weight: 500;
            font-size: 6.5em;
            line-height: 1.5em;
            transition: all 0.3s;
            &:not(:last-child) {
              margin-right: 2.5rem;
            }
            &:nth-child(1) {
              &::before {
                position: relative;
                content: '“';
              }
            }
            &:nth-child(3) {
              &::after {
                position: relative;
                content: '”';
              }
            }
          }
        }
      }
      .page {
        display: flex;
        justify-content: space-between;
        margin-top: 23.5rem;
        padding-bottom: 10rem;
        width: 100vw;
        position: relative;
        .quote {
          max-width: 45vw;
          text-align: center;
          margin-left: 5rem;
          .what {
            font-family: 'Raleway', serif;
            font-style: italic;
            font-weight: 300;
            font-size: 2.5em;
            line-height: 3.6rem;
            color: #776950;
          }
          .who {
            margin-top: 2rem;
            display: block;
            text-align: right;
            font-family: 'Cormorant Garamond', serif;
            font-style: italic;
            font-weight: normal;
            font-size: 2.6em;
            line-height: 3.1rem;
            color: #776950;
          }
        }
        .book {
          width: 36em;
          height: 21em;
          display: flex;
          background: #dec9a4;
          margin-top: 5rem;
          margin-right: 12rem;
          position: relative;
          z-index: 40;
          .bookmark {
            position: absolute;
            top: -0.5em;
            left: 0.75em;
          }
          .book-img {
            width: 15em;
            height: 18.8em;
            padding-top: 1.1rem;
            padding-bottom: 1.1rem;
            padding-left: 3.75rem;
            position: relative;
            z-index: 10;
          }
          .text {
            padding-top: 1.2em;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: center;
            margin-left: 1.5em;
            font-family: 'Cormorant Garamond', serif;
            .md-none {
              display: none;
            }
            .text-alter {
              display: none;
            }
            h1 {
              color: #95815e;
              font-size: 1.5em;
              line-height: 1.5rem;
              font-style: normal;
              font-weight: 600;
            }
            h2 {
              color: #fffaf2;
              font-style: italic;
              font-weight: 700;
              font-size: 1.75em;
              line-height: 1.75rem;
            }
            button {
              margin-top: 0.1em;
              margin-left: auto;
              margin-right: auto;
              width: 13.5rem;
              background: #a08555;
              box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
              font-style: italic;
              font-weight: bold;
              font-size: 2em;
              line-height: 2.2rem;
              color: #fffaf2;
              cursor: pointer;
            }
          }
        }
        .book-fon {
          position: absolute;
          right: 7.4rem;
          top: -16em;
          width: 34.1em;
          height: 43.75em;
          img {
            width: 100%;
            height: 100%;
          }
          .fon-text {
            position: absolute;
            text-align: center;
            font-family: 'Bitter', serif;
            font-style: normal;
            font-weight: 500;
            font-size: 2.1em;
            line-height: 2.6rem;
            color: #fffaf2;
            margin-top: 4.2em;
          }
        }
      }
    }
  }
  .popular {
    background-color: #fffcf7;
    position: relative;
    z-index: 100;
    height: auto;
    padding-bottom: 3rem;
    .popular-fon {
      position: absolute;
      top: 7em;
      right: 0;
    }
    .popular-name {
      font-family: 'Oranienbaum', serif;
      font-style: normal;
      font-weight: normal;
      font-size: 4.1em;
      margin-left: 20rem;
      padding-top: 10rem;
      padding-bottom: 5rem;
      color: #c6b18d;
      position: relative;
      &::after {
        position: absolute;
        content: url('../assets/image/popular-img.png');
        left: -0.55em;
      }
    }
    .popular-book {
      display: flex;
      justify-content: center;
      position: relative;
      margin-top: 12rem;
      z-index: 20;

      .popular-book-img {
        margin-left: 9rem;
        position: relative;
        height: 507px;
        width: 404px;
        .popular-img {
          height: 507px;
          width: 404px;
        }
        .book-buy {
          position: absolute;
          bottom: 0.75em;
          right: 0.75em;
          z-index: 10;
          width: 3.6em;
          height: 3.6rem;
          background: none !important;
          cursor: pointer;
        }
      }
      .text-book {
        margin-right: 2rem;
        .book-title {
          margin-left: 5rem;
          font-family: 'Alegreya', serif;
          font-style: normal;
          font-weight: 500;
          font-size: 2.8em;
          line-height: 3.2rem;
          text-align: center;
          color: #3f3f3f;
        }
        .book-what {
          margin-top: 1rem;
          display: flex;
          .text-center {
            .text-list {
              display: flex;
              font-family: 'Cormorant Garamond', serif;
              .text-list-h1 {
                width: 45%;
                text-align: right;
                font-style: normal;
                font-weight: 600;
                font-size: 34px;
                margin-top: 0.4em;
                color: #95815e;
              }
              .text-list-h2 {
                width: 40%;
                font-style: italic;
                font-weight: 500;
                font-size: 37px;
                color: #3f3f3f;
                margin-top: 0.4em;
                text-align: center;
              }
              &:last-child {
                h2 {
                  width: 40%;
                  font-size: 30px;
                  line-height: 36px;
                  text-align: inherit !important;
                  margin-left: 2.3em;
                }
              }
              &:first-child {
                h2 {
                  margin-top: auto;
                  margin-bottom: auto;
                }
              }
            }
          }
        }
      }
      .popular-btn {
        position: absolute;
        bottom: -100px;
        background: inherit;
        display: flex;
        align-items: center;
        font-family: 'Cormorant Garamond', serif;
        font-style: italic;
        font-weight: bold;
        font-size: 32px;
        line-height: 32px;
        text-align: center;
        color: #3f3f3f;
        cursor: pointer;
        transition: font-size 0.3s;
        &::after {
          content: '';
          width: 6.8rem;
          height: 2px;
          background: #3f3f3f;
          margin-left: 0.5em;
          transition: width 0.5s;
        }
        &::before {
          content: '';
          width: 6.8rem;
          height: 2px;
          background: #3f3f3f;
          margin-right: 0.5em;
          transition: width 0.5s;
        }
        &:hover {
          font-size: 36px;
          &::after {
            width: 4.5rem;
          }
          &::before {
            width: 4.5rem;
          }
        }
      }
    }
    .row-reverse {
      flex-direction: row-reverse;
      .popular-book-img {
        margin-right: 9rem;
        margin-left: 0;
      }
    }
    .go-in-catalog {
      display: flex;
      justify-content: center;
      margin-top: 10rem;

      a {
        font-family: 'Cormorant Garamond', serif;
        font-style: italic;
        font-weight: bold;
        font-size: 2rem;
        line-height: 2.8rem;
        color: #3f3f3f;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: font-size 0.1s;
        span {
          position: absolute;
          background: #f3c570;
          transition: all 0.25s;
          &:nth-child(1) {
            width: 200px;
            height: 3px;
            left: 0.7em;
            top: 0;
          }
          &:nth-child(2) {
            width: 3px;
            height: 45px;
            right: 0.7em;
            bottom: -0.2em;
          }
          &:nth-child(3) {
            width: 200px;
            height: 3px;
            bottom: 0;
            right: 0.5em;
          }
          &:nth-child(4) {
            width: 3px;
            height: 60px;
            left: 1em;
            bottom: -0.3em;
          }
        }
        &:hover {
          // font-size: 2.2rem;
          span {
            &:nth-child(1) {
              left: 1em;
            }
            &:nth-child(2) {
              bottom: 0;
            }
            &:nth-child(3) {
              right: 0.7em;
            }
            &:nth-child(4) {
              bottom: -0.2em;
            }
          }
        }
      }
    }
  }
}
@media (min-width: 1920px) and (max-width: 5000px) {
  .main {
    .recomend {
      height: 50vh;
      .parallax {
        .para-title {
          .cont-para {
            max-width: 1920px;
            .other-color {
              .toster {
                max-width: 1920px;
              }
            }
          }
        }
        .page {
          max-width: 1920px;
        }
      }
    }
  }
}
@media screen and (max-width: 1920px) {
  .main {
    .recomend {
      height: 100vh;
    }
  }
}
@media screen and (max-width: 1600px) {
  .main {
    .recomend {
      .parallax {
        .para-title {
          .para-name {
            font-size: 3.5em;
          }
          .cont-para {
            margin-top: 1rem;
            .other-color {
              width: 35em;
              .toster {
                .para-logo-alter {
                  font-size: 5em;
                }
              }
            }
            .para-logo {
              font-size: 5em;
            }
          }
        }
        .page {
          margin-top: 21rem;
          .quote {
            margin-left: 3em;
            .what {
              font-size: 2em;
            }
            .who {
              margin-top: 1.5rem;
              font-size: 2.1em;
            }
          }
          .book {
            width: 32em;
            height: 19em;
            margin-right: 8rem;
            margin-top: 4rem;
            .bookmark {
              width: 3em;
              height: 3em;
            }
            .book-img {
              width: auto;
              height: 16em;
              padding-left: 2rem;
            }
          }
          .book-fon {
            width: 30em;
            height: 40em;
            right: 5rem;
            top: -15em;
            .fon-text {
              font-size: 1.7em;
              padding-left: 1rem;
              padding-right: 1rem;
            }
          }
        }
      }
    }
    .popular {
      .popular-name {
        font-size: 3em;
        &::after {
          left: -0.75em;
        }
      }
      .popular-book {
        .popular-book-img {
          margin-left: 7rem;
          width: 320px;
          height: 400px;
          .popular-img {
            width: 320px;
            height: 400px;
          }
        }
        .text-book {
          .book-title {
            font-size: 2.1em;
            margin-left: 3rem;
          }
          .book-what {
            .text-center {
              .text-list {
                .text-list-h1 {
                  font-size: 26px;
                  margin-left: 1.5rem;
                  margin-top: 0.2em;
                }
                .text-list-h2 {
                  font-size: 30px;
                  margin-top: 0.2em;
                }
                &:last-child {
                  h2 {
                    width: 45%;
                    font-size: 25px;
                    margin-left: 1.5em;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1300px) {
  .main {
    overflow: inherit;
    .recomend {
      .parallax {
        margin-top: 3rem;
        .para-title {
          .para-name {
            font-size: 3em;
          }
          .cont-para {
            margin-top: 0;
            .other-color {
              width: 29em;
              .toster {
                .para-logo-alter {
                  font-size: 4.5em;
                  line-height: 4.5rem;
                }
              }
            }
            .para-logo {
              font-size: 4.5em;
              line-height: 4.5rem;
            }
          }
        }
        .page {
          margin-top: 15rem;
          .quote {
            margin-left: 2.5em;
            .what {
              font-size: 1.7em;
            }
            .who {
              margin-top: 1rem;
              font-size: 2em;
            }
          }
          .book {
            width: 27em;
            height: 17em;
            margin-right: 4rem;
            margin-top: 4rem;
            .text {
              padding-top: 0.75em;
              margin-left: 0.5rem;
              h1 {
                font-size: 1.4em;
              }
              h2 {
                font-size: 1.4em;
              }
              button {
                width: 11.5rem;
                height: 3.5rem;
                font-size: 1.5em;
                line-height: 1.1em;
              }
            }
            .bookmark {
              width: 3em;
              height: 3em;
            }
            .book-img {
              width: auto;
              height: 13em;
              padding-left: 1rem;
            }
          }
          .book-fon {
            width: 27em;
            height: 34em;
            right: 2rem;
            top: -11em;
            .fon-text {
              font-size: 1.3em;
              margin-top: 5.5rem;
              padding-left: 1rem;
              padding-right: 1rem;
            }
          }
        }
      }
    }
    .popular {
      .popular-name {
        font-size: 2.4em;
        padding-bottom: 3rem;
        margin-left: 0;
        text-align: center;
        &::after {
          display: none;
          left: -0.75em;
        }
      }
      .popular-book {
        margin-top: 8rem;

        .popular-book-img {
          margin-left: 4rem;
          width: 220px;
          height: 300px;
          .popular-img {
            width: 220px;
            height: 300px;
          }
        }
        .text-book {
          .book-title {
            font-size: 1.5em;
            line-height: 1.8em;
            text-align: center;
            margin-left: 3rem;
            margin-right: 3rem;
          }
          .book-what {
            margin-top: 0.5rem;
            .text-center {
              .text-list {
                .text-list-h1 {
                  width: 35%;
                  font-size: 23px;
                  margin-left: 1rem;
                  margin-top: 0.2em;
                  line-height: 26px;
                }
                .text-list-h2 {
                  width: 50%;
                  line-height: 26px;
                  font-size: 26px;
                  margin-top: 0.2em;
                }
                &:last-child {
                  h2 {
                    width: 55%;
                    font-size: 22px;
                    margin-left: 1.5em;
                  }
                }
              }
            }
          }
        }
        .popular-btn {
          bottom: -70px;
        }
      }
      .row-reverse {
        .popular-book-img {
          margin-right: 5rem;
          margin-left: 0;
        }
      }
      .go-in-catalog {
        margin-top: 7rem;
      }
    }
  }
}
@media screen and (max-width: 975px) {
  .main {
    .recomend {
      .parallax {
        .para-title {
          .para-name {
            display: none;
          }
          .cont-para {
            display: none;
          }
        }
        .page {
          justify-content: center;
          .quote {
            display: none;
          }
          .book {
            width: 28em;
            margin-right: 5rem;
            margin-top: 5rem;
            min-height: 19em;
            position: relative;
            .text {
              width: 28em;
              background: #dec9a4;
              z-index: 100;
              h1 {
                font-size: 1.7em;
              }
              h2 {
                font-size: 1.7em;
              }
            }
            .book-img {
              position: absolute;
              height: 23em;
              top: -16rem;
              left: -5rem;
            }
          }
          .book-fon {
            right: 4rem;
            .fon-text {
              margin-top: 3rem;
              padding-left: 4rem;
              padding-right: 2rem;
            }
          }
        }
      }
    }
    .popular {
      .popular-book {
        .popular-book-img {
          margin-left: 3rem;
          width: 220px;
          height: 290px;
          .popular-img {
            width: 220px;
            height: 290px;
          }
        }
        .text-book {
          .book-title {
            font-size: 1.4em;
            line-height: 1.5em;
            margin-left: 2rem;
            margin-right: 2rem;
          }
          .book-what {
            .text-center {
              .text-list {
                .text-list-h1 {
                  width: 50%;
                  font-size: 22px;
                  margin-top: 0.4em;
                }
                .text-list-h2 {
                  width: 40%;
                  line-height: 25px;
                  font-size: 24px;
                  margin-top: 0.4em;
                }
                &:last-child {
                  h1 {
                    display: none;
                  }
                  h2 {
                    width: 100%;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .main {
    .recomend {
      .parallax {
        .para-title {
          .cont-para {
            display: block;
            text-align: left;
            .para-logo {
              display: block;
              margin-top: 4rem;
              position: absolute;
              &:nth-child(1) {
                font-size: 3.2em;
                line-height: 0.4em;
                margin-left: 2.3rem;
              }
              &:nth-child(2) {
                font-size: 3.2em;
                line-height: 0.4em;
                margin-left: 10rem !important;
                top: 1.15rem;
              }
              &:nth-child(3) {
                font-size: 3.2em;
                line-height: 0.5em;
                margin-left: 18.2rem !important;
                top: 2.3rem;
              }
            }
            .other-color {
              width: 23em;
              .toster {
                display: flex;
                flex-direction: column;
                margin-top: 3.95rem;
                .para-logo-alter {
                  &:nth-child(1) {
                    font-size: 3.2em;
                    line-height: 0.4em;
                    margin-left: 2.3rem;
                  }
                  &:nth-child(2) {
                    font-size: 3.2em;
                    line-height: 0.4em;
                    margin-left: 10rem !important;
                  }
                  &:nth-child(3) {
                    font-size: 3.2em;
                    line-height: 0.5em;
                    margin-left: 18.2rem !important;
                  }
                }
              }
            }
          }
        }
        .page {
          justify-content: center;
          .quote {
            display: none;
          }
          .book {
            width: 30em;
            margin-right: 0;
            margin-top: 11rem;
            min-height: 5em !important;
            height: inherit;
            position: relative;
            .bookmark {
              display: block;
              right: 0.5rem;
              left: inherit;
              z-index: 110;
              width: 2.5em;
              height: 2.5em;
            }
            .text {
              width: 30em;
              background: #dec9a4;
              z-index: 100;
              text-align: inherit;
              justify-content: inherit;
              align-items: center;
              margin-left: 0;
              .text-none {
                display: none;
              }
              .text-alter {
                display: block;
                margin-bottom: 2rem;
                li {
                  display: flex;
                  align-items: center;
                }
              }
              h1 {
                margin-bottom: 0.75rem;
                width: 50%;
                font-size: 1.4em;
                margin-left: 0.5rem;
              }
              h2 {
                text-align: center;
                width: 50%;
                font-size: 1.7em;
                margin-right: 0.5rem;
              }
              button {
                position: absolute;
                bottom: -2.5rem;
                background-color: #f9e6c4;
                color: #fff;
              }
            }
            .book-img {
              position: absolute;
              height: 23em;
              top: -18rem;
              left: -3.5rem;
            }
          }
          .book-fon {
            right: -4rem;
            .fon-text {
              display: none;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 540px) {
  .main {
    .recomend {
      .parallax {
        .para-title {
          display: none;
        }
        .page {
          justify-content: center;
          .book {
            width: 25em;
            margin-top: 3.5rem;
            .bookmark {
              right: inherit;
              left: 0;
              width: 4em;
              height: 4em;
            }
            .text {
              width: 25em;
              .md-none {
                display: block;
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                padding-left: 3.2rem;
                padding-right: 3.2rem;
                text-align: center;
                font-family: 'Bitter', serif;
                font-style: normal;
                font-weight: 500;
                font-size: 19px;
                line-height: 22px;
                color: #fffaf2;
              }
              .text-alter {
                display: none;
              }
              .text-none {
                display: block;
              }
              h1 {
                margin-bottom: 0.5rem;
                width: 100%;
                margin-left: 0;
                text-align: center;
              }
              h2 {
                text-align: center;
                width: 100%;
                margin-right: 0;
                margin-bottom: 0.5rem;
              }
              button {
                width: 15rem;
                bottom: -3.3rem;
                color: #fff;
                font-size: 1.7em;
              }
            }
            .book-img {
              height: 18em;
              left: inherit;
              right: 0;
              top: -12.1em;
            }
          }
          .book-fon {
            right: inherit;
            left: -16rem;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 430px) {
  .main {
    .recomend {
      .parallax {
        .para-title {
          display: block;
          .cont-para {
            .para-logo {
              margin-top: 0.5rem;
              position: absolute;
              &:nth-child(1) {
                font-size: 2em;
                line-height: 0.4em;
                margin-left: 0.5rem;
              }
              &:nth-child(2) {
                font-size: 2em;
                line-height: 0.4em;
                margin-left: 5.3rem !important;
                top: 1.15rem;
              }
              &:nth-child(3) {
                font-size: 2em;
                line-height: 0.4em;
                margin-left: 10.4rem !important;
                top: 2.3rem;
              }
            }
            .other-color {
              display: none;
            }
          }
        }
        .page {
          justify-content: center;
          .book {
            width: 90vw;
            margin-top: 3.5rem;
            .bookmark {
              right: inherit;
              left: 0;
              width: 3em;
              height: 3em;
            }
            .text {
              width: 90vw;
              .md-none {
                display: block;
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                padding-left: 2rem;
                padding-right: 2rem;
                text-align: center;
                font-family: 'Bitter', serif;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 22px;
                color: #fffaf2;
              }
              .text-alter {
                display: none;
              }
              .text-none {
                display: block;
              }
              h1 {
                font-size: 1.2em;
                margin-bottom: 0.2rem;
                width: 100%;
                margin-left: 0;
                text-align: center;
              }
              h2 {
                font-size: 1.6em;
                text-align: center;
                width: 100%;
                margin-right: 0;
                margin-bottom: 0.2rem;
              }
              button {
                width: 15rem;
                bottom: -3.3rem;
                color: #fff;
                font-size: 1.7em;
              }
            }
            .book-img {
              top: -10.1em;
              height: 15em;
              left: inherit;
              right: 0;
            }
          }
          .book-fon {
            right: inherit;
            left: -19rem;
          }
        }
      }
    }
  }
}
</style>
