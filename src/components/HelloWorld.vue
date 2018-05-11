<template>
  <div class="container-fluid" id="containerFluid">
    <div class="row" id="addUsers">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-6">
            <h3 id="users">Users</h3>
          </div>
          <div class="col-md-6">
            <button class="btn" id="button">ADD USER</button>
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
            <form @submit.prevent="rowPage" id="rowform">
              <label for="inputRow" id="label">Row per page</label>
              <select class="form-control form-control-sm" id="inputRow" placeholv-model="newPage">
                <option>10</option>
                <option>20</option>
              </select>
              <h6 id="count">From 1 to 10</h6>
              <i class="fas fa-arrow-right" id="arrow"></i>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fontawesome from '@fortawesome/fontawesome'

import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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

#button {
  float: right;
  color: #fff;
  background-color: #0094FF;
  border-radius: 3px;
  width: 170px;
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
}

.card-body {
  padding-top: 25px;
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

</style>
