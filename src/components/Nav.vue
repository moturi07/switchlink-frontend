<template>
<nav class="mb-1 navbar navbar-expand-lg navbar-dark default-color">
      <a class="navbar-brand" href="#">Atm Simulation</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent-3">
        <ul class="navbar-nav mr-auto" v-if="loggedIn">
          <li class="nav-item active">
            <a class="nav-link waves-effect waves-light" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link waves-effect waves-light" href="dashboard">Dashboard</a>
          </li>
        </ul>
        <ul class="navbar-nav mr-auto" v-if="!loggedIn">
			<li class="nav-item active">
            <a class="nav-link waves-effect waves-light" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link waves-effect waves-light" href="login">Login</a>
          </li>
		</ul>
		<ul class="navbar-nav ml-auto nav-flex-icons" v-if="loggedIn">
          <!--<li class="nav-item">
            <a class="nav-link waves-effect waves-light"><i class="fab fa-twitter"></i></a>
          </li>-->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user"> {{name}}</i>
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-unique" aria-labelledby="navbarDropdownMenuLink">				
              <a class="dropdown-item waves-effect waves-light" href="dashboard">Dashboard</a>
              <a class="dropdown-item waves-effect waves-light" @click="signout">Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
</template>
<script>
//import axios from 'axios'
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';

export default {
	data(){
		return{
			uid: null,
			name: null,
			loggedIn: false
		}
	},
	created(){
		firebase.auth().onAuthStateChanged(user=>{
			this.loggedIn=!!user;
		});
		var user=firebase.auth().currentUser;
		if(user !=null){
			this.uid=user.uid;
			this.name=user.email;	
		}	
	},
	
	methods: {
		async signout(){
			try{
			await firebase.auth().signOut();
			this.$router.push('/login');
			}catch(err){
				console.log(err);
			}
		}
	}
}
</script>
