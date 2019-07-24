<template>
  <div class="become-sponsor-container">
    <div class="left-pane">
      <h3>BECOME A SPONSOR</h3>
      <p>DSTS는 데이터를 사랑하는 모든 사람을 위한 비영리 컨퍼런스입니다.</p>
      <p>
        데이터의 중요성을 깊이 공감하는 후원사를 모십니다.
        <br>유니폼에 들어가는 회사 로고 외에도 다양한 혜택을 드립니다.
      </p>
      <Button
        href="https://drive.google.com/file/d/1EgxwwILJEBo3KTR771rg00PFPYblZy8E/view?usp=sharing"
      >
        SEE DETAIL
      </Button>
    </div>
    <img class="uniform-img" :src="uniformImg">
  </div>
</template>

<script>
import SectionTitle from "@/components/common/SectionTitle.vue";
import ZeplLogo from "@/assets/logos/zepl-logo.png";
import DataItGirlsLogo from "@/assets/logos/DataItGirls_CI.png";
import uniformImg from "@/assets/images/uniform.png";
import Button from "@/components/common/Button.vue";

export default {
  components: {
    SectionTitle,
    Button
  },
  data() {
    return {
      ZeplLogo,
      DataItGirlsLogo,
      uniformImg
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.become-sponsor-container {
  display: flex;
  justify-content: space-between;
  color: white;

  .uniform-img {
    height: 240px;
  }

  .left-pane {
    h3 {
      font-weight: bold;
      font-size: 32px;
      margin: 0;
      font-family: "Montserrat", sans-serif;
    }
  }
}
</style>
