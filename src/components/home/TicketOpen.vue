<template>
  <div class="ticket-open-container">Ticket Open D-{{diffDays}}</div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    const today = moment();
    const dday = moment('2019-7-24');
    const diffDays = dday.diff(today, 'days');
    return {
      diffDays,
    };
  },
};
</script>

<style scoped lang="scss">
.ticket-open-container {
  background: #e4ff60;
  text-align: center;
  padding: 50px 0;
  font-weight: bold;
  margin: 20px 0;
  font-family: "Teko", sans-serif;
  font-size: 3rem;
  text-decoration: underline;
  border: 10px solid #000000cf;
  cursor: pointer;

  &:hover {
    background: #56b876;
  }
}

</style>
