<template lang="pug">
.container-card(:class='{ notActiveCard: !open }')
  .false-block(@click='closeCard()')
  .card(:class='{ notActiveCard: openModal }')
    img.card-fon(src='@/assets/image/card-fon.png')
    .title
      h1.title-text {{ $t("header.cart") }}
      .title-block-img(@click='closeCard()')
        img.title-img(src='@/assets/image/card-close.png')
    .book-container
      div.ifCardZero(v-if="allPrice===0") {{ $t('header.nothing-in-cart') }}
      .book-block(v-for='(book, index) in cartBooks', :key='book.id')
        img.book-img(:src='book.image', :alt='book.title')
        .book-text
          h2.name-top {{ book.serial }}
          h3.name-center {{ book.type }}
          h1.name-bottom {{ book.title }}
          h4.name-price {{ $t("header.price") }}:
          .info-book-alter
            .btn-book-alter
              button.btn-alter-card(@click='handleQuantity(index, -1)')
                span -
              .btn-alter-card.quantity-alter
                span(v-if='cart[index]') {{ cart[index].count }}
              button.btn-alter-card(@click='handleQuantity(index, 1)')
                span +
            .price-alter {{ book.price }}
        .info-book
          .btn-book
            button.btn-card(@click='handleQuantity(index, 1)') +
            .btn-card.quantity
              span(v-if='cart[index]') {{ cart[index].count }}
            button.btn-card(@click='handleQuantity(index, -1)') -
          .price {{ (book.price).toFixed(0).replace(/\d{1,3}(?=(\d{3})*$)/g, "$&.").slice(0, -1) }} {{ $t("header.sum") }}
    .decoration-block
    .bottom
      .all
        h1.price-name {{ $t("header.total") }}
        span.all-price {{(allPrice).toFixed(0).replace(/\d{1,3}(?=(\d{3})*$)/g, "$&.").slice(0, -1) }} {{ $t("header.sum") }}
      button.btn-buy(v-show="allPrice > 0" @click='handleModal()') {{ $t("header.proceed-to-checkout") }}
  .popup-body(:class='{ notActiveCard: !openModal }')
    .popup-content
      <svg class="rectangle-bottom" width="900" height="2" viewBox="0 0 900 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="900" height="2" fill="#C99C4D"/>
      </svg>
      img.popup-image(src='../assets/image/mask-group.png')
      button.popup-close
        <svg @click="closeCard()" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.424072 2.50298C-0.138428 1.94048 -0.138428 1.00429 0.424072 0.422119C1.00624 -0.140381 1.92276 -0.140381 2.50493 0.422119L14.9914 12.9295L27.4988 0.422119C28.0613 -0.140381 28.9975 -0.140381 29.5587 0.422119C30.1409 1.00429 30.1409 1.94179 29.5587 2.50298L17.0722 14.9907L29.5587 27.4982C30.1409 28.0607 30.1409 28.9969 29.5587 29.579C28.9962 30.1415 28.06 30.1415 27.4988 29.579L14.9914 17.0716L2.50493 29.579C1.92276 30.1415 1.00624 30.1415 0.424072 29.579C-0.138428 28.9969 -0.138428 28.0594 0.424072 27.4982L12.9105 14.9907L0.424072 2.50298Z" fill="#A08D6B" fill-opacity="0.6"/>
        </svg>
      .popup-title {{ $t("modal.window-buy") }}
        .extra-text {{ $t("modal.write_input") }}
      <svg class="rectangle-top" width="900" height="2" viewBox="0 0 900 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="900" height="2" fill="#C99C4D"/>
      </svg>
      form.main-content(@submit.prevent='handleBtnSubmit()')
        .popup-input
          span.fio {{ $t("modal.name-surname-other") }}
          .name
            input.name-input(
              type='text',
              required,
              :placeholder='$t("modal.name-placeholder")',
              v-model='myForm.name'
            )
          span.phone-number {{ $t("modal.number") }}
          .phone
            input.phone-input(
              type='tel',
              placeholder='+998-(__)-___-__-__',
              minlength="9",
              maxlength="25",
              required,
              v-model='myForm.phone'
            )
          span.delivery-address {{ $t("modal.adreess") }}
          .address
            textarea.address-input(
              type='text',
              :placeholder='$t("modal.address-placeholder")',
              required,
              v-model='myForm.address'
            )
        .popup-help
          <svg class="svg-array" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.675 2.725C12.625 2.175 13.475 1.65 15.225 1.15C17.025 0.599999 18.5 0.324999 19.65 0.324999C20.2 0.324999 20.45 0.424998 20.4 0.624995L14.7 12.325C14.65 12.475 14.5 12.55 14.25 12.55C14.05 12.55 13.95 12.475 13.95 12.325L12.675 2.725ZM2.7 11.875C2.2 11.825 1.95 10.975 1.95 9.325C1.95 8.075 2.075 6.825 2.325 5.575C2.625 4.275 2.875 3.725 3.075 3.925L12.525 13C12.625 13.05 12.625 13.2 12.525 13.45C12.475 13.65 12.4 13.725 12.3 13.675L2.7 11.875ZM15.75 14.2C15.65 14.2 15.575 14.1 15.525 13.9C15.475 13.7 15.5 13.575 15.6 13.525L24.3 9.325C24.75 9.125 25.375 9.575 26.175 10.675C27.025 11.775 27.75 12.95 28.35 14.2C28.95 15.4 29.1 16 28.8 16L15.75 14.2ZM8.4 24.1C8.35 24.3 8.1 24.4 7.65 24.4C7 24.4 6.1 24.175 4.95 23.725C3.8 23.275 2.8 22.8 1.95 22.3C1.1 21.75 0.775 21.425 0.975 21.325L12.45 15.175L12.6 15.1C12.75 15.1 12.875 15.175 12.975 15.325C13.125 15.425 13.175 15.525 13.125 15.625L8.4 24.1ZM14.4 15.925C14.35 15.825 14.425 15.7 14.625 15.55C14.825 15.35 14.975 15.3 15.075 15.4L21.75 22.525C22.05 22.825 21.8 23.55 21 24.7C20.25 25.8 19.375 26.825 18.375 27.775C17.375 28.675 16.85 28.975 16.8 28.675L14.4 15.925Z" fill="#F3C570"/>
          </svg>
          .help-text {{ $t("modal.help-text") }}
          button.popup-send(
            type='submit',
            :class='{ btnSubmitActive: btnSubmitTextActive }'
          )
            span.popup-send-text {{ btnSubmitTextActive ? $t('modal.send') : $t('modal.sent') }}
            .popup-send-img
              img.img-around(src='../assets/image/Btn-modal-around.png')
              .btn-check
          a.back-to(@click='handleModal()') {{ $t("modal.go-in-cart") }}
            .line
