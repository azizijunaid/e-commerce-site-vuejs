import axios from 'axios';
import APIROOT from '../../constants';

export default async ({ commit }, productId) => {
//   this.loading = true;
  commit('setLoading', true);
  const res = await axios.get(
    `${APIROOT}/products/${productId}`,
  );

  commit('setProduct', res.data);

  //   this.details = res.data;
  //   this.loading = false;
  commit('setLoading', false);
};
