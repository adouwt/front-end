/**
 * Created by 迩伶贰 on 2018/4/13.
 */
import * as types from './mutation_types'

export default {
  addViews: ({commit}) => {
    commit(types.ADD_VIEWS)
  },
  clickTotal: ({commit}) => {
    commit(types.CLICK_TOTAL)
  },
  addBlog: ({commit}) => {
    commit(types.ADD_BLOG)
  }
}
