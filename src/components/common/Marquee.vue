<template>
  <!-- <marquee scrollamount="30"> -->
  <marquee scrollamount="12">
    <div class="marquee-container">
      <MarqueeSponsor grade="Powered by" height="50px" :sponsorList="sponsors.poweredByList"/>
      <MarqueeSponsor grade="Platinum" height="50px" :sponsorList="sponsors.venueSponsorList"/>
      <MarqueeSponsor grade="Gold" height="27px" :sponsorList="sponsors.goldSponsorList"/>
      <MarqueeSponsor grade="Bronze" height="20px" :sponsorList="sponsors.bronzeSponsorList"/>
      <MarqueeSponsor grade="Media" height="20px" :sponsorList="sponsors.mediaSponsorList"/>
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
  background-color: #4a5353;
  display: flex;
  align-items: center;
  /* position: relative;
  left: -50%; */
}
</style>
