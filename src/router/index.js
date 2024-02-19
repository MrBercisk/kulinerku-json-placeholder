import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Foods from '../views/Foods.vue'
import FoodDetail from '../views/FoodDetail.vue'
import Keranjang from '../views/Keranjang.vue'
import PesananSukses from '../views/PesananSukses.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/foods',
      name: 'Foods',
      component: Foods
    },
    {
      path: '/foods/:id',
      name: 'FoodDetail',
      component: FoodDetail
    },
    {
      path: '/keranjang/',
      name: 'Keranjang',
      component: Keranjang
    },
    {
      path: '/pesanan-sukses/',
      name: 'PesananSukses',
      component: PesananSukses
    },
  ]
});

export default router;
