import Vue from 'vue'
import Vuex from 'vuex'
import blogStore from './blog/blog.modules'
Vue.use(Vuex)

const Store = new Vuex.Store({
  modules: {blogStore}
})

export default Store