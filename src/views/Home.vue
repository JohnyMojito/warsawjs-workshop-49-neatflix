<template>
  <div id="home">
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
import api from '@/api'

export default {
  name: 'Home',
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
  computed: {
    displayedShows() {
      if (!this.searchedPhrase) return this.shows
      return this.shows.filter(x => x.name.toUpperCase().includes(this.searchedPhrase.toUpperCase()))
    },
  },
  async created() {
    this.shows = await api.fetchBatch();
  },
}
</script>
------------------------------------------------------