<template>
  <div style="padding:30px">
    <a-skeleton v-if="loading" active />
    <a-card
      :title="product.title"
      :bordered="false"
      style="width: 100%"
      v-if="!loading"
    >
      <a-row type="flex" justify="space-between">
        <a-col :span="8">
          <img :src="product.image" alt="" width="300px" />
        </a-col>
        <a-col :span="16">
          <p>
            <strong>{{ product.category }}</strong>
          </p>
          <p>
            {{ product.description }}
          </p>
          <p>
            <strong> Prince: {{ product.price }} $ </strong>
          </p>

          <p>
            <strong
              >Rating: <a-rate v-model="product.rating.rate" disabled
            /></strong>
          </p>

          <a-button type="primary" @click="addToCart()">
            Add to Cart
          </a-button>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      // details: null,
      // loading: false,
    };
  },
  created() {
    // this.loading = true;
    // const res = await axios.get(
    //   `https://fakestoreapi.com/products/${this.$route.params.productId}`,
    // );

    // this.details = res.data;
    // this.loading = false;

    this.$store.dispatch('getProductByID', this.$route.params.productId);
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addProductToCart', this.product);
    },
  },
  computed: {
    // ...mapGetters(['products', 'loading']),
    ...mapState(['loading', 'product']),
  },
};
</script>

<style scoped></style>
