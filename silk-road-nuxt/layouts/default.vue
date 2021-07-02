<template>
  <div class="container-layout">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
.container-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
input,
textarea,
button,
select,
div,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
    &::after {
      content: ' ';
      display: block;
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: black;
      margin: -4px 0 0 -4px;
    }
    &:nth-child(1) {
      animation-delay: -0.036s;
      &::after {
        top: 63px;
        left: 63px;
      }
    }
    &:nth-child(2) {
      animation-delay: -0.072s;
      &::after {
        top: 68px;
        left: 56px;
      }
    }
    &:nth-child(3) {
      animation-delay: -0.108s;
      &::after {
        top: 71px;
        left: 48px;
      }
    }
    &:nth-child(4) {
      animation-delay: -0.144s;
      &::after {
        top: 72px;
        left: 40px;
      }
    }
    &:nth-child(5) {
      animation-delay: -0.18s;
      &::after {
        top: 71px;
        left: 32px;
      }
    }
    &:nth-child(6) {
      animation-delay: -0.216s;
      &::after {
        top: 68px;
        left: 24px;
      }
    }
    &:nth-child(7) {
      animation-delay: -0.252s;
      &::after {
        top: 63px;
        left: 17px;
      }
    }
    &:nth-child(8) {
      animation-delay: -0.288s;
      &::after {
        top: 56px;
        left: 12px;
      }
    }
  }
}

img[alt] {
  color: transparent;
}

img::after {
  font-weight: 900;
  content: 'Broken Image of ' attr(alt);
  display: block;
  font-size: 16px;
  font-style: normal;
  color: rgb(100, 100, 100);
  position: absolute;
  top: 40%;
  width: 100%;
  text-align: center;
}

b,
strong {
  font-weight: bold;
}

blockquote {
  border-left: 0.3em solid grey;
  margin-top: 1em;
  margin-bottom: 1em;
  font-style: italic;
  p {
    padding: 0.6em 2em;
  }
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

i,
em {
  font-style: italic;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.4s ease-in;
  transform: scale(1) translateX(10%) !important;
}

.scale-enter-from,
.scale-leave-to {
  transform: scale(0) translateX(10%) !important;
}
</style>
