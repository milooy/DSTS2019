<template>
  <div class="intro" :style="{ backgroundImage: `url('${backgroundImage}')` }">
    <h1>
      Data Science
      <br>is a Team Sports!
    </h1>
    <div class="info-container">
      <div class="organizor-container">
        <img alt="LBD logo" src="@/assets/logos/lbd-logo-white.png">
        <div>X</div>
        <img alt="DataItTalks logo" src="@/assets/logos/DataItTalks-white.png">
      </div>
      <div class="venue-container">
        <div>2019.08.03 SAT 11:00 - 18:00</div>
        <div>@Microsoft 광화문</div>
      </div>
    </div>
    <div class="powered-container">
      <div>Powered by</div>
      <div :style="{display: 'flex'}">
        <img alt="Zepl logo" src="@/assets/logos/zepl-logo.png">
        <img alt="DataItGirls logo" src="@/assets/logos/DataItGirls_CI.png">
      </div>
    </div>
  </div>
</template>

<script>
import backgroundImage from "@/assets/background.png";

export default {
  data() {
    return {
      backgroundImage
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.intro {
  background-size: cover;
  background-size: 100%;
  background-position-y: center;
  min-height: 250px;
  padding: 80px 15px 25px;
  border: 10px solid #000000d1;
  margin-top: 24px;
}
h1 {
  font-family: "Teko", sans-serif;
  color: #e4ff60;
  font-size: 6rem;
  line-height: 1.2em;
  text-decoration: underline;
  margin: 60px 0 10px;
}

.organizor-container {
  color: white;
  display: flex;
  div {
    margin: 0 10px;
    font-size: 2rem;
  }
  img {
    height: 45px;
  }
}

.info-container {
  display: flex;
  justify-content: space-between;
}

.venue-container {
  text-align: right;
  font-size: 1.4rem;
  font-weight: bold;
  color: white;
}

.powered-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-weight: bold;
  font-size: 12px;
  margin-top: 11px;
  img {
    height: 40px;
  }
}
</style>
