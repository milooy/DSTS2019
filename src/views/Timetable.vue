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
