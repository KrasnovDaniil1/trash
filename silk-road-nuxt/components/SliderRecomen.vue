<template lang="pug">
    div.slider(v-if="this.smallWindow")
        div.lds-roller(v-if="slider.length === 0" style="position:absolute;z-index:500;left:50%;top:50%;transform: translateX(-50%) translateY(-50%);")
          div
          div
          div
          div
          div
          div
          div
          div
        img.slider-fon(src='../assets/image/sliderRecomen-fon.svg')
        h1.popularing {{ $t('index.popular-book') }}
        h2.title {{ $t("header.name-book") }}
        div.booking(ref="slider" @scroll="handleActiveThrottler")
          div.book(v-for="item in slider" :key="item.id" ref="elems")
              img.slider-img(:src="item.img")
              ul.book-text
                  li.page
                      h3.static.text-left {{ $t("index.author-book") }}
                      h4.dinamic {{item.name}}
                  li.page
                      h3.static {{ $t("index.year-book") }}
                      h4.dinamic {{item.year}}
                  li.page
                      h3.static {{ $t("header.price") }}
                      h4.dinamic {{item.price}}
              span.text {{item.about}}
        button.popular-btn {{ $t("index.popular-book") }}
        div.nav-item(ref="items")
            span.item(@click='scrollForItem(index)' :class="{active: activeIndex === index}" v-for="(item, index) in slider" :key="item.id")
</template>
<script>
export default {
  props: {
    slider: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeIndex: 0,
      smallWindow: true,
    }
  },
  /* eslint-enable object-shorthand */
  methods: {
    autoScrollBlock(btn) {
      const slide = this.$refs.slider
      setInterval(() => {
        if (btn !== 0) {
          slide.appendChild(slide.children[0])
        }
        slide.scrollBy({ left: 100 })
        btn = 1
      }, 4000)
    },

    scrollBlock(btn) {
      const slide = this.$refs.slider
      if (btn === -1) {
        slide.insertBefore(
          slide.children[slide.children.length - 1],
          slide.children[0]
        )
      } else if (this.scroll === 1 && btn === 1) {
        slide.appendChild(slide.children[0])
      }
      this.scroll = 1
      slide.scrollBy({ left: 100 * btn })
    },
    scrollForItem(index) {
      for (let i = 0; i < Math.abs(index - this.activeIndex); i++) {
        console.log(i)
        if (index - this.activeIndex < 0) {
          this.scrollBlock(-1)
        } else {
          this.scrollBlock(1)
        }
      }
    },
    handleActive() {
      this.$refs.elems.forEach((elem, index) => {
        if (
          elem.getBoundingClientRect().left <= 10 &&
          elem.getBoundingClientRect().left >= -10
        ) {
          this.activeIndex = index
        }
      })
    },
    handleActiveThrottler() {
      if (this.scrollTimeout) clearTimeout(this.scrollTimeout)

      this.scrollTimeout = setTimeout(() => this.handleActive(), 66)
    },
    handleWindow() {
      if (window.innerWidth > 768) {
        this.smallWindow = false
      } else {
        this.smallWindow = true
      }
    },
  },
  mounted() {
    this.autoScrollBlock(0)
    this.handleWindow()
  },
}
</script>

