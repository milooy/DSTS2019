<template>
  <div class="speaker">
    <div class="name">{{name}}</div>
    <img :src="image">
    <div class="description">{{description}}</div>
  </div>
</template>

<script>
export default {
  props: ["image", "name", "description"]
};
</script>

<style scoped lang="scss">
.speaker {
  width: 170px;
  margin: 10px;

  img {
    width: 100%;
  }
  .name {
    font-weight: bold;
    position: relative;
    background: #2f3165;
    color: white;
    left: -12px;
    top: 25px;
    width: 5.5rem;
    text-align: center;
    border: 3px solid white;
  }
  .description {
    font-size: 0.8rem;
    background: #000000c4;
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
