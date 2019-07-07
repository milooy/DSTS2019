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
}

#app {
  font-family: 'Noto Sans KR', 'Avenir', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.contents {
  padding: 20px 15px 25px;
  max-width: 900px;
  margin: 0 auto;
}

</style>
