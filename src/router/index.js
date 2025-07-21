// import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../pages/Home.vue'
// import Products from '../pages/Products.vue'
// import Categories from '../pages/Categories.vue'
// import Cart from '../pages/Cart.vue'
// import Checkout from '../pages/Checkout.vue'
// import Contact from '../pages/Contact.vue'

// const routes = [
//   { path: '/', component: Home },
//   { path: '/products', component: Products },
//   { path: '/categories', component: Categories },
//   { path: '/cart', component: Cart },
//   { path: '/checkout', component: Checkout },
//   { path: '/contact', component: Contact }
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

// export default router
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import Categories from '../pages/Categories.vue'
import Cart from '../pages/Cart.vue'
import Checkout from '../pages/Checkout.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/categories', component: Categories },
  { path: '/cart', component: Cart },
  { path: '/checkout', component: Checkout },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
