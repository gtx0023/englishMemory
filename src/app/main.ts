import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { elementConfig } from './config';

async function start() {
  const appComp = createApp(App);
  elementConfig(appComp);
  appComp.use(store).use(router).mount('#app');
}
start();
