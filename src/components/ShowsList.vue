<template>
  <div class="shows-list">
    <ShowsListItem :show="show" v-for="show in shows" :key="show.id"/>
  </div>
</template>

<script>
import ShowsListItem from '@/components/ShowsListItem'

export default {
  name: 'ShowsList',
  props: ['shows'],
  components: {
    ShowsListItem
  },
}
</script>

<style scoped>
.shows-list {
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  background-color: #2c0606;
}
</style>