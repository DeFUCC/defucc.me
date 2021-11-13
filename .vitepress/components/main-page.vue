<script setup>
import { useFullscreen } from '@vueuse/core'
const { toggle, isSupported } = useFullscreen();
const first = ref();
</script>

<template lang="pug">
.slides
  .slide
    img(src="/logo/contour-low_animated.svg")
    .flex.flex-col.text-4xl.items-center
      .flex
        a.link(href="https://github.com/DeFUCC" target="_blank")
          la-github
        a.link(href="https://ko-fi.com/B0B44CM90" target="_blank")
          simple-icons-kofi
      la-angle-down.mt-32.animate-bounce(
        @click="first.scrollIntoView({ behavior: 'smooth' })"
      )
  .slide#s1(ref="first")
    img(src="/anim/1-dot.svg")
    .text Dot

  .rounded.p-2.opacity-50.text-2xl.fixed.bottom-0.right-0.z-10.cursor-pointer.transition-all.duration-200.ease(
    class="hover:opacity-100"
    @click="toggle()"
    v-if="isSupported"
  )
    la-expand
</template>



<style scoped>
.slide {
  @apply snap-start flex flex-col items-center justify-center h-100vh p-4 relative;
  &:nth-child(2n) {
    @apply bg-dark-100;
  }
  & img {
    @apply max-w-full max-h-100vh;
  }
}
.link {
  @apply text-white opacity-10 p-4 hover:opacity-100 transition-all duration-300 ease-in-out;
}
.text {
  @apply absolute top-4 left-4 text-sm opacity-50;
}
</style>
