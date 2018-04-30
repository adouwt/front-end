<template>
  <div class="nba-bg-wrapper">
    <nba-common></nba-common>
    <div v-if="isActive" class="nba-activity-rank">
      <div class="nba-activity-rank-user">
        <p>
          <span class="nba-common-highlight">本期竞猜获奖情况：</span> <span>您未参加哦</span>
        </p>
        <p>
          <span class="nba-common-highlight">您当前排名：</span><span>您尚未参见活动。快去参加活动赢大奖吧！</span>
        </p>
      </div>
      <div class="nba-activity-rank-award-users">
        <p>
          <span class="nba-common-highlight">本期竞猜获奖用户</span>
        </p>
        <p>
          <span class="nba-activity-award-user">185****77735</span>
          <span class="nba-activity-award-user">185****77735</span>
          <span class="nba-activity-award-user">185****77735</span>
          <span class="nba-activity-award-user">185****77735</span>
          <span class="nba-activity-award-user">185****77735</span>
          <span class="nba-activity-award-user">185****77735</span>
          <span class="nba-activity-award-user">185****77735</span>
          <span class="nba-activity-award-user">185****77735</span>
          <span class="nba-activity-award-user">185****77735</span>
          <span class="nba-activity-award-user">185****77735</span>
        </p>
      </div>
      <div class="nba-activity-rank-current-user">
        <p>
          <span class="nba-common-highlight">当前排名情况：</span>
        </p>
        <p>
          <span class="nba-activity-rank-user">185****77735</span>
          <span>第1名，猜中N次，累计投资30万</span>
        </p>
        <p>
          <span class="nba-activity-rank-user">185****77735</span>
          <span>第1名，猜中N次，累计投资30万</span>
        </p>
        <p>
          <span class="nba-activity-rank-user">185****77735</span>
          <span>第1名，猜中N次，累计投资30万</span>
        </p>
        <p>
          <span class="nba-activity-rank-user">185****77735</span>
          <span>第1名，猜中N次，累计投资30万</span>
        </p>
        <p>
          <span class="nba-activity-rank-user">185****77735</span>
          <span>第1名，猜中N次，累计投资30万</span>
        </p>
        <p>
          <span class="nba-activity-rank-user">185****77735</span>
          <span>第1名，猜中N次，累计投资30万</span>
        </p>
      </div>
    </div>
    <div v-else class="nba-activity-no-start">
      <h3>活动尚未开始哦</h3>
    </div>
    <div class="nba-activity-rank-remarks" :class="{isNoStart:!isActive}">
      <p>
        每场竞猜结束后1-2个工作日公布竞猜获奖用户名单、参赛用户当前排名情况
      </p>
    </div>
  </div>
</template>

<script>
// import iframe from '@/utils/prize_claw/createIframe.js'
import nbaCommon from './nba-activity-common'

export default {
  data () {
    return {
      isActive: true
    }
  },
  components: {
    nbaCommon
  },
  mounted () {
    // iframe('NBA赛事竞猜活动规则')
  }
}
</script>

<style lang='less' >
  body {
    background-color: #332f86;
  }
  .nba-bg-wrapper {
    box-sizing: border-box;
    position: relative;

    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    font-size: 14px;
    background-image: url(../../assets/img/games/nba/nba-bg.png);
    background-color: #332f86;
    .nba-activity-rank {
      box-sizing: border-box;
      width: 88%;
      margin-left: auto;
      margin-right: auto;
      div {
        padding: 20px 21px;
        border-radius: 10px;
        background-color: #fdf1e3;
      }
      .nba-activity-rank-user {
        
      }
      .nba-activity-rank-award-users {
        margin-top:20px;
        p {
          .nba-activity-award-user {
            display: inline-block;
            width: 40%;
            line-height: 30px;
          }
        }
      }
      .nba-activity-rank-current-user {
        margin-top:20px;
        p {
          font-size: 13px;
          .nba-activity-rank-user {
            display: inline-block;
            line-height: 30px;
            margin-right: 10px;
          }
        }
      }
    }
    .nba-activity-rank-remarks {
      &.isNoStart{
        margin-top: 60%;
      }
      p {
        width: 250px;
        margin-left: auto;
        margin-right: auto;
        line-height: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: center;
        color: #fff;
        font-size: 13px;
      }
    }
  }
  .nba-activity-no-start {
    color: #fff;
    h3 {
      margin-left: 30px;
    }
  }
  .nba-common-highlight {
    display: inline-block;
    padding: 0px 7px;
    background-color: #e7cda0;
    border-radius: 15px;
    margin-top: 5px;
  }
 
</style>
