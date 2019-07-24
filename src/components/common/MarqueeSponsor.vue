<template>
  <div class="sponsor-section">
    <div class="sponsor-grade">{{grade}}</div>
    <div class="sponsor-list">
      <div class="sponsor" :style="sponsorStyle" v-for="sponsor in sponsorList" :key="sponsor.name">
        <img v-if="sponsor.image" :src="sponsor.whiteImage">
        <span v-else>{{sponsor.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["grade", "sponsorList", "height", "width"],
  computed: {
    sponsorStyle() {
      return {
        width: this.width || "auto",
        height: this.height
      };
    }
  }
};
</script>

<style scoped lang="scss">
.sponsor-section {
  display: flex;
  color: white;
}
.sponsor-list {
  display: flex;
  justify-content: center;
}
.sponsor-grade {
  text-align: center;
  font-weight: bold;
  margin-right: 20px;
  color: lightgray;
}
.sponsor-section {
  align-items: center;
  margin-right: 60px;
}
.sponsor {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  img {
    height: 90%;
  }

  span {
    font-size: 1.2rem;
    font-weight: bold;
  }
}
</style>
