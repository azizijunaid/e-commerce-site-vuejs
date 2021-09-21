<template>
  <div>
    <a-spin v-if="loading" size="large" />
    <div v-if="!loading" style="background-color: #ececec; padding: 20px">
      <a-row type="flex" justify="space-around">
        <a-col :span="6" v-for="product in products" :key="product.id">
          <router-link
            :to="{ name: 'productDetails', params: { productId: product.id } }"
          >
            <a-card
              hoverable
              style="width: 300px; padding: 20px; margin: 15px"
              class="grow"
            >
              <img
                slot="cover"
                alt="example"
                :src="product.image"
                height="300px"
              />
              <a-card-meta :title="product.title">
                <template slot="description">
                  {{
                    product.description.length > 100
                      ? product.description.slice(0, 100) + " ..."
                      : product.description
                  }}
                  <!-- <br>
                  <div style="display: flex; justify-content: space-around; margin-top: 25px">
                    <a-button type="primary" @click="addToCart(product)">
                    Add to Cart
                  </a-button>
                  </div> -->
                </template>
              </a-card-meta>
            </a-card>
          </router-link>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import { mapState } from 'vuex';

export default {
  mounted() {
    this.getProducts();
  },
  data() {
    return {
      // products: [],
      // loading: false,
    };
  },
  methods: {
    getProducts() {
      // eslint-disable-next-line no-undef
      // this.loading = true;
      // const res = await axios.get('https://fakestoreapi.com/products');
      // this.products = await res.data;
      // this.loading = false;
      this.$store.dispatch('getProducts');
    },
  },
  computed: {
    // ...mapGetters(['products', 'loading']),
    ...mapState(['loading', 'products']),
    // ...mapGetters(['categories']),
  },
};
</script>

<style scoped>
.ant-spin-spinning {
  position: absolute;
  top: 20%;
  left: 50%;
}

.grow {
  transition: all 0.2s ease-in-out;
}
.grow:hover {
  transform: scale(1.02);
}
</style>
