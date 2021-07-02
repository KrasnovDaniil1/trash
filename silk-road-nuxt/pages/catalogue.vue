<template lang="pug">
.main-wrapper
  .catalog-wrapper
    div.lds-roller(v-if="booksList.length === 0" style="position:absolute;z-index:500;left:50%;top:50%;transform: translateX(-50%) translateY(-50%);")
        div
        div
        div
        div
        div
        div
        div
        div
    .books-card(v-for='(item, index) in booksList', :key='item.id')
      div
        img.books-img(:src='item.image')
      .item-content
        .grand-title {{ item.serial }}
        span(v-if='item.publisher && item.publisher.length > 0') «{{ item.publisher }}»
        .book-album {{ item.type }}
        .title {{ item.title }}
        .exclusive(v-if='item.is_exclusive') - {{ $t("detail.exclusive") }}
        .dvd-disk(v-if='item.diskos') - {{ $t("detail.dvd") }}
        .price {{ item.price.toFixed(0).replace(/\d{1,3}(?=(\d{3})*$)/g, "$&.").slice(0, -1) }}
          span {{ $t("header.sum") }}
        a.more-info(href='submit', target='_self')
      button.add-to-basket(type='submit', @click='handleCart(item)')
        .effects-around(
          :class='{ effectsAroundActive: checkIfExists(item.id) }'
        )
        <svg class="icon-basket" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.25" y="0.25" width="57.5" height="57.5" rx="28.75" fill="#FFFAF2" stroke="#D49E3B" stroke-width="0.5"/>
          <path d="M21.4 42.4C19.86 42.4 18.6 43.66 18.6 45.2C18.6 46.74 19.86 48 21.4 48C22.94 48 24.2 46.74 24.2 45.2C24.2 43.66 22.94 42.4 21.4 42.4ZM13 20V22.8H15.8L20.84 33.44L18.88 36.8C18.74 37.22 18.6 37.78 18.6 38.2C18.6 39.74 19.86 41 21.4 41H38.2V38.2H21.96C21.82 38.2 21.68 38.06 21.68 37.92V37.7799L22.94 35.3999H33.3C34.42 35.3999 35.26 34.8399 35.68 33.9999L40.72 24.9C41 24.62 41 24.48 41 24.2C41 23.36 40.44 22.8 39.6 22.8H18.88L17.62 20H13ZM35.4 42.4C33.86 42.4 32.6 43.66 32.6 45.2C32.6 46.74 33.86 48 35.4 48C36.94 48 38.2 46.74 38.2 45.2C38.2 43.66 36.94 42.4 35.4 42.4Z" fill="#DDB060"/>
          <path d="M40.6538 21.6538H39.6538V22.6538V24.3846C39.6538 24.4693 39.5846 24.5385 39.5 24.5385C39.4154 24.5385 39.3462 24.4693 39.3462 24.3846V22.6538V21.6538H38.3462H36.6154C36.5307 21.6538 36.4615 21.5846 36.4615 21.5C36.4615 21.4154 36.5307 21.3462 36.6154 21.3462H38.3462H39.3462V20.3462V18.6154C39.3462 18.5307 39.4154 18.4615 39.5 18.4615C39.5846 18.4615 39.6538 18.5307 39.6538 18.6154V20.3462V21.3462H40.6538H42.3846C42.4693 21.3462 42.5385 21.4154 42.5385 21.5C42.5385 21.5846 42.4693 21.6538 42.3846 21.6538H40.6538ZM39.5 13C34.8123 13 31 16.8123 31 21.5C31 26.1877 34.8123 30 39.5 30C44.1877 30 48 26.1877 48 21.5C48 16.8123 44.1877 13 39.5 13Z" fill="#DDB060" stroke="#FFFAF2" stroke-width="2"/>
        </svg>
        span.to-basket {{ checkIfExists(item.id) ? $t("catalog.added") : $t("catalog.in-cart") }}
      NuxtLink.more-details(:to='localePath(`/details/${item.id}`)')
        .sticks
          span {{ $t("index.about-book") }}
          .right
          .top
          .left
          .bottom
