import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Products from '@/components/Products';
import About from '@/components/About';
import ProductDetails from '@/components/ProductDetails';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
    {
      path: '/products/:productId',
      name: 'productDetails',
      component: ProductDetails,
      // props: true,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});
