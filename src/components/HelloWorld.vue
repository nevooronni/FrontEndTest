<template>
  <div class="container-fluid" id="containerFluid">
    <div class="row" id="addUsers">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-6">
            <h3 id="users">Users</h3>
          </div>
          <div class="col-md-6">
      
            <b-btn v-b-modal.modal1 id="button">ADD USER</b-btn>

            <!-- Modal Component -->
            <b-modal id="modal1" title="">
              <p class="my-4">Hello from modal!</p>
            </b-modal>

          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="container" id="container">
        <div class="card text-center" id="card">
          <div class="card-body">
            <form class="form-inline my-2 my-lg-0" id="form">
              <input class="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" id="search">
              <button class="btn" type="submit"><i class="fas fa-search" id="search"></i></button>
            </form>
            <table class="table table-striped">
              <thead id="tableHead">
                <tr id="tableRow">
                  <th class="th">Full name</th>
                  <th class="th" >Email address</th>
                  <th class="th">Phone number</th>
                  <th class="th">Status</th>
                </tr>
              </thead>
              <tbody>
                
                <tr v-for="user in Users" :key="user.id">
                 
                    <td id="fullname">{{ user.attributes.first_name }} {{ user.attributes.last_name }}</td>
                    <td id="email">{{ user.attributes.email }}</td>
                    <td id="mobile">{{ user.attributes.mobile_number }}</td>
                    <td id="status">{{ status }}</td>
                    <td class="icon"><font-awesome-icon :icon="eye" v-b-modal.modal="'readModal'" /></td>
                    <td class="icon"><font-awesome-icon :icon="edit" v-b-modal.modal="'editModal'" /></td>
                    <td class="icon"><font-awesome-icon :icon="del" v-b-modal.modal="'deleteModal'" /></td>
                </tr>
                
              </tbody>
              
              <!--read Componenent-->
              <b-modal id="readModal" title="">
                <p class="my-4">read Modal!</p>
              </b-modal>

              <!-- Edit Component -->
              <b-modal id="editModal" title="">
                <p class="my-4">Edit Modal!</p>
              </b-modal>

              <!--Delete Componenent-->
              <b-modal id="deleteModal" title="">
                <p class="my-4">delete Modal!</p>
              </b-modal>
              
            </table>

          </div>
          <div class="card-footer text-muted" id="cardFooter">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
            <form  @submit="addSize()" id="rowform">
              <label for="inputRow" id="label">Row per page</label>
              <select  class="form-control form-control-sm" id="inputRow" v-model="newSize">
                <option>10</option>
                <option>20</option>
              </select>
              <h6 id="count" v-if="newSize">From 1 to {{ newSize }}</h6>
              <h6 id="count" v-else>All</h6>
              <i class="fas fa-arrow-right" id="arrow"></i>
            </form>
            
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
import fontawesome from '@fortawesome/fontawesome'
import { mapState, mapGetters, mapMutations } from 'vuex'
import VuePaginate from 'vue-paginate'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faEye } from '@fortawesome/fontawesome-free-solid'
import { faPencilAlt } from '@fortawesome/fontawesome-free-solid'
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid'

Vue.use(VuePaginate)

export default {
  name: 'HelloWorld',
  data() {
    return {
      show: false,
      newSize: '',
      paginate: ['usersdata'],
      langs: ['JavaScript', 'PHP', 'HTML', 'CSS', 'Ruby', 'Python', 'Erlang'],
      
    }
  },
  components: {
    FontAwesomeIcon  
  },
  mounted() {
    this.$store.dispatch('loadUsers')
  },
  computed: {
    ...mapState([
      'users',
      'status',
    ]),
    ...mapGetters([
      'Users'
    ]),
    eye () {
      return faEye
    },
    edit () {
      return faPencilAlt
    },
    del () {
      return faTrashAlt
    }
  },
  methods: {
    ...mapMutations([
      'ADD_SIZE'
    ]),
    addSize () {
      this.ADD_SIZE(this.newSize)
      this.newSize = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";


.table {
  margin-top: 90px;
  margin-left: 0px;
  margin-right: 0px;
  width: 1442px;
}

.th {
  text-align: left;
  color: grey;
  border-top-style: none;
  border-top-color: transparent;  
}

#fullname {
  color: #09B6FB;
  text-align: left;
}

#email {
  color: #848A90;
  text-align: left;
}

#mobile {
  color: #848A90;
  text-align: left;
}

#status {
  color: #54C63C;
  text-align: left;
}
#containerFluid {
  background-color: #F7F7F7;
}

#addUsers {
  padding-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
}

#users {
  font-weight: bold;
}

#form {
  float: right;
}

#card {
  width: 1442px;
}

#container {
  padding-left: 0px;
  margin-top: 25px;
  margin-left: 47px;
  margin-bottom: 60px;
}

.card-body {
  padding-top: 25px;
  padding-left: 0px;
}

#cardFooter {
  background-color: #fff;
  padding-right: 2%;
}

#search {
  color: grey;
  font-weight: bold;
  background-color: transparent;
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: grey;
  border-radius: 0px;
}

#rowform {
  margin-top: 5px;
  display: inline;
  float: right;
}

#label {
  display: inline;
  color: grey;
  font-size: 15px;
  margin-right: 18px;
}

#inputRow {
  display: inline;
  width: 16.5%;
  margin-right: 0px;
}

#count {
  display: inline;
  color: grey;
  margin-left: 10px;
  margin-right: 45px;
}

#arrow {
  display: inline;
}

.pagination {
  float: left;
}

.page-link {
  margin-right: 4px;
  border-radius: 5px;
}

.page-link:hover {
  background-color: #0094FF;
  color: #fff;
}

.page-link:focus {
    z-index: 2;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    background-color: #0094FF;
    color: #fff;
}

#button {
  float: right;
  color: #fff;
  background-color: #0094FF;
  border-radius: 3px;
  width: 170px;
}

.modal-header {
    border-bottom: none;
  }

.icon {
  text-align: left;
}

#edit {
  text-align: left;
}

</style>
