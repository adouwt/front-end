<template>
  <div class="nba-bg">
    <div>
      <img src="../../assets/img/games/nba/nba-tel.png" alt="" class="nba-user-tel">
      <span class="nba-activity-username">
        185****7735
      </span>
    </div>
    <div class="nba-login-wrapper" @touchmove.prevent>
      <div class="nba-login-authorition" v-show="!isLogin">
        <div class="nba-login-status">您当前尚未登录，请先登录</div>
        <div class="nba-login-btn">
          <router-link to='/login'>
            去登录
          </router-link>
        </div>
        <div class="nba-regist-btn">
          尚未账号，
          <router-link to='/login'>
            去注册
          </router-link>
        </div>
      </div>
      <div class="nba-login-close-wrapper">
        <span class="nba-login-close">X</span>
      </div>
    </div>
    
  </div>
</template>

<script>
// import { login } from '@/utils/native'
// import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      isLogin: false
    }
  },
  components: {

  },
  created () {
    // if (this.$route.query.sessionToken) {
    //   MessageBox.alert('用户未登录').then(() => {
    //     login()
    //   })
    // }
  }
}
</script>

<style lang='less' scoped>
  .text-center {
    text-align: center;
  }
	.nba-bg {
    height: 50%;
		.nba-user-tel {
      display: inline-block;
      width: 25%;
      // height: 4rem;
			position: absolute;
			top: 0;
			left: 0;
		}
		.nba-activity-username {
			position: absolute;
			top: 10px;
			left: 0px;
			color: #fff;
      width: 25%;
      text-align: center;
		}
    .nba-login-wrapper {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 100;
      height: 100%;
      width: 100%;
      background: rgba(0,0,0,0.5);
      .nba-login-authorition {
        width: 72%;
        height: 158px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        margin-top: 50%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        background-color: #fff;
        .nba-login-status {

        }
        .nba-login-btn {
          width: 63%;
          height: 40px;
          line-height: 40px;
          border-radius: 5px;

          margin-top: 22px;
          margin-left: auto;
          margin-right: auto;
          background-color: #fa5558;  

          a {
            color: #fff;
          }        
        }
        .nba-regist-btn {
          margin-top: 5px;
          margin-left: 11%;
          a {
            color: #fb5659;
          }
        }
      }
      .nba-login-close-wrapper {
        margin-top: 40px;
        text-align: center;
        .nba-login-close {
          color: #fff;
        }
      }
    }
		
  }
 
</style>
