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
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn" type="submit"><i class="fa fa-search"></i></button>
            </form>
          </div>
          <div class="card-footer text-muted" id="cardFooter">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
}

</style>
