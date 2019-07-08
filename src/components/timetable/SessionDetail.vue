<template>
  <div>
    <div class="session-detail-container" :class="{ active: data.title }">
      <div class="close" v-on:click="handleClickClose">X</div>
      <img :src="data.playerImage" :class="{ active: data.title }">
      <div class="description-container" :class="{ active: data.title }">
        <div class="title">{{data.title}}</div>
        <div class="speaker-name">{{data.speakerName}}</div>
        <div class="desc">{{data.desc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import YurimPlayer from "@/assets/speakers/player/yurim.png";
import backgroundImage from "@/assets/background.png";
import { sessionList } from "./data.js";

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
  height: 210px;
  visibility: hidden;

  &.active {
    border: 5px solid red;
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
      left: 80px;
    }
  }

  .close {
    position: relative;
    top: -55px;
    float: right;
    margin-right: 13px;
    font-size: 2.5rem;
    display: inline-block;
  }
}
.description-container {
  display: inline-block;
  position: absolute;
  text-align: right;
  right: 0;
  transition: right ease 0.2s;

  /* 왜 여기는 안돼 */
  &.active {
    right: 80px;
  }

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    color: black;
    background: #e4ff60;
    margin-top: -22px;
    padding: 3px 14px;
    font-style: italic;
    display: inline-block;
  }
  .speaker-name {
    color: white;
    font-weight: bold;
    font-size: 2rem;
  }
  .desc {
    color: white;
    max-width: 35rem;
  }
}
</style>
