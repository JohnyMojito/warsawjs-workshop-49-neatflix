<template>
  <div id="app">
    <TopNav>
      <template #left>
        <h1>Neatflix</h1>
      </template>
      <template #right>
        <SearchInput v-model="searchedPhrase"/>
      </template>
    </TopNav>
    <ShowsList :shows="displayedShows" />
  </div>
</template>
------------------------------------------------------
<script>
import ShowsList from '@/components/ShowsList'
import SearchInput from '@/components/SearchInput'
import TopNav from '@/components/TopNav.vue'

export default {
  name: 'App',
  components: {
    SearchInput,
    ShowsList,
    TopNav
  },
  data() {
    return {
      searchedPhrase: '',
      shows: []
    }
  },
  // methods: {},
  computed: {
    displayedShows() {
      if (!this.searchedPhrase) return this.shows
      return this.shows.filter(x => x.name.toUpperCase().includes(this.searchedPhrase.toUpperCase()))
    },
  },
  created() {
    fetch('https://api.tvmaze.com/shows?page=0').then(response => response.json()).then(json => this.shows = json)
  },
  // watch: {},
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
  display: flex;
  flex-direction: column;
}
</style>
