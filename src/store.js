import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    GET_USERS (state, {list}) {
      state.users = list;
    }
  },
  getters: {

  },
  actions: {
    getusers ({ commit }) {
      axios.get('https://dry-harbor-88607.herokuapp.com/api/users?page[1]=${num}&page[10]=${num}').then((response) => {
        commit('GET_USERS', { list: response.data })
        console.log(list)
      }, (err) => {
        console.log(error)
      })
    }
  }
})
