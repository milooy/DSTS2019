<template>
  <div class="home">
    <LandingIntro />
    <Marquee />
    <Section>
      <Intro />
    </Section>
    <TicketOpen />
    <Section>
      <Speakers />
    </Section>
    <Section
      title="Sponsors"
      backgroundColor="#5caf55"
      titleColor="white"
    >
      <Sponsors />
    </Section>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingIntro from '@/components/home/LandingIntro.vue';
import Section from '@/components/common/Section.vue';
import TicketOpen from '@/components/home/TicketOpen.vue';
import Speakers from '@/components/home/Speakers.vue';
import Sponsors from '@/components/home/Sponsors.vue';
import Intro from '@/components/home/Intro.vue';
import Marquee from '@/components/common/Marquee.vue';

export default {
  name: 'home',
  components: {
    LandingIntro,
    Section,
    TicketOpen,
    Speakers,
    Sponsors,
    Marquee,
    Intro,
  },
  data() {
    return {
      DSTSEmblemImg,
    };
  },

};
</script>

<style scoped lang="scss">
  .home {
  }

  


</style>
