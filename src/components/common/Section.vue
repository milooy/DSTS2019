<template>
  <div class="section" :style="{ background: backgroundColor }">
    <div class="contents">
      <h2 :style="{ color: titleColor }">{{title}}</h2>
      <div class="paragraph">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    backgroundColor: {
      type: String,
      default: () => 'transparent'
    },
    titleColor: {
      type: String,
      default: () => '#56b876'
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h2 {
  font-family: "Teko", sans-serif;
  color: #56b876;
  font-size: 3rem;
  text-decoration: underline;
  margin: 0 0 10px;
}
.section {
  margin-top: 60px;
}

.paragraph {
  font-size: 1.5rem;

  p {
    margin: 0;
  }
}
</style>
