<template lang="pug">
.bg-dark-200
  content
</template>

<script setup>

</script>

<style>
html {
  scroll: smooth;
  @apply max-h-100vh overflow-y-scroll;
  scroll-snap-type: y mandatory;
}
body {
  color: white;
  @apply bg-dark-200;
}
</style>