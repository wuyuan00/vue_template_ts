export default [
  {
    path: '/',
    home: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    home: 'about',
    component: () => import('@/views/About.vue')
  }
]
