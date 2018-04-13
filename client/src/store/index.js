import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = { 
  blogTitle: '迩伶贰blog',
  views: 10,
  blogNumber: 100,
  total: 0,
  todos: [
    {id: 1, done: true, text: '我是码农'},
    {id: 2, done: false, text: '我是码农202号'},
    {id: 3, done: true, text: '我是码农202号'}
  ]
}

const actions = {
  changeTitle ({commit}) {
    commit('changeTitle')
  },
  addViews ({commit}) {
    commit('addViews')
  },
  clickTotal ({commit}) {
    commit('clickTotal')
  },
  blogAdd ({commit}) {
    commit('blogAdd')
  }
}

const mutations = {
  addViews (state) {
    state.views++
  },
  blogAdd (state) {
    state.blogNumber++
  },
  clickTotal (state) {
    state.total++
  }
}

const getters = {
  getToDo (state) {
    return state.todos.filter(item => item.done === true)
    // filter 迭代过滤器 将每个item的值 item.done == true 挑出来， 返回的是一个数组
  }
}


export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
