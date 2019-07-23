<template>
  <div class="powered-by-container">
    <SectionTitle>ORGANIZED BY</SectionTitle>
    <div class="logo-container">
      <img class="lbd-logo" :src="LBDLogo">
      <img class="x-icon" :src="xIcon">
      <img class="dataittalks-logo" :src="DataItTalksLogo">
    </div>
  </div>
</template>

<script>
import SectionTitle from "@/components/common/SectionTitle.vue";
import LBDLogo from "@/assets/logos/lbd-logo_1.png";
import DataItTalksLogo from "@/assets/logos/DataItTalks.png";
import xIcon from "@/assets/images/xIcon.png";

export default {
  components: {
    SectionTitle
  },
  data() {
    return {
      LBDLogo,
      DataItTalksLogo,
      xIcon
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.powered-by-container {
  text-align: center;

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0 50px;
  }

  .lbd-logo {
    height: 90px;
    margin-left: 45px;
  }
  .x-icon {
    height: 30px;
    margin: 0 20px;
  }
  .dataittalks-logo {
    height: 90px;
  }
}
</style>
