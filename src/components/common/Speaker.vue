<template>
  <div class="speaker">
    <div class="name-container">
      <div class="name-background"/>
      <span>{{name}}</span>
    </div>
    <img :src="image">
    <div class="description">{{description}}</div>
  </div>
</template>

<script>
export default {
  props: ['image', 'name', 'description'],
};
</script>

<style scoped lang="scss">
.speaker {
  width: 170px;
  margin: 10px;

  img {
    width: 100%;
  }
  .name-container {
    position: relative;
    left: -12px;
    top: 25px;
    .name-background {
      font-weight: bold;
      background: #2f3165;
      color: white;
      width: 5.5rem;
      height: 2.5rem;
      text-align: center;
      /* border: 3px solid white; */
      transform: skew(6deg);
    }
    span {
      color: white;
      position: absolute;
      top: 0;
      left: 11px;
      font-weight: bold;
    }
  }
  .description {
    font-size: 0.8rem;
    background: #000000c4;
    border-left: 4px solid #e8493e;
    color: white;
    position: relative;
    top: -38px;
    left: 12px;
    min-height: 1.3rem;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: italic;
    font-weight: bold;
  }
}
</style>
