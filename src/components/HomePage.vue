<template>
  <a-layout id="components-layout-demo-top-side">
    <a-layout-header class="header">
      <div class="myLogo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['1']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          <router-link to="/products">Products</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/carts">My Cart</router-link>
        </a-menu-item>
        <!-- <a-menu-item key="3">
          nav 3
        </a-menu-item> -->
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <!-- <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb> -->
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff"
        v-if="currentRouteName !=='productDetails' && currentRouteName !== 'Cart'" >
          <a-menu
            mode="inline"
            :default-selected-keys="['1']"
            :default-open-keys="['sub1']"
            style="height: 100%"
          >
            <a-sub-menu key="sub1">
              <span slot="title"><a-icon type="user" />Categories</span>
              <a-menu-item
                :key="category"
                v-for="category in categories"
                @click="filterCategories(category)"
              >
                {{ category.toUpperCase() }}
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <transition>
            <router-view :key="$route.path"></router-view>
          </transition>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      // categories: null,
    };
  },
  async created() {
    // eslint-disable-next-line no-undef
    // const res = await axios.get('https://fakestoreapi.com/products/categories');
    // this.categories = res.data;
    this.$store.dispatch('getCategories');
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    ...mapState(['categories']),
  },
  methods: {
    filterCategories(category) {
      this.$store.dispatch('filterProducts', category);
    },
  },
};
</script>

<style>
#components-layout-demo-top-side .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}

.myLogo{
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/2/26/Daraz_logo_color.png');
}
</style>
