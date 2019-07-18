<template>
  <div class="lightning-td">
    <div class="speaker-img" :style="{ backgroundImage: `url(${data.speakerImage})` }"/>
    <div class="right-pane">
      <div class="speaker-name">{{data.speakerName}}</div>
      <div class="speaker-desc">{{data.speakerDesc}}</div>
      <div class="title">⚡{{data.title}}</div>
    </div>
  </div>
</template>

<script>
import backgroundImage from "@/assets/background.png";

export default {
  props: ["data"],
  data() {
    return {
      backgroundImage
    };
  }
};
</script>

<style scoped lang="scss">
.lightning-td {
  cursor: pointer;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  background: #ffffd5;

  .speaker-img {
    width: 35px;
    height: 35px;
    background-size: cover;
    background-position: center center;
    margin-right: 7px;
    filter: grayscale(1);
    border-radius: 50%;
  }

  &:hover {
    background: #e4ff60;

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
  font-weight: bold;
  margin-bottom: 3px;
}
.speaker-name {
  font-weight: bold;
  margin-right: 3px;
}
.speaker-desc {
  color: darkgrey;
  margin-right: 8px;
}
</style>
