<template>
  <div class="speaker-list">
    <Speaker
      v-for="speaker in speakerList"
      :key="speaker.name"
      :image="speaker.image"
      :name="speaker.name"
      :description="speaker.description"
    />
  </div>
</template>

<script>
import Speaker from '@/components/common/Speaker.vue';
import a from '@/assets/speakers/a.jpg';
import b from '@/assets/speakers/b.jpg';
import c from '@/assets/speakers/c.jpg';
import d from '@/assets/speakers/d.jpg';
import f from '@/assets/speakers/f.png';

export default {
  components: {
    Speaker,
  },
  data() {
    return {
      speakerList: [
        { name: '진유림', description: 'Frontend Engineer at Zepl', image: a },
        { name: '이은지', description: 'Tech leader at DataItGirls', image: c },
        { name: '김영웅', description: 'Professional Photographer', image: b },
        { name: '이영진', description: 'Lead Designer at Zepl', image: d },
        { name: '정선하', description: 'Lead Designer at DataItGirls', image: f },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.speaker-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

</style>
