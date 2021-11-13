<script setup>
import { useFullscreen } from '@vueuse/core'
const { toggle, isSupported } = useFullscreen();
const first = ref();

import { useData } from 'vitepress'

const { frontmatter } = useData();
</script>

<template lang="pug">
.slides
  .slide
    .text-42vw.font-bold.flex.flex-wrap
      .p-0(v-for="(term,t) in frontmatter.def" :key="term" :style="{ color: term.color }") {{ term.abbr }}
  .slide
    .text-12vw
      .mr-2(v-for="(term,t) in frontmatter.def" :key="term" :style="{ color: term.color }") {{ term.title }} 
  .slide(v-for="(term,t) in frontmatter.def" :key="term" :style="{ color: term.color }")
    .p-4
      .text-10vw.mb-8.font-bold {{ term.title }}
      .text-3rem.leading-normal.mb-12 {{ term.desc }}
      .text-2xl.text-dark-900.leading-normal {{ term.context }}
  .slide
    .flex.flex-col
      .text-8em.mb-8.font-bold MISSION
      .text-6em {{ frontmatter.mission }}
  .flex.items-center.bg-dark-400.snap-end.text-white.p-4.z-10.relative
    la-creative-commons.mx-2
    .mr-2 2012–PRESENT
    .m-0 MIT Licence
    .flex-1
    a.text-white.text-2xl.mr-4(href="https://github.com/DeFUCC" target="_blank")
      la-github
    a.text-white.text-2xl(href="https://ko-fi.com/B0B44CM90" target="_blank")
      simple-icons-kofi
  .rounded.p-2.opacity-50.text-2xl.fixed.bottom-0.right-0.z-5.cursor-pointer.transition-all.duration-200.ease(
    class="hover:opacity-100"
    @click="toggle()"
    v-if="isSupported"
  )
    la-expand
</template>



<style scoped>
.slide {
  scroll-snap-align: start;
  @apply flex flex-wrap items-center justify-start h-100vh p-4 relative;
  &:nth-child(2n) {
    @apply bg-light-800/10;
  }
  & img {
    @apply max-w-full max-h-100vh;
  }
}
.link {
  @apply text-dark-400 opacity-50 p-4 hover:opacity-100 transition-all duration-300 ease-in-out;
}
.text {
  @apply absolute top-4 left-4 text-sm opacity-50;
}
</style>