</template>
<script>
import { BASE_URL } from '@/utils/constants'

export default {
  props: {
    open: {
      type: Boolean,
    },
  },
  data() {
    return {
      closeCardHeader: true,
      openModal: false,
      myForm: {
        name: '',
        phone: '',
        address: '',
      },
      btnSubmitTextActive: false,
      // onCredCard: true,
    }
  },
  /* eslint-enable object-shorthand */
  computed: {
    cartBooks() {
      return this.$store.getters.cartBooks
    },
    allPrice() {
      return this.$store.getters.overallSum
    },
    cart() {
      return this.$store.getters.cart
    },
  },
  methods: {
    handleQuantity(index, num) {
      this.$store.commit('handleCartCount', { index, num })
    },
    closeCard() {
      this.openModal = false
      this.$emit('closeCard', { closeCard: this.closeCardHeader })
      document.getElementsByTagName('body')[0].style.overflow = 'visible'
    },
    handleModal() {
      this.openModal = !this.openModal
      this.btnSubmitTextActive = false
    },
    handleBtnSubmit() {
      fetch(`${BASE_URL}${this.$i18n.locale}/buy/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...this.myForm,
          books: [...this.cart],
        }),
      }).then((res) => {
        this.btnSubmitTextActive = true
        if (res.status === 201) {
          setTimeout(() => {
            this.closeCard()
            this.$store.commit('flushCart')
          }, 1000)
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@keyframes popupLeftCome {
  0% {
    left: -75%;
    transform: translateX(-75%);
  }
  100% {
    left: 50%;
    transform: translateX(-50%);
  }
}
::-webkit-scrollbar {
  width: 4px;
  background-color: inherit;
}

::-webkit-scrollbar-thumb {
  background-color: #95815e;
}

::-webkit-scrollbar-track {
  display: none;
}
.notActiveCard {
  display: none !important;
}
.container-card {
  position: absolute;
  width: 100%;
  min-height: 100vh;
  height: auto;
  z-index: 995;
  display: flex;
  justify-content: center;
  align-items: center;
  .false-block {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: inherit;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    z-index: 997;
  }
  .card {
    max-width: 1000px;
    background-color: #fffcf6;
    position: relative;
    overflow: hidden;
    z-index: 998;
    .card-fon {
      position: absolute;
      top: 0;
    }
    .title {
      margin-left: 1.5em;
      margin-right: 1.5em;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      font-family: 'Comfortaa', serif;
      font-style: normal;
      font-weight: normal;
      font-size: 2.4em;
      line-height: 2em;
      color: #a08d6b;
      .title-text {
        width: 100%;
        border-bottom: 2px solid #c99c4d;
      }
      .title-block-img {
        width: 10vw;
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
        position: relative;
        z-index: 200;
        .title-img {
          width: 30px;
          height: 30px;
        }
      }
    }
    .book-container {
      max-height: 420px;
      overflow-y: scroll;
      margin-left: 0.2rem;
      margin-right: 0.5rem;
      position: relative;
      .ifCardZero {
        position: relative;
        text-align: center;
        font-family: 'Cormorant Garamond', serif;
        font-style: normal;
        font-weight: bold;
        font-size: 34.5882px;
        line-height: 42px;
        margin-top: 1.5rem;
      }
      .book-block {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        .book-img {
          width: 122px;
          height: 153px;
          margin-left: 2rem;
          margin-right: 1.5rem;
        }
        .book-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          .name-top {
            font-family: 'Cormorant Garamond', serif;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            color: #95815e;
          }
          .name-center {
            font-family: 'Alegreya', serif;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 24px;
            text-align: center;
            color: #3f3f3f;
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
          }
          .name-bottom {
            font-family: 'Alegreya', serif;
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 25px;
            text-align: center;
            color: #3f3f3f;
          }
          .name-price {
            width: 100%;
            font-family: 'Cormorant Garamond', serif;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            text-align: right;
            color: #95815e;
            margin-top: auto;
            margin-bottom: 0.5rem;
          }
          .info-book-alter {
            display: none;
          }
        }
        .info-book {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 1.5rem;
          margin-right: 2rem;
          .btn-book {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 2rem;
            .btn-card {
              padding: 10px 15px;
              background: inherit;
              color: #3f3f3f;
              border: 2px solid #f3c570;
              font-family: 'Comfortaa', serif;
              font-size: 35px;
              line-height: 25px;
              font-style: normal;
              font-weight: bold;
            }
            .quantity {
              border: none;
            }
          }
          .price {
            font-family: 'Cormorant Garamond', serif;
            font-style: italic;
            font-weight: 600;
            font-size: 43px;
            line-height: 52px;
            text-align: center;
            color: #3f3f3f;
            white-space: nowrap;
          }
        }
      }
    }
    .decoration-block {
      height: 2rem;
      width: 78%;
      border-bottom: 2px solid #c99c4d;
      margin-left: 3.5rem;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      margin-left: 3.5rem;
      margin-right: 2rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      .all {
        display: flex;
        align-items: center;
        .price-name {
          font-family: 'Comfortaa', serif;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 27px;
          color: #a08d6b;
        }
        .all-price {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 600;
          font-size: 43px;
          line-height: 52px;
          display: flex;
          align-items: center;
          text-align: center;
          color: #3f3f3f;
          margin-left: 4rem;
        }
      }
      .btn-buy {
        background: inherit;
        font-family: 'Cormorant Garamond', serif;
        font-style: normal;
        font-weight: bold;
        font-size: 34.5882px;
        line-height: 42px;
        text-align: center;
        color: #3f3f3f;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          width: 50%;
          height: 2px;
          background: #f3c570;
          transition: all 0.6s;
        }
        &:hover {
          &::after {
            width: 100%;
          }
        }
      }
    }
  }
  .popup-body {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 10px;
    margin: 0 auto;
    z-index: 999;
    left: 0;
    position: absolute;
    animation-name: popupLeftCome;
    animation-duration: 1.2s;
    animation-fill-mode: forwards;

    .popup-content {
      background-color: #fffcf6;
      width: 1000px;
      height: 520px;
      padding: 30px;
      position: relative;
      flex-direction: row;
      align-items: center;
      z-index: 1;
      .rectangle-bottom {
        position: absolute;
        bottom: 67px;
      }
      .popup-image {
        width: 100%;
        display: flex;
        position: absolute;
        left: 0;
        z-index: 0;
      }
      .popup-close {
        font-size: 20px;
        position: absolute;
        right: 35px;
        top: 20px;
        color: rgba(160, 141, 107, 0.6);
        text-decoration: none;
        cursor: pointer;
        background: inherit;
      }
      .popup-title {
        font-size: 32px;
        width: 900px;
        font-family: 'Comfortaa', serif;
        display: flex;
        position: relative;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        color: rgba(160, 141, 107, 1);
        .extra-text {
          font-family: 'Bitter', serif;
          font-size: 16px;
          color: rgba(63, 63, 63, 0.6);
        }
      }
      .rectangle-top {
        padding-top: 10px;
        position: absolute;
      }
      .main-content {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 30px 0;
        .popup-input {
          width: 40%;
          display: flex;
          line-height: 3;
          flex-direction: column;
          margin-right: 140px;
          font-family: 'Bitter', serif;
          .name {
            width: 100%;
            display: flex;
            position: relative;
            border: 2px solid #f3c570;
            background-color: #fffcf6;
            .name-input {
              width: 95%;
              outline: none;
              display: flex;
              position: relative;
              background: none;
              margin-left: 10px;
            }
          }
          .phone {
            width: 100%;
            display: flex;
            position: relative;
            border: 2px solid #f3c570;
            background-color: #fffcf6;
            .phone-input {
              width: 95%;
              outline: none;
              display: flex;
              position: relative;
              background: none;
              margin-left: 10px;
            }
          }
          .address {
            width: 100%;
            height: 120px;
            display: flex;
            position: relative;
            border: 2px solid #f3c570;
            background-color: #fffcf6;
            .address-input {
              width: 95%;
              outline: none;
              display: flex;
              position: relative;
              background: none;
              margin-left: 10px;
              line-height: 1.5;
              resize: none;
            }
          }
        }
        .popup-help {
          padding-top: 25px;
          width: 60%;
          display: flex;
          flex-direction: column;
          .svg-array {
            position: absolute;
            margin: -15px 0 0 -25px;
          }
          .help-text {
            width: 420px;
            font-family: 'Cormorant', serif;
            font-size: 26px;
            color: rgba(63, 63, 63, 1);
          }
          .popup-send {
            width: 395px;
            height: 85px;
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            margin-top: 70px;
            font-size: 50px;
            font-family: 'Cormorant', serif;
            color: rgba(63, 63, 63, 1);
            cursor: pointer;
            background: inherit;
            border: 2px solid rgba(243, 197, 112, 1);
            transition: all 2s;
            .popup-send-text {
              transition: all 0.5s;
            }
            .popup-send-img {
              width: 62px;
              height: 62px;
              display: flex;
              align-items: center;
              position: absolute;
              right: 0;
              transition: all 2s;
              margin-right: 8px;
              .img-around {
                position: absolute;
                width: 100%;
                height: 100%;
              }
              .btn-check {
                width: 20px;
                height: 15px;
                border-radius: 10%;
                border-bottom: 5px solid #00bbd3;
                border-left: 5px solid #00bbd3;
                position: absolute;
                transform: rotate(-45deg);
                top: 20%;
                left: 30%;
                transition: all 0.4s;
                z-index: -1;
              }
            }
            &::after {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              background-color: rgba(243, 197, 112, 1);
              z-index: -1;
              transition: all 0.4s;
            }
          }
          .btnSubmitActive {
            &::after {
              width: 0;
              height: 0;
            }
            .popup-send-text {
              left: 10%;
            }
            .popup-send-img {
              .btn-check {
                top: 10%;
                width: 35px;
              }
            }
          }
          .back-to {
            width: 395px;
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            font-family: 'Bitter', serif;
            font-size: 16px;
            padding-top: 10px;
            color: rgba(63, 63, 63, 1);
            cursor: pointer;
            .line {
              position: absolute;
              bottom: 0;
              width: 165px;
              height: 2px;
              background: #f3c570;
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1921px) {
  .card {
    zoom: 1.4;
  }
  .popup-body {
    zoom: 1.4;
  }
}
@media screen and (min-width: 2250px) {
  .card {
    zoom: 2;
  }
  .popup-body {
    zoom: 2;
  }
}
@media screen and (max-width: 768px) {
  .container-card {
    .card {
      .title {
        font-size: 1.8em;
        .title-block-img {
          .title-img {
            width: 25px;
            height: 25px;
          }
        }
      }
      .book-container {
        .book-block {
          .book-img {
            margin-left: 1rem;
            margin-right: 0.5rem;
          }
          .book-text {
            .name-top {
              font-size: 19px;
            }
            .name-center {
              line-height: 1em;
            }
            .name-bottom {
              font-size: 18px;
            }
          }
          .info-book {
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            .btn-book {
              flex-direction: column;
              margin-top: 0.5rem;
              .btn-card {
                padding: 12px 15px;
                font-size: 28px;
                line-height: 15px;
              }
              .quantity {
                margin-top: 0.3rem;
              }
            }
            .price {
              font-size: 32px;
              line-height: 48px;
            }
          }
        }
      }
      .decoration-block {
        height: 1.5rem;
      }
      .bottom {
        .all {
          .price-name {
            font-size: 20px;
          }
          .all-price {
            font-size: 30px;
            margin-left: 2rem;
          }
        }
        .btn-buy {
          font-size: 25px;
        }
      }
    }
  }
}
@media screen and (max-width: 605px) {
  .container-card {
    .card {
      .title {
        font-size: 1.5em;
        .title-block-img {
          .title-img {
            width: 20px;
            height: 20px;
          }
        }
      }
      .book-container {
        .ifCardZero {
          font-size: 28px;
        }
        .book-block {
          margin-top: 0.5rem;
          .book-img {
            display: none;
          }
          .book-text {
            margin-left: 1rem;
            .name-top {
              font-size: 18px;
            }
            .name-center {
              line-height: 0.75em;
            }
            .name-bottom {
              font-size: 17px;
            }
          }
          .info-book {
            .btn-book {
              .btn-card {
                padding: 10px 12px;
                font-size: 25px;
              }
            }
            .price {
              font-size: 30px;
            }
          }
        }
      }
      .decoration-block {
        height: 1.5rem;
      }
      .bottom {
        margin-right: 2rem;
        margin-left: 1.5rem;
        .all {
          .price-name {
            font-size: 18px;
          }
          .all-price {
            font-size: 28px;
            margin-left: 1rem;
          }
        }
        .btn-buy {
          font-size: 22px;
          justify-content: center;
        }
      }
    }
  }
}
@media screen and (max-width: 478px) {
  .container-card {
    .card {
      position: absolute;
      .title {
        font-size: 1.5em;
        .title-block-img {
          .title-img {
            width: 20px;
            height: 20px;
          }
        }
      }
      .book-container {
        max-height: 340px;
        .book-block {
          margin-top: 0.5rem;
          .book-img {
            display: none;
          }
          .book-text {
            margin-left: 1rem;
            margin-right: 1rem;
            .name-top {
              font-size: 18px;
            }
            .name-center {
              line-height: 1.2em;
            }
            .name-bottom {
              font-size: 17px;
            }
            .name-price {
              display: none;
            }
            .info-book-alter {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              margin-bottom: 1rem;
              margin-top: 1rem;
              .btn-book-alter {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-left: 1rem;
                .btn-alter-card {
                  width: 35px;
                  height: 35px;
                  background: inherit;
                  text-align: center;
                  color: #3f3f3f;
                  border: 2px solid #f3c570;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-family: 'Comfortaa', serif;
                  font-size: 28px;
                  line-height: 20px;
                  font-style: normal;
                  font-weight: bold;
                }
                .quantity-alter {
                  border: none;
                  margin-top: 0.5rem;
                }
              }
              .price-alter {
                font-family: 'Cormorant Garamond', serif;
                font-style: italic;
                font-weight: 600;
                font-size: 30px;
                line-height: 35px;
                text-align: center;
                color: #3f3f3f;
                white-space: nowrap;
              }
            }
          }
          .info-book {
            display: none;
          }
        }
      }
      .decoration-block {
        height: 1.5rem;
      }
      .bottom {
        margin-right: 2rem;
        margin-left: 2rem;
        flex-direction: column;
        justify-content: center;
        .all {
          justify-content: space-between;
          .price-name {
            font-size: 18px;
          }
          .all-price {
            font-size: 28px;
            margin-left: 0;
          }
        }
        .btn-buy {
          font-size: 26px;
          justify-content: center;
        }
      }
    }
  }
}
@media screen and (max-width: 1070px) {
  .container-card {
    .popup-body {
      .popup-content {
        width: 680px;
        .popup-close {
          width: 20px;
          right: 20px;
          top: 15px;
          .close {
            width: 15px;
          }
        }
        .popup-title {
          font-size: 24px;
          width: 600px;
          .extra-text {
            font-size: 12px;
          }
        }
        .rectangle-bottom {
          width: 600px;
        }
        .rectangle-top {
          width: 600px;
        }
        .main-content {
          .popup-input {
            margin-right: 40px;
          }
          .popup-help {
            width: 60%;
            .help-text {
              width: 300px;
              font-size: 20px;
            }
            .popup-send {
              width: 300px;
              height: 60px;
              font-size: 35px;
              .popup-send-text {
                left: 25%;
              }
              .popup-send-img {
                width: 45px;
                height: 45px;
                .btn-check {
                  width: 15px;
                  height: 10px;
                }
              }
            }
            .btnSubmitActive {
              .popup-send-text {
                left: 10%;
              }
              .popup-send-img {
                .btn-check {
                  width: 25px;
                }
              }
            }
            .back-to {
              width: 300px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 760px) {
  .container-card {
    .popup-body {
      width: 550px;
      .popup-content {
        width: 95%;
        height: 400px;
        .popup-close {
          right: 20px;
          top: 15px;
          .close {
            width: 20px;
            height: 20px;
          }
        }
        .popup-title {
          position: absolute;
          flex-direction: column;
          align-items: unset;
          font-size: 24px;
          line-height: 2;
          margin-bottom: 150px;
          width: 350px;
          margin-top: -70px;
          .extra-text {
            font-size: 16px;
          }
        }
        .rectangle-bottom {
          display: none;
        }
        .rectangle-top {
          display: none;
        }
        .main-content {
          .popup-input {
            width: 50%;
            margin-right: 40px;
          }
          .popup-help {
            width: 42%;
            .help-text {
              width: 240px;
              font-size: 20px;
            }
            .popup-send {
              width: 220px;
              height: 60px;
              font-size: 30px;
              .popup-send-text {
                left: 20%;
              }
              .popup-send-img {
                width: 40px;
                height: 40px;
                .btn-check {
                  width: 15px;
                  height: 10px;
                  border-bottom: 4px solid #00bbd3;
                  border-left: 4px solid #00bbd3;
                }
              }
            }
            .btnSubmitActive {
              .popup-send-text {
                left: 5%;
              }
              .popup-send-img {
                .btn-check {
                  width: 25px;
                }
              }
            }
            .back-to {
              width: 220px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 550px) {
  .container-card {
    .popup-body {
      width: auto;
      padding-top: 0;
      position: absolute;
      top: 0;
      .popup-content {
        flex-direction: unset;
        width: 95%;
        height: auto;
        .popup-close {
          right: 25px;
          top: 15px;
          width: 35px;
          height: 35px;
          z-index: 50;
          .close {
            width: 35px;
            height: 35px;
          }
        }
        .popup-title {
          position: absolute;
          flex-direction: column;
          align-items: unset;
          font-size: 24px;
          line-height: 2;
          margin-bottom: 150px;
          width: 280px;
          margin-top: -70px;
          .extra-text {
            width: 70%;
            font-size: 12px;
            line-height: 1;
          }
        }
        .popup-image {
          display: none;
        }
        .main-content {
          flex-direction: column;
          padding-top: 0;
          padding-bottom: 0;
          .popup-input {
            width: 100%;
            margin-right: 40px;
          }
          .popup-help {
            width: 100%;

            .svg-array {
              margin: -15px 0 0 -25px;
            }
            .help-text {
              width: 100%;
              font-size: 24px;
              margin-left: 10px;
            }
            .popup-send {
              width: 270px;
              height: 60px;
              font-size: 35px;
              margin-top: 40px;
              margin-left: auto;
              margin-right: auto;
            }
            .back-to {
              margin-left: auto;
              margin-right: auto;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 360px) {
  .container-card {
    .popup-body {
      .popup-content {
        flex-direction: unset;
        width: 95%;
        height: auto;
        padding: 0;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 10px;
        .popup-close {
          right: 20px;
          top: 15px;
          .close {
            width: 20px;
            height: 20px;
          }
        }
        .popup-title {
          display: flex;
          position: relative;
          flex-direction: column;
          font-size: 24px;
          line-height: 1.3;
          margin-bottom: 0;
          width: 280px;
          margin-top: 0;
          .extra-text {
            width: 100%;
            font-size: 12px;
            line-height: 1;
          }
        }
        .popup-image {
          display: none;
        }
        .main-content {
          flex-direction: column;
          .popup-input {
            width: 100%;
            margin-right: 40px;
            line-height: 2;
            .address {
              height: 50px;
            }
          }
          .popup-help {
            margin-left: 0;
            width: 100%;
            padding-top: 10px;
            .svg-array {
              display: none;
            }
            .help-text {
              width: 100%;
              font-size: 23px;
              line-height: 23px;
              margin-left: 0;
              text-align: center;
            }
            .popup-send {
              width: 90%;
              height: 45px;
              font-size: 30px;
              margin-top: 5px;
            }
            .back-to {
              width: 90%;
              padding-bottom: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
