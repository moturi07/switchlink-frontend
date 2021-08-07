import axios from 'axios'

axios.defaults.baseURL='https://moturi-atm.somee.com/api/';

axios.defaults.headers.common['Authorization']='Bearer'+localStorage.getItem('token');