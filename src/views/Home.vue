<template>
  <div class="home">
    <!-- <LandingIntro /> -->
    <div class="objects">
      <div class="object-1"/>
      <img :src="Object2Img" alt="Background object" class="object-2">
      <img :src="Object3Img" alt="Background object" class="object-3">
      <img :src="Object4Img" alt="Background object" class="object-4">
    </div>
    <Header>
      <h1>
        Data Science is a
        <br>Team Sports!
      </h1>
    </Header>
    <Section>
      <Intro/>
    </Section>
    <TicketOpen/>
    <Section>
      <Speakers/>
    </Section>
    <Section backgroundColor="#f6f6f6">
      <Sponsors/>
    </Section>
    <Section>
      <Organizers/>
    </Section>
    <Section backgroundColor="#5caf55">
      <BecomeSponsor/>
    </Section>
  </div>
</template>

<script>
import Section from "@/components/common/Section.vue";
import TicketOpen from "@/components/home/TicketOpen.vue";
import Speakers from "@/components/home/Speakers.vue";
import Sponsors from "@/components/home/Sponsors.vue";
import Intro from "@/components/home/Intro.vue";
import Organizers from "@/components/home/Organizers.vue";
import BecomeSponsor from "@/components/home/BecomeSponsor.vue";
import Header from "@/components/common/Header.vue";

import Object2Img from "@/assets/images/object-2.png";
import Object3Img from "@/assets/images/object-3.png";
import Object4Img from "@/assets/images/object-4.png";

export default {
  name: "home",
  components: {
    Section,
    TicketOpen,
    Speakers,
    Sponsors,
    Intro,
    Organizers,
    BecomeSponsor,
    Header
  },
  data() {
    return {
      Object2Img,
      Object3Img,
      Object4Img
    };
  }
};
</script>

<style scoped lang="scss">
.home {
  h1 {
    padding: 60px 0 90px;
  }
}

.object-1 {
  background: #f4f4f4;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  position: absolute;
  z-index: -2;
  top: 510px;
  left: 140px;
}
.object-2 {
  position: absolute;
  right: 0;
  height: 400px;
  z-index: -2;
  bottom: -167px;
}
.object-3 {
  position: absolute;
  left: 0;
  height: 290px;
  z-index: -2;
  bottom: -327px;
}
.object-4 {
  position: absolute;
  left: 0;
  width: 430px;
  z-index: -2;
  bottom: -1367px;
}
</style>
