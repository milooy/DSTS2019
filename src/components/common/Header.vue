<template>
<div>

  <div class="intro">
    <slot />
    <div class="info-container">
      <div>2019.08.03 SAT 11:00 - 18:00</div>
      <div>@Microsoft 광화문</div>
    </div>
    <img :src="mainImage" class="main-image" alt="main illustration">
  </div>
  <Marquee/>
</div>
</template>

<script>
import backgroundImage from "@/assets/background.png";
import mainImage from "@/assets/images/main-image.png";
import Marquee from "@/components/common/Marquee.vue";

export default {
  components: {
    Marquee,
  },
  data() {
    return {
      backgroundImage,
      mainImage,
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.intro {
  background: $primary;
  min-height: 250px;
  position: relative;
  padding: 70px 30px 0;
  z-index: -1;
}
.main-image {
  position: absolute;
  display: inline-table;
  height: 40vw;
  bottom: 0;
  right: -170px;
}
h1 {
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  color: white;
  line-height: 1.2em;
  margin: 0;
  font-size: $font-xxl;
}

.info-container {
  font-size: $font-m;
  padding-bottom: 70px;
  color: white;
}
</style>
