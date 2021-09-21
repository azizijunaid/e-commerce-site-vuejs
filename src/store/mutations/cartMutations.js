export default {
  removeToCart(state, payload) {
    state.carts.splice(payload, 1);
  },
  addToCart(state, payload) {
    state.carts.push(payload);
  },
};
