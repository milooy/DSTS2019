<template>
  <div class="timetable">
    <Header>
      <h1>Timetable</h1>
    </Header>
    <Table/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/common/Header.vue";
import Table from "@/components/timetable/Table.vue";

export default {
  name: "timetable",
  components: {
    Table,
    Header
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
h1 {
  padding: 40px 0;
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
