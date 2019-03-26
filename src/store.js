import createStore from 'unistore';
import axios from 'axios';
import { async } from 'q';
// import {Provider, connect} from 'unistore/preact';

const initialState ={
    token:"",
    is_login:false,
    full_name:"",
    email:"",
    username:"",
    password:"",
    status:"",
    alamat:"",
    contact:"",
    dataProfile:"",
    listDashboard:[],
    itemName:"",
    merek:"",
    kategori:"",
    harga:"",
    url_picture:"",
    qty:"",
    detail:"",
    listItems:[],
    listCart:[],
    listTransaksi:[],
    itemDetail:"",
    listTopNews:[],
    search:"",
    totalHargacart:"",
    qty_item:"",
    paid_method:""
}

// const getPublic = "https://cors-anywhere.herokuapp.com/http://camp-wiki.com/api/public/items";
const loginUrl = "https://cors-anywhere.herokuapp.com/http://3.1.116.185/api/users/login";
const signupUrl = "https://cors-anywhere.herokuapp.com/http://3.1.116.185/api/users/register";
const getPublic = "http://camp-wiki.com/api/public/items?rp=100";
const getDetail = "http://camp-wiki.com/api/public/items";
const cartDetail = "https://cors-anywhere.herokuapp.com/http://3.1.116.185/api/customer/cart/detail";
const linkProfile = "https://cors-anywhere.herokuapp.com/http://3.1.116.185/api/users/me";
const dasboard = "https://cors-anywhere.herokuapp.com/http://3.1.116.185/api/users/items";
const transaksiUrl = "https://cors-anywhere.herokuapp.com/http://3.1.116.185/api/customer/transaction";
// const loginUrl = "http://camp-wiki.com/api/users/login";
// local
// const getPublic = "http://0.0.0.0:5000/api/public/items";
// const loginUrl = "http://localhost:5000/api/users/login";

export const store = createStore(initialState)

// If actions  is a function, it gets passed store:

