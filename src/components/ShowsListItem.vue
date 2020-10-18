<template>
  <router-link :to="'/details/'+this.show.id" class="no-underline">
    <div class="shows-list-item" :style="{backgroundImage: `url(${show.image.medium})`}">
      <div class="info-wrapper">
        <h2 class="title">{{show.name}}</h2>
        <div class="year-rating-wrapper">
          <div class="year">{{show.premiered}}</div>
          <div class="rating">{{show.rating.average}}</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ShowsListItem',
  props: ['show'],
}
</script>

<style scoped lang="scss">
.no-underline {
  text-decoration: none;
}
.shows-list-item {
  text-decoration: none;
  text-align: center;
  display: flex;
  flex-direction: column-reverse;
  height: 300px;
  width: 200px;
  margin: 1vw;
  background: rgb(119, 7, 7);
  & .info-wrapper {
    background-color: black;
    color: white;
    & h2 {
      margin: 5px 0 0;
    }
    & .year-rating-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    & .rating {
      color: rgb(236, 213, 4);
      transform: scale(1.1);
      font-weight: bold;
    }
  }
}

.summary {
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
}
</style>