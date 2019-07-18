<template>
  <div class="sponsor-section">
    <div class="sponsor-grade">{{grade}}</div>
    <div class="sponsor-list">
      <div class="sponsor" :style="sponsorStyle" v-for="sponsor in sponsorList" :key="sponsor.name">
        <img v-if="sponsor.image" :src="sponsor.image">
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
        width: this.width,
        height: this.height
      };
    }
  }
};
</script>

<style scoped lang="scss">
.sponsor-list {
  display: flex;
  justify-content: center;
}
.sponsor-grade {
  font-weight: bold;
  font-size: 15px;
}
.sponsor-section {
  margin-top: 40px;
}
.sponsor {
  background: white;
  padding: 20px 30px;
  margin: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
  }

  span {
    color: #c3c3c3;
    font-size: 1rem;
  }
}
</style>