export const actions = store => ({
    // Action can just return a state update:
    setField: (state, event) => {
        console.log({ [event.target.name]: event.target.value });
        return { [event.target.name]: event.target.value };
    },

    setStatus:(state, e) => {
        console.log("value",e.target.textContent)
        return {status:e.target.textContent}
    },

    setKategori:(state, e) => {
        console.log("value",e.target.textContent)
        return {kategori:e.target.textContent}
    },

    getProfile: async state =>{
        await axios.get(linkProfile,    
        {
            headers: {
                "Authorization" : "Bearer "+state.token, 
                'Content-Type': 'application/json',
                "X-Requested-With": "http://3.1.116.185",
            },
        })
        .then(function(response){
            console.log("respon profile",response.data)
            store.setState({
                dataProfile:response.data
            });
        })
        .catch(function(error){
        // handle error
        console.log(error);
        // alert(error.toString());
        });
    },

    profileUpdate:async (state) =>{
        console.log("puting")
        var data = {};
        if(state.email!==""){data["email"]=state.email}
        if(state.username!==""){data["username"]=state.username}
        if(state.password!==""){data["password"]=state.password}
        if(state.status!==""){data["status"]=state.status}
        if(state.alamat!==""){data["alamat"]=state.alamat}
        if(state.contact!==""){data["contact"]=state.contact}
        console.log("data",data)
        await axios.put(linkProfile,data,    
        {
            headers: {
                "Authorization" : "Bearer "+state.token, 
                'Content-Type': 'application/json',
                "X-Requested-With": "http://3.1.116.185",
            },
        })
        .then(function(response){
            console.log("respon put item",response.data)
            data={};
            store.setState({
                email:"",
                username:"",
                password:"",
                alamat:"",
                contact:""
            });
        })
        .catch(function(error){
        // handle error
        console.log(error);
        // alert(error.toString());
        });
    },

    getTransaksi:async state =>{
        await axios.get(transaksiUrl,    
        {
            headers: {
                "Authorization" : "Bearer "+state.token, 
                'Content-Type': 'application/json',
                "X-Requested-With": "http://3.1.116.185",
            },
        })
        .then(function(response){
            console.log("respon transaksi",response.data)
            store.setState({
                listTransaksi:response.data.transaction
            });
        })
        .catch(function(error){
        // handle error
        console.log(error);
        // alert(error.toString());
        });
    },
    
    postTr: async state => {
        const data = {paid_method:state.paid_method};
        const head = {
            headers: {
                "Authorization" : "Bearer "+state.token, 
                'Content-Type': 'application/json',
                "X-Requested-With": "http://3.1.116.185",
            },
        }
        await axios
        .post(transaksiUrl, data, head)
        .then(response => {
            console.log("respon post transaksi",response.data);
        })
        .catch(error => {
            console.log("eeeeeeeer",error);
            // alert(error.toString());
        })
    },

    getDashboard: async state =>{
        await axios.get(dasboard,    
        {
            headers: {
                "Authorization" : "Bearer "+state.token, 
                'Content-Type': 'application/json',
                "X-Requested-With": "http://3.1.116.185",
            },
        })
        .then(function(response){
            console.log("respon dashboard",response.data)
            store.setState({
                listDashboard:response.data.items
            });
        })
        .catch(function(error){
        // handle error
        console.log(error);
        // alert(error.toString());
        });
    },

    postItem:async (state) =>{
        console.log("posting")
        var data = {};
        if(state.itemName!==""){data["nama"]=state.itemName}
        if(state.merek!==""){data["merek"]=state.merek}
        if(state.kategori!==""){data["kategori"]=state.kategori}
        if(state.harga!==""){data["harga"]=parseInt(state.harga, 10)}
        if(state.url_picture!==""){data["url_picture"]=state.url_picture}
        if(state.qty!==""){data["stock"]=parseInt(state.qty, 10)}
        if(state.detail!==""){data["detail"]=state.detail}
        console.log("data",data)
        await axios.post(dasboard,data,    
        {
            headers: {
                "Authorization" : "Bearer "+state.token, 
                'Content-Type': 'application/json',
                "X-Requested-With": "http://3.1.116.185",
            },
        })
        .then(function(response){
            console.log("respon postt item",response.data)
            data={};
            store.setState({
                itemName:"",
                merek:"",
                kategori:"",
                harga:"",
                url_picture:"",
                qty:"",
                detail:""
            });
        })
        .catch(function(error){
        // handle error
        console.log(error);
        // alert(error.toString());
        });
    },

    itemUpdate: async (state,e) =>{
        console.log("id",e.target.value)

        var data = {};
        if(state.itemName!==""){data["nama"]=state.itemName}
        if(state.merek!==""){data["merek"]=state.merek}
        if(state.kategori!==""){data["kategori"]=state.kategori}
        if(state.harga!==""){data["harga"]=parseInt(state.harga, 10)}
        if(state.url_picture!==""){data["url_picture"]=state.url_picture}
        if(state.qty!==""){data["stock"]=parseInt(state.qty, 10)}
        if(state.detail!==""){data["detail"]=state.detail}
        console.log("data",data)
        
        await axios.patch(dasboard+"/"+e.target.value,
        data,    
        {
            headers: {
                "Authorization" : "Bearer "+state.token, 
                'Content-Type': 'application/json',
                "X-Requested-With": "http://3.1.116.185",
            },
        })
        .then(function(response){
            console.log("respon put item",response.data)
            data={};
            store.setState({
                itemName:"",
                merek:"",
                kategori:"",
                harga:"",
                url_picture:"",
                qty:"",
                detail:""
            });
        })
        .catch(function(error){
        // handle error
        console.log(error);
        // alert(error.toString());
        });
    },

    postCart:async (state,id,quantity) => {
        const data = {item_id:id,qty:quantity};
        await axios
        .post(cartDetail, data, {
            headers: {
                "Authorization" : "Bearer "+state.token, 
                'Content-Type': 'application/json',
                "X-Requested-With": "http://3.1.116.185",
            },
        })
        .then(response => {
            console.log("respon post cart",response.data);
        })
        .catch(error => {
            console.log(error);
            // alert(error.toString());
        })
    },

    getCart: async state =>{
        await axios.get(cartDetail,    
        {
            headers: {
                "Authorization" : "Bearer "+state.token, 
                'Content-Type': 'application/json',
                "X-Requested-With": "http://3.1.116.185",
            },
        })
        .then(function(response){
            console.log("respon cart",response.data)
            store.setState({
                listCart:response.data.carts,
                totalHargacart:response.data.totalHarga
            });
        })
        .catch(function(error){
        // handle error
        console.log(error);
        // alert(error.toString());
        });
    },

    deleteCart: async (state,keyword) =>{
        console.log("id",keyword)
        await axios.delete(cartDetail+"/"+keyword,    
        {
            headers: {
                "Authorization" : "Bearer "+state.token, 
                'Content-Type': 'application/json',
                "X-Requested-With": "http://3.1.116.185",
            },
        })
        .then(function(response){
            console.log("respon delete cart",response.data)
        })
        .catch(function(error){
        // handle error
        console.log(error);
        // alert(error.toString());
        });
    },

    cariItemPublic: async state =>{
        await axios
        .get(getPublic).then(function(response){
        store.setState({listItems:response.data.items });
        // handle response
        console.log(response);
        console.log(this.state.listItems);
        })
        .catch(function(error){
        // handle error
        console.log(error);
        // alert(error.toString());
        });
    },

    getById: async (state,keyword) => {
        console.log("getId", keyword);
        await axios.get(getDetail+"/"+keyword)
        .then(function(response){
        store.setState({itemDetail:response.data});
        // handle response
        console.log(response.data);
        console.log(this.state.itemDetail);
        })
        .catch(function(error){
        // handle error
        console.log(error);
        // alert(error.toString());
        });
    },

    searchItems: async (state,keyword) => {
        console.log("searchItems", keyword);
        await axios
        .get(getPublic+"&search="+keyword).then(function(response){
        store.setState({listItems:response.data.items });
        // handle response
        console.log(response);
        console.log(this.state.listItems);
        })
        .catch(function(error){
        // handle error
        console.log(error);
        // alert(error.toString());
        });
    },

    signIn: async state => {
        const data = {username:state.username,password:state.password};
        await axios
        .post(loginUrl, data, {
            headers: {
                'Content-Type': 'application/json',
                "X-Requested-With": "http://3.1.116.185",
            },
        })
        .then(response => {
            console.log("respon login",response.data);
            if (response.data.hasOwnProperty("token")) {
                store.setState({
                    is_login: true,
                    token: response.data.token,
                    status: response.data.stat,
                    username:"",
                    password:""
                });
            }
        })
        .catch(error => {
            console.log(error);
            // alert(error.toString());
        })
    },
    signUp: async state => {
        const data = {
            username:state.username,
            password:state.password,
            email:state.email,
            status:state.status,
            alamat:state.alamat,
            contact:state.contact        
        };
        await axios
        .post(signupUrl, data, {
            headers: {
                'Content-Type': 'application/json',
                "X-Requested-With": "http://3.1.116.185",
            },
        })
        .then(response => {
            console.log("respon signup",response.data);
        })
        .catch(error => {
            console.log(error);
            // alert(error.toString());
        })
    },
    signOut: state =>{
        store.setState({
            is_login: false,
            token: "",
            username:"",
            password:"",
            email:"",
            status:"",
            alamat:"",
            contact:""
            // full_name:response.data.full_name,
            // email:response.data.email
        });
    },
});
