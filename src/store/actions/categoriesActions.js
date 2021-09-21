import axios from 'axios';
import APIROOT from '../../constants';

const getCategories = async ({ commit }) => {
  //   this.loading = true;
  commit('setLoading', true);
  const res = await axios.get(
    `${APIROOT}/products/categories`,
  );

  commit('setCategories', ['All', ...res.data]);

  //   this.details = res.data;
  //   this.loading = false;
  commit('setLoading', false);
};

export default getCategories;
