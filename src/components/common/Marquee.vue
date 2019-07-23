<template>
  <!-- <marquee scrollamount="30"> -->
  <marquee scrollamount="10">
    <div class="marquee-container">
      <MarqueeSponsor grade="Powered by" height="50px" :sponsorList="sponsors.poweredByList"/>
      <MarqueeSponsor grade="Gold" height="40px" :sponsorList="sponsors.goldSponsorList"/>
    </div>
  </marquee>
</template>

<script>
import sponsors from "@/assets/data/sponsors.js";
import MarqueeSponsor from "@/components/common/MarqueeSponsor.vue";

export default {
  components: {
    MarqueeSponsor
  },
  data() {
    return {
      sponsors
    };
  }
};
</script>

<style>
marquee {
  background-color: #4a5353;
  font-family: "Montserrat", sans-serif;
  padding: 10px 0;
}
.marquee-container {
  display: flex;
  align-items: center;
}
</style>
