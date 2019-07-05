<template>
  <div class="home">
    <LandingIntro />
    <Section
      title="DSTS 2019"
    >
      <p>안녕하세요, 선수 여러분.</p>
      <p><b>데이터 사이언스</b>라는 종목의 팀 스포츠 현장으로 여러분을 모십니다.</p>
      <br />
      <p>DSTS행사는 데이터 사이언스 업계 내에서 기술에 비해 상대적으로 주목 받지 못했던 <b>‘협력’의 가치를 재조명</b>합니다.</p>
      <p>데이터를 소재로 일하는 것이 어떻게 팀 스포츠가 될 수 있을까요? 8월 3일 마이크로소프트 광화문 오피스에서 데이터 또는 팀워크/협업에 대한 지식과 경험을 서로 나눠보아요.</p>
    </Section>
    <Section
      title="Schedule"
    >
      <div class="schedule" v-for="schedule in scheduleList" v-bind:key="schedule.title">
        <div class="schedule-title">{{schedule.title}}</div>
        <div class="schedule-content">{{schedule.content}}</div>
      </div>
    </Section>
    <TicketOpen />
  </div>
</template>

<script>
// @ is an alias to /src
import LandingIntro from '@/components/LandingIntro.vue';
import Section from '@/components/Section.vue';
import TicketOpen from '@/components/TicketOpen.vue';

export default {
  name: 'home',
  components: {
    LandingIntro,
    Section,
    TicketOpen,
  },
  data() {
    return {
      scheduleList: [
        {title: "발표자 신청", content: "6월 20일 화요일 - 7월 7일 일요일"},
        {title: "발표자 확정", content: "7월 14일 일요일"},
        {title: "티켓 오픈(250장)", content: "7월 24일 일요일"},
        {title: "행사 D-Day!", content: "8월 3일 토요일"},
      ]
    };
  }
  
};
</script>

<style scoped lang="scss">
  .home {
    margin-top: -80px;
  }

  .schedule {
    display: flex;

    .schedule-title {
      font-weight: bold;
      margin-right: 5px;
      min-width: 10em;
    }
  }

  
</style>
