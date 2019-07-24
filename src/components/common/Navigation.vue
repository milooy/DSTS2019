<template>
  <div id="nav">
    <div class="left-pane">
      <router-link to="/">
        <div class="logo">
          <img :src="DSTSLogo" alt="DSTS logo">
        </div>
      </router-link>
      <router-link to="/" class="router-link" exact>ABOUT</router-link>
      <router-link to="/timetable" class="router-link">TIMETABLE</router-link>
    </div>
    <div>
      <a href="https://festa.io/events/395" class="register-button" target="_blank">REGISTER</a>
    </div>
  </div>
</template>

<script>
import DSTSLogo from "@/assets/logos/dsts-logo.png";

export default {
  data() {
    return {
      DSTSLogo
    };
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav {
  display: flex;
  flex-wrap: wrap;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  justify-content: space-between;
  padding: 20px 23px;
  align-items: center;
  position: absolute;
  width: 90%;
}

.left-pane {
  display: flex;
}

.logo img {
  cursor: pointer;
  height: 45px;
  margin-right: 30px;
}

.router-link {
  margin: 5px 14px;
  font-size: $font-m;
  color: #D9D8D0;
  text-decoration: none;
  font-weight: 600;

  &.router-link-active {
    cursor: default;
    color: white;
    font-weight: 900;
  }
}

.register-button {
  width: 196px;
  height: 48px;
  border-radius: 32px;
  background-color: #3ae9d1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
}
</style>
