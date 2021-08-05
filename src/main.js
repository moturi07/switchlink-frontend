import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './axios.js'
import Vuex from 'vuex'
// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';

Vue.use(Vuex);
Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: "AIzaSyAa-3zcdaBM7rx6KTwisUZeKEQQHZ4uKq0",
  authDomain: "atm-project-fffd2.firebaseapp.com",
  projectId: "atm-project-fffd2",
  storageBucket: "atm-project-fffd2.appspot.com",
  messagingSenderId: "307547707197",
  appId: "1:307547707197:web:37142538e76bcfd18f1754"
};

firebase.initializeApp(firebaseConfig);
let app;
firebase.auth().onAuthStateChanged(user=>{
  console.log(user);
  if(!app){
    new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
})

