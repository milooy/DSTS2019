<template>
  <div>
    <div class="speaker-list">
      <SectionTitle class="players-title">PLAYERS</SectionTitle>
      <Speaker
        v-for="speaker in speakerList"
        :key="speaker.name"
        :image="speaker.image"
        :name="speaker.name"
        :description="speaker.description"
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
import a from "@/assets/speakers/a.jpg";
import b from "@/assets/speakers/b.jpg";
import c from "@/assets/speakers/c.jpg";
import d from "@/assets/speakers/d.jpg";
import f from "@/assets/speakers/f.png";

export default {
  components: {
    Speaker,
    SectionTitle,
    Button
  },
  data() {
    return {
      speakerList: [
        { name: "진유림", description: "Frontend Engineer at Zepl", image: a },
        { name: "이은지", description: "Tech leader at DataItGirls", image: c },
        { name: "김영웅", description: "Professional Photographer", image: b },
        { name: "이영진", description: "Lead Designer at Zepl", image: d },
        {
          name: "정선하",
          description: "Lead Designer at DataItGirls",
          image: f
        }
      ]
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
