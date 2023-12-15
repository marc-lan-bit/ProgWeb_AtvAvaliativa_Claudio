<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-6">
        <product-list />
      </div>
      <div class="col-md-6">
        <shopping-cart />
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fltkvtsfwztntcgyvhzq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdGt2dHNmd3p0bnRjZ3l2aHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0OTUyMjYsImV4cCI6MjAxODA3MTIyNn0.Al-Lo7P6Biq0MPf8uB16KIXwPCd6FpjuNErEzIpSQ84';

export const supabase = createClient(supabaseUrl, supabaseKey);

export default {
  data() {
    return {
      products: [], // Obtido do Supabase
      cart: [],
      total: 0, // Adicione a declaração da variável total
    };
  },
  created() {
    // Obter dados da tabela 'products'
    this.fetchProducts();
  },
  methods: {
    addToCart(product) {
      const existingItem = this.cart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.subtotal = existingItem.quantity * existingItem.price;
      } else {
        this.cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          subtotal: product.price,
        });
      }

      this.calculateTotal();
    },
    
    // Adiciona este novo método para calcular o total
    calculateTotal() {
      this.total = this.cart.reduce((acc, item) => acc + item.subtotal, 0);
    },
  
    async fetchProducts() {
      try {
        const { data, error } = await supabase.from('products').select('*');
        
        if (error) {
          console.error('Erro ao obter produtos:', error.message);
        } else {
          this.products = data;
        }
      } catch (error) {
        console.error('Erro ao obter produtos:', error.message);
      }
    },
    removeFromCart(item) {
      const index = this.cart.findIndex((cartItem) => cartItem.id === item.id);

      if (index !== -1) {
        const removedItem = this.cart.splice(index, 1)[0];
        console.log(`Item removido: ${removedItem}`);
        // Lógica adicional se necessário
        this.calculateTotal();
      }
    },
  
    async checkout() {
      try {
        // Prepare os dados para a tabela 'cart' no Supabase
        const cartData = this.cart.map(item => ({
          product_id: item.id,
          quantity: item.quantity,
          subtotal: item.subtotal,
        }));

        // Insira os dados na tabela 'cart' do Supabase
        const { data, error } = await supabase.from('cart').upsert(cartData, { returning: 'minimal' });

        if (error) {
          console.error('Erro ao salvar dados do carrinho:', error.message);
        } else {
          console.log('Dados do carrinho salvos com sucesso:', data);
          // Lógica adicional após salvar os dados do carrinho
        }
      } catch (error) {
        console.error('Erro ao salvar dados do carrinho:', error.message);
      }
    },
  },
  components: {
    ProductList,
    ShoppingCart,
  },
};
</script>

<style>
/* Estilos globais aqui, se necessário */

/* Estilos específicos para a página */
.container {
  margin-top: 20px;
}

/* Estilos responsivos para ajustar o layout em telas menores */
@media (max-width: 767px) {
  .col-md-6 {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>