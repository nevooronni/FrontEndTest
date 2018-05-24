<template>
  <div class="app" id="containerFluid">
    <div class="row" id="addUsers">
      <div class="col-md-12 col-sm-12 col-xs-12" >
        <div class="row">

          <div class="col-md-6 col-sm-12 col-xs-12">
            <h3 id="users">Users</h3>
          </div>

          <div class="col-md-6 col-sm-12 col-xs-12">
            <b-btn id="button" class="btn"  @click="showModal">ADD USER</b-btn>
            <AddUser v-show="isModalVisible" @close="closeModal"/>
          </div>
        </div>
      </div>
    </div>
    <div class="row" id="tabletable">


      <div class="card text-center w-100" id="card">
        <div class="card-body">
          <form class="form-inline my-2 my-lg-0" id="form">
            <input class="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" id="search">
            <font-awesome-icon :icon="search" id="searchbutton"/>
          </form>

          <div class="table-responsive">
          <table class="table table-striped">
            <thead id="tableHead">
              <tr id="tableRow">
                <th class="th">Full name</th>
                <th class="th" >Email address</th>
                <th class="th">Phone number</th>
                <th class="th">Status</th>
              </tr>
            </thead>
            <tbody v-if="Users">
                
              <tr v-for="user in Users.slice(0,newSize)" :key="user.id">
                <td id="fullname">{{ user.attributes.first_name }} {{ user.attributes.last_name }}</td>
                <td id="email">{{ user.attributes.email }}</td>
                <td id="mobile">{{ user.attributes.mobile_number }}</td>
                <td id="status">{{ status }}</td>
                <td class="icon"><font-awesome-icon :icon="eye"  @click="showModal2"/></td>

                <!--view user modal-->
                <ViewUser v-show="isModalVisible2" @close="closeModal2"/>     
                <td class="icon"><font-awesome-icon :icon="edit" @click="showModal3"/></td>
                <td class="icon"><font-awesome-icon :icon="del" @click="showModal4"/></td>
              </tr>
                
            </tbody>
              
          </table>
          </div>
            
        </div>
        <div class="card-footer text-muted" id="cardFooter">
          <b-pagination v-on:input="input" size="md" :total-rows="100" v-model=currentPage :per-page=parseInt(newSize) hide-ellipsis hide-goto-end-buttons>
          </b-pagination>

          <form  @submit="addSize()" id="rowform">
            <label for="inputRow" id="label">Row per page</label>
            <select  class="form-control form-control-sm" id="inputRow" v-model="newSize">
              <option>10</option>
              <option>20</option>
            </select>
            <h6 id="count" v-if="newSize">From 1 to {{ newSize }}</h6>
            <h6 id="count" v-else>All</h6>
            <font-awesome-icon :icon="angleLeft"/>
          </form>
            
        </div>
      </div>


      
    </div>
    
  <!-- <h6>Default</h6>
  <p>currentPage: {{currentPage}}</p>
  <p>size: {{ newSize }}</p> -->
    
  </div>
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
import fontawesome from '@fortawesome/fontawesome'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import VuePaginate from 'vue-paginate'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faEye } from '@fortawesome/fontawesome-free-solid'
import { faPencilAlt } from '@fortawesome/fontawesome-free-solid'
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import { faAngleLeft } from '@fortawesome/fontawesome-free-solid'
import AddUser from '@/components/AddUser'
import ViewUser from '@/components/ViewUser'
import EditUser from '@/components/EditUser'
import DelUser from '@/components/DelUser'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'HelloWorld',
  components: {
    FontAwesomeIcon,
    AddUser,
    ViewUser,
    EditUser,
    DelUser
  },
  data() {
    return {
      currentPage: 1,
      isModalVisible: false,
      isModalVisible2: false,
      isModalVisible3: false,
      isModalVisible4: false,
      newSize: 10
    }
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
    },
    search () {
      return faSearch
    },
    angleLeft () {
      return faAngleLeft
    }
  },
  methods: {
    ...mapMutations([
      'GET_USERS'
    ]),
    ...mapActions([
      'loadUsers'
    ]),
    addSize () {
      this.ADD_SIZE(this.newSize)
      this.newSize = ''
    },
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    showModal2 () {
      this.isModalVisible2 = true

    },
    closeModal2 () {
      this.isModalVisible2 = false
    },
    showModal3 () {
      this.isModalVisible3 = true
    },
    closeModal3 () {
      this.isModalVisible3 = false
    },
    showModal4 () {
      this.isModalVisible4 = true
    },
    closeModal4 () {
      this.isModalVisible4 = false
    },
    input () {
      this.loadUsers()
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
  height: auto;
  width: auto;
}

#addUsers {
  padding-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
  margin-right: 0px;
  margin-left: 0px;
}

#tabletable {
  margin-right: 0px;
  margin-left: 0px;  
  padding-right: 42px;
  padding-left: 42px;
}

#users {
  font-weight: bold;
}

#form {
  float: right;
  margin-right: 16px;
}

#card {
  padding-left: 0px;
  margin-top: 25px;
  margin-left: 0px;
  padding-right: 0px;
  margin-bottom: 60px;
}

.card-body {
  padding-top: 25px;
  padding-left: 0px;
  padding-right: 0px;
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

.icon:hover {
  cursor: pointer;
}

#edit {
  text-align: left;
}

#searchbutton {
  color: grey;
  margin-left: -26px;
}

</style>
