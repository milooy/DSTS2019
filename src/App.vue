<template>
  <div id="app">
    <Navigation />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/common/Navigation.vue';
import Footer from '@/components/common/Footer.vue';

export default {
  components: {
    Navigation,
    Footer,
  },
};
</script>


<style lang="scss">

body {
  margin: 0;
  overflow-x: hidden;
  word-break: keep-all;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
  line-height: 1.78;
  font-size: $font-m;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: hidden;
}

.contents {
  padding: 20px 15px 25px;
  max-width: 1150px;
  margin: 0 auto;
}

</style>
