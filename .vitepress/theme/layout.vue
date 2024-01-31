<script setup>
import { useData } from 'vitepress'
import { useFullscreen } from '@vueuse/core'

const { toggle, isSupported } = useFullscreen();

const { frontmatter: f, isDark } = useData()

</script>


<template lang="pug">

content(v-if="f?.front")

.p-4.flex.flex-col.gap-4(v-else)
  .text-18vw.font-bold {{ f?.title }}
  content.markdown-body.max-w-65ch.hyphens-auto

footer.flex.items-center.bg-dark-400.text-white.p-4.z-10.relative
  a.font-bold.p-0(href="/") DeFUCC
  la-creative-commons.mx-2
  .mr-2 2012–PRESENT
  .m-0 MIT Licence
  .flex-1
  a.text-white.text-2xl.mr-4(href="https://github.com/DeFUCC/defucc.me" target="_blank")
    la-github
.rounded.p-2.opacity-50.text-2xl.fixed.top-4.right-4.z-15.cursor-pointer.transition-all.duration-200.ease(
  class="hover:opacity-100"
  @click="toggle()"
  v-if="isSupported"
  )
  la-expand

.rounded.p-2.opacity-50.text-2xl.fixed.top-4.left-4.z-15.cursor-pointer.transition-all.duration-200.ease(
  class="hover:opacity-100"
  @click="isDark = !isDark"
  )
  la-sun(v-if="!isDark")
  la-moon(v-else)
</template>

