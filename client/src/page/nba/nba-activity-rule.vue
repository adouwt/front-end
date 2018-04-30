<template>
  <div class="nba-bg-wrapper">
    <nba-common></nba-common>
    <div class="nba-activity-rule-wrapper">
      <div class="nba-activity-rule">
        <div class="nba-common-highlight">活动开始时间：2018年5月N日</div>
        <div class="nba-common-highlight">活动结束时间：根据赛程调整</div>
        <div></div>
        <div class="nba-common-highlight comon-mt-md">活动规则：</div>
        <p>
          1.活动期间，捞财宝平台将会上线与参赛队伍名称相符的产品，
          根据您的神预测购买您觉得将会胜出的队伍命名的产品，比赛结束后，
          购买赢队产品的用户，将会获得相应活动奖励，连续参与活动，
          将有机会获得NBA现场门票（eg：下场比赛为：A队vsB队，
          若您觉得A队赢，则购买以A队命名的产品，比赛结果若A队赢，
          您可获得相应活动奖励）。
        </p>
        <p>
          2.每场比赛均可参与竞猜，参与竞猜条件为：购买以球队名命名的产品，
          且单笔起投金额≥20000元，
          可多次参与活动。每场竞猜获胜的用户均可获得红包奖励。
        </p>
        <p>
          3.终极大奖：活动期间，每猜中一场算1场猜中，猜中场数最多的用户将有机会获得终极大奖；
          若多个用户猜中场数相同，则根据其参与活动的购买金额由高到低排名，
          前6名将会获得终极大奖。
        </p>
        <div  class="nba-common-highlight">
          活动奖品：
        </div>
        <p>
          <span  class="nba-common-highlight">1. 红包奖励：</span>每场竞猜结束后，猜中1次可获得<span class="nba-color-red">5元红包</span> ，
          多次猜中可累加（例：单场猜中5次获得25元红包），
          红包将会在每场竞猜结束后5个工作日内发放；
        </p>
        <p>
          <span  class="nba-common-highlight">2.终极大奖：</span>第<span class="nba-color-red">1-3名</span>将会获得NBA中国赛的普票，第<span class="nba-color-red">4-6名</span>将会获得<span class="nba-color-red">NBA中国活动日门票；</span> 
          注：若门票售完，则发放等价值其他奖品；活动结束后，客服将会与获奖用户联系，
          奖品将在开售后联系获奖用户并发放。
        </p>
      </div>
      <div class="nba-activity-power">
        <p>
          以平台发布的规则为准
        </p>
      </div>
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

    .nba-activity-rule-wrapper {
      box-sizing: border-box;

      p {
        margin-left: 6px;
        line-height: 22px;
        font-size: 14px;
        color: #3d1d18;
      }
      .nba-activity-rule {
        box-sizing: border-box;
        width: 88%;
        margin-top: 20px;
        margin-left: 20px;
        margin-right: 20px;
        padding: 20px 21px;
        border-radius: 10px;
        background-color: #fdf1e3;

      }
      .nba-activity-power {
        p {
          margin-top: 20px;
          margin-bottom: 20px;
          text-align: center;
          color: #fff;
          font-size: 13px;
        }
      }
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
