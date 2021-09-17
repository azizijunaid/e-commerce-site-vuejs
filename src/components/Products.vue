<template>
  <div>
    <a-spin v-if="loading" size="large" />
    <div v-if="!loading" style="background-color: #ececec; padding: 20px;">
      <a-row type="flex" justify="space-around">
        <a-col :span="6" v-for="product in products" :key="product.id">
          <router-link
            :to="{ name: 'productDetails', params: { productId: product.id } }"
          >
            <a-card hoverable style="width: 300px; padding: 20px; margin: 15px" class="grow">
              <img
                slot="cover"
                alt="example"
                :src="product.image"
                height="300px"
              />
              <a-card-meta :title="product.title">
                <template :slot="product.description">
                  {{ product.description }}
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
export default {
  mounted() {
    this.getProducts();
  },
  data() {
    return {
      products: [],
      loading: false
    };
  },
  methods: {
    async getProducts() {
      // eslint-disable-next-line no-undef
      this.loading = true;
      const res = await axios.get("https://fakestoreapi.com/products");
      this.products = await res.data;
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.ant-spin-spinning {
  position: absolute;
  top: 20%;
  left: 50%;
}

.grow { transition: all .2s ease-in-out; }
.grow:hover { transform: scale(1.1); }
</style>
