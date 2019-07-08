<template>
  <div>
    <div class="contents">
      <table class="timetable">
        <tr>
          <th></th>
          <th>세션1</th>
          <th>세션2</th>
          <th>커뮤니티룸</th>
        </tr>
        <tr>
          <td></td>
          <td colspan="3">전반전</td>
        </tr>
        <tr>
          <td>11:00 ~ 11:20(20분)</td>
          <td colspan="3">오프닝</td>
        </tr>
        <tr>
          <td>11:20 ~ 11:50(30분)</td>
          <td v-on:click="showDetail(0)">
            <SessionTd :data="sessionList[0]"/>
          </td>
          <td v-on:click="showDetail(1)">
            <SessionTd :data="sessionList[1]"/>
          </td>
          <td rowspan="2">튜토리얼1</td>
        </tr>
        <tr>
          <td>11:50 ~ 12:05(15분)</td>
          <td colspan="2">라톡1</td>
        </tr>
        <tr>
          <td>12:05 ~ 13:05(60분)</td>
          <td colspan="3">점심식사</td>
        </tr>
        <tr>
          <td></td>
          <td colspan="3">후반전</td>
        </tr>
        <tr>
          <td>13:05 ~ 13:35(30분)</td>
          <td>
            <SessionTd :data="sessionList[0]"/>
          </td>
          <td>
            <SessionTd :data="sessionList[1]"/>
          </td>
          <td>튜토리얼1</td>
        </tr>
        <tr>
          <td>13:35 ~ 13:40(5분)</td>
          <td colspan="3">쉬는시간</td>
        </tr>
        <tr>
          <td>13:40 ~ 14:10(30분)</td>
          <td>
            <SessionTd :data="sessionList[0]"/>
          </td>
          <td>
            <SessionTd :data="sessionList[1]"/>
          </td>
          <td rowspan="3">튜토리얼2</td>
        </tr>
        <tr>
          <td>14:10 ~ 14:25(15분)</td>
          <td colspan="2">라톡2</td>
        </tr>
        <tr>
          <td>14:25 ~ 14:55(30분)</td>
          <td>
            <SessionTd :data="sessionList[0]"/>
          </td>
          <td>
            <SessionTd :data="sessionList[1]"/>
          </td>
        </tr>
        <tr>
          <td>14:55 ~ 15:00(5분)</td>
          <td colspan="3">쉬는시간</td>
        </tr>
        <tr>
          <td>15:00 ~ 15:30(30분)</td>
          <td>
            <SessionTd :data="sessionList[0]"/>
          </td>
          <td>
            <SessionTd :data="sessionList[1]"/>
          </td>
          <td rowspan="4">Free Talk</td>
        </tr>
        <tr>
          <td>15:30 ~ 15:45(15분)</td>
          <td colspan="2">라톡3</td>
        </tr>
        <tr>
          <td>15:45 ~ 16:15(30분)</td>
          <td>
            <SessionTd :data="sessionList[0]"/>
          </td>
          <td>
            <SessionTd :data="sessionList[1]"/>
          </td>
        </tr>
        <tr>
          <td>16:15 ~ 16:30(15분)</td>
          <td colspan="2">라톡4</td>
        </tr>
        <tr>
          <td>16:30 ~ 16:45(15분)</td>
          <td colspan="3">클로징</td>
        </tr>
        <tr>
          <td>16:45 ~ 18:30(45분)</td>
          <td colspan="3">네트워킹</td>
        </tr>
      </table>
    </div>
    <SessionDetail :data="sessionList[currentSessionId]" :closeDetail="closeDetail"/>
  </div>
</template>

<script>
import SessionDetail from '@/components/timetable/SessionDetail.vue';
import SessionTd from "./SessionTd.vue";
import backgroundImage from "@/assets/background.png";
import { sessionList } from "./data.js";

export default {
  components: {
    SessionTd,
    SessionDetail,
  },
  data() {
    return {
      backgroundImage,
      sessionList,
      currentSessionId: null,
    };
  },
  methods: {
    showDetail: function (id) {
      console.log("힝", id, this)
      this.currentSessionId = id;
    },
    closeDetail: function (id) {
      console.log("힝2")
      this.currentSessionId = null;
    },
  },
};
</script>

<style scoped lang="scss">
.timetable {
  width: 100%;
}

.timetable th,
.timetable td {
  border: 1px solid #d6d6d6;
}

td {
  padding: 5px 8px;
}
</style>
