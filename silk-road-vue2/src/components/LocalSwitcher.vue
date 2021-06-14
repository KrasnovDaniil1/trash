<template>
    <select class="lang" @change="switchLocale($event.target.value)">
      <option v-for="locale in locales" :key="locale" >
            {{locale}}
      </option>
    </select>
</template>
<script>
export default {
  name: "LocalSwitcher",
  data() {
    return {
      locales: ['Рус','Ozb','Eng']
      // locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(","),

    };
  },
  methods: {
    switchLocale(locale = "Рус") { 
      if (locale == "Рус") {
        locale = "Rus"
      }
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
    },
  },
  beforeMount() {
    this.switchLocale()
 },
};
</script>
<style lang="css">

</style>
// 