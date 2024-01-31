<script setup>
import { useData } from 'vitepress'

const first = ref();

const { frontmatter: f } = useData();
const props = defineProps({
  slides: { type: Object },
})
</script>

<template lang="pug">
.flex.flex-col
  section.slide
    .text-3d.font-bold.flex.flex-wrap
      a.p-5.my-20(
      :href="`#${term[0]}`" v-for="(term) in Object.entries(slides).filter(slide =>slide[1]?.abbr)" :key="term" :style="{ color: term[1].color }") {{ term[1].abbr }}

  section.slide
    .text-11vw.flex.flex-col.leading-1em
      a.mr-2(:href="`#${t}`" v-for="(term, t) in slides" :key="term" :style="{ color: term.color }") {{ term.title }} 


  section.slide(:id="t" v-for="(term, t) in slides" :key="term" :style="{ color: term.color }")
    .p-4
      .text-8vw.mb-8.font-bold {{ term.title }}
      .text-5vw.leading-normal.mb-12 {{ term.desc }}
      .text-2xl.text-dark-900.leading-normal.max-w-55ch {{ term.context }}
      .flex.flex-wrap.mt-6
        a.p-2.flex.items-center.gap-4(v-for="link in term.links" :key="link" :href="link.url" :target="link.url.includes('http') ? '_blank' : ''")
          .p-0.text-8xl
            la-github(v-if="link.type == 'github'")
            mdi-link(v-else)
          .p-0.text-4xl {{ link.text }}


  section.p-4.md-p-12.leading-loose
    slot 


</template>

<style scoped lang="postcss">
.slide {
  @apply flex flex-wrap items-center justify-start px-8 py-16 relative min-h-100vh;

  &:nth-child(2n) {
    @apply bg-light-800/50;
  }

  & img {
    @apply max-w-full max-h-100vh;
  }
}

.link {
  @apply text-dark-400 opacity-50 p-4 hover-opacity-100 transition-all duration-300 ease-in-out;
}

.text {
  @apply absolute top-4 left-4 text-sm opacity-50;
}

.text-3d {
  font-size: 12em;
  font-weight: 700;
  color: #f5f5f5;
  text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191,
    1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191,
    1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191,
    1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
    1px 30px 60px rgba(16, 16, 16, 0.4);
}
</style>
