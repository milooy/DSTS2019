<template>
  <div class="sponsor-container">
    <SectionTitle class="players-title">SPONSORS</SectionTitle>
    <Sponsor grade="PLATINUM" width="160px" height="100px" :sponsorList="platinumSponsorList"/>
    <Sponsor grade="GOLD" width="130px" height="80px" :sponsorList="goldSponsorList"/>
    <Sponsor grade="SILVER" width="100px" height="60px" :sponsorList="silverSponsorList"/>
    <Sponsor grade="BRONZE" width="80px" height="50px" :sponsorList="bronzeSponsorList"/>
  </div>
</template>

<script>
import Sponsor from "@/components/common/Sponsor.vue";
import SectionTitle from "@/components/common/SectionTitle.vue";

import { sponsors } from "@/assets/data/index.js";
import UniformImage from "@/assets/sponsors/uniform.png";

export default {
  components: {
    Sponsor,
    SectionTitle,
  },
  data() {
    return {
      UniformImage,
      ...sponsors,
    };
  }
};
</script>

<style scoped lang="scss">
.sponsor-container {
  font-family: "Teko", sans-serif;
  text-align: center;
}

.be-sponsor-container {
  display: flex;
  background: #f6f6f6;
  margin: 30px 0 50px;
  padding: 15px;
  align-items: center;
  cursor: default;

  p {
    font-size: 1rem;
    margin: 0;
  }

  h3 {
    margin: 0;
    font-family: "Teko", sans-serif;
    color: #56b876;
    font-size: 3rem;
  }

  img {
    width: 190px;
    height: 100%;
    margin-right: 20px;
  }

  a {
    background: #56b876;
    color: black;
    font-weight: bold;
    text-decoration: none;
    padding: 5px 10px;
    margin-top: 10px;
    display: inline-block;
    font-size: 1rem;
    border: 3px solid black;
  }
}
</style>
