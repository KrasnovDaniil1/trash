<template lang="pug">
#header.header
  div.container-effect-header
      img.img-effects-header(src="../assets/image/header-img-effects.png")
      div.effects-header
          div.shield-left-header
          div.shield-right-header
  .title
    h1.name {{ $t("header.name") }}
    span.logo Silk
    span.logo Road
    span.logo Media

  .btn
    nav.navbar
      NuxtLink.page(:to='localePath("/")') {{ $t("header.main") }}
      NuxtLink.page(:to='localePath("/catalogue")') {{ $t("header.catalog") }}
      NuxtLink.page(:to='localePath("about")') {{ $t("header.about") }}
      a.page(@click='handleCard()') {{ $t("header.cart") }}
        span.number(v-show='cart.length !== 0') {{ `0${cart.length}`.slice(-2) }}
    .language
      NuxtLink.lang(:to='switchLocalePath("ru")') Py
      NuxtLink.lang(:to='switchLocalePath("en")') En
      NuxtLink.lang(:to='switchLocalePath("uz")') Uz
  .btn-alter(
    :class='{ "dash-alter": navbarAlter }',
    @click='changeNavbarAlter'
  )
    i.dash.dash-one
    i.dash.dash-two
    i.dash.dash-three
    .dash-four
      span.number-alter-dash(v-show='cart.length !== 0') {{ `0${cart.length}`.slice(-2) }}
  transition(name='navbar')
    nav.navbar-alter(v-show='navbarAlter')
      NuxtLink.page-alter(:to='localePath("/")', @click='changeNavbarAlter()') {{ $t("header.main") }}
      NuxtLink.page-alter(:to='localePath("/catalogue")') {{ $t("header.catalog") }}
      a.page-alter(@click='handleCard()') {{ $t("header.cart") }}
        span.number-alter(v-if='cart.length !== 0') {{ `0${cart.length}`.slice(-2) }}
      NuxtLink.page-alter(:to='localePath("about")') {{ $t("header.about") }}
      .language-alter
        NuxtLink.lang-alter(:to='switchLocalePath("ru")') Py
        NuxtLink.lang-alter(:to='switchLocalePath("en")') En
        NuxtLink.lang-alter(:to='switchLocalePath("uz")') Uz
  Card(:open='openCloseCard', @closeCard='openCloseCard = false')
</template>
<script>
export default {
  data() {
    return {
      navbarAlter: false,
      openCloseCard: false,
    }
  },
  computed: {
    cart() {
      return this.$store.getters.cart
    },
  },
  watch: {
    $route(to, from) {
      console.log(to, from)
      console.log(this.$route.name)
      const header = document.getElementById('header')
      const headerChild = document.getElementById('header').children[1]
      const headerChildEffect = document.getElementById('header').children[0]

      if (this.$route.name !== `index___${this.$i18n.locale}`) {
        header.style.position = ''
        header.style.top = ''
        header.style.background = ''
        headerChild.style.opacity = '1'
        for (let i = 0; i < 4; i++) {
          headerChild.children[i].style.display = ''
        }
        headerChildEffect.style.display = ''
        headerChildEffect.children[1].style.display = 'none'
        headerChildEffect.children[1].children[0].style.background = '#F9E6C4'
        headerChildEffect.children[1].children[1].style.background = '#F9E6C4'
      }
      if (this.$route.name === `catalogue___${this.$i18n.locale}`) {
        header.style.position = 'relative'
        header.style.background = '#f9e6c4'
        header.style.maxWidth = '100%'
      }
      if (this.$route.name === `index___${this.$i18n.locale}`) {
        header.style.maxWidth = '1920px'
        headerChildEffect.style.display = ''
        headerChildEffect.children[1].style.display = 'none'
        headerChildEffect.children[1].children[0].style.background = '#fffcf6'
        headerChildEffect.children[1].children[1].style.background = '#fffcf6'
        console.log('chf, нуы')
      }
      if (this.$route.name === `details-id___${this.$i18n.locale}`) {
        header.style.position = 'absolute'
        header.style.background = 'transparent'
        header.style.maxWidth = '100%'
      }
    },
  },
  methods: {
    handleCard() {
      this.openCloseCard = true
      this.$emit('openCard', this.openCloseCard)
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    },
    changeNavbarAlter() {
      this.navbarAlter = !this.navbarAlter
      if (this.navbarAlter) {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden'
      } else {
        document.getElementsByTagName('body')[0].style.overflow = 'visible'
      }
    },
  },
  mounted() {
    const header = document.getElementById('header')
    const headerChildEffect = document.getElementById('header').children[0]
    if (this.$route.name === `catalogue___${this.$i18n.locale}`) {
      header.style.position = 'relative'
      header.style.background = '#f9e6c4'
      header.style.maxWidth = 'inherit'
    }
    if (this.$route.name === `about___${this.$i18n.locale}`) {
      header.style.background = '#f9e6c4'
      header.style.maxWidth = 'inherit'
    }
    if (this.$route.name === `details-id___${this.$i18n.locale}`) {
      header.style.position = 'absolute'
      header.style.background = 'transparent'
      header.style.maxWidth = '100%'
    }
    if (this.$route.name === `index___${this.$i18n.locale}`) {
      headerChildEffect.style.display = 'none'
    } else {
      headerChildEffect.style.display = ''
      headerChildEffect.children[1].style.display = 'none'
    }
    if (window.innerWidth < 986) {
      headerChildEffect.style.display = ''
      headerChildEffect.children[1].style.display = 'none'
    }
  },
}
</script>

