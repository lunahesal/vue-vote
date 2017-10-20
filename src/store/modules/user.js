
import axios from 'axios'
var shortid = require('shortid');
const state={
  all:[
    {
      "userName": "fd",
      "menuId": "1",
      "id": 1
    },
    {
      "userName": "cfdv",
      "menuId": "2",
      "id": 2
    },
    {
      "userName": "dd",
      "menuId": "By3_USf6Z",
      "id": 3
    }
  ],
  isVoted:false
}

const mutations = {
  vote(state,user){
    state.all.push(user)
    state.isVoted=true
  },
  undo(state,voteId){
    state.all= state.all.filter(t=>t.id !== voteId)
  }
}
const actions ={
  vote({ commit },{ vote}){
      const user={
        ...vote,
        id:shortid.generate()
      }
      commit('vote',user)

  },
  undo({ commit },{ voteId }){
      commit('undo',voteId)
  }
}
export default{
  state,mutations,actions
}
