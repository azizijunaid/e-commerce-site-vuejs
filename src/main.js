import 'ant-design-vue/dist/antd.css';
import {
  Button,
  Layout,
  Menu,
  Card,
  Row,
  Col,
  Rate,
  Skeleton,
  Spin,
  Input,
} from 'ant-design-vue';
import Vue from 'vue';
// import App from './App';

import HomePage from './components/HomePage';
import router from './router';
import store from './store/index';

const { Header, Footer, Sider, Content } = Layout;

const Elememts = [
  Button,
  Layout,
  Header,
  Sider,
  Content,
  Footer,
  Menu,
  Card,
  Row,
  Col,
  Rate,
  Skeleton,
  Spin,
  Input,
];

Elememts.forEach(x => Vue.use(x));
// Vue.use(Elememts);
// Vue.use(Layout);
// Vue.use(Header);
// Vue.use(Sider);
// Vue.use(Content);
// Vue.use(Footer);
// Vue.use(Menu);
// Vue.use(Card);
// Vue.use(Row);
// Vue.use(Col);
// Vue.use(Rate);
// Vue.use(Skeleton);
// Vue.use(Spin);
// Vue.use(Input);

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(HomePage),
});
