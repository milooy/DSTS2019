<template>
  <div class="contents">
    <router-link to="/timetable" class="router-link">
      <div class="ticket-open-container">경기 스케쥴 보러가기</div>
    </router-link>
  </div>
</template>

<script>
import moment from "moment";

export default {
};
</script>

<style scoped lang="scss">

a {
  text-decoration: none;
}
.ticket-open-container {
  background: #2f3065;
  text-align: center;
  padding: 15px 0;
  font-weight: bold;
  margin: 20px 0;
  font-size: 2rem;
  border: 10px solid #000000cf;
  cursor: pointer;
  margin-top: -50px;
  color: white;


  &:hover {
    background: #e4ff60;
    color: black;
  }
}
</style>
