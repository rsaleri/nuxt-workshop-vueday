<template>
  <div>
    <h1>
      Hello World
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Index',
  mounted () {
    this.$store.commit('SET_BREADCRUMB_LINKS', [])
  }
}
</script>

<style scoped>

</style>
