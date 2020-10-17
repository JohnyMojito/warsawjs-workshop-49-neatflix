<template>
  <div class="shows-list-item" :style="{backgroundImage: `url(${show.imgURL})`}">
    <h2>{{show.name}}</h2>
    <p>premiered: {{show.premiered}}</p>
    <span>rating: {{show.rating}} / 10</span>
  </div>
</template>

<script>
export default {
  name: 'ShowsListItem',
  data() {
    return {
      show: {
        name: 'True Detective', // tutaj tytuł filmu
        premiered: 2014, // rok premiery
        rating: 10, // ocena, 0 - 10
      }
    }
  }
}
</script>

<style scoped>
.shows-list-item {
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 200px;
  background: #efefef;

  text-align: center;
  margin: 10px;
}
p, span {
  background: #000;
  color: #fff;
}
</style>