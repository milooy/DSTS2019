<template>
  <div class="speaker">
    <div class="speaker-info">
      <div class="speaker-name">{{name}}</div>
      <div class="speaker-desc">{{description}}</div>
    </div>
    <div class="speaker-img" :style="{ backgroundImage: `url(${image})` }" />
    <!-- <img :src="image"> -->
  </div>
</template>

<script>

export default {
  props: ['image', 'name', 'description'],
};
</script>

<style scoped lang="scss">
.speaker {
  width: 220px;
  margin: 0 5px 30px 0;

  .speaker-info {
    display: flex;
    align-items: center;

    .speaker-name {
      font-size: 32px;
      font-weight: bold;
      flex-shrink: 0;
      margin-right: 5px;
    }
    
    .speaker-desc {
      font-weight: bold;
      font-size: 12px;
      line-height: 1.3;
    }
  }

  .speaker-img {
    width: 100%;
    height: 165px;
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
