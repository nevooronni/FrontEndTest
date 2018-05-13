import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    users: [],
    number: 1,
    size: 10,
    status: 'active'
  },
  getters: {
    Users: state => {
      return state.users.data
    }
  },
  actions: {
    loadUsers ({ commit }, number, size) {
      axios.get('https://dry-harbor-88607.herokuapp.com/api/users?page[number]=${number}&page[size]=${size}').then(r => r.data).then(users => {
        commit('SET_USERS', users)
        console.log(users)
      })
    }
  },
  mutations: {
    SET_USERS (state, users)  {
      state.users = users
    },
    ROW_PAGE (state, size) {
      state.size = size
    }
  }
})
