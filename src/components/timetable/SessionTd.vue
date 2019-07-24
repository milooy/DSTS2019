<template>
  <td v-on:click="handleShowDetail">
    <div class="session-td-inner">
      <div class="td-sm">
        <div class="upper-pane">
          <div class="speaker-img" :style="{ backgroundImage: `url(${sessionData.speakerImage})` }"/>
          <div class="speaker-container">
            <div class="speaker-name">{{sessionData.speakerName}}</div>
            <div class="speaker-desc">{{sessionData.speakerDesc}}</div>
          </div>
        </div>
        <div class="title">{{sessionData.title}}</div>
      </div>
      <div class="td-l">
        <div class="speaker-img" :style="{ backgroundImage: `url(${sessionData.speakerImage})` }"/>
        <div class="right-pane">
          <div class="speaker-container">
            <div class="speaker-name">{{sessionData.speakerName}}</div>
            <div class="speaker-desc">{{sessionData.speakerDesc}}</div>
          </div>
          <div class="title">{{sessionData.title}}</div>
        </div>

      </div>
    </div>
  </td>
</template>

<script>
import sessionList, { getSessionIdx } from "@/assets/data/timetable.js";

export default {
  props: ["name"],
  computed: {
    sessionData: function() {
      const sessionIdx = getSessionIdx(this.name);
      return sessionList[sessionIdx];
    }
  },
  methods: {
    handleShowDetail: function(id) {
      const sessionIdx = getSessionIdx(this.name);
      this.$emit("showDetail", null, sessionIdx);
    }
  }
};
</script>

<style scoped lang="scss">
td {
  width: 35%;
  vertical-align: super;
  transition: $background-transition;

  &:hover {
    background: $primary-light;
    /* text-decoration: underline; */
    /* box-shadow: rgba(0, 0, 0, 0.02) -1px 3px 9px 8px; */

    .speaker-img {
      filter: none;
    }
  }
}

.title {
  font-weight: bold;
  font-weight: bold;
  font-size: $font-m;
  margin-bottom: 3px;
  line-height: 1.3;
}

.speaker-container {
  display: flex;
  align-items: center;

  .speaker-name {
    font-weight: bold;
    font-size: 0.9rem;
    margin-right: 3px;
    flex-shrink: 0;
  }
  .speaker-desc {
    color: darkgrey;
    font-size: 0.8rem;
  }
}

.speaker-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex-shrink: 0;
  background-size: cover;
  background-position: center center;
  margin-right: 7px;
  filter: grayscale(1);
}

.session-td-inner {
  cursor: pointer;
  padding: 10px 15px;
  
  /* background: white;
  margin: 10px 15px;
  padding: 5px; */

  /* media query */
  .td-sm {
    display: none;
  }
  .td-l {
    display: flex;
  }

  

  

  /* media query */
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    .td-sm {
      display: block;
      .upper-pane {
        display: flex;
      }
      .speaker-container {
        flex-wrap: wrap;
      }
      .speaker-img {
        width: 30px;
        height: 30px;
      }
    }
    .td-l {
      display: none;
    }
  }
}


</style>
