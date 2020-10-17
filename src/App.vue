<template>
  <div id="app">
    <div class="shows-list">
      <ShowsListItem :show="show" :isSummaryShown="isSummaryShown"/>
    </div>
  </div>
</template>
------------------------------------------------------
<script>
import ShowsListItem from '@/components/ShowsListItem'

export default {
  name: 'App',
  components: {
    ShowsListItem
  },
  data() {
    return {
      show: {
        name: 'True Detective', // tutaj tytuł filmu
        premiered: 2014, // rok premiery
        rating: 10, // ocena, 0 - 10
        imgURL: 'http://static.tvmaze.com/uploads/images/medium_portrait/178/445621.jpg',
        summary: 'Tak, to jest po prostu świetny serial, no. Bardzo polecam',
      },
      isSummaryShown: false
    }
  }
  // methods: {},
  // computed: {},
  // watch: {},

  // data() {},
  // created() {},
  // destroyed() {},
}
</script>
------------------------------------------------------
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  .shows-list {
    padding: 15px;
  }
}
</style>
