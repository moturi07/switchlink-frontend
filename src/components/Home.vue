<template>
<div>
	<h2 class="mt-5 p-2 text-center">Welcome to the Frontend part of the project</h2>
<div class="text-center p-5 m-auto" v-if="loggedIn">
    <h4>Welcome Back {{user.email}}</h4>
    <a href="dashboard" class="btn p-3 btn-primary">View Dashboard</a>
</div>
<div class="text-center p-5 m-auto" v-if="!loggedIn">
    <h4>You are not logged in</h4>
    <p><a href="login" class="text-dark p-3">Login </a> to continue</p>
</div>
</div>
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
			loggedIn: false,
            user: null,
		}
	},
	created(){
		firebase.auth().onAuthStateChanged(user=>{
			this.loggedIn=!!user;
		});
		var user=firebase.auth().currentUser;
        this.user=user;
	}
}
</script>
