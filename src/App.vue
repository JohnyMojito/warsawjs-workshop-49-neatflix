<template>
  <div id="app">
    <show-list-item></show-list-item>
  </div>
</template>
------------------------------------------------------
<script>
import ShowListItem from './components/ShowsListItem.vue'
export default {
  name: 'App',
  components: {
    'show-list-item': ShowListItem
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
