import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";
// import logo from './logo.svg';
// import SideList from '../components/SideList.js'
import ListCart from '../components/ListCart';

//dummy date
// import az from "../images/berita1.jpg"
import { async } from 'q';

//News API
const apiKey = "72aadd1aff8c490ea5c90d2e5225a042";
const baseUrl = "https://newsapi.org/v2/"
const urlHeadline = baseUrl + "top-headlines?" + "country=id&" + "pageSize=3&"+ "apiKey=" + apiKey;
const urlNews = baseUrl + "everything?" +"q=meme&" + "pageSize=3&"+ "apiKey=" + apiKey;

class Cart extends Component {

componentDidMount = () =>{
    this.props.getCart();
}; 

ComponentDidUpdate = () =>{
    this.props.getCart();
}; 

handleOnClick = async() => {
	await this.props.postTr()
	.then(this.props.history.replace("/transaksi"))
	.catch(error =>{console.log(error)})
	};

render() {
    // console.log("here render")
    // // const news = this.state.ListNews;
    console.log("is_login", this.props.is_login);
    if(!this.props.is_login){
        return <Redirect to={{ pathname: "/signin"}}/>;
    } else {
    return (
    <div className="Cart">
	  <section class="section-content bg padding-y border-top">
			<div class="container">
			
			<div class="row">
				<main class="col-md-9">
			
			<div class="card">
			<table class="table table-hover shopping-cart-wrap">
			<thead class="text-muted">
			<tr>
				<th scope="col">Product</th>
				<th scope="col" width="120">Quantity</th>
				<th scope="col" width="120">Price</th>
				<th scope="col" class="text-right" width="200">Action</th>
			</tr>
			</thead>
			<tbody>
				{this.props.listCart.map((item,key) =>{
					return <ListCart refresh={this.componentDidMount} index={key} id={item.id} harga={item.harga} nama={item.nama_item} img={item.url_picture} qty={item.qty}/>;
				})}
			</tbody>
			</table>
			</div>
			
				</main>
				<aside class="col-md-3">
			<dl class="dlist-align h4">
				<dt>Total:</dt>
				<dd class="text-right"><strong>Rp {this.props.totalHargacart},00</strong></dd>
			</dl>
			<hr/>
			{/* <form onSubmit={e => e.preventDefault()}> */}
			<input
				type="text"
				name="paid_method"
				placeholder="paid method..."
				onChange={e => this.props.setField(e)}
			/>
			{/* </form> */}
			<button class="btn btn-primary" onClick={()=>{this.handleOnClick();}}>Ckeckout</button>
			{/* <a href="#" class="btn btn-primary" onClick={()=>{this.handleOnClick();}} > Start Order </a> */}
			{/* </form> */}
				</aside>
			</div>
			
			</div>
			</section>
			{/* <!-- End Cart --> */}
      {/* <Footer/> */}
    </div>
    );
  }}
}

export default connect("is_login,email,full_name,listNews,totalHargacart,listCart,paid_method,token", actions)
(withRouter(Cart));
// export default Cart;