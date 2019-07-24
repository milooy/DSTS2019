<template>
  <div class="sponsor-section">
    <div class="sponsor-grade">{{grade}}</div>
    <div class="sponsor-list">
      <div class="sponsor" :style="sponsorStyle" v-for="sponsor in sponsorList" :key="sponsor.name">
        <img v-if="sponsor.image" :src="sponsor.image">
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
  flex-wrap: wrap;
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
  padding: 15px 25px;
  margin: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }

  span {
    color: $dark-gray;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
