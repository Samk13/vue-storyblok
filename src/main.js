import Vue from 'vue'
import App from './App.vue'
import router from './router'
import StoryblokVue from 'storyblok-vue'
import Page from './components/Page'
import Teaser from '@/components/Teaser'

Vue.component('page', Page)
Vue.component('teaser', Teaser)

Vue.use(StoryblokVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
