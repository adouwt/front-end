<template>
  <div class="nba-bg">
    <span class="nba-user-tel"></span>
    <span class="nba-activity-username">
      185****7735
    </span>
  </div>
</template>

<script>
// import { login } from '@/utils/native'
// import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {

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
	.nba-bg {
    height: 50%;
		.nba-user-tel {
      display: inline-block;
      width: 7rem;
      height: 4rem;
			position: absolute;
			top: 0;
			left: 0;
      
      background-size: contain;
      background-repeat: no-repeat;
      background-image: url(../../assets/img/games/nba/nba-tel.png);
		}
		.nba-activity-username {
			position: absolute;
			top: 10px;
			left: 3px;
			color: #fff;
		}
		
  }
 
</style>
