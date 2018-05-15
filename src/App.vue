<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">FIX</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Stakeholder</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Users</a>
          </li>
        </ul>
        <span class="navbar-text">
         
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <font-awesome-icon :icon="bell" id="color"/> <img src="./assets/hannibal.jpg" class="img-responsive" id="profilePic">Francsis Kimani    
          </a>
        </span>
      </div>
    </nav>
  
    <router-view/>
    
  </div>
</template>

<script>
  import Vue from 'vue'
  import BootstrapVue from 'bootstrap-vue'
  import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import { faBell } from '@fortawesome/fontawesome-free-solid'
  

  Vue.use(BootstrapVue)

  export default {
    computed: {
      bell () {
        return faBell
      }
    },
    components: {
      FontAwesomeIcon
    }
  }
 
</script>

<style>

#color {
  color: #fff;
  margin-right: 15px;
  font-size: 30px;
  margin-bottom: -7px;
}

.bg-light {
  background-color: #00A5FB!important;
}

.navbar-light .navbar-brand {
    color: #fff;
    font-weight: bold;
}

.navbar-light .navbar-brand:hover {
    color: #fff;
    font-weight: bold;
}

.navbar-light .navbar-nav .nav-link {
  color: #fff;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #fff;
  font-weight: bold;
}

.navbar-light .navbar-text a {
    color: #fff;
}

.navbar-light .navbar-text a:hover {
    color: #fff;
    font-weight: bold;
}

.navbar-nav {
  margin-left: 40%;
}

.navbar-light .navbar-nav .nav-link.active {
  color: #fff;
}

.nav-item:hover {
  border-bottom-width: 4px;
  border-bottom-color: #fff;
  border-bottom-style: solid;
  margin-bottom: -20px;
}

#profilePic {
  height: 35px;
  width: 45px;
  border-radius: 3px;
  margin-right: 8px;
  margin-left: 25px;
}

</style>
