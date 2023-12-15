import { supabase } from './App.vue';

export default (await import('vue')).defineComponent({
data() {
return {
products: [], // Obtido do Supabase
cart: [],
};
},
created() {
// Obter dados da tabela 'products'
this.fetchProducts();
},
methods: {
async fetchProducts() {
const { data, error } = await supabase.from('products').select('*');
if (error) {
console.error('Erro ao obter produtos:', error.message);
} else {
this.products = data;
}
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
},
removeFromCart(item) {
const index = this.cart.findIndex((cartItem) => cartItem.id === item.id);

if (index !== -1) {
const removedItem = this.cart.splice(index, 1)[0];
// Lógica adicional se necessário
}
},
checkout() {
// Salvar dados do carrinho no Supabase
// Lógica adicional de checkout
},
},
components: {
ProductList,
ShoppingCart,
},
}
});
