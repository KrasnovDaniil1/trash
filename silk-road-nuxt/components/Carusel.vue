<template lang="pug">
.carusel
  div.lds-roller(v-if="carusel.length === 0" style="position:absolute;z-index:500;left:50%;top:50%;transform: translateX(-50%) translateY(-50%);")
    div
    div
    div
    div
    div
    div
    div
    div
  h1.title {{ $t("index.reviews") }}
  button.btn(@click='scrollBlock(-1)')
    span.btn-left
  .animated-block(ref='carusel')
    .block(v-for='item in carusel', :key='item.id')
      h1.name {{ item.author }}
      span.who {{ item.position }}
      span.reviews {{ item.text }}
    .btn-block
      button.btn-block-left(@click='scrollBlock(-1)')
        img(src='@/assets/image/btn-carusel-left.svg')
      img.quotes(src='@/assets/image/quotes.svg')
      button.btn-block-right(@click='scrollBlock(1)')
        img(src='@/assets/image/btn-carusel-right.svg')
  button.btn(@click='scrollBlock(1)')
    span.btn-right
</template>
<script>
export default {
  props: {
    carusel: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      scroll: 0,
    }
  },
  /* eslint-enable object-shorthand */
  methods: {
    scrollBlock(btn) {
      const slide = this.$refs.carusel
      console.log(btn)
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
  },
}
</script>
<style lang="scss" scoped>
.carusel {
  width: 100%;
  border-top: 2.5em solid #f9e6c4;
  border-bottom: 2.5em solid #f9e6c4;
  // margin-top: 5rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fffcf6;
  z-index: 300;
  .title {
    position: absolute;
    top: -0.9em;
    left: 4em;
    font-family: 'Oranienbaum', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 4.75em;
    text-align: center;
    color: #c6b18d;
  }
  .btn {
    background: none;
    display: flex;
    align-items: center;
    width: 6em;
    height: 3em;
    margin-left: 4em;
    margin-right: 4em;
    cursor: pointer;
    z-index: 100;
    .btn-left,
    .btn-right {
      width: 100%;
      height: 0.18em;
      background: #3f3f3f;
      position: relative;
      transition: all 0.3s;
      margin-right: auto;
      margin-left: auto;
      &::after,
      &::before {
        position: absolute;
        content: '';
        width: 1.5em;
        height: 0.15em;
        background: #3f3f3f;
        transition: all 0.3s;
      }
    }
    .btn-left {
      &::after {
        left: -0.2em;
        top: 0.5em;
        transform: rotate(45deg);
      }
      &::before {
        left: -0.2em;
        bottom: 0.5em;
        transform: rotate(-45deg);
      }
    }
    .btn-right {
      &::after {
        right: -0.2em;
        top: 0.5em;
        transform: rotate(-45deg);
      }
      &::before {
        right: -0.2em;
        bottom: 0.5em;
        transform: rotate(45deg);
      }
    }
    &:hover {
      .btn-left,
      .btn-right {
        width: 70%;
        &::after,
        &::before {
          position: absolute;
          content: '';
          width: 1.2em;
          height: 0.15em;
          background: #3f3f3f;
        }
      }
      .btn-left {
        &::after {
          top: 0.4em;
        }
        &::before {
          bottom: 0.4em;
        }
      }
      .btn-right {
        &::after {
          top: 0.4em;
        }
        &::before {
          bottom: 0.4em;
        }
      }
    }
  }
  .animated-block {
    display: flex;
    width: 768px;
    overflow-x: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    &::after,
    &::before {
      position: absolute;
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-weight: 500;
      font-size: 55rem;
      line-height: 15rem;
      color: #edeef0;
    }
    &::after {
      content: '“';
      top: 4rem;
      left: 0;
    }
    &::before {
      content: '”';
      right: 5rem;
      bottom: -18rem;
    }
    .block {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: 'Cormorant Garamond', serif;
      font-weight: normal;
      font-style: normal;
      color: #3f3f3f;
      align-items: center;
      text-align: center;
      min-width: 786px;
      scroll-snap-align: start;
      .name {
        font-style: italic;
        font-size: 2.6em;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
      .who {
        font-size: 1.8em;
        color: #c6b18d;
      }
      .reviews {
        font-size: 1.8em;
        padding-top: 1.5rem;
        padding-bottom: 3rem;
      }
    }
    .btn-block {
      display: none;
    }
  }
}
@media screen and (max-width: 1500px) {
  .carusel {
    .animated-block {
      &::after,
      &::before {
        font-size: 35rem;
        line-height: 10rem;
      }
      &::after {
        top: 2rem;
      }
      &::before {
        bottom: -12rem;
      }
    }
  }
}
@media screen and (max-width: 1250px) {
  .carusel {
    border-top: 1.5em solid #f9e6c4;
    border-bottom: 1.5em solid #f9e6c4;
    .title {
      font-size: 3em;
    }
    .btn {
      margin-left: 2em;
      margin-right: 2em;
      width: 4em;
    }
    .animated-block {
      width: 550px;

      .block {
        min-width: 550px;
        .name {
          font-size: 2em;
        }
        .who {
          font-size: 1.5em;
        }
        .reviews {
          font-size: 1.4em;
        }
      }
      &::after,
      &::before {
        font-size: 30rem;
        line-height: 8rem;
      }
      &::after {
        top: 2rem;
      }
      &::before {
        right: 3rem;
        bottom: -10rem;
      }
    }
  }
}
@media screen and (max-width: 810px) {
  .carusel {
    border-top: 5em solid #f9e6c4;
    border-bottom: 3em solid #f9e6c4;
    .title {
      display: block;
      width: 95vw;
      top: -1.2em;
      left: 0;
    }
    .animated-block {
      width: 90vw;
      .block {
        min-width: 90vw;
        .name {
          padding-bottom: 0.75rem;
        }
        .reviews {
          padding-top: 1rem;
          padding-bottom: 7rem;
        }
      }
      .btn-block {
        position: absolute;
        bottom: 0;
        width: 90vw;
        display: flex;
        justify-content: space-between;
        padding-bottom: 1em;
        button {
          background: inherit;
        }
      }
      &::before,
      &::after {
        display: none;
      }
    }
    .btn {
      display: none;
    }
  }
}
@media screen and (max-width: 375px) {
  .carusel {
    border-top: 4em solid #f9e6c4;
    .title {
      font-size: 2em;
      width: 90vw;
    }
    .animated-block {
      .block {
        .name {
          font-size: 1.5em;
        }
        .who {
          font-size: 1.2em;
        }
        .reviews {
          font-size: 1.2em;
          padding-bottom: 4.5em;
        }
      }
      .btn-block {
        .btn-block-left,
        .btn-block-right {
          width: 50px;
          height: 50px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .quotes {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
}
</style>
