<template>
  <div class="ticket-open-container">
    <div class="contents">
      <div class="left-pane">
        TICKET OPEN
        <div class="d-day">D-{{diffDays}}</div>
        <a href="/" class="buy-ticket-button">BUY NOW</a>
      </div>
      <img :src="TicketImg" alt="Ticket image">
    </div>
  </div>
</template>

<script>
import TicketImg from "@/assets/images/ticket.png";
import moment from "moment";

export default {
  data() {
    const today = moment();
    const dday = moment("2019-7-24");
    const diffDays = dday.diff(today, "days");
    return {
      diffDays,
      TicketImg
    };
  }
};
</script>

<style scoped lang="scss">
.contents {
  display: flex;
  justify-content: space-between;
}

.ticket-open-container {
  background: #f6f6f6;
  text-align: center;
  padding: 50px 0;
  font-weight: bold;
  margin: 20px 0;
  font-family: "Teko", sans-serif;
  font-size: 3rem;
  font-family: "Montserrat", sans-serif;

  .left-pane {
    margin-right: 100px;
    text-align: left;
    font-weight: normal;

    .d-day {
      font-weight: 800;
    }

    .buy-ticket-button {
      width: 196px;
      height: 48px;
      border-radius: 32px;
      background-color: #3ae9d1;
      color: white;
      font-size: 16px;
      padding: 15px 50px;
      font-weight: bold;
      cursor: pointer;
      text-decoration: none;
    }
  }

  &:hover {
    background: #eaeaea;
  }

  img {
    max-height: 160px;
  }
}
</style>
