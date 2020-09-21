<template>
  <div>
    <img :src="logo" alt="My beautiful application">
    <h1>
      Hello World
    </h1>
  </div>
</template>

<script>
export default {
name: "index",
  data() {
    return {
      logo: require('@/assets/logo.png')
    }
  }
}
</script>

<style scoped>

</style>
