<template>
  <div>
    <div class="session-detail-container" v-if="data">
      <div class="close" v-on:click="closeDetail">X</div>
      <img :src="data.playerImage">
      <div class="description-container">
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

export default {
  props: ['data', 'closeDetail'],
  data() {
    return {
      backgroundImage,
      YurimPlayer
    };
  },
  methods: {
    closeDetail: function () {
      console.log("힝2")
      this.closeDetail();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.session-detail-container {
  background: #000000cf;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 210px;

  img {
    position: fixed;
    bottom: 0;
    height: 400px;
    left: 20px;
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
  right: 80px;

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    color: black;
    background: #e4ff60;
    margin-top: -22px;
    padding: 3px 14px;
    font-style: italic;
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
