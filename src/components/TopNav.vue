<template>
  <div class="top-nav">
    <slot name="left" />
    <slot name="right" />
  </div>
</template>

<script>
export default {
  name: 'TopNav'
}
</script>

<style scoped lang="scss">
.top-nav  {
  width: 100%;
  height: 50px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  h1 {
    color: red;
  }

}
</style>