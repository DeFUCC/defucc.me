const isProd = process.env.NODE_ENV === 'production'

const site = isProd ? 'https://defucc.me' : 'http://localhost:3000'

export const metaData = {
  title: 'DeFUCC',
  description:
    'Development Foundation for Universalization, Cooperation and Creativity',
  site,
  locale: 'en',
  icon: '/logo/gray.svg',
  author: 'Davay',
  tags:
    'Development, Foundation, for, Universalization, Cooperation, and, Creativity',
}
