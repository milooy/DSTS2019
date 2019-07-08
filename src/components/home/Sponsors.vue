<template>
  <div class="sponsor-container">
    <Sponsor grade="Platinum" width="160px" height="100px" :sponsorList="platinumSponsorList"/>
    <Sponsor grade="Gold" width="130px" height="80px" :sponsorList="goldSponsorList"/>
    <Sponsor grade="Silver" width="100px" height="60px" :sponsorList="silverSponsorList"/>
    <Sponsor grade="Bronze" width="80px" height="50px" :sponsorList="bronzeSponsorList"/>
    <div class="be-sponsor-container">
      <img :src="UniformImage">
      <div>
        <h3>Become a sponsor</h3>
        <p>DSTS는 데이터를 사랑하는 모든 사람을 위한 비영리 컨퍼런스입니다.</p>
        <p>데이터의 중요성을 깊이 공감하는 후원사를 모십니다. 유니폼에 들어가는 회사 로고 외에 다양한 혜택을 드립니다.</p>
        <a
          href="https://drive.google.com/file/d/19CDylOUxz4kRQgvPPX6epeSXbAkzEFjk/view"
          target="_blank"
        >자세한 후원 안내</a>
      </div>
    </div>
  </div>
</template>

<script>
import Sponsor from "@/components/common/Sponsor.vue";
import ZeplLogo from "@/assets/logos/zepl-logo.png";
import DataItGirlsLogo from "@/assets/logos/DataItGirls_CI.png";
import UniformImage from "@/assets/sponsors/uniform.png";

export default {
  components: {
    Sponsor
  },
  data() {
    return {
      UniformImage,
      platinumSponsorList: [
        { name: "Zepl", image: ZeplLogo },
        { name: "DataItGirls", image: DataItGirlsLogo }
      ],
      goldSponsorList: [
        { name: "Zepl" },
        { name: "Zepl" },
        { name: "Zepl" }
      ],
      silverSponsorList: [
        { name: "Zepl" },
        { name: "Zepl" }
      ],
      bronzeSponsorList: [
        { name: "Zepl" },
        { name: "Zepl" },
        { name: "Zepl" },
        { name: "Zepl" }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.speaker-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.be-sponsor-container {
  display: flex;
  background: white;
  border: 10px solid #e4ff60;
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
