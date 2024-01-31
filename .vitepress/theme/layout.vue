<template lang="pug">

content(v-if="f?.front")
.p-4.flex.flex-col.gap-4(v-else)
  .text-18vw.font-bold {{ f?.title }}
  content.markdown-body.max-w-65ch.hyphens-auto
  
</template>

<script setup>
import { useData } from 'vitepress'

const { frontmatter: f } = useData()

</script>
