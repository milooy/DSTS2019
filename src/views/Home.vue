<template>
  <div class="home">
    <!-- <LandingIntro /> -->
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
    return {};
  }
};
</script>

<style scoped lang="scss">
.home {
  h1 {
    padding: 60px 0 90px;
  }
}
</style>
