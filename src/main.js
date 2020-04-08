import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/app.css'

import StoryblokVue from 'storyblok-vue'
import Page from './components/Page'
import Teaser from '@/components/Teaser'
import Grid from '@/components/Grid'
import Feature from '@/components/Feature'
import CapButton from '@/components/CapButton'

Vue.component('page', Page)
Vue.component('teaser', Teaser)
Vue.component('grid', Grid)
Vue.component('feature', Feature)
Vue.component('capbutton', CapButton)

Vue.use(StoryblokVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
