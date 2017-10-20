<template>
  <div class='svg-chart'>
    <div>
      <div class="menu-card">
        <div class="menu-name">
          {{option.name}}
        </div>
        <h3>{{ percent + '%' }}</h3>
        <div class="pie-yum">
          <svg width="50" height="50" viewBox="0 0 32 32">
            <circle id="background"
               r="16" cx="16" cy="16" fill="#fff" stroke="yellow" stroke-width="12" />
            <circle id="percent"
               r="16" cx="16" cy="16" fill="#fff" fill-opacity="0.5" stroke="deeppink"
               stroke-width="12"
               :stroke-dasharray=" percentStr " />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
   export default {
    name:'svg-chart',
    props: ['option'],
    computed: {
      totalVotes:function(){
        return this.$store.state.user.all.length
      },
      percent: function () {

        return Math.round(this.option.voteCount/this.totalVotes*100)
      },
      percentStr: function () {
        return this.percent + ' 100'
      }
    },
   }

</script>

<style scoped>
  .menu-card{
    display: flex;
    flex-direction: column;
    padding: 5px;
    box-sizing: border-box;
    align-items: center;
    margin-top: 20px;
  }
  .menu-name{
    font-size: 20px;
  }
  h3{
    margin: 0;
    font-size: 18px;
    font-weight: normal;
  }
  svg {
    transform: rotate(-90deg);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-top: 10px;
  }
</style>
