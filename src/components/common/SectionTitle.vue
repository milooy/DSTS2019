<template>
  <h2 class="section-title"><slot></slot></h2>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.section-title {
  margin: 0;
  text-decoration: underline;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: $font-xl;
}
</style>
