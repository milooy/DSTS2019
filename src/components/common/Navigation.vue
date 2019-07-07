<template>
  <div id="nav">
    <router-link to="/">
      <div class="logo">
        <b>DSTS</b>2019
        <b>!</b>
      </div>
    </router-link>
    <div>
      <router-link to="/schedule" class="router-link">Schedule</router-link>
      <router-link to="/schedule" class="router-link">Timetable</router-link>
      <router-link to="/speakers" class="router-link">Speakers</router-link>
      <router-link to="/about" class="buy-ticket">티켓 구매하기</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
}

a {
  font-family: "Teko", sans-serif;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
}

.logo {
  font-size: 2rem;
  font-family: "Teko", sans-serif;
  font-weight: 300;
  b {
    font-weight: 600;
  }
}

.router-link {
  text-decoration: underline;
  margin: 0 5px;
}

.buy-ticket {
  background: #e4ff60;
  padding: 3px 10px;
  color: black;
  border-radius: 6px;
  font-size: 1rem;
  font-family: 'Noto Sans KR', 'Avenir', sans-serif;
  font-weight: bold;
  margin-left: 10px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 6px 0px;
}

</style>
