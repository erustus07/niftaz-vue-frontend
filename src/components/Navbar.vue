<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/categories">Categories / Brands</router-link>
    <router-link to="/cart">Cart</router-link>
    <router-link to="/checkout">Checkout</router-link>
    <router-link to="/contact">Contact / About</router-link>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  gap: 20px;
  background-color: #0077cc;
  padding: 10px;
}
a {
  color: white;
  text-decoration: none;
}
a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
