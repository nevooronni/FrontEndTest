import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    users: [],
    per_page: 10,
    page_number: 3,
    status: 'active',
    name: "Kellen Larson"
  },
  getters: {
    Users: state => {
      return state.users.data
    }
  },
  actions: {
    loadUsers ({ commit }, state, name) {
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
    SET_USERS (state, users)  {
      state.users = users
    },
    ADD_SIZE (state, newSize) {
      state.sizes.push(newSize)
    }
  }
})
