<template>
  <div class="sponsor-container">
    <Sponsor
      grade="Platinum"
      width="160px"
      height="100px"
      :sponsorList="platinumSponsorList"
    />
    <Sponsor
      grade="Gold"
      width="130px"
      height="80px"
      :sponsorList="goldSponsorList"
    />
    <Sponsor
      grade="Silver"
      width="100px"
      height="60px"
      :sponsorList="silverSponsorList"
    />
    <Sponsor
      grade="Bronze"
      width="80px"
      height="50px"
      :sponsorList="bronzeSponsorList"
    />
    <div class="ticket-open-container">스폰서 문의</div>
  </div>
</template>

<script>
import Sponsor from '@/components/common/Sponsor.vue';
import ZeplLogo from '@/assets/logos/zepl-logo.png';
import DataItGirlsLogo from '@/assets/logos/DataItGirls_CI.png';

export default {
  components: {
    Sponsor,
  },
  data() {
    return {
      platinumSponsorList: [
        { name: "Zepl", image: ZeplLogo },
        { name: "DataItGirls", image: DataItGirlsLogo },
      ],
      goldSponsorList: [
        { name: "Zepl", image: ZeplLogo },
        { name: "Zepl", image: ZeplLogo },
        { name: "Zepl", image: ZeplLogo },
      ],
      silverSponsorList: [
        { name: "Zepl", image: ZeplLogo },
        { name: "Zepl", image: ZeplLogo },
      ],
      bronzeSponsorList: [
        { name: "Zepl", image: ZeplLogo },
        { name: "Zepl", image: ZeplLogo },
        { name: "Zepl", image: ZeplLogo },
        { name: "Zepl", image: ZeplLogo },
      ],
    };
  },
};
</script>

<style>
.speaker-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

</style>
