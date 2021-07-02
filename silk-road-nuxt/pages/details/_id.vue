<template lang="pug">
.main-wrapper
  img.pattern-back(src='@/assets/image/pattern.png')
  .content-wrapper
    NuxtLink.back-button(:to='localePath("/catalogue")')
      <svg class="svg" width="50" height="28" viewBox="0 0 50 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.7131 0.286972L15.9402 2.51423L6.02945 12.4251H50V15.575H6.02945L15.9402 25.4858L13.7131 27.713L0 14L13.7131 0.286972Z" fill="#A08D6B"/>
      </svg>
      span {{ $t("detail.back-to-list") }}

    .content
      .tabs
        .tabs-items
          button.tabs-item(
            @click='activeAbout = !activeAbout',
            :class='{ tabsItemActive: !activeAbout }'
          ) {{ $t("index.about-book") }}
          button.tabs-item(
            @click='activeAbout = !activeAbout',
            :class='{ tabsItemActive: activeAbout }'
          ) {{ $t("detail.introduction") }}
        .tabs-body(v-if='activeBook !== null')
          .tabs-block(v-show='activeAbout === true')
            img.books-image(src='@/assets/image/books-background.png')
            .grand-title {{ $t("index.author-book-album") }}
            .book-album {{ $t("header.book-album") }}
            .title {{ activeBook.title }}
            .first-tab-content
              img.books-img(:src='activeBook.image', :alt='activeBook.title')
              .static-info
                .redactor {{ $t("detail.redactor") }}
                .author {{ $t("detail.author") }}
                .year-prod {{ $t("detail.year") }}
                .dvd - {{ $t("detail.dvd") }}
                .exclusive - {{ $t("detail.exclusive") }}
              .dynamic-info
                .redactor-name {{ activeBook.science }}
                .author-name {{ activeBook.author }}
                .year {{ activeBook.year }}
            .price {{ activeBook.price.toFixed(0).replace(/\d{1,3}(?=(\d{3})*$)/g, "$&.").slice(0, -1) }}
              span {{ $t("header.sum") }}
            <svg class="background-price" width="405" height="90" viewBox="0 0 405 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H405V90H0L24.5778 45L0 0Z" fill="#F3C570"/>
            </svg>
            button.add-to-basket(
              type='submit',
              @click='handleCart(activeBook)'
            )
              .effects-around(
                :class='{ effectsAroundActive: checkIfExists(activeBook.id) }'
              )
              <svg class="icon-basket" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.25" y="0.25" width="57.5" height="57.5" rx="28.75" fill="#FFFAF2" stroke="#D49E3B" stroke-width="0.5"/>
                <path d="M21.4 42.4C19.86 42.4 18.6 43.66 18.6 45.2C18.6 46.74 19.86 48 21.4 48C22.94 48 24.2 46.74 24.2 45.2C24.2 43.66 22.94 42.4 21.4 42.4ZM13 20V22.8H15.8L20.84 33.44L18.88 36.8C18.74 37.22 18.6 37.78 18.6 38.2C18.6 39.74 19.86 41 21.4 41H38.2V38.2H21.96C21.82 38.2 21.68 38.06 21.68 37.92V37.7799L22.94 35.3999H33.3C34.42 35.3999 35.26 34.8399 35.68 33.9999L40.72 24.9C41 24.62 41 24.48 41 24.2C41 23.36 40.44 22.8 39.6 22.8H18.88L17.62 20H13ZM35.4 42.4C33.86 42.4 32.6 43.66 32.6 45.2C32.6 46.74 33.86 48 35.4 48C36.94 48 38.2 46.74 38.2 45.2C38.2 43.66 36.94 42.4 35.4 42.4Z" fill="#DDB060"/>
                <path d="M40.6538 21.6538H39.6538V22.6538V24.3846C39.6538 24.4693 39.5846 24.5385 39.5 24.5385C39.4154 24.5385 39.3462 24.4693 39.3462 24.3846V22.6538V21.6538H38.3462H36.6154C36.5307 21.6538 36.4615 21.5846 36.4615 21.5C36.4615 21.4154 36.5307 21.3462 36.6154 21.3462H38.3462H39.3462V20.3462V18.6154C39.3462 18.5307 39.4154 18.4615 39.5 18.4615C39.5846 18.4615 39.6538 18.5307 39.6538 18.6154V20.3462V21.3462H40.6538H42.3846C42.4693 21.3462 42.5385 21.4154 42.5385 21.5C42.5385 21.5846 42.4693 21.6538 42.3846 21.6538H40.6538ZM39.5 13C34.8123 13 31 16.8123 31 21.5C31 26.1877 34.8123 30 39.5 30C44.1877 30 48 26.1877 48 21.5C48 16.8123 44.1877 13 39.5 13Z" fill="#DDB060" stroke="#FFFAF2" stroke-width="2"/>
              </svg>
              span.to-basket {{ checkIfExists(activeBook.id) ? $t("catalog.added") : $t("catalog.in-cart") }}
            button.buy-now(type='submit') {{ $t("detail.buy-now") }} <!-- TODO Buy now -->
          .tabs-block(v-show='activeAbout === false')
            img.books-image(src='@/assets/image/books-background.png')
            .grand-title {{ $t("index.author-book-album") }}
            .book-album {{ $t("header.book-album") }}
            .title-another {{ activeBook.title }}
            .second-tab-content
              img.books-img(:src='activeBook.image', :alt='activeBook.title')
              .dynamic-description
                span(v-html='activeBook.description')