<style lang="scss" scoped>
@keyframes effectsLogo {
  from {
    width: 50%;
  }
  to {
    width: 0;
  }
}
.nuxt-link-exact-active {
  color: #c99c4d !important;
}
.navbar-enter-active,
.navbar-leave-active {
  transition: all 0.5s;
}
.navbar-enter,
.navbar-leave-to {
  opacity: 0;
}

.header {
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: absolute;
  background: #f9e6c4;
  display: flex;
  justify-content: space-between;
  z-index: 200 !important;
  .container-effect-header {
    width: 206px;
    height: 142px;
    position: absolute;
    margin-left: 3.75rem;
    margin-top: 1rem;
    .img-effects-header {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .effects-header {
      position: absolute;
      width: 100%;
      height: 100%;
      justify-content: center;
      top: 0;
      display: none;
      .shield-left-header {
        left: 0;
        position: absolute;
        height: 100%;
        width: 50%;
        background: #fffcf6;
        animation-name: effectsLogo;
        animation-duration: 1.5s;
        animation-fill-mode: forwards;
      }
      .shield-right-header {
        right: 0;
        position: absolute;
        height: 100%;
        width: 50%;
        background: #fffcf6;
        animation-name: effectsLogo;
        animation-duration: 1.5s;
        animation-fill-mode: forwards;
      }
    }
  }
  .title {
    display: flex;
    flex-direction: column;
    margin-left: 3.75rem;
    .name {
      font-family: 'Bodoni Moda', serif;
      font-style: normal;
      font-weight: normal;
      font-size: 1.6em;
      line-height: 1.5em;
      text-align: right;
      color: #3f3f3f;
      margin-top: 0.7rem;
      margin-bottom: 0.4rem;
      z-index: 49;
    }
    .logo {
      font-family: 'NK147', serif;
      font-style: normal;
      font-weight: 500;
      font-size: 2.5em;
      line-height: 0.9em;
      color: #3f3f3f;
      position: relative;
      &:nth-child(2) {
        &::before {
          position: relative;
          content: '“';
          color: #c6b18d;
        }
      }
      &:nth-child(3) {
        margin-left: 3rem;
        position: relative;
      }
      &:nth-child(4) {
        margin-left: 4.6rem;
        padding-bottom: 1rem;
        &::after {
          position: relative;
          content: '”';
          color: #c6b18d;
        }
      }
    }
  }
  .btn {
    display: flex;
    justify-content: space-between;
    padding-right: 3.75rem;
    margin-top: 1.5rem;
    position: relative;
    z-index: 140;
    .navbar {
      font-family: 'Comfortaa', cursive;
      font-style: normal;
      font-weight: normal;
      font-size: 1.8em;
      line-height: 1.8em;
      text-align: center;
      color: #a08d6b;
      .page {
        cursor: pointer;
        &:not(:last-child) {
          margin-right: 3.5rem;
        }
        &:last-child {
          position: relative;
          margin-right: 9.5rem;
          .number {
            position: absolute;
            top: -0.8em;
            right: -1em;
            width: 1.3em;
            height: 1.3em;
            background: #f3c570;
            border-radius: 100%;
            font-size: 0.9em;
            line-height: 1.5em;
            color: #fffcf6;
            transform: translateX(10%);
            cursor: pointer;
          }
        }
      }
    }
    .language {
      display: flex;
      justify-content: space-around;
      margin-top: 1.1rem;
      .lang {
        font-family: 'Monofonto', serif;
        font-style: normal;
        font-weight: normal;
        font-size: 1.3em;
        line-height: 1em;
        text-align: center;
        color: #a08d6b;
        cursor: pointer;
        &:not(:last-child) {
          margin-right: 1.2rem;
        }
      }
    }
  }
  .btn-alter {
    display: none;
    flex-direction: column;
    margin-top: 1.25rem;
    position: relative;
    z-index: 100;
    transition: all 5s;
    .dash {
      background: #fffcf6;
      margin-bottom: 0.3rem;
      z-index: 200;
      position: relative;
      transition: all 0.65s;
      &:nth-child(1) {
        width: 4em;
        height: 0.45em;
      }
      &:nth-child(2) {
        width: 3em;
        height: 0.4em;
        margin-left: auto;
      }
      &:nth-child(3) {
        width: 1.7em;
        height: 0.25em;
        margin-left: auto;
      }
    }
    .dash-four {
      width: 2.5em;
      height: 2.5em;
      position: absolute;
      left: -0.1em;
      top: 0.5em;
      display: flex;
      justify-content: center;
      align-items: center;
      .number-alter-dash {
        background: #f3c570;
        border-radius: 100%;
        font-size: 1.7em;
        line-height: 1.2em;
        padding-left: 0.1em;
        padding-right: 0.1em;
        text-align: center;
        color: #fffcf6;
        cursor: pointer;
      }
    }
  }
  .dash-alter {
    .dash-one,
    .dash-three {
      width: 4em !important;
      height: 0.45em !important;
      transition: all 0.65s;
    }
    .dash-two {
      width: 1em !important;
      height: 0.4em !important;
      margin-right: 1.5em;
      transition: all 0.65s;
    }
    .dash-four {
      .number-alter-dash {
        font-size: 0 !important;
        padding: 0;
        transition: all 0.7s;
        cursor: pointer;
      }
    }
  }
  .navbar-alter {
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 50;
    background: #f9e6c4;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Comfortaa', cursive;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    color: #a08d6b;
    .page-alter {
      font-size: 3em;
      line-height: 1.8em;
      cursor: pointer;
      &:nth-child(3) {
        position: relative;
        .number-alter {
          position: absolute;
          right: -1em;
          width: 1.3em;
          height: 1.3em;
          background: #f3c570;
          border-radius: 100%;
          font-size: 0.6em;
          line-height: 1.4em;
          color: #fffcf6;
          transform: translateX(10%);
        }
      }
    }
    .language-alter {
      display: flex;
      justify-content: space-around;
      margin-top: 6rem;
      .lang-alter {
        font-family: 'Monofonto', serif;
        font-style: normal;
        font-weight: normal;
        font-size: 2.2em;
        line-height: 1em;
        text-align: center;
        color: #a08d6b;
        padding-right: 2rem;
        padding-left: 2rem;
        cursor: pointer;
        &:nth-child(2) {
          border-left: 0.1em solid #f3c570;
          border-right: 0.1em solid #f3c570;
        }
      }
      .active-lang {
        color: #c99c4d;
      }
    }
  }
}
@media screen and (max-width: 1500px) {
  .header {
    .title {
      margin-left: 3rem;
      .name {
        margin-bottom: 0.1rem;
        font-size: 1.5em;
      }
      .logo {
        line-height: 0.8em;
        font-size: 2em;
        &:nth-child(3) {
          margin-left: 2.3rem;
        }
        &:nth-child(4) {
          margin-left: 4rem;
        }
      }
    }
    .btn {
      margin-top: 1rem;
      margin-right: 3rem;
      .navbar {
        font-size: 1.45em;
        .page {
          &:not(:last-child) {
            margin-right: 3rem;
          }
          &:last-child {
            margin-right: 6rem;
          }
        }
      }
      .language {
        margin-top: 1rem;
        .lang {
          font-size: 1.2em;
        }
      }
    }
  }
}

@media screen and (max-width: 1300px) {
  .header {
    .title {
      margin-left: 1.5rem;
      .name {
        margin-top: 0.3rem;
      }
    }
    .btn {
      margin-right: 1.5rem;
      margin-top: 0.75rem;
      .navbar {
        font-size: 1.3em;
        .page {
          &:not(:last-child) {
            margin-right: 2.5rem;
          }
          &:last-child {
            margin-right: 5rem;
          }
        }
      }
      .language {
        margin-top: 0.75rem;
        .lang {
          font-size: 1em;
        }
      }
    }
  }
}

@media screen and (max-width: 1100px) {
  .header {
    .title {
      .name {
        margin-top: 0.2rem;
        font-size: 1.4em;
      }
      .logo {
        line-height: 0.85em;
        font-size: 1.5em;
        &:nth-child(3) {
          margin-left: 1.8rem;
        }
        &:nth-child(4) {
          margin-left: 3.4rem;
        }
      }
    }
    .btn {
      margin-top: 0.5rem;
      .navbar {
        font-size: 1.1em;
        .page {
          &:not(:last-child) {
            margin-right: 2rem;
          }
          &:last-child {
            margin-right: 4rem;
          }
        }
      }
      .language {
        margin-top: 0.5rem;
        .lang {
          font-size: 1em;
        }
      }
    }
  }
}
@media screen and (max-width: 950px) {
  .header {
    .container-effect-header {
      margin: 0;
      width: 156px;
      height: 100px;
    }
    .title {
      margin-left: 1.2rem;
      .name {
        margin-bottom: 0.1rem;
        margin-top: 0.2rem;
        font-size: 1.1em;
      }
      .logo {
        line-height: 0.85em;
        font-size: 1.4em;
        &:nth-child(3) {
          margin-left: 1.8rem;
        }
        &:nth-child(4) {
          margin-left: 3.2rem;
        }
      }
    }
    .btn {
      padding-right: 1.2rem;
      margin-top: 0.7rem;
      .navbar {
        font-size: 1em;
        .page {
          &:not(:last-child) {
            margin-right: 1.5rem;
          }
          &:last-child {
            margin-right: 3rem;
          }
        }
      }
      .language {
        .lang {
          font-size: 0.9em;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .none {
    display: none;
  }
  .header {
    .container-effect-header {
      .effects-header {
        .shield-left-header,
        .shield-right-header {
          animation-name: none;
          width: 0;
        }
      }
    }
    .title {
      margin-left: 1rem;
      .name {
        margin-bottom: 0.8rem;
        margin-top: 1rem;
        font-size: 2.5em;
        line-height: 1.2em;
      }
      .logo {
        line-height: 0.45em;
        font-size: 2em;
        &:nth-child(2) {
          margin-left: 1.3rem;
          &::before {
            color: #3f3f3f;
          }
        }
        &:nth-child(3) {
          margin-left: 6.3rem;
        }
        &:nth-child(4) {
          margin-left: 11.5rem;
          &::after {
            color: #3f3f3f;
          }
        }
      }
    }
    .btn {
      display: none;
    }
    .btn-alter {
      display: flex;
      margin-right: 1rem;
      cursor: pointer;
    }
    .navbar-alter {
      display: flex;
    }
  }
}
@media screen and (max-width: 550px) {
  .header {
    .title {
      margin-left: 0.1rem;
      align-items: flex-start;
      .name {
        margin-bottom: 0.8rem;
        margin-top: 0.5rem;
        font-size: 1.6em;
        line-height: 1em;
        margin-left: 1rem;
      }
      .logo {
        line-height: 0.45em;
        font-size: 1.5em;
        &:nth-child(2) {
          margin-left: inset;
        }
        &:nth-child(3) {
          margin-left: 4.8rem;
        }
        &:nth-child(4) {
          margin-left: 8.5rem;
        }
      }
    }
    .btn {
      display: none;
      margin-right: 1rem;
    }
    .btn-alter {
      margin-top: 0.75rem;
      .dash {
        background: #fffcf6;
        margin-bottom: 0.3rem;
        z-index: 10;
        &:nth-child(1) {
          width: 3.5em;
          height: 0.35em;
        }
        &:nth-child(2) {
          width: 2.8em;
          height: 0.3em;
        }
        &:nth-child(3) {
          width: 1.4em;
          height: 0.2em;
        }
      }
      .number-alter {
        position: absolute;
        left: -0.2em;
        width: 1.2em;
        height: 1.2em;
        background: #f3c570;
        border-radius: 100%;
        font-size: 1.4em;
        line-height: 1.2em;
        text-align: center;
        color: #fffcf6;
      }
    }
  }
}
@media screen and (max-width: 375px) {
  .header {
    .title {
      align-items: flex-start;
      margin-left: 0.1rem;
      .name {
        margin-bottom: 1rem;
        margin-top: 0.75rem;
        font-size: 1em;
        line-height: 1em;
        margin-left: 1rem;
      }
      .logo {
        line-height: 0.45em;
        font-size: 1.7em;
        &:nth-child(2) {
          margin-left: inset;
        }
        &:nth-child(3) {
          margin-left: 5.5rem;
        }
        &:nth-child(4) {
          margin-left: 10rem;
        }
      }
    }
    .btn {
      display: none;
      margin-right: 0;
    }
    .btn-alter {
      margin-top: 0.6rem;
      position: absolute;
      right: 0;
      .dash {
        background: #fffcf6;
        margin-bottom: 0.3rem;
        z-index: 10;
        &:nth-child(1) {
          width: 3em;
          height: 0.3em;
        }
        &:nth-child(2) {
          width: 2em;
          height: 0.25em;
        }
        &:nth-child(3) {
          width: 1em;
          height: 0.15em;
        }
      }
      .dash-four {
        width: 2em;
        height: 2em;
        position: absolute;
        left: -0.1em;
        top: 0.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        .number-alter-dash {
          background: #f3c570;
          border-radius: 100%;
          font-size: 1.7em;
          line-height: 1.2em;
          padding-left: 0.1em;
          padding-right: 0.1em;
          text-align: center;
          color: #fffcf6;
        }
      }
    }
    .navbar-alter {
      .page-alter {
        font-size: 2.5em;
      }
      .language-alter {
        font-size: 0.75em;
      }
    }
  }
}
</style>
