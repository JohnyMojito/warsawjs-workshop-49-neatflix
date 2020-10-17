<template>
  <div class="search-input">
    <form role="search">
      <input type="text" id="header-search" @input="$emit('input', $event.target.value)" placeholder="Search...."/>
      <label for="header-search" class="visually-hidden">Search</label>
    </form>
  </div>
</template>

<script>
export default {
  props: ['value'],
  name: 'SearchInput'
}
</script>

<style scoped>
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>