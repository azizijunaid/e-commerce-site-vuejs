export const addProductToCart = ({ commit }, payload) => {
  commit('addToCart', payload);
};

export const removeProductFromCarts = ({ commit }, payload) => {
  commit('removeToCart', payload);
};
