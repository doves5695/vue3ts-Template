<template>
  <div class="box">
    <h1>我是APP</h1>
  </div>
</template>

<script setup lang="ts">
const fun = () => {
  console.log('12')
}
fun()
</script>

<style scoped lang="scss">
.box {
  widows: 600px;
  height: 400px;
  background-color: red;
  h1 {
    color: green;
  }
}
</style>
