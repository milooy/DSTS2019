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
      backgroundColor="#f6f6f6"
    >
      <Sponsors />
    </Section>
    <Section>
      <Organizers />
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
import Organizers from '@/components/home/Organizers.vue';
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
    Organizers,
  },
  data() {
    return {
    };
  },

};
</script>

<style scoped lang="scss">
  .home {
  }

  


</style>
