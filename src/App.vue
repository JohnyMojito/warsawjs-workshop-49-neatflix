<template>
  <div id="app">
    <router-view/>
  </div>
</template>
------------------------------------------------------
<script>
export default {
  name: 'App',

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
  display: flex;
  flex-direction: column;
}
</style>
