<template>
  <div class="button">
    <a v-if="href" :href="href" target="_blank">
      <slot/>
    </a>
    <router-link :to="to" v-else>
      <slot/>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
  }
};
</script>

<style scoped lang="scss">
.button {
  width: 196px;
  height: 48px;
  border-radius: 32px;
  background-color: #3ae9d1;
  color: white;
  font-size: 16px;
  padding: 15px 50px;
  font-weight: bold;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;  

  a {
    text-decoration: none;
    color: white;
  }
}
</style>
