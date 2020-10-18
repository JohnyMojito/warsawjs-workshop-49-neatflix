<template>
  <div class="top-nav">
    <slot name="left">
      <h1>Neatflix</h1>
    </slot>
    <slot name="right">
      <SearchInput @input="$emit(input, $event.target.value)" :value="value"/>
    </slot>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput'

export default {
  name: 'TopNav',
  props: ['value'],
  components: {
    SearchInput
  }
}
</script>

<style scoped lang="scss">
.top-nav  {
  max-width: 100vw;
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