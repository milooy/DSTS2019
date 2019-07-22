<template>
  <td v-on:click="handleShowDetail">
    <div class="session-td-inner">
      <div class="speaker-img" :style="{ backgroundImage: `url(${sessionData.speakerImage})` }"/>
      <div class="right-pane">
        <div class="speaker-container">
          <div class="speaker-name">{{sessionData.speakerName}}</div>
          <div class="speaker-desc">{{sessionData.speakerDesc}}</div>
        </div>
        <div class="title">{{sessionData.title}}</div>
      </div>
    </div>
  </td>
</template>

<script>
import sessionList, { getSessionIdx } from "@/assets/data/timetable.js";

export default {
  props: ["name"],
  computed: {
    sessionData: function() {
      const sessionIdx = getSessionIdx(this.name);
      return sessionList[sessionIdx];
    }
  },
  methods: {
    handleShowDetail: function(id) {
      const sessionIdx = getSessionIdx(this.name);
      this.$emit("showDetail", null, sessionIdx);
    },
  },
};
</script>

<style scoped lang="scss">
.session-td-inner {
  cursor: pointer;
  display: flex;
  align-items: center;

  .speaker-img {
    width: 60px;
    height: 50px;
    background-size: cover;
    background-position: center center;
    margin-right: 7px;
    filter: grayscale(1);
  }

  &:hover {
    background: #e4ff60;

    .speaker-img {
      filter: none;
    }
  }
}

.title {
  font-weight: bold;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 3px;
}

.speaker-container {
  display: flex;
  align-items: center;

  .speaker-name {
    font-weight: bold;
    font-size: 0.9rem;
    margin-right: 3px;
  }
  .speaker-desc {
    color: darkgrey;
    font-size: 0.8rem;
  }
}
</style>
