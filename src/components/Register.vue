<template>
<form @submit.prevent="handleSubmit">
<h2>Register</h2>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" v-model="password" id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" v-model="password_confirm" id="exampleInputPassword1">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> 
</template>

<script>
//import axios from 'axios'
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';

export default{
  data(){
        return{
            email:'',
            password:'',
            password_confirm:''
        }
    },
    methods:{
        async handleSubmit(){
          try{
            const user=await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
            console.log(user);
            this.$router.push('/dashboard');
            //this.$router.replace({name:'dashboard'});
          }
          catch(err){
            console.log(err)
          }
        }
        
    }

    /*name: 'Register',
    data(){
        return{
            email:'',
            password:'',
            password_confirm:''
        }
    },
    methods:{
        async handleSubmit(){
            await axios.post('register',{
                    email: this.email,
                    password: this.password,
                    password_confirm:this.password_confirm                
            });
            //console.log(response);
            this.$router.push('/login');
        }
        
    }
    */
}
</script>
