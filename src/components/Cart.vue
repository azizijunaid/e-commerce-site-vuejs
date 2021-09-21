<template>
  <div>
    <ul class="checkout-list left-20" v-if="carts.length">
      <li class="checkout-products" v-for="(cart, index) in carts" :key="cart.id">
        <img :src="cart.image" alt="" />
        <h3 class="product-name">{{ cart.title }}</h3>
        <span class="product-price">{{ cart.price }}</span>
        <a-button type="primary" style="place-self: center;"
        icon="close-circle" size="small"  @click="removeToCart(index)" />
      </li>
    </ul>

    <div class="total-product-price left-20" v-if="total > 0">
      <h2>Total</h2>
      <h3>{{ total }}</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  methods: {
    removeToCart(index) {
      this.$store.dispatch('removeProductFromCarts', index);
    },
  },
  computed: {
    ...mapState(['carts']),
    ...mapGetters(['total']),
  },
};
</script>

<style scoped>
.checkout-box {
  width: 100%;
  max-width: 900px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 50px auto;
  box-sizing: border-box;
  padding: 1em;
}

.checkout-products {
  display: grid;
  grid-template-columns: 1fr 10fr 2fr 0.5fr;
  background-color: #fff;
  box-shadow: 0 0 10px rgb(73 74 78 / 10%);
  border-radius: 5px;
  list-style: none;
  box-sizing: border-box;
  padding: 0.8em;
  margin: 1em 0;
}

.total-product-price {
  display: grid;
  /* grid-column: span 2; */
  width: 47%;
  margin-left: 40px;
  grid-template-columns: 80% 20%;
  background-color: #fff;
  box-shadow: 0 0 10px rgb(73 74 78 / 10%);
  border-radius: 5px;
  list-style: none;
  box-sizing: border-box;
  padding: 0.8em;
  /* margin: 1em 0; */
}
.checkout-list,
.checkout-products,
img {
  grid-column: 1/2;
  width: 70%;
  place-self: center;
}

h3 {
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  place-self: center;
}
.product-price {
  font-size: 1.2em;
  font-weight: 700;
  place-self: center;
}

/* .product-remove {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 0;
  background-color: #e0e0e0;
  color: #fff;
  cursor: pointer;
  place-self: center;
} */
h2 {
  place-self: center;
}

.left-20 {
  position: relative;
  left: 20%;
}
</style>
