<template>
  <div class="session-detail-container" :class="{ active: data.title }">
    <img :src="xIcon" alt="Close icon" class="close" v-on:click="handleClickClose">
    <img :src="data.playerImage" :class="{ active: data.title }">
    <div class="description-container" :class="{ active: data.title }">
      <div class="speaker-container">
        <div class="speaker-name">{{data.speakerName}}</div>
        <div class="speaker-desc">{{data.speakerDesc}}</div>
        <div v-for="tag in data.tags" class="speaker-tag" :key="tag">#{{tag}}</div>
      </div>
      <div class="title-container">
        <div class="title">{{data.title}}</div>
        <div class="target">
          <strong>for</strong>
          {{data.target}}
        </div>
      </div>
      <div class="desc">{{data.desc}}</div>
    </div>
  </div>
</template>

<script>
import YurimPlayer from "@/assets/speakers/player/yurim.png";
import backgroundImage from "@/assets/background.png";
import xIcon from "@/assets/images/xIcon-white.png";
import sessionList, { getSessionIdx } from "@/assets/data/timetable.js";

export default {
  props: {
    currentSessionId: Number,
    closeDetail: Function
  },
  computed: {
    data: function() {
      if (this.currentSessionId) {
        return sessionList[this.currentSessionId];
      }
      return {};
    }
  },
  methods: {
    handleClickClose: function() {
      this.closeDetail();
    }
  },
  data() {
    return {
      xIcon
    };
  }
};
</script>

<style scoped lang="scss">
.session-detail-container {
  background: #000000cf;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 280px;
  visibility: hidden;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.04) 0px -20px 14px 9px;

  &.active {
    visibility: visible;
  }

  img {
    position: fixed;
    bottom: 0;
    height: 400px;
    left: -80px;
    transition: all ease 0.3s;
    transition-delay: 0.1s;

    &.active {
      left: 40px;
    }
  }

  .close {
    width: 27px;
    height: 27px;
    position: relative;
    top: 10px;
    left: -10px;
    float: right;
    cursor: pointer;
  }
}
.description-container {
  display: inline-block;
  position: absolute;
  right: 0;
  top: 10px;
  transition: right ease 0.2s;
  max-width: 55vw;
  height: 260px;
  overflow-y: auto;
  overflow-x: hidden;

  &.active {
    right: 60px;
  }

  .speaker-container {
    display: flex;
    align-items: baseline;

    .speaker-name {
      font-size: $font-xl;
      font-weight: bold;
      flex-shrink: 0;
    }

    .speaker-desc {
      font-weight: bold;
      color: lightgray;
      margin: 0 10px 0 5px;
      flex-shrink: 0;
    }

    .speaker-tag {
      background: $primary;
      border-radius: 6px;
      padding: 2px 7px;
      font-size: $font-s;
      margin-right: 6px;
    }
  }

  .title-container {
    border-top: 2px solid $primary;
    border-bottom: 2px solid $primary;
    margin: 10px 0;
    padding: 5px 0;

    .title {
      font-size: $font-xl;
      font-weight: bold;
      color: $primary;
      line-height: 1.3;
    }

    .target {
      line-height: 1.5em;
    }
  }

  .desc {
    font-size: $font-s;
  }
}
</style>
