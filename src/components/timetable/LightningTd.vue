<template>
  <td colspan="3" v-on:click="handleShowDetail">
    <div class="lightning-td-inner">
      <div class="speaker-img" :style="{ backgroundImage: `url(${sessionData.speakerImage})` }"/>
      <div class="right-pane">
        <div class="speaker-name">{{sessionData.speakerName}}</div>
        <div class="speaker-desc">{{sessionData.speakerDesc}}</div>
        <div class="title">⚡{{sessionData.title}}</div>
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
    }
  }
};
</script>

<style scoped lang="scss">
.lightning-td-inner {
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  /* justify-content: center; */
  padding: 10px 15px;

  .speaker-img {
    width: 35px;
    height: 35px;
    flex-shrink: 0;
    background-size: cover;
    background-position: center center;
    margin-right: 7px;
    filter: grayscale(1);
    border-radius: 50%;
  }

  &:hover {
    background: $primary-light;

    .speaker-img {
      filter: none;
    }
  }
}

.right-pane {
  display: flex;
  font-size: 0.9rem;
}

.title {
  margin-bottom: 3px;
}
.speaker-name {
  font-weight: bold;
  margin-right: 3px;
  flex-shrink: 0;
}
.speaker-desc {
  color: darkgrey;
  margin-right: 8px;
}
</style>
