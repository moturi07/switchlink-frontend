<template>
  <form @submit.prevent="handleSubmit">
    <div class="row">
      <div class="col-md-6 mb-5 mx-auto">
        <div class="card mx-xl-5 mt-5">
          <div class="card-body">
                    <!--Header-->
                    <div class="form-header deep-blue-gradient rounded">
                        <h3 class="my-3"><i class="fas fa-lock"></i> Login:</h3>
                    </div>

                    <!-- Material input email -->
                    <div class="md-form font-weight-light">
                        <i class="fas fa-envelope prefix grey-text"></i>
                        <input type="email" id="materialFormEmailEx" class="form-control" v-model="email">
                        <label for="materialFormEmailEx" class="">Your email</label>
                    </div>

                    <!-- Material input password -->
                    <div class="md-form font-weight-light">
                        <i class="fas fa-lock prefix grey-text"></i>
                        <input type="password" id="materialFormPasswordEx" class="form-control"  v-model="password">
                        <label for="materialFormPasswordEx">Your password</label>
                    </div>

                    <div class="text-center mt-4">
                        <button class="btn btn-light-blue waves-effect waves-light" type="submit">Login</button>
                    </div>

          </div>
          <!--Footer
          <div class="modal-footer">
            <div class="options font-weight-light">
              <p>Not a member? <a href="#">Sign Up</a></p>
              <p>Forgot <a href="#">Password?</a></p>
            </div>
          </div>
          -->
        </div>
      </div>
    </div>
</form> 
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
            email:'',
            password:'',
        }
    },
    methods:{
        async handleSubmit(){
          try{
            const user=await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
            console.log(user);
            this.$router.push('/dashboard');
            //this.$router.replace({name:'dashboard'});
          }
          catch(err){
            console.log(err)
          }
        }
        
    }

    /*
    name:'Login',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods: {
        async handleSubmit(){
            const response=await axios.post('login', {
                email: this.email,
                password: this.password
            });
            localStorage.setItem('token',response.data.token);
        }
    }
    */
}
</script>
<style scoped>
.form-header {
    padding: 1rem;
    margin-top: -3.13rem;
    margin-bottom: 3rem;
    color: #fff;
    text-align: center;
    border-radius: .125rem;
    -webkit-box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);
    box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);
}
.deep-blue-gradient {
    background-image: linear-gradient(
120deg
, #e0c3fc 0%, #8ec5fc 100%);
}
</style>