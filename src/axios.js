import axios from 'axios'

axios.defaults.baseURL='http://moturi-001-site1.ftempurl.com/api/';

axios.defaults.headers.common['Authorization']='Bearer'+localStorage.getItem('token');