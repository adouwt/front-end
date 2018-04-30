<template>
  <div class="nba-bg-wrapper">
    <nba-common></nba-common>
    <div class='nba-btn-area'>
      <div class='nba-btn'>
        <router-link to="/nba-activity-rule">活动规则</router-link>
        <router-link to="/nba-activity-rank">竞猜排名</router-link>
      </div>
    </div>
    <div class='nba-rule-area'>
      <p class="nba-activity-time">活动开始时间：2018年5月X日</p>
      <p class="nba-activity-explain">
        活动期间，购买您预测赢队的产品，比赛结束后，若该队胜出，您将会获得红包奖励；
        参赛条件：购买指定产品且单笔起投金额≥20000元；可多次参与活动；
      </p>
      <p class="nba-activity-gift">
        活动期间，猜中场数最多的用户将有机会获得终极大奖—NBA中国赛现场门票（或等值礼品）；
      </p>
      <p class="nab-activity-danger">
        注：详细规则请<span class="nba-go-to-rule">前往【活动规则】查看</span> 
      </p>
    </div>
    <div class="nba-activity-index-power">
      <p class="text-center">
        以平台发布的规则为准
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

    }
  },
  components: {
    nbaCommon
  },
  mounted () {
    // iframe('NBA赛事竞猜')
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

    .nba-btn-area {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 90px;
      width:88%;
      
      margin-left: 20px;
      margin-right: 20px;
      border-radius: 10px;
      background-color: #fdf1e3;

      .nba-btn {
        width: 100%;
        text-align: center;
        a {
          display: inline-block;
          text-align: center;
          width: 40%;
          height: 35px;
          line-height: 35px;
          color: #fff;
          border-radius: 3px;
        }
        a:first-child {
          margin-right: 25px;
          background-color: #d3ab5e;
        }
        a:last-child {
          background-color: #e02e28;
        }
      }
    }
    .nba-rule-area {
      box-sizing: border-box;
      width: 88%;
      margin-top: 20px;
      margin-left: 20px;
      margin-right: 20px;
      padding: 20px 21px;
      border-radius: 10px;
      background-color: #fdf1e3;

      p {
        margin-left: 6px;
        line-height: 22px;
        font-size: 14px;
        color: #3d1d18;
      }
      .nba-activity-time {
        display: inline-block;
        height: 20px;
        line-height: 20px;

        padding: 3px 7px;
        margin-left: -5px;

        background-color: #e7cda0;
        border-radius: 20px;
        color: #381813;
        font-size: 14px;
      }
      .nba-go-to-rule {
        background-color: #e4c796;
        border-radius: 13px;
        padding: 2px 5px;
      }
    }
    .nba-activity-index-power {
      margin-top: 20px;
      margin-bottom: 20px;
      text-align: center;
      color: #fff;
      font-size: 13px;
    }
  }
 
</style>
