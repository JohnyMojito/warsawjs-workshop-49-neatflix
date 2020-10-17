<template>
  <div id="app">
    <ShowsListItem />
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
  // methods: {},
  // computed: {},
  // watch: {},

  // data() {},
  // created() {},
  // destroyed() {},
}
</script>
------------------------------------------------------
<style>
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
}
</style>
