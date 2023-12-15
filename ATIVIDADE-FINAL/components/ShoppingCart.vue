<template>
    <div>
      <h2 class="mt-4">Carrinho de Compras</h2>
      <ul class="list-group">
        <li v-for="item in cart" :key="item.product.id" class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            {{ item.product.name }} - R$ {{ item.product.price }} - Qtd: {{ item.quantity }}
          </div>
          <button @click="removeFromCart(item)" class="btn btn-danger">Remover do Carrinho</button>
        </li>
      </ul>
      <button @click="checkout" class="btn btn-success mt-3">Fechar Carrinho</button>
    </div>
  </template>
  
  <script>
    import { supabase } from '@/services/supabaseService.js';
  
  export default {
    data() {
      return {
        cart: [],
      };
    },
    methods: {
      removeFromCart(item) {
        const index = this.cart.indexOf(item);
        if (index !== -1) {
          this.cart.splice(index, 1);
        }
      },
      checkout() {
        // Implementar a lógica para salvar o carrinho no Supabase
        const cartData = this.cart.map(item => ({ product_id: item.product.id, quantity: item.quantity }));
  
        // Substitua 'nome-da-tabela' pelo nome real da tabela no seu banco de dados Supabase
        supabase.from('products').upsert(cartData, { onConflict: ['product_id'] }).then(response => {
          if (response.error) {
            console.error(response.error);
          } else {
            // Lógica adicional após fechar o carrinho, se necessário
            console.log('Carrinho fechado com sucesso!');
            this.cart = []; // Limpar carrinho após fechar
          }
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Nenhum estilo específico necessário aqui, pois usamos as classes do Bootstrap */
  </style>