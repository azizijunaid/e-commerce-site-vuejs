<template>
  <div style="padding:30px">
    <a-skeleton v-if="loading" active />
    <a-card
      :title="details.title"
      :bordered="false"
      style="width: 100%"
      v-if="!loading"
    >
      <a-row type="flex" justify="space-between">
        <a-col :span="8">
          <img :src="details.image" alt="" width="300px" />
        </a-col>
        <a-col :span="16">
          <p>
            <strong>{{ details.category }}</strong>
          </p>
          <p>
            {{ details.description }}
          </p>
          <p>
            <strong> Prince: {{ details.price }} $ </strong>
          </p>

          <p>
            <strong
              >Rating: <a-rate v-model="details.rating.rate" disabled
            /></strong>
          </p>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: null,
      loading: false
    };
  },
  async created() {
    this.loading = true;
    const res = await axios.get(
      `https://fakestoreapi.com/products/${this.$route.params.productId}`
    );

    this.details = res.data;
    this.loading = false;
  }
};
</script>

<style scoped></style>
