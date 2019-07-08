<template>
  <div class="session-td">
    <div class="title">{{data.title}}</div>
    <div class="speaker-container">
      <img :src="data.speakerImage">
      <div>
        <div class="speaker-name">{{data.speakerName}}</div>
        <div class="speaker-desc">{{data.speakerDesc}}</div>
      </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.session-td {
  cursor: pointer;
  &:hover {
    background: #e4ff60;
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

  img {
    width: 43px;
    margin-right: 7px;
    /* filter: grayscale(100%); */
  }
  .speaker-name {
    font-weight: bold;
    font-size: 0.9rem;
  }
  .speaker-desc {
    color: darkgrey;
    font-size: 0.8rem;
  }
}
</style>
