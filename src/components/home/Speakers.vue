<template>
  <div>
    <div class="speaker-list">
      <SectionTitle class="players-title">PLAYERS</SectionTitle>
      <Speaker
        v-for="session in sessionList"
        :key="session.speakerName"
        :image="session.speakerImage"
        :name="session.speakerName"
        :description="session.speakerDesc"
      />
      <div class="go-to-schedule">
        경기 스케쥴 보러가기
        <Button to="/timetable">TIMETABLE</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Speaker from "@/components/common/Speaker.vue";
import SectionTitle from "@/components/common/SectionTitle.vue";
import Button from "@/components/common/Button.vue";
import sessionList from "@/assets/data/timetable.js";

export default {
  components: {
    Speaker,
    SectionTitle,
    Button
  },
  data() {
    return {
      sessionList,
    };
  }
};
</script>

<style scoped lang="scss">
.players-title {
  width: 220px;
  margin: 0 5px 30px 0;
}

.speaker-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.go-to-schedule {
  width: 440px;
  margin: 0 5px 30px 0;
  font-size: 32px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
