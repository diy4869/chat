<template>
  <div class="preview">
    <img :src="icon" alt="">
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
  .preview {
    display: flex;
    flex: 1;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
