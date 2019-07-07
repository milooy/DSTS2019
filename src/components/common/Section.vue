<template>
  <div class="contents">
    <h2>{{title}}</h2>
    <div class="paragraph">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contents {
  padding: 20px 15px 25px;
  max-width: 900px;
  margin: 0 auto;
}

h2 {
  font-family: "Teko", sans-serif;
  color: #56b876;
  font-size: 3rem;
  text-decoration: underline;
  margin: 0 0 10px;
}

.paragraph {
  font-size: 1.5rem;

  p {
    margin: 0;
  }
}
</style>
