<template>
  <div class='vote-option'>
    <h2>{{ menu.text }}</h2>
    <div class="name-list">
      <div v-for="showName in eachShowNames">
        {{showName.userName}}
      </div>
    </div>
    <div class="action">
      <div v-if="voted">
        <button  class="voted-button" @click="undo">已投</button>
      </div>
      <div v-else>
        <button @click="vote" >投票</button>
      </div>
    </div>
  </div>
</template>

<script>
   export default {
    name:'vote-option',
    props:['menu','showNames'],
    computed: {
      eachShowNames: function () {
        return this.showNames.filter(t => t.menuId == this.menu.id)
      },
      voted:function(){
        return this.eachShowNames.filter(t => t.userName === this.currentUser).length
      },
      currentUser:function(){
        return this.$store.state.auth.currentUser
      }
    },
    methods:{
      vote:function(){
        if(this.voted || !this.currentUser) return
          let vote = {
            userName:this.currentUser,
            menuId:this.menu.id
          }
          this.$store.dispatch({type:'vote',vote})

      },
      undo:function(){
        alert('我饿了')
        const vote = this.eachShowNames.find(t => t.userName === this.currentUser)
        this.$store.dispatch({type:'undo',voteId:vote.id})
      }
    },
   }

</script>

<style scoped>
.menu-item{
  background-color: #fff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.8);
  font-size: 20px;
  text-align: center;
  line-height: 1.8;
  padding: 20px 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
h2{
  margin:0;
}
button{
  border:0;
  width: 100px;
  margin: 10px auto;
  padding:5px 10px;
  box-sizing: border-box;
  border-radius: 5px;
}
.voted-button{
  background-color: lightgreen;
}
.name-list{
  display: flex;
  flex-wrap: wrap;
}
.name-list>div{
  background-color: #000;
  color:#fff;
  padding: 0 10px;
  margin:5px
}


</style>
