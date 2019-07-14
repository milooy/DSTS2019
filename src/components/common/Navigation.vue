<template>
  <div id="nav">
    <div class="left-pane">
      <router-link to="/">
        <div class="logo">
          <img :src="DSTSLogo" alt="DSTS logo">
        </div>
      </router-link>
      <router-link to="/" class="router-link">About</router-link>
      <router-link to="/timetable" class="router-link">Timetable</router-link>
    </div>
    <div>
      <a href="/" class="register-button">REGISTER</a>
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
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  justify-content: space-between;
  padding: 12px 30px;
  align-items: center;
  position: absolute;
  width: 90%;
}

.left-pane {
  display: flex;
}

.logo img {
  cursor: pointer;
  height: 64px;
  margin-right: 30px;
}

.router-link {
  margin: 10px 14px;
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
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
