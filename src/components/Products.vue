










<template>
  <div class="products-page">
    <h2 class="text-2xl font-bold mb-4">All Products</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div 
        v-for="product in products" 
        :key="product.id" 
        class="border rounded-lg p-4 shadow hover:shadow-md transition"
      >
        <img :src="product.image" alt="product.name" class="h-32 object-cover w-full mb-2">
        <h3 class="font-semibold">{{ product.name }}</h3>
        <p class="text-sm text-gray-500">{{ product.brand }}</p>
        <p class="text-orange-600 font-bold mt-2">$ {{ product.price }}</p>
        <button 
          @click="addToCart(product)"
          class="bg-blue-500 text-white px-3 py-1 rounded mt-2 hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
  { id: 1, name: "Samsung Smart TV", brand: "Samsung", price: 350, image: "/images/tv.jpg" },
  { id: 2, name: "HP Laptop", brand: "HP", price: 520, image: "/images/laptop.jpg" },
  { id: 3, name: "Sony Headphones", brand: "Sony", price: 85, image: "/images/headphones.jpg" },
  { id: 4, name: "Infinix Phone", brand: "Infinix", price: 180, image: "/images/phone.jpg" },
])

const addToCart = (product) => {
  alert(`Added ${product.name} to cart!`)
}
</script>

<style scoped>
.products-page {
  padding: 1.5rem;
}
</style>