</template>

<script>
export default {
  validate({ params, localePath, redirect }) {
    if (!/^\d+$/.test(params.id)) redirect(localePath('/'))
    return true
  },
  data() {
    return {
      activeAbout: true,
    }
  },
  head() {
    return {
      title: `${this.activeBook?.title} - Silk Road Media`,
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.activeBook?.image,
        },
        {
          hid: 'description',
          // TODO Description
          name: 'description',
          content: this.activeBook?.brief,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.activeBook?.image,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.activeBook?.title} - Silk Road Media`,
        },
      ],
    }
  },
  computed: {
    activeBook() {
      return this.$store.getters.activeBook
    },
    cart() {
      return this.$store.getters.cart
    },
  },
  created() {
    this.retreiveBook()
  },
  unmounted() {
    this.$store.commit('flushActiveBook')
  },
  methods: {
    handleCart(id) {
      this.$store.commit('handleCart', id)
    },
    retreiveBook() {
      this.$store.dispatch('getBookById', {
        locale: this.$i18n.locale,
        id: this.$route.params.id,
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
  height: auto;
  min-height: 100vh;
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  justify-content: center;
  flex-direction: column;
  align-self: center;
  background-color: #f9e6c4;
  .pattern-back {
    display: flex;
    position: absolute;
    max-width: 100%;
    height: 100%;
    top: 0;
    left: -10px;
  }
  .content-wrapper {
    flex-direction: column;
    width: 80%;
    height: auto;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-top: 150px;
    .back-button {
      cursor: pointer;
      width: 100%;
      display: flex;
      position: relative;
      align-items: center;
      color: #a08d6b;
      span {
        margin-left: 15px;
      }
    }
    .content {
      width: 100%;
      margin: 0 auto;
      padding: 20px 0;
      .tabs {
        width: 100%;
        .tabs-items {
          display: flex;
          .tabs-item {
            cursor: pointer;
            flex: 0 2 7%;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Comfortaa', serif;
            color: rgba(160, 141, 107, 1);
            background-color: #fffcf6;
            margin-right: 5px;
          }
          .tabsItemActive {
            background: #fcf0db !important;
            color: #d2d2d2 !important;
            height: 25px;
            margin-top: auto;
          }
        }

        .tabs-body {
          width: 100%;
          height: 685px;
          display: flex;
          position: relative;
          .tabs-block {
            width: 100%;
            background-color: #fffcf6;
            display: flex;
            position: relative;
            flex-direction: column;
            align-items: center;
            font-size: 20px;
            text-align: center;
            &:nth-child(1) {
              .books-image {
                position: absolute;
                width: 700px;
                height: 570px;
                left: 10px;
                bottom: 10px;
              }
              .grand-title {
                padding: 20px 0 0 0;
                font-size: 35px;
                font-family: 'Cormorant', serif;
                color: rgba(149, 129, 94, 1);
              }
              .title {
                width: 80%;
                font-size: 30px;
                font-family: 'Alegreya', serif; // NEED INSTALL THIS FONT
              }
              .book-album {
                font-size: 26px;
                margin: 10px auto;
              }
              .first-tab-content {
                width: 100%;
                display: flex;
                position: relative;
                .books-img {
                  width: 340px;
                  height: 420px;
                  margin: 30px 70px;
                }
                .static-info {
                  display: inline-block;
                  width: 518px;
                  font-family: 'Cormorant', serif;
                  color: rgba(149, 129, 94, 1);
                  margin: 20px auto;
                  text-align: left;
                  font-size: 26px;
                  line-height: 2.5;
                  .dvd {
                    font-size: 22px;
                  }
                  .exclusive {
                    line-height: 0.5;
                    font-size: 22px;
                  }
                }
                .dynamic-info {
                  font-size: 26px;
                  display: inline-block;
                  width: 400px;
                  font-family: 'Cormorant', serif;
                  margin: 20px 50px;
                  font-style: italic;
                  text-align: left;
                  line-height: 2.5;
                }
              }
            }
            .price {
              position: absolute;
              right: 0;
              bottom: 100px;
              font-family: 'Cormorant', serif;
              font-style: italic;
              font-size: 55px;
              padding-right: 20px;
              z-index: 2;
              span {
                font-size: 30px;
              }
            }
            .background-price {
              position: absolute;
              right: 0;
              bottom: 85px;
              width: 305px;
            }
            .buy-now {
              position: absolute;
              right: 0;
              bottom: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-family: 'Cormorant', serif;
              font-size: 25px;
              width: 210px;
              height: 55px;
              background-color: rgba(243, 197, 112, 1);
              cursor: pointer;
            }
            .add-to-basket {
              right: 230px;
              bottom: 20px;
              display: flex;
              position: absolute;
              justify-content: center;
              align-items: center;
              width: 210px;
              height: 55px;
              background-color: rgba(243, 197, 112, 1);
              cursor: pointer;
              overflow: hidden;
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
                width: 42px;
                height: 42px;
                position: relative;
                z-index: 20;
              }
              .to-basket {
                display: flex;
                position: relative;
                margin-left: 10px;
                font-family: 'Cormorant', serif;
                font-size: 25px;
              }
            }
            &:nth-child(2) {
              .books-image {
                position: absolute;
                width: 700px;
                height: 570px;
                left: 10px;
                bottom: 10px;
              }
              .grand-title {
                padding: 20px 0 0 0;
                font-size: 35px;
                font-family: 'Cormorant', serif;
                color: rgba(149, 129, 94, 1);
              }
              .title-another {
                width: 80%;
                font-size: 30px;
                font-family: 'Alegreya', serif; // NEED INSTALL THIS FONT
              }
              .book-album {
                font-size: 26px;
                margin: 10px auto;
              }
              .second-tab-content {
                width: 100%;
                display: flex;
                position: relative;

                .books-img {
                  width: 340px;
                  height: 420px;
                  margin: 30px 70px;
                }

                .dynamic-description {
                  display: flex;
                  width: 61%;
                  height: 420px;
                  margin: 30px 30px;
                  text-align: left;
                  overflow-y: scroll;
                  overflow-x: hidden;
                  span {
                    font-size: 22px;
                    font-family: 'Cormorant', serif;
                    width: 95%;
                    height: 100%;
                    line-height: 1.3;
                  }

                  &::-webkit-scrollbar {
                    width: 11px;
                  }
                  &::-webkit-scrollbar-track {
                    background: linear-gradient(
                      90deg,
                      transparent 90%,
                      rgba(178, 178, 178, 1) 10%
                    );
                    background-position: 6px 0;
                  }
                  &::-webkit-scrollbar-thumb {
                    width: 1px;
                    background-color: rgba(149, 129, 94, 1);
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
@media screen and (min-width: 1921px) {
  .main-wrapper {
    .content-wrapper {
      .back-button {
        span {
          font-size: 30px;
          margin-left: 15px;
        }
      }
      .content {
        .tabs {
          .tabs-items {
            .tabs-item {
              flex: 0 2 10%;
              height: 50px;
              font-size: 30px;
              margin-right: 10px;
            }
          }
          .tabs-body {
            height: 1000px;
            .tabs-block {
              &:nth-child(1) {
                .books-image {
                  width: 900px;
                  height: 800px;
                  left: 30px;
                  bottom: 30px;
                }
                .grand-title {
                  padding-top: 30px;
                  font-size: 45px;
                }
                .title {
                  font-size: 35px;
                }
                .book-album {
                  font-size: 36px;
                }
                .first-tab-content {
                  .books-img {
                    width: 600px;
                    height: 680px;
                    margin: 50px 70px;
                  }
                  .static-info {
                    width: 70%;
                    margin: 20px 30px;
                    font-size: 36px;
                    line-height: 2.5;
                    .dvd {
                      font-size: 35px;
                    }
                    .exclusive {
                      line-height: 0.5;
                      font-size: 35px;
                    }
                  }
                  .dynamic-info {
                    font-size: 36px;
                    width: 50%;
                    margin: 20px 50px;
                    line-height: 2.5;
                  }
                }
              }
              .price {
                bottom: 175px;
                font-size: 105px;
                padding-right: 20px;
                span {
                  font-size: 60px;
                }
              }
              .background-price {
                right: 0;
                bottom: 85px;
                width: 580px;
                height: 300px;
              }
              .buy-now {
                right: 0;
                bottom: 20px;
                font-size: 55px;
                width: 420px;
                height: 110px;
              }
              .add-to-basket {
                right: 450px;
                bottom: 20px;
                width: 420px;
                height: 110px;
                .icon-basket {
                  width: 85px;
                  height: 85px;
                }
                .to-basket {
                  margin-left: 10px;
                  font-size: 55px;
                }
              }
              &:nth-child(2) {
                .books-image {
                  width: 900px;
                  height: 800px;
                  left: 30px;
                  bottom: 30px;
                }
                .grand-title {
                  padding-top: 30px;
                  font-size: 45px;
                }
                .title-another {
                  font-size: 35px;
                }
                .book-album {
                  font-size: 36px;
                }
                .second-tab-content {
                  .books-img {
                    width: 600px;
                    height: 680px;
                    margin: 50px 70px;
                  }

                  .dynamic-description {
                    width: 61%;
                    height: 680px;
                    margin: 50px 30px;
                    text-align: left;
                    overflow-y: scroll;
                    overflow-x: hidden;
                    span {
                      font-size: 40px;
                      font-family: 'Cormorant', serif;
                      width: 95%;
                      height: 100%;
                      line-height: 1.3;
                    }

                    &::-webkit-scrollbar {
                      width: 11px;
                    }
                    &::-webkit-scrollbar-track {
                      background: linear-gradient(
                        90deg,
                        transparent 90%,
                        rgba(178, 178, 178, 1) 10%
                      );
                      background-position: 6px 0;
                    }
                    &::-webkit-scrollbar-thumb {
                      width: 1px;
                      background-color: rgba(149, 129, 94, 1);
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
}
@media screen and (min-width: 2545px) {
  .main-wrapper {
    .content-wrapper {
      .back-button {
        span {
          font-size: 35px;
          margin-left: 15px;
        }
      }
      .content {
        .tabs {
          .tabs-items {
            .tabs-item {
              flex: 0 2 10%;
              height: 50px;
              font-size: 30px;
              margin-right: 10px;
            }
          }
          .tabs-body {
            height: 1200px;
            .tabs-block {
              &:nth-child(1) {
                .books-image {
                  width: 1200px;
                  height: 1000px;
                  left: 30px;
                  bottom: 30px;
                }
                .grand-title {
                  padding-top: 30px;
                  font-size: 55px;
                }
                .title {
                  font-size: 40px;
                }
                .book-album {
                  font-size: 46px;
                }
                .first-tab-content {
                  .books-img {
                    width: 700px;
                    height: 850px;
                    margin: 50px 100px;
                  }
                  .static-info {
                    width: 60%;
                    margin: 20px 30px;
                    font-size: 56px;
                    line-height: 2.5;
                    .dvd {
                      font-size: 35px;
                    }
                    .exclusive {
                      line-height: 0.5;
                      font-size: 35px;
                    }
                  }
                  .dynamic-info {
                    font-size: 56px;
                    width: 40%;
                    margin: 20px 50px;
                    line-height: 2.5;
                  }
                }
              }
              .price {
                bottom: 165px;
                font-size: 125px;
                padding-right: 20px;
                span {
                  font-size: 70px;
                }
              }
              .background-price {
                right: 0;
                bottom: 85px;
                width: 700px;
                height: 300px;
              }
              .buy-now {
                right: 0;
                bottom: 20px;
                font-size: 55px;
                width: 420px;
                height: 110px;
              }
              .add-to-basket {
                right: 450px;
                bottom: 20px;
                width: 420px;
                height: 110px;
                .icon-basket {
                  width: 85px;
                  height: 85px;
                }
                .to-basket {
                  margin-left: 10px;
                  font-size: 55px;
                }
              }
              &:nth-child(2) {
                .books-image {
                  width: 1200px;
                  height: 1000px;
                  left: 30px;
                  bottom: 30px;
                }
                .grand-title {
                  padding-top: 30px;
                  font-size: 55px;
                }
                .title-another {
                  font-size: 40px;
                }
                .book-album {
                  font-size: 46px;
                }
                .second-tab-content {
                  .books-img {
                    width: 700px;
                    height: 850px;
                    margin: 50px 100px;
                  }

                  .dynamic-description {
                    width: 61%;
                    height: 820px;
                    margin: 50px 30px;
                    text-align: left;
                    overflow-y: scroll;
                    overflow-x: hidden;
                    span {
                      font-size: 50px;
                      font-family: 'Cormorant', serif;
                      width: 95%;
                      height: 100%;
                      line-height: 1.3;
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
}
@media screen and (max-width: 1366px) {
  .main-wrapper {
    .pattern-back {
      max-width: 80%;
      height: 80%;
    }
    .content-wrapper {
      width: 85%;
      .content {
        .tabs {
          .tabs-items {
            .tabs-item {
              flex: 0 2 10%;
              font-size: 15px;
            }
          }
          .tabs-body {
            height: 600px;
            .tabs-block {
              &:nth-child(1) {
                .books-image {
                  width: 550px;
                  height: 450px;
                }
                .grand-title {
                  font-size: 24px;
                }
                .title {
                  font-size: 22px;
                }
                .book-album {
                  font-size: 22px;
                }
                .first-tab-content {
                  .books-img {
                    width: 260px;
                    height: 340px;
                    margin: 30px 30px;
                  }
                  .static-info {
                    width: 363px;
                    line-height: 2.5;
                    font-size: 22px;
                    margin: 20px 10px;
                    .dvd {
                      font-size: 18px;
                    }
                    .exclusive {
                      line-height: 0.5;
                      font-size: 18px;
                    }
                  }
                  .dynamic-info {
                    font-size: 22px;
                    display: inline-block;
                    width: 280px;
                    font-family: 'Cormorant', serif;
                    margin: 20px 50px;
                    font-style: italic;
                    text-align: left;
                    line-height: 2.5;
                  }
                }
              }
              &:nth-child(2) {
                .books-image {
                  width: 550px;
                  height: 450px;
                }
                .grand-title {
                  font-size: 24px;
                }
                .title-another {
                  font-size: 22px;
                }
                .book-album {
                  font-size: 22px;
                }
                .second-tab-content {
                  .books-img {
                    width: 260px;
                    height: 340px;
                    margin: 30px 30px;
                  }
                  .dynamic-description {
                    width: 61%;
                    height: 340px;
                    margin: 30px 30px;
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
@media screen and (max-width: 992px) {
  .main-wrapper {
    .pattern-back {
      max-width: 80%;
      height: 70%;
    }
    .content-wrapper {
      padding-top: 70px;
      width: 100%;
      .back-button {
        width: 100%;
        left: unset;
        span {
          margin-left: 15px;
        }
      }
      .content {
        .tabs {
          .tabs-body {
            height: 600px;
            .tabs-block {
              &:nth-child(1) {
                .books-image {
                  width: 550px;
                  height: 450px;
                }
                .grand-title {
                  font-size: 24px;
                }
                .title {
                  font-size: 22px;
                }
                .book-album {
                  font-size: 22px;
                }
                .first-tab-content {
                  .books-img {
                    width: 220px;
                    height: 300px;
                    margin: 30px 30px;
                  }
                  .static-info {
                    width: 410px;
                    line-height: 2.5;
                    font-size: 18px;
                    margin: 20px 0;
                    .dvd {
                      font-size: 16px;
                    }
                    .exclusive {
                      line-height: 0.5;
                      font-size: 16px;
                    }
                  }
                  .dynamic-info {
                    font-size: 18px;
                    display: inline-block;
                    width: 350px;
                    font-family: 'Cormorant', serif;
                    margin: 20px 50px;
                    font-style: italic;
                    text-align: left;
                    line-height: 2.5;
                  }
                }
              }
              &:nth-child(2) {
                .books-image {
                  width: 550px;
                  height: 450px;
                }
                .grand-title {
                  font-size: 24px;
                }
                .title-another {
                  font-size: 22px;
                }
                .book-album {
                  font-size: 22px;
                }
                .second-tab-content {
                  .books-img {
                    width: 220px;
                    height: 300px;
                    margin: 30px 30px;
                  }
                  .dynamic-description {
                    width: 61%;
                    height: 340px;
                    margin: 30px 30px;
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
  .main-wrapper {
    .pattern-back {
      width: 500px;
      height: 600px;
      left: 0;
    }
    .content-wrapper {
      width: 95%;
      .back-button {
        width: 100%;
        left: unset;
        span {
          margin-left: 15px;
        }
      }
      .content {
        .tabs {
          .tabs-items {
            justify-content: flex-end;

            .tabs-item {
              cursor: pointer;
              flex: 0 2 15%;
              height: 25px;
              display: flex;
              position: relative;
              justify-content: center;
              align-items: center;
              font-family: 'Comfortaa', serif;
              color: rgba(160, 141, 107, 1);
              background-color: #fffcf6;
              margin: 0 20px 0 -10px;
            }
          }
          .tabs-body {
            height: auto;
            min-height: 570px;
            .tabs-block {
              &:nth-child(1) {
                .books-image {
                  width: 420px;
                  height: 430px;
                }
                .grand-title {
                  font-size: 20px;
                }
                .title {
                  font-size: 18px;
                }
                .book-album {
                  font-size: 18px;
                }
                .first-tab-content {
                  width: 100%;
                  .books-img {
                    display: none;
                  }
                  .static-info {
                    width: 361px;
                    line-height: 2.5;
                    font-size: 18px;
                    margin: 20px 40px;
                    .dvd {
                      font-size: 14px;
                    }
                    .exclusive {
                      display: flex;
                      line-height: 0.5;
                      font-size: 14px;
                    }
                  }
                  .dynamic-info {
                    font-size: 18px;
                    display: inline-block;
                    width: 280px;
                    font-family: 'Cormorant', serif;
                    font-style: italic;
                    text-align: center;
                  }
                }
              }
              .buy-now {
                right: 15%;
                bottom: -20px;
                font-size: 22px;
                width: 160px;
                height: 45px;
              }
              .add-to-basket {
                left: 15%;
                bottom: -20px;
                width: 160px;
                height: 45px;
                .icon-basket {
                  width: 35px;
                  height: 35px;
                }
                .to-basket {
                  font-size: 22px;
                }
              }
              &:nth-child(2) {
                .books-image {
                  display: none;
                }
                .grand-title {
                  font-size: 20px;
                }
                .title-another {
                  font-size: 18px;
                }
                .book-album {
                  font-size: 18px;
                }
                .second-tab-content {
                  .books-img {
                    display: none;
                  }
                  .dynamic-description {
                    width: 100%;
                    height: 100%;
                    margin: 30px 30px;
                    text-align: justify;
                    overflow-y: unset;
                    span {
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
}
@media screen and (max-width: 515px) {
  .main-wrapper {
    .pattern-back {
      width: 250px;
      height: 500px;
      left: 0;
    }
    .content-wrapper {
      width: 95%;
      padding-top: 0;
      .back-button {
        width: 100%;
        left: unset;
        span {
          margin-left: 15px;
        }
      }
      .content {
        .tabs {
          .tabs-items {
            .tabs-item {
              flex: 0 2 22%;
              height: 25px;
              margin: 0 20px 0 -10px;
            }
          }
          .tabs-body {
            height: auto;
            min-height: 470px;
            .tabs-block {
              &:nth-child(1) {
                .books-image {
                  width: 280px;
                  height: 330px;
                  left: 10px;
                }
                .grand-title {
                  font-size: 18px;
                }
                .title {
                  width: 95%;
                  font-size: 16px;
                }
                .book-album {
                  font-size: 16px;
                }
                .first-tab-content {
                  width: 100%;
                  .static-info {
                    width: 60%;
                    line-height: 2;
                    font-size: 14px;
                    margin: 10px 10px;
                    .dvd {
                      font-size: 12px;
                    }
                    .exclusive {
                      width: 100px;
                      line-height: 1;
                      font-size: 12px;
                    }
                  }
                  .dynamic-info {
                    font-size: 14px;
                    line-height: 2;
                    width: 40%;
                    margin: 10px 10px;
                  }
                }
              }
              .price {
                bottom: 60px;
                font-size: 45px;
                span {
                  font-size: 30px;
                }
              }
              .background-price {
                bottom: 40px;
                width: 265px;
              }
              .buy-now {
                right: 5px;
                bottom: 5px;
                font-size: 18px;
                width: 120px;
                height: 35px;
              }
              .add-to-basket {
                left: 5px;
                bottom: 5px;
                width: 120px;
                height: 35px;
                .icon-basket {
                  width: 28px;
                  height: 28px;
                }
                .to-basket {
                  font-size: 18px;
                }
              }
              &:nth-child(2) {
                .books-image {
                  display: none;
                }
                .grand-title {
                  font-size: 18px;
                }
                .title-another {
                  width: 95%;
                  font-size: 16px;
                }
                .book-album {
                  font-size: 16px;
                }
                .second-tab-content {
                  .dynamic-description {
                    width: 100%;
                    height: 100%;
                    margin: 15px 15px;
                    span {
                      font-size: 18px;
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
}
@media screen and (max-width: 370px) {
  .main-wrapper {
    .content-wrapper {
      padding-top: 110px;
      .back-button {
        width: 100%;
        span {
          font-size: 14px;
          margin-left: 10px;
        }
        .svg {
          width: 30px;
        }
      }
      .content {
        .tabs {
          .tabs-items {
            .tabs-item {
              font-size: 12px;
            }
          }
          .tabs-body {
            height: auto;
            min-height: 450px;
            .tabs-block {
              &:nth-child(1) {
                .first-tab-content {
                  width: 100%;
                  .static-info {
                    width: 53%;
                    line-height: 2;
                    font-size: 12px;
                    .dvd {
                      font-size: 10px;
                    }
                    .exclusive {
                      width: 100px;
                      line-height: 1;
                      font-size: 10px;
                    }
                  }
                  .dynamic-info {
                    font-size: 12px;
                    line-height: 2;
                    width: 40%;
                  }
                }
              }
              .price {
                bottom: 60px;
                font-size: 45px;
                span {
                  font-size: 30px;
                }
              }
              .background-price {
                bottom: 40px;
                width: 265px;
              }
              .buy-now {
                right: 5px;
                bottom: 5px;
                font-size: 18px;
                width: 120px;
                height: 35px;
              }
              .add-to-basket {
                left: 5px;
                bottom: 5px;
                width: 120px;
                height: 35px;
                .icon-basket {
                  width: 28px;
                  height: 28px;
                }
                .to-basket {
                  font-size: 18px;
                }
              }
              &:nth-child(2) {
                .books-image {
                  display: none;
                }
                .grand-title {
                  font-size: 18px;
                }
                .title-another {
                  width: 95%;
                  font-size: 16px;
                }
                .book-album {
                  font-size: 16px;
                }
                .second-tab-content {
                  .dynamic-description {
                    width: 100%;
                    height: 100%;
                    margin: 15px 15px;
                    span {
                      font-size: 18px;
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
}
</style>
