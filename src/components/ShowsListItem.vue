<template>
  <div>
    {{show}}
  </div>
</template>

<script>
export default {
  name: 'ShowsListItem',
  data() {
    return {
      show: {
        name: "",
        premiered: 0,
        rating: 0,
      }
    }
  }
}
</script>

<style scoped>

</style>