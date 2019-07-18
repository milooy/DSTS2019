<template>
  <div class="powered-by-container">
    <SectionTitle>POWERED BY</SectionTitle>
    <div class="logo-container">
      <img class="zepl-logo" :src="ZeplLogo">
      <img class="x-icon" :src="xIcon">
      <img class="dataitgirls-logo" :src="DataItGirlsLogo">
    </div>
  </div>
</template>

<script>
import SectionTitle from "@/components/common/SectionTitle.vue";
import ZeplLogo from "@/assets/logos/zepl-logo.png";
import DataItGirlsLogo from "@/assets/logos/DataItGirls_CI.png";
import xIcon from "@/assets/images/xIcon.png";

export default {
  components: {
    SectionTitle
  },
  data() {
    return {
      ZeplLogo,
      DataItGirlsLogo,
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

  .zepl-logo {
    height: 90px;
    margin-left: 45px;
  }
  .x-icon {
    height: 30px;
    margin: 0 20px;
  }
  .dataitgirls-logo {
    height: 90px;
  }
}
</style>
