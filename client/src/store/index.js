import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogTitle: '迩伶贰blog'
  },
  mutations: {
    changeTitle (state, titleName) {
      state.headerName = titleName;
    }
  }
})
