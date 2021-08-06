<template>
    <div class="home">
        <p v-if="loading" class="post--empty">Loading....</p>
        <div class="" v-else>
            <div v-for="account in accounts" :key="account.id">
                <div class="col-12 card">
                    <div class="twt-feed blue-bg">
                    <div class="media">
                    <img class="align-self-center rounded-circle mr-3" style="width:85px; height:85px;" alt="" src="https://directemployers.org/wp-content/uploads/2018/08/avatar-JohnDoe-300x300.jpg">
                    <div class="media-body">
                    <h2 class=" display-6">{{account.first_name}}</h2>
                    <p > Account No: {{account.account_number}}</p>
                    <p class="text-dark">Balance:  {{account.balance}}</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-5">               
                        
                        <div class="col-12 card my-3">
                            <div class="card-body">
                            <button class="btn btn-small btn-primary" v-on:click="deposit_container = !deposit_container">Deposit Funds</button>
                            <form @submit.prevent="handleDeposit" v-if="deposit_container">
                                <div class="mb-3">
                                    <input type="hidden" class="form-control" v-model="user_id" >
                                    <input type="hidden" class="form-control" v-model="account_number">
                                </div>
                                <div class="mb-3">
                                    <label for="deposit_amount" class="form-label">Amount to Deposit</label>
                                    <input type="number" class="form-control" v-model="deposit_amount" id="deposit_amount">
                                </div>
                                <button class="btn btn-info">Deposit Funds</button>
                            </form>
                            </div>
                        </div>
                        <div class="col-12 card">
                            <div class="card-body">
                            <button class="btn btn-small btn-success" v-on:click="withdraw_container = !withdraw_container">Withdraw from Account</button>
                            <form @submit.prevent="handleWithdrawal" v-if="withdraw_container">
                                <div class="mb-3">
                                    <input type="hidden" class="form-control" v-model="user_id">
                                    <input type="hidden" class="form-control" v-model="account_number">
                                </div>
                                <div class="mb-3">
                                    <label for="withdraw_amount" class="form-label">Amount to Withdraw</label>
                                    <input type="number" class="form-control" v-model="withdraw_amount" id="withdraw_amount">
                                </div>
                                <button class="btn btn-info">Withdraw Funds</button>
                            </form> 
                        </div>
                        </div>
                        <div class="col-12 card my-3">
                            <div class="card-body">
                            <button class="btn btn-small btn btn-dark" v-on:click="transfer_container = !transfer_container">Transfer to Account</button>
                            <form @submit.prevent="handleTransfer" v-if="transfer_container">
                                <div class="mb-3">
                                    <input type="hidden" class="form-control" v-model="user_id">
                                    <input type="hidden" class="form-control" v-model="account_number">
                                </div>
                                <div class="mb-3">
                                    <label for="transfer_amount" class="form-label">Amount to Transfer</label>
                                    <input type="number" class="form-control" v-model="transfer_amount" id="transfer_amount">
                                </div>
                                <div class="mb-3">
                                    <label for="receiver_account" class="form-label">Receiver Account <small>i.e 2222</small></label>
                                    <input type="number" class="form-control" v-model="receiver_account" id="receiver_account">
                                </div>                                
                                <button class="btn btn-info">Transfer Funds</button>
                            </form> 
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-7">
                        <h4 class="text-center">Transactions</h4>
                        <div class="table-wrapper-scroll-y my-custom-scrollbar">
                            <table class="table">
                                <thead>
                                    <tr><th>Type</th><th>Amount</th><th>Date</th></tr>
                                </thead>
                                <tr v-for="records in transactions" :key="records.id">                
                                    <td>{{ records.transaction_type }}</td>
                                    <td>{{ records.amount }}</td>
                                    <td>{{ records.date }}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>
<script>
// @ is an alias to /src
import axios from "axios";
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';   
//const md5 = require('md5-nodejs');
    export default {
        data() {
            return { 
                user_id: null,
                account_number: null,
                deposit_amount: null,
                withdraw_amount: null,
                transfer_amount: null,
                receiver_account: null,
                userName: null,
                transactions: null,
                accounts: null,
                deposit_container: false,
                withdraw_container: false,
                transfer_container: false,
                loading: false,
                
            };
        },       
       
        mounted() {
            this.getPosts();
            //this.getTransactions();
        },
        created() {
            //this.getPosts();
            this.getTransactions();
        },
        methods: {            	
            async getPosts() {
                var user=firebase.auth().currentUser;
                if(user !=null){                    
                    //var hash = md5(user.email);
                    this.loading = true;
                    try {
                        let res = await axios({
                            url: "moturi-001-site1.ftempurl.com/api/Accounts/GetAccount/"+user.email+"/",
                            method: "GET",
                        });                        
                        let accounts = JSON.parse(res.data);
                        
                        this.accounts = accounts;                       

                        this.user_id=accounts[0].id;
                        this.account_number=accounts[0].account_number;
                        this.loading = false;
                    } catch (error) {
                        this.loading = false;
                    }
                }
                else{
                    await firebase.auth().signOut();
                    this.$router.push('/login');
                }
            },
            async getTransactions() {
                var user=firebase.auth().currentUser;
                if(user !=null){ 
                    try {
                        let acc_resp =await axios({
                            url: "moturi-001-site1.ftempurl.com/api/Accounts/GetAccountNumber/"+user.email+"/",
                            method: "GET",
                        });                     
                        let accounts = JSON.parse(acc_resp.data);
                        let no=accounts[0].account_number;
                        let trans = await axios({
                            url: "moturi-001-site1.ftempurl.com/api/values/Get/"+no,
                            method: "GET",
                        });
                        let transactions= JSON.parse(trans.data);
                        this.transactions=transactions;
                    } catch (error) {
                        this.loading = false;
                    }
                }
                else{
                    await firebase.auth().signOut();
                    this.$router.push('/login');
                }
            },
            async handleDeposit() {
                try{
                    const response=await axios.post('Accounts/MakeDeposit/'+this.user_id, {
                        account_number: this.account_number,
                        deposit_amount: this.deposit_amount
                    });        
                    alert(response.data);                    
                    //this.getPosts();
                    window.location.reload();
                }
                catch(err){
                    alert(err)
                }
            },
            async handleWithdrawal(){
                try{
                    const response=await axios.post('Accounts/MakeWithdrawal/'+this.user_id, {
                        account_number: this.account_number,
                        withdraw_amount: this.withdraw_amount
                    });        
                    alert(response.data);
                    window.location.reload();
                }
                catch(err){
                    alert(err)
                }
            },
            async handleTransfer(){
                try{
                    const response=await axios.post('Accounts/TransferFunds/'+this.user_id, {
                        account_number: this.account_number,
                        receiver_account: this.receiver_account,
                        transfer_amount: this.transfer_amount
                    });        
                    alert(response.data);
                    window.location.reload();
                }
                catch(err){
                    alert(err)
                }
            },
        },
    };
</script>
<style>
    .home {
        padding: 0 30px;
        max-width: 800px;
        margin: 0 auto;
    }
    .table-wrapper-scroll-y {
        display: block;
    }

    .my-custom-scrollbar {
        position: relative;
        height: 340px;
        overflow: auto;
    }
</style>
