import { metaData } from './constants'

const head = [

  ["script", { async: true, defer: true, "data-website-id": "3df9bdf1-29e0-4c35-8136-2628e158a125", src: "https://stat.defucc.me/script.js" }],

  ['meta', { name: 'author', content: metaData?.author }],
  ['meta', { name: 'keywords', content: metaData?.tags }],
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  [
    'link',
    {
      rel: 'alternate icon',
      sizes: '16x16',
      type: 'image/png',
      href: '/favicon.ico',
    },
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
  ],
  ['link', { rel: 'mask-icon', color: '#ffffff', href: '/favicon.svg' }],
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  [
    'meta',
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'white-translucent',
    },
  ],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'HandheldFriendly', content: 'True' }],
  ['meta', { name: 'MobileOptimized', content: '320' }],
  ['meta', { name: 'theme-color', content: '#0ea5e9' }],

  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: metaData?.site }],
  ['meta', { name: 'twitter:title', value: metaData?.title }],
  ['meta', { name: 'twitter:description', value: metaData.description }],
  //@ts-ignore
  ['meta', { name: 'twitter:image', content: metaData?.image }],

  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: metaData.locale }],
  ['meta', { property: 'og:site', content: metaData.site }],
  ['meta', { property: 'og:site_name', content: metaData.title }],
  ['meta', { property: 'og:title', content: metaData.title }],
  //@ts-ignore
  ['meta', { property: 'og:image', content: metaData?.image }],
  ['meta', { property: 'og:description', content: metaData.description }],
]

export default head
