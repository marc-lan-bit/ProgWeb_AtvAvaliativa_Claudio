<template>
    <div>
      <h2 class="mt-4">Lista de Produtos</h2>
      <ul class="list-group">
        <li v-for="product in products" :key="product.id" class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            {{ product.name }} - R$ {{ product.price }}
          </div>
          <button @click="addToCart(product)" class="btn btn-primary">Adicionar ao Carrinho</button>
        </li>
      </ul>
    </div>
  </template>
  
  
  <script>
    import { supabase } from '@/services/supabaseService.js';
  
  export default {
    data() {
      return {
        products: [],
      };
    },
    mounted() {
      this.fetchProducts();
    },
    methods: {
      async fetchProducts() {
        const { data, error } = await supabase.from('products').select('id, name, price');
        if (error) {
          console.error(error);
        } else {
          this.products = data;
        }
      },
      addToCart(product) {
      const existingCartItem = this.cart.find(item => item.product.id === product.id);

      if (existingCartItem) {
        // Se o produto já estiver no carrinho, aumente a quantidade
        existingCartItem.quantity++;
      } else {
        // Se o produto não estiver no carrinho, adicione um novo item
        this.cart.push({ product, quantity: 1 });
      }
    },
  },
};
</script>

<style scoped>
/* Nenhum estilo específico necessário aqui, pois usamos as classes do Bootstrap */
</style>