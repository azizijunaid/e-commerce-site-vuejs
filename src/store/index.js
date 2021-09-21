// import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import { getProducts, filterProducts } from './actions/productsActions';
import getCategories from './actions/categoriesActions';
import { addProductToCart, removeProductFromCarts } from './actions/cartActions';
import ProductsMutations from './mutations/productsMutations';
import ProductMutations from './mutations/productMutations';
import CategoriesMutations from './mutations/categoriesMutations';
import CartMutations from './mutations/cartMutations';
import getProductByID from './actions/productActions';
import { total } from '../Utils';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    // count: 0,
    loading: false,
    products: [],
    product: {},
    categories: [],
    carts: [],
  },
  mutations: {
    ...ProductsMutations,
    ...ProductMutations,
    ...CategoriesMutations,
    ...CartMutations,
  },
  getters: {
    // categories: state => category => (category ? state.products
    //   .filter(product => product.category === category) : state.products),
    total,
  },
  actions: {
    getProducts,
    getProductByID,
    getCategories,
    removeProductFromCarts,
    addProductToCart,
    filterProducts,
  },
});
