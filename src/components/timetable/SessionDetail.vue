<template>
  <div class="session-detail-container" :class="{ active: data.title }">
    <!-- <div class="close" v-on:click="handleClickClose">X</div> -->
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
import xIcon from "@/assets/images/xIcon.png";
import { sessionList } from "@/assets/data/timetable.js";

export default {
  props: {
    data: {
      type: Object,
      default: function() {
        return {};
      }
    },
    closeDetail: Function
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
  height: 230px;
  visibility: hidden;
  color: white;

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
    width: 40px;
    height: 40px;
    background: #e4ff60;
    position: relative;
    top: 0;
    left: 0;
  }
}
.description-container {
  display: inline-block;
  position: absolute;
  right: 0;
  transition: right ease 0.2s;
  max-width: 25rem;

  &.active {
    right: 80px;
  }

  .speaker-container {
    display: flex;
    align-items: baseline;

    .speaker-name {
      font-size: 32px;
      font-weight: bold;
    }

    .speaker-desc {
      font-weight: bold;
      color: lightgray;
      margin: 0 3px;
    }

    .speaker-tag {
      background: #5caf55;
      border-radius: 6px;
      padding: 2px 7px;
      font-size: 14px;
      margin-right: 6px;
    }
  }

  .title-container {
    border-top: 2px solid #5caf55;
    border-bottom: 2px solid #5caf55;
    margin: 10px 0;

    .title {
      font-size: 2.2rem;
      font-weight: bold;
      color: #5caf55;
    }

    .target {
      strong {
        font-size: 1.7rem;
      }
    }
  }

  .desc {
    font-size: 12px;
  }
}
</style>
