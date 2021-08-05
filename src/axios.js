import axios from 'axios'

axios.defaults.baseURL='https://localhost:44325/api/';

axios.defaults.headers.common['Authorization']='Bearer'+localStorage.getItem('token');