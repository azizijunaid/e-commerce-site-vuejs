import axios from 'axios';
import APIROOT from '../../constants';

export const getProducts = async ({ commit }) => {
  // this.loading = true;
  commit('setLoading', true);
  const res = await axios.get(`${APIROOT}/products`);
  // this.products = await res.data;
  commit('setProducts', res.data);
  // this.loading = false;
  commit('setLoading', false);
};


export const filterProducts = async ({ commit, dispatch }, catergory) => {
  if (catergory !== 'All') {
    commit('setLoading', true);
    const res = await axios.get(`${APIROOT}/products/category/${catergory}`);
    commit('setProducts', res.data);
    commit('setLoading', false);
  } else {
    dispatch('getProducts');
  }
};
