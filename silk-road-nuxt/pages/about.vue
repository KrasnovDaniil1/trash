<template lang="pug">
.about
  .fon
    img.fon-img(src='../assets/image/about-fon.png', ref='fonImg')
  .effects
    span.text
      .span-text(ref='textTop')
      .span-text(ref='textCenter')
      .span-text(ref='textBottom')
  template(v-if='!smallWidth')
    .pages-img
      .pages(
        v-for='page in pages',
        :key='page.id',
        @click='handleActive(page.id)',
        :class='{ active: activeIndex === page.id }'
      )
        img.img(:src='page.img')
        span.img-text {{ page.imgText }}
    .pages-text(
      :class='{ animationText: activeAnimationText, animationTextOff: activeAnimationOffText }'
    )
      img.pages-text-img(src='../assets/image/about-butterfly.png')
      span.text(v-html='textPage')
  template(v-else)
    .pages-alter(v-for='page in pages', :key='page.id')
      .pages-img-alter
        img.img-alter(:src='page.img')
        span.img-text-alter {{ page.imgText }}
      .pages-text-alter
        span.text-alter(v-html='page.text')
</template>
<script>
export default {
  data() {
    return {
      text: this.$t('about.text'),
      pages: [
        {
          id: 0,
          img: require('../assets/image/about-1.png'),
          imgText: this.$t('pages[0].imgText'),
          text: this.$t('pages[0].text'),
        },
        {
          id: 1,
          img: require('../assets/image/about-2.png'),
          imgText: this.$t('pages[1].imgText'),
          text: this.$t('pages[1].text'),
        },
        {
          id: 2,
          img: require('../assets/image/about-3.png'),
          imgText: this.$t('pages[2].imgText'),
          text: this.$t('pages[2].text'),
        },
        {
          id: 3,
          img: require('../assets/image/about-4.png'),
          imgText: this.$t('pages[3].imgText'),
          text: this.$t('pages[3].text'),
        },
        {
          id: 4,
          img: require('../assets/image/about-5.png'),
          imgText: this.$t('pages[4].imgText'),
          text: this.$t('pages[4].text'),
        },
        {
          id: 5,
          img: require('../assets/image/about-6.png'),
          imgText: this.$t('pages[5].imgText'),
          text: this.$t('pages[5].text'),
        },
      ],
      textTopArray: [],
      textCenterArray: [],
      textBottomArray: [],
      letter: [],
      activeIndex: 0,
      textPage: '',
      activeAnimationText: false,
      activeAnimationOffText: false,
      smallWidth: undefined,
    }
  },
  head() {
    return {
      title: `${this.$t('header.about')} - Silk Road Media`,
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          content: '/about.jpg',
        },
        {
          hid: 'description',
          // TODO Description
          name: 'description',
          content: '',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Книги издательского дома Silk Road Media',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.$t('header.about')} - Silk Road Media`,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            "книги купить, книги заказать, книги Узбекистан, книги доставка, книги по всему миру, книги Культурное наследие, книги Фирдавс Абдухаликов, книги Наследие, книги УТ, книги Узбекистан тудей, книги ограниченное количество, книги Абдухаликов,сборник со всего мира купить, сборник со всего мира заказать, сборник со всего мира Узбекистан, сборник со всего мира доставка, сборник со всего мира по всему миру, сборник со всего мира Культурное наследие, сборник со всего мира Фирдавс Абдухаликов, сборник со всего мира Наследие, сборник со всего мира УТ, сборник со всего мира Узбекистан тудей, сборник со всего мира ограниченное количество, сборник со всего мира Абдухаликов, о нас купить, о нас заказать, о нас Узбекистан, о нас доставка, о нас по всему миру, о нас Культурное наследие, о нас Фирдавс Абдухаликов, о нас Наследие, о нас УТ, о нас Узбекистан тудей, о нас ограниченное количество, о нас Абдухаликов, музей купить, музей заказать, музей Узбекистан, музей доставка, музей по всему миру, музей Культурное наследие, музей Фирдавс Абдухаликов, музей Наследие, музей УТ, музей Узбекистан тудей, музей ограниченное количество, музей Абдухаликов, kitob sotib olish, itoblarga buyurtma berish, kitoblar O'zbekiston, kitob etkazib berish, dunyo bo'ylab kitoblar, madaniy meros, Firdavs Abduxoliqovning kitoblari, Eski kitoblar, UT kitoblari, kitoblar bugun O'zbekiston, cheklangan kitoblar, Abduxaliklarning kitoblari, butun dunyo bo'ylab to'plamni sotib oling, butun dunyo tartibidan to'plam, butun dunyo bo'ylab to'plam. O'zbekiston, butun dunyo bo'ylab etkazib berish, butun dunyo bo'ylab to'plam, butun dunyo bo'ylab madaniy meros to'plami, butun dunyo bo'ylab to'plam. Firdavs Abduxoliqov, butun dunyo bo'ylab meros to'plami, butun dunyo bo'ylab to'plam UT, bugungi kunda butun dunyo bo'ylab to'plam, butun dunyo bo'ylab to'plam cheklangan, butun dunyo bo'ylab to'plam Abduxoliqov, biz haqimizda sotib olish, biz haqimizda buyurtma, biz haqimizda O'zbekiston, biz haqida etkazib berish, butun dunyo bo'ylab biz haqimizda, biz haqimizda madaniy meros, biz haqimizda Firdavs Abduxoliqov, biz haqimizda meros, biz haqimizda UT, biz haqimizda bugun O'zbekiston, biz haqimizda cheklangan raqam, biz haqimizda Abduxoliqov, muzey sotib olish, muzey buyurtmasi, muzey O'zbekiston, muzeyni etkazib berish, butun dunyo bo'ylab muzey, Muzey Madaniy meros, Muzey Firdavs Abduxoliqov, Meros muzeyi, UT muzeyi, O'zbekiston Tudey muzeyi, muzeyning cheklangan soni, Abduxoliqov muzeyi, books to buy, order books, books Uzbekistan, book delivery, books around the world, books Cultural heritage, books by Firdavs Abdukhalikov, Legacy books, UT books, books Uzbekistan today, limited books, books of Abdukhaliks, collection from all over the world buy, collection from all over the world order, collection from all over the world Uzbekistan, collection from all over the world delivery, collection from all over the world around the world, collection from around the world Cultural heritage, collection from all over the world Firdavs Abdukhalikov, collection from around the world Heritage, collection from all over the world UT, collection from all over the world Uzbekistan today, collection from all over the world limited number, collection from all over the world Abdukhalikov, about us buy, about us order, about us Uzbekistan, about us delivery, about us all over the world, about us Cultural heritage, about us Firdavs Abdukhalikov, about us Heritage, about us UT, about us Uzbekistan today, about us a limited number, about us Abdukhalikov, museum buy, museum order, museum Uzbekistan, museum delivery, museum around the world, Museum Cultural heritage, Museum Firdavs Abdukhalikov, Heritage Museum, UT Museum, Museum Uzbekistan Tudey, museum limited number, Abdukhalikov Museum",
        },
      ],
    }
  },
  beforeMount() {
    this.smallWidth = window.innerWidth <= 768
  },
  mounted() {
    if (window.innerWidth > 768) {
      this.textPage = this.pages[0].text
    }
    this.textTopArray = this.text.split(' ')[0].split('')
    this.textCenterArray = this.text
      .split('.')[0]
      .split('')
      .slice(this.textTopArray.length + 1)
    this.textCenterArray.push('.')
    this.textBottomArray = this.text.split('.')[1].split('').slice(1)

    this.createElement(this.textTopArray, this.$refs.textTop)
    this.createElement(this.textCenterArray, this.$refs.textCenter)
    this.createElement(this.textBottomArray, this.$refs.textBottom)
    if (this.smallWidth === false) {
      this.letter = document.getElementsByClassName('letter')
      this.scatterElementRandom(this.letter)

      setTimeout(() => {
        this.$nextTick(() => {
          this.returnElementPosition(this.letter)
        })
      }, 1)
    }
  },
  methods: {
    createElement(itemArray, item) {
      for (let i = 0; i < itemArray.length; i++) {
        if (this.smallWidth) {
          item.innerHTML += `<span class="letter" style="display: inline; color:#b29d79; line-height:1.2em;">${itemArray[i]}</span>`
        } else {
          item.innerHTML += `<span class="letter" style="display: inline; color:#fbedd3; line-height:1.2em; transition:color 1s,top 1.6s, left 1.6s, right 1.6s, bottom 1.6s cubic-bezier(0.22, 1, 0.56, 1); position:absolute;">${itemArray[i]}</span>`
        }
      }
    },
    scatterElementRandom(item) {
      for (let i = 0; i < item.length; i++) {
        const randomX = Math.random() * 0.9 * window.innerWidth
        const randomY = Math.random() * 0.9 * window.innerWidth
        const randomFontSize = Math.random() * 8
        item[i].style.fontSize = `${randomFontSize}em`
        if (i % 5 === 0) {
          item[i].style.bottom = `${randomX + i}px`
          item[i].style.right = `${randomY + i}px`
        } else if (i % 3 === 0) {
          item[i].style.top = `${randomX + i}px`
          item[i].style.left = `${randomY + i}px`
        } else if (i % 7 === 0) {
          item[i].style.bottom = `${randomX + i}px`
          item[i].style.left = `${randomY + i}px`
        } else {
          item[i].style.top = `${randomX + i * 2}px`
          item[i].style.right = `${randomY + i * 2}px`
        }
      }
    },
    returnElementPosition(item) {
      for (let i = 0; i < item.length; i++) {
        if (i % 5 === 0) {
          item[i].style.bottom = '0'
          item[i].style.right = '0'
        } else if (i % 3 === 0) {
          item[i].style.top = '0'
          item[i].style.left = '0'
        } else if (i % 7 === 0) {
          item[i].style.bottom = '0'
          item[i].style.left = '0'
        } else {
          item[i].style.top = '0'
          item[i].style.right = '0'
        }
        item[i].style.color = '#C6B18D'
        item[i].style.fontSize = ''
        item[i].style.position = 'relative'
      }
      this.$refs.fonImg.style.transform = 'scale(1)'
    },
    handleActive(id) {
      this.activeAnimationOffText = true
      this.activeIndex = id
      setTimeout(() => {
        this.textPage = this.pages[id].text
        this.activeAnimationOffText = false
        this.activeAnimationText = true
        setTimeout(() => {
          this.activeAnimationText = false
        }, 900)
      }, 300)
    },
  },
}
</script>
<style lang="scss" scoped>
.about {
  .fon {
    position: absolute;
    background-color: #f9e6c4;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    right: 0;
    .fon-img {
      border: none;
      width: 100%;
      height: 100%;
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
      transition: all 1s;
      mix-blend-mode: screen;
    }
  }
  .effects {
    overflow: hidden;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 100;
    .text {
      text-align: center;
      max-width: 48vw;
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-weight: normal;
      font-size: 3vw;
      line-height: 1.3em;
    }
  }
  .pages-img {
    display: flex;
    height: calc(100vw / 6);
    width: 100%;
    .pages {
      width: calc(100vw / 6);
      height: calc(100vw / 6);
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.55),
        rgba(0, 0, 0, 0.55)
      );
      cursor: pointer;
      transition: all 0.5s;
      .img {
        width: 100%;
        height: 100%;
        opacity: 0.4;
        position: relative;
        z-index: 80;
        transition: all 0.5s;
      }
      .img-text {
        position: absolute;
        text-align: center;
        z-index: 100;
        padding-left: 1em;
        padding-right: 1em;
        color: #f9e6c4;
        opacity: 0.65;
        font-family: 'Alegreya', serif;
        transition: all 0.5s;
        font-size: 1vw;
      }
    }
    .active {
      .img {
        opacity: 1;
      }
      .img-text {
        opacity: 1;
      }
    }
  }
  .pages-text {
    background-color: #fffcf6;
    border-top: 3.5vw solid #f9e6c4;
    border-bottom: 3.5vw solid #f9e6c4;
    width: auto;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    .pages-text-img {
      position: absolute;
      height: 90%;
      margin-left: 3rem;
    }
    .text {
      text-align: center;
      margin-left: 15vw;
      margin-right: 15vw;
      padding-top: 2rem;
      padding-bottom: 2rem;
      font-family: 'Cormorant Garamond', serif;
      font-style: normal;
      font-weight: 500;
      font-size: 1.9vw;
      line-height: 1.4em;
      color: #3f3f3f;
      z-index: 100;
      position: relative;
    }
  }
  .pages-alter {
    .pages-img-alter {
      width: 100%;
      height: 25vw;
      overflow: hidden;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .img-alter {
        position: absolute;
        width: 100vw;
        height: 100vw;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
      .img-text-alter {
        position: absolute;
        z-index: 100;
        font-family: 'Alegreya', serif;
        font-style: normal;
        font-weight: 500;
        font-size: 1.6em;
        line-height: 1.3em;
        margin-left: 1.5rem;
        margin-right: 1.5rem;
        text-align: center;
        color: #f9e6c4;
      }
    }
    .pages-text-alter {
      width: 100vw;
      height: auto;
      .text-alter {
        padding: 6vw 6vw;
        display: inline-block;
        font-family: 'Cormorant Garamond', serif;
        font-style: normal;
        font-weight: normal;
        font-size: 1.5em;
        line-height: 1.5em;
        text-align: center;
        color: #3f3f3f;
      }
    }
  }
  .animationText {
    animation-name: animation_text;
    animation-duration: 0.8s;
  }
  .animationTextOff {
    animation-name: animation_text_off;
    animation-duration: 0.4s;
  }
  @keyframes animation_text {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes animation_text_off {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
}
@media screen and (max-width: 968px) {
  .about {
    .effects {
      .text {
        max-width: 52vw;
        font-size: 3.6vw;
      }
    }
    .pages-img {
      .pages {
        .img-text {
          font-size: 1.3vw;
        }
      }
    }
    .pages-text {
      .text {
        font-size: 2.2vw;
        margin-left: 10vw;
        margin-right: 10vw;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .about {
    .fon {
      height: 65vh;
    }
    .effects {
      height: 65vh;
      align-items: flex-end;
      .text {
        max-width: 85vw;
        font-size: 2em;
        margin-bottom: 4vh;
      }
    }
    .pages-alter {
      .pages-img-alter {
        .img-text-alter {
          font-size: 1.4em;
          line-height: 1.2em;
        }
      }
    }
  }
}
@media screen and (max-width: 486px) {
  .about {
    .fon {
      height: 50vh;
    }
    .effects {
      height: 50vh;
      align-items: flex-end;
      .text {
        max-width: 90vw;
        font-size: 3vh;
        margin-bottom: 5vh;
      }
    }
    .pages-alter {
      .pages-img-alter {
        height: 40vw;
        .img-text-alter {
          font-size: 1.2em;
          line-height: 1.2em;
          margin-left: 1rem;
          margin-right: 1rem;
        }
      }
      .pages-text-alter {
        .text-alter {
          font-size: 1.3em;
        }
      }
    }
  }
}
</style>