</template>
<script>
export default {
  data() {
    return {
      activeIndexCatalog: '',
      activeTextBtn: 'В корзине',
      notActiTextveBtn: this.$t('catalog.in-cart'),
      textBtn: this.$t('catalog.in-cart'),
    }
  },
  head() {
    return {
      title: `${this.$t('header.catalog')} - Silk Road Media`,
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          content: '/catalogue.jpg',
        },
        {
          hid: 'description',
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
          content: `${this.$t('header.catalog')} - Silk Road Media`,
        },
      ],
    }
  },
  computed: {
    cart() {
      return this.$store.getters.cart
    },
    booksList() {
      return this.$store.getters.books
    },
  },
  created() {
    this.retreiveBooks()
  },
  methods: {
    handleCart(id) {
      this.$store.commit('handleCart', id)
    },
    retreiveBooks() {
      this.$store.dispatch('getBooks', {
        locale: this.$i18n.locale,
        offset: this.$store.getters.booksPage,
      })
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
.main-wrapper {
  width: 100%;
  height: 100%;
  min-height: 40vh;
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  justify-content: center;
  flex-direction: column;
  align-self: center;
  background-color: #f9e6c4;
  .catalog-wrapper {
    width: 95%;
    grid-gap: 1fr;
    position: relative;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    padding-top: 20px;
    .books-card {
      display: flex;
      position: relative;
      height: 350px;
      background-color: rgba(255, 252, 246, 1);
      margin: 60px auto; //WHEN ADD HEADER DELETE OR CORRECT THIS SHIT!!
      .books-img {
        width: 250px;
        height: 310px;
        margin-top: 20px;
        margin-left: 30px;
        overflow: hidden;
        object-fit: cover;
      }
      .item-content {
        width: 100%;
        display: flex;
        position: relative;
        flex-direction: column;
        font-family: 'Cormorant', serif;
        font-size: 25px;
        font-style: normal;
        margin: 0 10px 10px auto; //WHEN ADD HEADER DELETE OR CORRECT THIS SHIT!!

        .grand-title {
          text-align: center;
          margin: 10px;
          color: rgba(149, 129, 94, 1);
          line-height: 30px;
        }
        span {
          text-align: center;
          color: rgba(149, 129, 94, 1);
          font-weight: bold;
        }
        .book-album {
          text-align: center;
        }
        .title {
          font-family: 'Alegreya', serif;
          margin: 10px;
          font-size: 20px;
          text-align: center;
          text-transform: uppercase;
        }
        .exclusive {
          color: rgba(149, 129, 94, 1);
          padding-left: 20px;
        }
        .dvd-disk {
          color: rgba(149, 129, 94, 1);
          padding-left: 20px;
        }
        .price {
          color: rgba(63, 63, 63, 1);
          font-weight: bold;
          font-size: 35px;
          font-style: italic;
          text-align: right;
          padding-right: 30px;
          span {
            color: rgba(63, 63, 63, 1);
            font-weight: normal;
          }
        }
      }
      .add-to-basket {
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        width: 230px;
        height: 70px;
        background-color: rgba(243, 197, 112, 1);
        cursor: pointer;
        margin-top: 315px;
        margin-left: 550px;
        overflow: hidden;
        transition: all 1s;
        .effects-around {
          width: 0;
          height: 0;
          position: absolute;
          left: 20%;
          background-color: #fffcf6;
          border-radius: 50%;
          transition: all 0.8s;
        }
        .effectsAroundActive {
          width: 300px;
          height: 300px;
          left: -20%;
        }
        .icon-basket {
          position: relative;
          z-index: 20;
        }
        .to-basket {
          display: flex;
          position: relative;
          margin-left: 10px;
          font-family: 'Cormorant', serif;
          color: rgba(63, 63, 63, 1);
          font-weight: 600;
          font-weight: medium;
          font-size: 25px;
        }
      }
      .more-details {
        width: 230px;
        height: 70px;
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-top: 325px;
        margin-left: 260px;
        .sticks {
          width: 100%;
          span {
            height: auto;
            font-family: 'Cormorant', serif;
            font-size: 30px;
            margin: -15px 0 0 75px;
            display: flex;
            position: absolute;
          }
          .right {
            width: 62px;
            height: 3px;
            margin-left: 190px;
            background: #f3c570;
            transform: rotate(-90deg);
          }
          .left {
            width: 62px;
            height: 3px;
            margin-top: 25px;
            margin-left: 30px;
            background: #f3c570;
            transform: rotate(-90deg);
          }
          .top {
            width: 162px;
            height: 3px;
            margin-left: 70px;
            margin-top: -25px;
            background: #f3c570;
          }
          .bottom {
            width: 181px;
            height: 3px;
            margin-left: 50px;
            margin-top: 15px;
            background: #f3c570;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 2555px) {
  .main-wrapper {
    .catalog-wrapper {
      grid-template-columns: 1fr 1fr 1fr;
      .books-card {
        height: 350px;
        .item-content {
          .price {
            font-size: 35px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 3394px) {
  .main-wrapper {
    .catalog-wrapper {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      .books-card {
        height: 350px;
        .item-content {
          .price {
            font-size: 35px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1700px) {
  .main-wrapper {
    .catalog-wrapper {
      .books-card {
        max-width: 650px;
        height: 290px;
        .books-img {
          width: 200px;
          height: 250px;
        }
        .item-content {
          font-size: 18px;
          .title {
            font-size: 16px;
          }
          .price {
            font-size: 30px;
          }
        }
        .add-to-basket {
          width: 160px;
          height: 50px;
          margin-top: 265px;
          margin-left: 450px;
          .icon-basket {
            width: 35px;
            height: 35px;
          }
          .to-basket {
            font-size: 22px;
          }
        }
        .more-details {
          width: 160px;
          height: 50px;
          margin-top: 262px;
          margin-left: 185px;
          .sticks {
            width: 100%;
            span {
              font-size: 22px;
              margin: 5px 0 0 105px;
            }
            .right {
              width: 40px;
              height: 3px;
              margin-top: 18px;
              margin-left: 205px;
            }
            .left {
              width: 35px;
              margin-top: 18px;
              margin-left: 74px;
            }
            .top {
              width: 140px;
              margin-left: 90px;
              margin-top: -20px;
            }
            .bottom {
              width: 146px;
              margin-left: 85px;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1366px) {
  .main-wrapper {
    .catalog-wrapper {
      .books-card {
        .books-img {
          width: 200px;
          height: 250px;
        }
        .item-content {
          font-size: 17px;
          .title {
            font-size: 15px;
          }
          .price {
            font-size: 28px;
          }
        }
        .add-to-basket {
          width: 145px;
          height: 45px;
          margin-top: 265px;
          margin-left: 410px;
          .icon-basket {
            width: 35px;
            height: 35px;
          }
          .to-basket {
            font-size: 22px;
          }
        }
        .more-details {
          width: 160px;
          height: 50px;
          margin-top: 260px;
          margin-left: 170px;
          .sticks {
            width: 100%;
            span {
              font-size: 22px;
              margin: 5px 0 0 105px;
            }
            .right {
              width: 40px;
              height: 3px;
              margin-top: 18px;
              margin-left: 190px;
            }
            .left {
              width: 35px;
              margin-top: 18px;
              margin-left: 74px;
            }
            .top {
              width: 125px;
              margin-left: 90px;
              margin-top: -20px;
            }
            .bottom {
              width: 125px;
              margin-left: 85px;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1250px) {
  .main-wrapper {
    .catalog-wrapper {
      grid-template-columns: 1fr;
      .books-card {
        margin: 30px 10px;
        max-width: 100%;
        .books-img {
          width: 200px;
          height: 250px;
        }
        .item-content {
          font-size: 20px;
          .title {
            font-size: 18px;
          }
          .price {
            font-size: 28px;
          }
        }
        .add-to-basket {
          width: 200px;
          height: 60px;
          margin-top: 260px;
          margin-left: 650px;
          .icon-basket {
            width: 50px;
            height: 50px;
          }
          .to-basket {
            font-size: 22px;
          }
        }
        .more-details {
          width: 200px;
          height: 60px;
          margin-top: 260px;
          margin-left: 345px;
          .sticks {
            span {
              font-size: 30px;
              margin: 0 0 0 75px;
            }
            .right {
              width: 62px;
              margin-left: 190px;
            }
            .left {
              width: 62px;
              margin-top: 25px;
              margin-left: 30px;
            }
            .top {
              width: 162px;
              margin-left: 70px;
              margin-top: -25px;
            }
            .bottom {
              width: 181px;
              margin-left: 50px;
              margin-top: 15px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .main-wrapper {
    .catalog-wrapper {
      width: 97%;
      grid-template-columns: 1fr 1fr;
      column-gap: 15px;
      .books-card {
        .books-img {
          display: none;
        }
        .item-content {
          font-size: 16px;
          .title {
            font-size: 14px;
          }
          .price {
            font-size: 25px;
          }
        }

        .add-to-basket {
          width: 145px;
          height: 45px;
          margin-top: 265px;
          margin-left: 50%;
          .icon-basket {
            width: 35px;
            height: 35px;
          }
          .to-basket {
            font-size: 22px;
          }
        }
        .more-details {
          width: 160px;
          height: 50px;
          margin-top: 260px;
          margin-left: -60px;
          .sticks {
            width: 100%;
            span {
              font-size: 22px;
              margin: 5px 0 0 105px;
            }
            .right {
              width: 40px;
              height: 3px;
              margin-top: 18px;
              margin-left: 190px;
            }
            .left {
              width: 35px;
              margin-top: 18px;
              margin-left: 74px;
            }
            .top {
              width: 125px;
              margin-left: 90px;
              margin-top: -20px;
            }
            .bottom {
              width: 125px;
              margin-left: 85px;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .main-wrapper {
    .catalog-wrapper {
      width: 97%;
      grid-template-columns: 1fr;
      column-gap: 15px;
      .books-card {
        .books-img {
          display: none;
        }
        .item-content {
          font-size: 16px;
          .title {
            font-size: 14px;
          }
          .price {
            font-size: 25px;
          }
        }

        .add-to-basket {
          margin-top: 265px;
          margin-left: 55%;
          .icon-basket {
            width: 35px;
            height: 35px;
          }
          .to-basket {
            font-size: 20px;
          }
        }
        .more-details {
          margin-left: -5px;
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .main-wrapper {
    .catalog-wrapper {
      width: 100%;
      .books-card {
        .item-content {
          font-size: 16px;
          .title {
            font-size: 14px;
          }
          .price {
            font-size: 25px;
          }
        }

        .add-to-basket {
          margin-left: 50%;
          .icon-basket {
            width: 30px;
            height: 30px;
          }
          .to-basket {
            font-size: 20px;
          }
        }
        .more-details {
          margin-left: -5px;
        }
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .main-wrapper {
    .catalog-wrapper {
      .books-card {
        .item-content {
          font-size: 16px;
          .title {
            font-size: 14px;
          }
          .price {
            font-size: 25px;
          }
        }

        .add-to-basket {
          .icon-basket {
            width: 30px;
            height: 30px;
          }
          .to-basket {
            font-size: 20px;
          }
        }
        .more-details {
          margin-left: -66px;
        }
      }
    }
  }
}
@media screen and (max-width: 375px) {
  .main-wrapper {
    .catalog-wrapper {
      .books-card {
        .item-content {
          font-size: 16px;
          .title {
            font-size: 14px;
          }
          .price {
            font-size: 25px;
          }
        }

        .add-to-basket {
          width: 125px;
          height: 45px;
          .icon-basket {
            width: 30px;
            height: 30px;
          }
          .to-basket {
            font-size: 17px;
          }
        }
        .more-details {
          width: 130px;
          height: 50px;
          margin-left: -60px;
          .sticks {
            span {
              font-size: 18px;
              margin: 5px 0 0 85px;
            }
            .right {
              width: 35px;
              margin-top: 18px;
              margin-left: 160px;
            }
            .left {
              width: 35px;
              margin-top: 18px;
              margin-left: 57px;
            }
            .top {
              width: 110px;
              margin-left: 73px;
              margin-top: -20px;
            }
            .bottom {
              width: 110px;
              margin-left: 65px;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
