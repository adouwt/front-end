/**
 * Created by 迩伶贰 on 2018/4/13.
 */
import * as types from './mutation_types'

export default {
  // 增加访问量
  [types.ADD_VIEWS] (state) {
    state.views++
  },
  // 增加博客量
  [types.ADD_BLOG] (state) {
    state.blogNumber++
  },
  // 点击增加
  [types.CLICK_TOTAL] (state) {
    state.total++
  }
}
