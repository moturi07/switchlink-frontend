<template>
<div>
<div class="text-center p-5 m-auto" v-if="loggedIn">
    <h2>Welcome Back {{user.email}}</h2>
    <a href="dashboard" class="btn p-3 btn-primary">View Dashboard</a>
</div>
<div class="text-center p-5 m-auto" v-if="!loggedIn">
    <h3>You are not logged in</h3>
    <p><a href="login" class="btn p-3 btn-primary">Login </a> to continue</p>
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
