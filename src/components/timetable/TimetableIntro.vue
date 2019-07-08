<template>
  <div class="intro" :style="{ backgroundImage: `url('${backgroundImage}')` }">
    <h1>
      경기 스케쥴
    </h1>
  </div>
</template>

<script>
import backgroundImage from '@/assets/background.png';

export default {
  data() {
    return {
      backgroundImage,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.intro {
  background-size: cover;
  background-size: 100%;
  background-position-y: center;
  min-height: 100px;
  padding: 40px 15px 25px;
  border: 10px solid #000000d1;
  margin-top: 24px;
}
h1 {
  color: white;
  font-size: 4rem;
  margin: 0;
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
