/**
 * Created by 迩伶贰 on 2018/4/13.
 */

 export default {
  getToDo: state => {
    return state.todos.filter(item => item.done === true)
    // filter 迭代过滤器 将每个item的值 item.done == true 挑出来， 返回的是一个数组
  }
 }
