/**
 * Created by 皓强 on 2016/10/25 0025.
 */
import { EventEmitter } from 'events'
const util = new EventEmitter()
export default util

util.getId = todos => {
  var id = Math.random()
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      id = this.getId()
      break
    }
  }
  return id
}
