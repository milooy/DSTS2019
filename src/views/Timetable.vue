<template>
  <div class="home">
    <TimetableIntro />
    <Table />
  </div>
</template>

<script>
// @ is an alias to /src
import TimetableIntro from '@/components/timetable/TimetableIntro.vue';
import Table from '@/components/timetable/Table.vue';

export default {
  name: 'timetable',
  components: {
    TimetableIntro,
    Table,
  },
  data() {
    return {
      scheduleList: [
        { title: '발표자 신청', content: '6월 20일 화요일 - 7월 7일 일요일' },
        { title: '발표자 확정', content: '7월 14일 일요일' },
        { title: '티켓 오픈(250장)', content: '7월 24일 일요일' },
        { title: '행사 D-Day!', content: '8월 3일 토요일' },
      ],
    };
  },

};
</script>

<style scoped lang="scss">
  .home {
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