<style lang="scss" scoped>
.slider {
  display: none;
}
@media screen and (max-width: 768px) {
  .slider {
    display: inherit;
    overflow: hidden;
    background-color: #fffcf6;
    position: relative;
    z-index: 300;
    .slider-fon {
      position: absolute;
      left: -7em;
      top: -5em;
      width: 874px;
      height: 100%;
    }
    .popularing {
      position: relative;
      z-index: 350;
      color: #c6b18d;
      font-family: 'Oranienbaum', serif;
      font-style: normal;
      font-weight: normal;
      font-size: 2.8em;
      line-height: 2em;
      text-align: center;
    }
    .title {
      position: relative;
      z-index: 350;
      color: #3f3f3f;
      font-family: 'Alegreya', serif;
      font-style: normal;
      font-weight: 500;
      font-size: 1.4em;
      line-height: 1.5em;
      text-align: center;
      margin: 0 3rem 1.5rem 3rem;
    }
    .booking {
      position: relative;
      z-index: 350;
      display: flex;
      overflow-x: hidden;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      width: 100vw;
      .book {
        scroll-snap-align: start;
        min-width: 96vw;
        padding-left: 1rem;
        padding-right: 0.5rem;
        .slider-img {
          width: 14em;
          height: 17.5em;
          float: right;
          padding-right: 0.5rem;
          padding-left: 0.5rem;
        }
        .page {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
          .static {
            display: inline-block;
            color: #95815e;
            width: 50%;
            font-style: normal;
            font-weight: 600;
            font-size: 1.3em;
            line-height: 1.2em;
            text-align: right;
          }
          .dinamic {
            width: 50%;
            color: #c99c4d;
            font-style: italic;
            font-weight: 700;
            font-weight: bold;
            font-size: 1.4em;
            line-height: 1.3em;
            text-align: center;
            padding-left: 1rem;
          }
        }
        .text {
          font-style: italic;
          font-weight: 500;
          font-size: 1.3em;
          line-height: 1.5em;
          color: #3f3f3f;
        }
      }
    }
    .popular-btn {
      background: inherit;
      display: flex;
      margin-top: 3rem;
      align-items: center;
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-weight: bold;
      font-size: 2em;
      line-height: 1.5em;
      color: #3f3f3f;
      transition: all 0.4s;
      margin-left: auto;
      margin-right: auto;
      &::after {
        content: '';
        width: 6rem;
        height: 2px;
        background: #3f3f3f;
        margin-left: 0.5em;
        transition: width 0.5s;
      }
      &::before {
        content: '';
        width: 6rem;
        height: 2px;
        background: #3f3f3f;
        margin-right: 0.5em;
        transition: width 0.5s;
      }
    }
    .nav-item {
      margin-top: 3rem;
      z-index: 999;
      position: relative;
      display: flex;
      margin-left: auto;
      margin-right: auto;
      width: 14em;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      .item {
        width: 1.6em;
        height: 1.6em;
        transform: rotate(45deg);
        background-color: #c99c4d;
        cursor: pointer;
      }
      .active {
        width: 1.3em;
        height: 1.3em;
        border: 0.37em solid #c99c4d;
        background-color: #fffcf6;
      }
    }
  }
}
@media screen and (max-width: 610px) {
  .slider {
    .popularing {
      font-size: 2.5em;
    }
    .title {
      font-size: 1.25em;
      margin: 0 0.5rem 1rem 0.5rem;
    }
    .booking {
      .book {
        .slider-img {
          width: 11em;
          height: 14em;
          margin-left: 0.75rem;
          margin-right: 0.25rem;
        }
        .book-text {
          .page {
            .static {
              font-size: 1.15em;
              padding-left: 0;
            }
            .dinamic {
              font-size: 1.2em;
              padding-left: 0.5rem;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 475px) {
  .slider {
    .slider-fon {
      left: -12em;
      transform: rotate(26deg);
    }
    .popularing {
      font-size: 1.75em;
    }
    .title {
      font-size: 1em;
      margin: 0 0.5rem 1rem 0.5rem;
    }
    .booking {
      .book {
        .slider-img {
          display: none;
        }
        .book-text {
          .page {
            .static {
              text-align: left;
              font-size: 1.15em;
              padding-left: 0;
            }
            .dinamic {
              font-size: 1.2em;
              padding-left: 0;
            }
          }
        }
        .text {
          display: block;
          text-align: center;
          width: 92vw;
          font-size: 1.3em;
          margin-top: 0.75rem;
        }
      }
    }
    .popular-btn {
      font-size: 1.7em;
      line-height: 1.5em;
      margin-top: 2.5rem;
      &::after {
        width: 4rem;
      }
      &::before {
        width: 4rem;
      }
    }
  }
}
</style>
