<template>
  <div class="footer">
    <div>
      <div><strong>©DSTS 2019</strong></div>
      <div>Powered by Zepl and DataItGirls</div>
      <div>Contact: <a href="mailto:dsts.official@gmail.com">dsts.official@gmail.com</a></div>
    </div>

    <div>
      <div class="footer-title">Site</div>
      <ul>
        <li><router-link to="/timetable" class="router-link">타임테이블</router-link></li>
        <li><a href="https://docs.google.com/document/d/1_G19bFwdZNnw2neSSHF1qzp2YRlFAJNVtroGH5mcgvo/edit?usp=sharing" target="_blank">Code of conduct</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-title">Links</div>
      <ul>
        <li>
          <a href="https://festa.io/events/395">티켓 구매</a>
        </li>
        <li>
          <a href="http://www.dataitgirls.com">데잇걸즈 홈페이지</a>
        </li>
        <li>
          <a href="https://www.facebook.com/groups/littlebigdata/">Little Big Data 홈페이지</a>
        </li>
      </ul>
    </div>
    <div class="footer-icon-container">
      <a href="https://www.facebook.com/DSTSofficial" :style="{ marginRight: '10px' }" target="_blank">
        <i class="fab fa-facebook-square"></i>
      </a>
      <a href="https://github.com/milooy/DSTS2019" target="_blank">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </div>
</template>

<script>
import backgroundImage from '@/assets/background.png';

export default {
  data() {
    return {
      backgroundImage,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  background: $dark-gray;
  color: white;
  padding: 30px 15px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    color: black;
    margin: 3px 0;
  }

  a {
    color: black;
    text-decoration: none;
  }
}

.footer-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.footer-icon-container {
font-size: $font-m;
  a {
    color: white;
    }
}
</style>
