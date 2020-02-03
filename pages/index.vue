<template>
  <section class="container" />
</template>

<script>
export default {
  name: 'Index',
  asyncData ({ app }) {
    return app.$api('/')
  }
}
</script>

<style>
</style>

