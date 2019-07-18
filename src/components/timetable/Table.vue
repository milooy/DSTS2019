<template>
  <div>
    <div class="contents">
      <table class="timetable">
        <tr>
          <th class="table-title">전반전</th>
          <th>세션1</th>
          <th>세션2</th>
          <th>커뮤니티룸</th>
        </tr>
        <tr>
          <td class="time">11:00 ~ 11:20 | 20분</td>
          <td colspan="3" class="break">오프닝</td>
        </tr>
        <tr>
          <td class="time">11:20 ~ 11:50 | 30분</td>
          <td v-on:click="showDetail(0)">
            <SessionTd :data="sessionList[0]"/>
          </td>
          <td v-on:click="showDetail(1)">
            <SessionTd :data="sessionList[1]"/>
          </td>
          <td rowspan="2">Open Table #1</td>
        </tr>
        <tr>
          <td class="time">11:50 ~ 12:05 | 15분</td>
          <td colspan="2" v-on:click="showDetail(0)"><LightningTd :data="sessionList[0]"/></td>
        </tr>
        <tr>
          <td class="time">12:05 ~ 13:05 | 60분</td>
          <td colspan="3" class="break" height="50">🍗점심식사</td>
        </tr>
        
      </table>

      <table class="timetable">
        <tr>
          <th class="table-title">후반전</th>
          <th>세션1</th>
          <th>세션2</th>
          <th>커뮤니티룸</th>
        </tr>
        <tr>
          <td class="time">13:05 ~ 13:35 | 30분</td>
          <td v-on:click="showDetail(0)">
            <SessionTd :data="sessionList[0]"/>
          </td>
          <td v-on:click="showDetail(1)">
            <SessionTd :data="sessionList[1]"/>
          </td>
          <td>Open Table #2</td>
        </tr>
        <tr>
          <td class="time">13:35 ~ 13:40 | 5분</td>
          <td colspan="3" class="break">쉬는시간</td>
        </tr>
        <tr>
          <td class="time">13:40 ~ 14:10 | 30분</td>
          <td v-on:click="showDetail(0)">
            <SessionTd :data="sessionList[0]"/>
          </td>
          <td v-on:click="showDetail(1)">
            <SessionTd :data="sessionList[1]"/>
          </td>
          <td>Open Table #3</td>
        </tr>
        <tr>
          <td class="time">14:10 ~ 14:25 | 15분</td>
          <td colspan="2" v-on:click="showDetail(0)"><LightningTd :data="sessionList[0]"/></td>
          </tr>
        <tr>
          <td class="time">14:25 ~ 14:55 | 30분</td>
          <td v-on:click="showDetail(0)">
            <SessionTd :data="sessionList[0]"/>
          </td>
          <td v-on:click="showDetail(1)">
            <SessionTd :data="sessionList[1]"/>
          </td>
          <td>Open Table #4</td>
        </tr>
        <tr>
          <td class="time">14:55 ~ 15:00 | 5분</td>
          <td colspan="3" class="break">쉬는시간</td>
        </tr>
        <tr>
          <td class="time">15:00~15:30 | 30분</td>
          <td colspan="3" class="sponsor-time">
            간식 타임
            <br>(Ignite Talk by Sponsors)
          </td>
        </tr>
        <tr>
          <td class="time">15:30 ~ 16:00 | 30분</td>
          <td v-on:click="showDetail(0)">
            <SessionTd :data="sessionList[0]"/>
          </td>
          <td v-on:click="showDetail(1)">
            <SessionTd :data="sessionList[1]"/>
          </td>
          <td>Open Table #5</td>
        </tr>
        <tr>
          <td class="time">16:00 ~ 16:15 | 15분</td>
          <td colspan="2" v-on:click="showDetail(0)"><LightningTd :data="sessionList[0]"/></td>
          </tr>
        <tr>
          <td class="time">16:15 ~ 16:45 | 30분</td>
          <td v-on:click="showDetail(0)">
            <SessionTd :data="sessionList[0]"/>
          </td>
          <td v-on:click="showDetail(1)">
            <SessionTd :data="sessionList[1]"/>
          </td>
          <td>Open Table #6</td>
        </tr>
        <tr>
          <td class="time">16:45 ~ 17:00 | 15분</td>
          <td colspan="2" v-on:click="showDetail(0)"><LightningTd :data="sessionList[0]"/></td>
          </tr>
        <tr>
          <td class="time">17:00 ~ 17:15 | 15분</td>
          <td colspan="3" class="break">클로징</td>
        </tr>
        <tr>
          <td class="time">17:15 ~ 18:00 | 45분</td>
          <td colspan="3" class="break" height="50">네트워킹</td>
        </tr>
      </table>

    </div>
    <SessionDetail :data="sessionList[currentSessionId]" :closeDetail="closeDetail"/>
  </div>
</template>

<script>
import SessionDetail from "@/components/timetable/SessionDetail.vue";
import SessionTd from "./SessionTd.vue";
import LightningTd from "./LightningTd.vue";
import backgroundImage from "@/assets/background.png";
import { sessionList } from "@/assets/data/timetable.js";

export default {
  components: {
    SessionTd,
    SessionDetail,
    LightningTd,
  },
  data() {
    return {
      backgroundImage,
      sessionList,
      currentSessionId: null
    };
  },
  methods: {
    showDetail: function(id) {
      this.currentSessionId = id;
    },
    closeDetail: function(id) {
      this.currentSessionId = null;
    }
  }
};
</script>

<style scoped lang="scss">
.timetable {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 100px;
}

.timetable th,
.timetable td {
  border: 1px solid #d6d6d6;
}

td {
  padding: 10px 15px;
}

th {
  color: #5caf55;
  font-weight: bold;
}

table tr:first-child th {
  border-top: 0;
}

table tr td:first-child,
table tr th:first-child {
  border-left: 0;
}
table tr td:last-child,
table tr th:last-child {
  border-right: 0;
}

.table-title {
  font-size: 2rem;
}

.break {
  background: #cbeada;
  text-align: center;
  font-style: italic;
  font-size: 14px;

}

.time {
  color: #878787;
  font-size: 14px;
  text-align: center;
}

.sponsor-time {
  background: #ffd589;
  text-align: center;
}
</style>
