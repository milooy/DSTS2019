<template>
  <div class="sponsor-section">
    <div class="sponsor-grade">{{grade}}</div>
    <div class="sponsor-list">
      <div class="sponsor" :style="sponsorStyle" v-for="sponsor in sponsorList" :key="sponsor.name">
        <img v-if="sponsor.image" :src="sponsor.whiteImage">
        <span v-else>TBD</span>
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
}
.sponsor-section {
  align-items: center;
  margin-right: 40px;
}
.sponsor {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  img {
    height: 90%;
  }

  span {
    color: #c3c3c3;
    font-size: 1rem;
  }
}
</style>
