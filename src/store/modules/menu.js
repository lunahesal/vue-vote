
import axios from 'axios'
var shortid = require('shortid');
console.log();
const state={
  all:[
    {
      "id": "1",
      "text": "肉末茄子"
    },
    {
      "id": "2",
      "text": "西红柿炒鸡蛋"
    },
    {
      "text": "热汤面",
      "id": "By3_USf6Z"
    }
  ]
}
const mutations = {
  addMenu(state,menu){
    state.all.push(menu)
  }
}
const actions ={
  addMenu({ commit },{text}){
      const menu={
        text:text,
        id:shortid.generate()
      }
      console.log(menu);
      commit('addMenu',menu)

  }
}
export default{
  state,mutations,actions
}
