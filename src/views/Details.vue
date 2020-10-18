<template>
  <div class="details" v-if="show">
    <a @click="$router.go(-1)" class="back-btn">↩️ back</a>
    <div class="main-info-wrapper">
      <div class="left">
        <h1>{{show.name}}</h1>
        <span>Premiered: {{show.premiered}}</span>
        <article v-html="show.summary" class="summary"></article>
      </div>
      <div class="right">
        <img :src="show.image.original" :alt="`${show.name} poster`" class="poster">
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'Detials',
  data() {
    return {
      show: null
    }
  },
  async created() {
    if (!this.show) {
      this.show = await api.fetchDetails(this.$route.params.id)
    }
  }
}
</script>

<style scoped lang="scss">
.details {
  display: block;
  background-color: rgb(44, 6, 6);
  color: #fff;
  height: 100%;
  overflow-x: hidden;
  & .back-btn {
    left: 0px;
    top: 100px;
    font-size: 2rem;
    position: fixed;
    &:hover {
      cursor: pointer;
    }
  }
  & .main-info-wrapper {
    display: flex;
    flex-direction: row;
    @media (max-width: 700px) {
      flex-direction: column;
      & .left {
        width: 100%;
      }
      & .right {
        width: 100%;
      }
    }
    & h1 {
      font-size: 4rem;
    }
    & .left {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      & .summary {
        font-size: 2rem;
        padding: 20px;
      }
      @media (max-width: 700px) {
        width: 100%;
      }
    }
    & .right {
      width: 50%;
      & img {
        width: 75%;
        @media (max-width: 700px) {
          width: 100%;
        }
      }
      @media (max-width: 700px) {
        width: 100%;
      }
    }
  }
}
</style>
