<template lang="pug">
footer#footer.footer-main-holder
  .footer-inner
    .footer-top
      a.phone-number(href='tel:+998955130009') +998 (95) 513-00-09
      .social-network
        .telegram
          i.fab.fa-telegram-plane 
          span.dash-top
          span.dash-bottom
          span.dash-right
          span.dash-left
        .instagram
          i.fab.fa-instagram
          span.dash-top
          span.dash-bottom
          span.dash-right
          span.dash-left
      a.social-mail(href='mailto:info@silkroadmedia.uz') info@silkroadmedia.uz
    .footer-middle {{ $t("footer.help") }}
    .footer-low
      .supports-content
        a.darakchi(href='http://darakchi.uz', target='_self')
          img(src='../assets/image/darakchi.png')
        a.sevimli(href='https://sevimlitv.uz', target='_self')
          img(src='../assets/image/sevimli.png')
        a.naesmi(href='https://oav.uz', target='_self')
          img(src='../assets/image/naesmi.png')
        a.mkru(href='#', target='_self')
          img(src='../assets/image/mkr.png')
</template>
<script>
export default {
  watch: {
    $route(to, from) {
      console.log(to, from)
      console.log(this.$i18n.locale)
      if (this.$route.name !== `index___${this.$i18n.locale}`) {
        document.getElementById('footer').style.maxWidth = 'inset'
      }
    },
  },
  mounted() {
    if (this.$route.name === `index___${this.$i18n.locale}`) {
      document.getElementById('footer').style.maxWidth = '1920'
    } else {
      document.getElementById('footer').style.maxWidth = 'inset'
    }
  },
}
</script>
<style lang="scss" scoped>
.footer-main-holder {
  width: 100%;
  height: 430px;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 252, 246, 1);
  z-index: 50;
  max-width: 1920px;
  .footer-inner {
    font-family: 'Cormorant', serif;
    .footer-top {
      display: flex;
      position: relative;
      justify-content: space-around;
      align-items: center;
      padding: 46px;
      font-size: 40px;
      .social-network {
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .telegram,
        .instagram {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 48px;
          height: 48px;
          :first-child {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          :not(:first-child) {
            background: #f3c570;
            position: absolute;
            transition: all 0.35s;
          }
          .dash-top {
            top: 10px;
            width: 120%;
            height: 3px;
            z-index: -1;
            left: -3px;
          }
          .dash-bottom {
            bottom: 5px;
            right: -5px;
            width: 120%;
            height: 3px;
          }
          .dash-left {
            left: 3px;
            top: 0;
            width: 3px;
            height: 100%;
          }
          .dash-right {
            right: 3px;
            bottom: -5px;
            width: 3px;
            height: 75%;
          }
          &:hover {
            .dash-top {
              left: -8px;
            }
            .dash-bottom {
              right: -8px;
            }
            .dash-left {
              top: 3px;
              height: 100%;
            }
            .dash-right {
              bottom: 0;
            }
          }
        }
      }
    }
    .footer-middle {
      width: 100%;
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      font-size: 35px;
    }
    .footer-low {
      display: flex;
      position: relative;
      justify-content: space-around;
      align-items: center;

      .supports-content {
        width: 100%;
        display: flex;
        position: relative;
        justify-content: space-between;
        align-items: center;
        padding: 30px;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .footer-main-holder {
    width: 100%;
    height: 450px;
    display: block;
    position: relative;
    align-items: center;
    justify-content: center;
    .footer-inner {
      font-family: 'Cormorant', serif;
      .footer-top {
        display: flex;
        position: relative;
        justify-content: space-around;
        align-items: center;
        padding: 46px;
        font-size: 30px;

        .phone-number {
          font-size: 25px;
        }

        .social-network {
          width: 200px;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
      }
      .footer-middle {
        width: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        font-size: 25px;
      }
      .footer-low {
        display: flex;
        position: relative;
        justify-content: space-around;
        align-items: center;

        .supports-content {
          width: 100%;
          display: flex;
          position: relative;
          justify-content: space-evenly;
          align-items: center;
          padding: 20px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .footer-main-holder {
    .footer-inner {
      font-family: 'Cormorant', serif;
      .footer-top {
        position: relative;
        justify-content: space-around;
        align-items: center;
        padding: 46px;
        font-size: 2em;

        .phone-number {
          padding-top: 20px;
          margin-bottom: -20px;
          font-size: 1.5rem;
        }

        .social-mail {
          padding-top: 20px;
          margin-bottom: -20px;
          font-size: 1.5rem;
        }

        .social-network {
          width: 200px;
          height: auto;
          // display: flex;
          position: absolute;
          align-items: center;
          justify-content: space-around;
          margin-top: -56px;
        }
      }
      .footer-middle {
        width: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        font-size: 25px;
      }
      .footer-low {
        display: grid;
        position: relative;
        justify-content: space-around;
        align-items: center;
        .supports-content {
          width: 100%;
          display: flex;
          position: relative;
          justify-content: space-evenly;
          align-items: center;
          padding: 20px;
          .sevimli {
            display: flex;
            position: absolute;
            margin: 230px 200px 0 0;
          }
          .mkru {
            display: flex;
            position: absolute;
            margin: 230px 0 0 250px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .footer-main-holder {
    .footer-inner {
      .footer-top {
        position: relative;
        justify-content: space-around;
        align-items: center;
        // padding: 46px;
        font-size: 2em;

        .phone-number {
          position: absolute;
          margin-bottom: -45px;
          font-size: 1.5rem;
        }

        .social-mail {
          position: absolute;
          margin-bottom: -120px;
          font-size: 1.5rem;
        }

        .social-network {
          width: 200px;
          height: auto;
          // display: flex;
          position: absolute;
          align-items: center;
          margin-top: -15px;
          justify-content: space-around;
        }
      }
      .footer-middle {
        width: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        padding-top: 50px;
      }
      .footer-low {
        display: grid;
        position: relative;
        justify-content: space-around;
        align-items: center;
        .supports-content {
          width: 100%;
          display: flex;
          position: relative;
          justify-content: space-evenly;
          align-items: center;
          padding: 20px;
          .darakchi {
            display: flex;
            position: absolute;
            width: 122px;
            height: 32px;
            margin: 100px 200px 0 0;
          }
          .naesmi {
            display: flex;
            position: absolute;
            width: 120px;
            height: 65px;
            margin: 230px 200px 0 0;
          }
          .sevimli {
            display: flex;
            position: absolute;
            width: 190px;
            height: 60px;
            margin: 90px 0 0 156px;
          }
          .mkru {
            display: flex;
            position: absolute;
            width: 120px;
            height: 73px;
            margin: 225px 0 0 160px;
          }
        }
      }
    }
  }
}
</style>
