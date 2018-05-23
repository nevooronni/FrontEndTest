import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    users: [],
    status: 'active'
  },
  getters: {
    Users: state => {
      return state.users.data
    }
  },
  actions: {
    loadUsers ({ commit }) {
      axios.get('https://dry-harbor-88607.herokuapp.com/api/users?page[number]=${num}&page[size]=${num}').then(r => r.data).then(users=> {
        commit('SET_USERS', users)
        console.log(users)
      })
      .catch((error) => {
        console.log*(error)
      })
    }
     
  },
  mutations: {
    SET_USERS (state, users) {
      state.users = users
    }
  }
})
