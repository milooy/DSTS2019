<template>
  <div class="speaker" v-on:click="handleShowDetail">
    <div class="speaker-info">
      <div class="speaker-name">{{name}}</div>
      <div class="speaker-desc">{{description}}</div>
    </div>
    <div class="speaker-img" :style="{ backgroundImage: `url(${image})` }" />
  </div>
</template>

<script>
import sessionList, { getSessionIdx } from "@/assets/data/timetable.js";

export default {
  props: ['image', 'name', 'description'],
  methods: {
    handleShowDetail: function(id) {
      const sessionIdx = getSessionIdx(this.name);
      this.$emit("showDetail", null, sessionIdx);
    },
  },
};
</script>

<style scoped lang="scss">
.speaker {
  width: 220px;
  margin: 0 15px 30px 0;
  flex-grow: 1;
  cursor: pointer;

  .speaker-info {
    display: flex;
    align-items: center;

    .speaker-name {
      font-size: $font-xl;
      font-weight: bold;
      flex-shrink: 0;
      margin-right: 5px;
    }
    
    .speaker-desc {
      font-weight: bold;
      font-size: $font-s;
      line-height: 1.3;
    }
  }

  .speaker-img {
    width: 100%;
    height: 180px;
    background-size: cover;
    background-position: center center;
    filter: grayscale(1) contrast(110%);
  }

  &:hover {
    .speaker-img {
      filter: none;
    }
  }
}
</style>
