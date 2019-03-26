import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";
// import logo from './logo.svg';
// import SideList from '../components/SideList.js'
// import ListNews from '../components/ListNews'

//dummy date
// import az from "../images/berita1.jpg"
import { async } from 'q';

class Detail extends Component {

// handleOnClick = () => {
//     console.log("event", e.target.textContent);
// 	// let value = e.target.value;
// 	const value=parseInt(e.target.textContent, 10);
//     this.props.setQtyItem(value);
//     // this.props.getById(e.target.textContent);
//     // this.props.history.replace("/detail");
//   };
handleOnClick = async () => {
await this.props.postCart(this.props.itemDetail.id,parseInt(this.props.qty_item, 10))
.then(this.props.history.replace("/cart"))
.catch(error =>{console.log(error)})
};
render() {
    console.log("here render",this)
    // if(!this.props.is_login){
    //     return <Redirect to={{ pathname: "/signin"}}/>;
    // } else {
	if(this.props.status=="customer"){
		return (
		<div className="Detail">
		  <section class="section-topbar border-top padding-y-sm">
			<div class="container">
				<span>Supplier: Manufacturer of China Co., Ltd.</span> &nbsp  <span class="text-warning">good</span>
			</div>
			</section>
			<section class="section-content bg padding-y-sm">
			<div class="container">
			<nav class="mb-3">
			<ol class="breadcrumb">
				<li class="breadcrumb-item"><a href="#">Home</a></li>
				<li class="breadcrumb-item"><a href="#">Category name</a></li>
				<li class="breadcrumb-item active" aria-current="page">Items</li>
			</ol> 
			</nav>
	
			<div class="row">
			<div class="col-xl-10 col-md-9 col-sm-12">
	
	
			<main class="card">
				<div class="row no-gutters">
					<aside class="col-sm-6 border-right">
			<article class="gallery-wrap"> 
			<div class="img-big-wrap">
			<div> <a href="../assets/img/tenda4.jpg" data-fancybox=""><img src={this.props.itemDetail.url_picture}/></a></div>
			</div>
			<div class="img-small-wrap">
			<div class="item-gallery"> <img src={this.props.itemDetail.url_picture}/></div>
			<div class="item-gallery"> <img src={this.props.itemDetail.url_picture}/></div>
			<div class="item-gallery"> <img src={this.props.itemDetail.url_picture}/></div>
			<div class="item-gallery"> <img src={this.props.itemDetail.url_picture}/></div>
			</div>  
			</article> 
				</aside>
				<aside class="col-sm-6">
			<article class="card-body">
				<h3 class="title mb-3">{this.props.itemDetail.nama}</h3>
	
			<div class="mb-3"> 
				<var class="price h3 text-warning"> 
					<span style={{color: "blue"}} class="currency">RP </span><span style={{color: "blue"}} class="num">{this.props.itemDetail.harga},00</span>
				</var> 
			</div> 
			<dl>
			<dt>Detail</dt>
			<dd><p>{this.props.itemDetail.detail} </p></dd>
			</dl>
			<dl class="row">
			<dt class="col-sm-3">Id</dt>
			<dd class="col-sm-9">{this.props.itemDetail.id}</dd>
	
			<dt class="col-sm-3">Merek</dt>
			<dd class="col-sm-9">{this.props.itemDetail.merek}</dd>
	
			<dt class="col-sm-3">Kategori</dt>
			<dd class="col-sm-9">{this.props.itemDetail.kategori}</dd>
			
			<dt class="col-sm-3">Stock</dt>
			<dd class="col-sm-9">{this.props.itemDetail.stock}</dd>
			</dl>
			<div class="rating-wrap">
			</div>
			<hr/>
				<div class="row">
					<div class="col-sm-5">
						<dl class="dlist-inline">
						<dt>Add to Cart: </dt>
						<dd> 
							<input
								type="text"
								name="qty_item"
								placeholder="qty_item"
								onChange={e => this.props.setField(e)}
							/>
						</dd>
						</dl>  
					</div> 
				</div> 
				<hr/>
				<a href="#" class="btn btn-primary"> <i class="fa fa-envelope"></i> Contact Supplier </a>
				<a href="#" class="btn btn-primary" onClick={()=>{this.handleOnClick();}} > Start Order </a>
			</article> 
					</aside> 
				</div> 
			</main>  
			</div>
			<aside class="col-xl-2 col-md-3 col-sm-12">
			<div class="card">
				<div class="card-header">
					You may like
				</div>
				<div class="card-body row">
			<div class="col-md-12 col-sm-3">
				<figure class="item border-bottom mb-3">
						<a href="#" class="img-wrap"> <img src={require("../assets/img/tenda5.jpg")} class="img-md"/></a>
						<figcaption class="info-wrap">
							<a href="#" class="title">The name of product</a>
							<div class="price-wrap mb-3">
								<span class="price-new">$280</span> <del class="price-old">$280</del>
							</div> 
						</figcaption>
				</figure> 
			</div> 
			<div class="col-md-12 col-sm-3">
			<figure class="item border-bottom mb-3">
					<a class="img-wrap"> <img src={require("../assets/img/hammock4.jpg")} class="img-md"/></a>
					<figcaption class="info-wrap">
						<a href="#" href="#" class="title">The name of product</a>
						<div class="price-wrap mb-3">
							<span class="price-new">$280</span>
						</div> 
					</figcaption>
			</figure>
			</div> 
			<div class="col-md-12 col-sm-3">
			<figure class="item border-bottom mb-3">
					<a href="#" class="img-wrap"> <img src={require("../assets/img/hammock3.jpg")} class="img-md"/></a>
					<figcaption class="info-wrap">
						<a href="#" class="title">The name of product</a>
						<div class="price-wrap mb-3">
							<span class="price-new">$280</span>
						</div> 
					</figcaption>
			</figure> 
			</div> 
				</div> 
			</div> 
			</aside> 
			</div> 
			</div>
			</section>
		</div>
		);}
	else {return (
		<div className="Detail">
		  <section class="section-topbar border-top padding-y-sm">
			<div class="container">
				<span>Supplier: Manufacturer of China Co., Ltd.</span> &nbsp  <span class="text-warning">good</span>
			</div>
			</section>
			<section class="section-content bg padding-y-sm">
			<div class="container">
			<nav class="mb-3">
			<ol class="breadcrumb">
				<li class="breadcrumb-item"><a href="#">Home</a></li>
				<li class="breadcrumb-item"><a href="#">Category name</a></li>
				<li class="breadcrumb-item active" aria-current="page">Items</li>
			</ol> 
			</nav>
	
			<div class="row">
			<div class="col-xl-10 col-md-9 col-sm-12">
	
	
			<main class="card">
				<div class="row no-gutters">
					<aside class="col-sm-6 border-right">
			<article class="gallery-wrap"> 
			<div class="img-big-wrap">
			<div> <a href="../assets/img/tenda4.jpg" data-fancybox=""><img src={this.props.itemDetail.url_picture}/></a></div>
			</div>
			<div class="img-small-wrap">
			<div class="item-gallery"> <img src={this.props.itemDetail.url_picture}/></div>
			<div class="item-gallery"> <img src={this.props.itemDetail.url_picture}/></div>
			<div class="item-gallery"> <img src={this.props.itemDetail.url_picture}/></div>
			<div class="item-gallery"> <img src={this.props.itemDetail.url_picture}/></div>
			</div>  
			</article> 
				</aside>
				<aside class="col-sm-6">
			<article class="card-body">
				<h3 class="title mb-3">{this.props.itemDetail.nama}</h3>
	
			<div class="mb-3"> 
				<var class="price h3 text-warning"> 
					<span style={{color: "blue"}} class="currency">RP </span><span style={{color: "blue"}} class="num">{this.props.itemDetail.harga},00</span>
				</var> 
			</div> 
			<dl>
			<dt>Detail</dt>
			<dd><p>{this.props.itemDetail.detail} </p></dd>
			</dl>
			<dl class="row">
			<dt class="col-sm-3">Id</dt>
			<dd class="col-sm-9">{this.props.itemDetail.id}</dd>
	
			<dt class="col-sm-3">Merek</dt>
			<dd class="col-sm-9">{this.props.itemDetail.merek}</dd>
	
			<dt class="col-sm-3">Kategori</dt>
			<dd class="col-sm-9">{this.props.itemDetail.kategori}</dd>
			
			<dt class="col-sm-3">Stock</dt>
			<dd class="col-sm-9">{this.props.itemDetail.stock}</dd>
			</dl>
			<div class="rating-wrap">
			</div>
			<hr/> 
				<hr/>
				<a href="#" class="btn btn-primary"> <i class="fa fa-envelope"></i> Contact Supplier </a>
			</article> 
					</aside> 
				</div> 
			</main>  
			</div>
			<aside class="col-xl-2 col-md-3 col-sm-12">
			<div class="card">
				<div class="card-header">
					You may like
				</div>
				<div class="card-body row">
			<div class="col-md-12 col-sm-3">
				<figure class="item border-bottom mb-3">
						<a href="#" class="img-wrap"> <img src={require("../assets/img/tenda5.jpg")} class="img-md"/></a>
						<figcaption class="info-wrap">
							<a href="#" class="title">The name of product</a>
							<div class="price-wrap mb-3">
								<span class="price-new">$280</span> <del class="price-old">$280</del>
							</div> 
						</figcaption>
				</figure> 
			</div> 
			<div class="col-md-12 col-sm-3">
			<figure class="item border-bottom mb-3">
					<a class="img-wrap"> <img src={require("../assets/img/hammock4.jpg")} class="img-md"/></a>
					<figcaption class="info-wrap">
						<a href="#" href="#" class="title">The name of product</a>
						<div class="price-wrap mb-3">
							<span class="price-new">$280</span>
						</div> 
					</figcaption>
			</figure>
			</div> 
			<div class="col-md-12 col-sm-3">
			<figure class="item border-bottom mb-3">
					<a href="#" class="img-wrap"> <img src={require("../assets/img/hammock3.jpg")} class="img-md"/></a>
					<figcaption class="info-wrap">
						<a href="#" class="title">The name of product</a>
						<div class="price-wrap mb-3">
							<span class="price-new">$280</span>
						</div> 
					</figcaption>
			</figure> 
			</div> 
				</div> 
			</div> 
			</aside> 
			</div> 
			</div>
			</section>
		</div>
		);}
  }}
// }

export default connect("is_login,status,email,full_name,itemDetail,qty_item", actions)
(withRouter(Detail));
// export default Detail;