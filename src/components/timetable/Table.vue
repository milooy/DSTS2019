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
          <SessionTd name="김진영" v-on:showDetail="showDetail"/>
          <SessionTd name="변성윤" v-on:showDetail="showDetail"/>
          <td rowspan="1" class="open-table">Open Table #1</td>
        </tr>
        <tr>
          <td class="time">11:50 ~ 12:05 | 15분</td>
          <LightningTd name="심상훈" v-on:showDetail="showDetail"/>
        </tr>
        <tr>
          <td class="time">12:05 ~ 13:05 | 60분</td>
          <td colspan="3" class="break lunch" height="50">🍗점심식사</td>
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
          <SessionTd name="임송이" v-on:showDetail="showDetail"/>
          <SessionTd name="김인범" v-on:showDetail="showDetail"/>
          <td class="open-table">Open Table #2</td>
        </tr>
        <tr>
          <td class="time">13:35 ~ 13:40 | 5분</td>
          <td colspan="3" class="break">쉬는시간</td>
        </tr>
        <tr>
          <td class="time">13:40 ~ 14:10 | 30분</td>
          <SessionTd name="한성민" v-on:showDetail="showDetail"/>
          <SessionTd name="양선영" v-on:showDetail="showDetail"/>
          <td class="open-table">Open Table #3</td>
        </tr>
        <tr>
          <td class="time">14:10 ~ 14:25 | 15분</td>
          <LightningTd name="강민구" v-on:showDetail="showDetail"/>
        </tr>
        <tr>
          <td class="time">14:25 ~ 14:55 | 30분</td>
          <SessionTd name="백영민" v-on:showDetail="showDetail"/>
          <SessionTd name="최정윤" v-on:showDetail="showDetail"/>
          <td class="open-table">Open Table #4</td>
        </tr>
        <tr>
          <td class="time">14:55 ~ 15:00 | 5분</td>
          <td colspan="3" class="break">쉬는시간</td>
        </tr>
        <tr>
          <td class="time">15:00~15:30 | 30분</td>
          <td colspan="3" class="sponsor-time">
            🍡간식 타임
            <br>(Ignite Talk by Sponsors)
          </td>
        </tr>
        <tr>
          <td class="time">15:30 ~ 16:00 | 30분</td>
          <SessionTd name="송치오" v-on:showDetail="showDetail"/>
          <SessionTd name="이지혜" v-on:showDetail="showDetail"/>
          <td class="open-table">Open Table #5</td>
        </tr>
        <tr>
          <td class="time">16:00 ~ 16:15 | 15분</td>
          <LightningTd name="강원양" v-on:showDetail="showDetail"/>
        </tr>
        <tr>
          <td class="time">16:15 ~ 16:45 | 30분</td>
          <SessionTd name="정산하" v-on:showDetail="showDetail"/>
          <SessionTd name="김정화" v-on:showDetail="showDetail"/>
          <td class="open-table">Open Table #6</td>
        </tr>
        <tr>
          <td class="time">16:45 ~ 17:00 | 15분</td>
          <LightningTd name="배준현" v-on:showDetail="showDetail"/>
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
    <SessionDetail :currentSessionId="currentSessionId" :closeDetail="closeDetail"/>
  </div>
</template>

<script>
import SessionDetail from "@/components/timetable/SessionDetail.vue";
import SessionTd from "./SessionTd.vue";
import LightningTd from "./LightningTd.vue";

export default {
  components: {
    SessionTd,
    SessionDetail,
    LightningTd
  },
  data() {
    return {
      currentSessionId: null
    };
  },
  methods: {
    showDetail: function(_, id) {
      this.currentSessionId = id;
    },
    closeDetail: function() {
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
  border: 1px solid $light-gray;
}

th {
  color: $medium-gray;
  font-weight: bold;
  font-size: 0.9rem;
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
  color: $primary;
  font-size: $font-m;
}

.break {
  background: $light-gray;
  text-align: center;
  font-size: 14px;
}

.time {
  color: #878787;
  font-size: 14px;
  text-align: center;
}

.sponsor-time {
  background: $secondary;
  text-align: center;
  height: 100px;
  font-size: $font-ms;
  font-weight: bold;
  color: white;
}

.open-table {
  font-size: 0.9rem;
  padding: 10px 15px;
}

.lunch {
  height: 150px;
  background: $secondary;
  text-align: center;
  font-size: $font-ms;
  font-weight: bold;
  color: white;
}
</style>
