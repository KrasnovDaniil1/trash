<template>
    <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.2/css/all.css"
    />
    <Header />
    <router-view />
    <Footer />
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default {
    name: 'App',
    components: {
        Header,
        Footer,
    },
};
</script>

<style>
@font-face {
    font-family: 'PT Sans Narrow Regular';
    src: url('./assets/fonts/PTSansNarrow-Regular.ttf') format('truetype');
    font-weight: bold;
}
@font-face {
    font-family: 'Krona One Regular';
    src: url('./assets/fonts/KronaOne-Regular.ttf') format('truetype');
    font-weight: bold;
}
@font-face {
    font-family: 'Oswald Regular';
    src: url('./assets/fonts/Oswald-Regular.ttf') format('truetype');
    font-weight: bold;
}
@font-face {
    font-family: 'PT Mono Regular';
    src: url('./assets/fonts/PT Mono-Regular.ttf') format('truetype');
    font-weight: bold;
}
@font-face {
    font-family: 'Montserrat Regular';
    src: url('./assets/fonts/Montserrat-Regular.ttf') format('truetype');
    font-weight: bold;
}
@font-face {
    font-family: 'Montserrat Bold';
    src: url('./assets/fonts/Montserrat-Bold.ttf') format('truetype');
    font-weight: bold;
}
@font-face {
    font-family: 'Montserrat SemiBold';
    src: url('./assets/fonts/Montserrat-SemiBold.ttf') format('truetype');
    font-weight: bold;
}
@font-face {
    font-family: 'Oswald Bold';
    src: url('./assets/fonts/Oswald-Bold.ttf') format('truetype');
    font-weight: bold;
}
*,
*::before,
*::after {
    box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
p,
li,
figure,
figcaption,
blockquote,
dl,
dd {
    margin: 0;
    font-size: inherit;
    padding: 0;
}
body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    background-color: #bba773;
}

ul,
ol {
    list-style: none;
    padding: 0;
    margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

img {
    display: block;
}
article > * + * {
    margin-top: 1em;
}

input,
button,
textarea,
select {
    font: inherit;
}

input {
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
}
input:focus {
    outline: none;
}
::-webkit-input-placeholder {
    color: #e9e9e9;
}
button {
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
}

button:active,
button:focus {
    outline: none;
}

select {
    border: none;
    background-color: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
}
</style>
