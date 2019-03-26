import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";
// import logo from './logo.svg';
// import SideList from '../components/SideList.js'
import ListDashboard from '../components/ListDashboard'

//dummy date
// import az from "../images/berita1.jpg"
import { async } from 'q';

class Dashbord extends Component {

componentDidMount = () =>{
    this.props.getProfile().then(() => {
        console.log("this",this);
	});
	this.props.getDashboard().then(() => {
        console.log("this",this);
	});
}; 

ComponentDidUpdate = () =>{
  this.props.getProfile().then(() => {
      console.log("this",this);
});
this.props.getDashboard().then(() => {
      console.log("this",this);
});
}; 

render() {
    // console.log("here render")
    // // const news = this.state.ListNews;
    // console.log("is_login", this.props.is_login);
    if(!this.props.is_login){
        return <Redirect to={{ pathname: "/signin"}}/>;
    } else {
    return (
    <div className="Dashbord">
	  <section class="section-content bg padding-y border-top">
			<div class="container">
			
			<div class="row" style={{marginRight: -50, marginLleft: -50}}>
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
			{this.props.listDashboard.map((item,key) =>{
				return <ListDashboard refresh={this.componentDidMount} detail={item.detail} kategori={item.kategori} merek={item.merek} index={key} id={item.id} harga={item.harga} nama={item.nama} img={item.url_picture} qty={item.stock}/>;
			})}
			</tbody>
			</table>
			</div> 
			
			</main> 
			<aside class="col-md-3">
			<img class="logo-footer" src={require("../assets/img/250px-Yucamp_logo.png")} alt="logo-footer" data-at2x="../assets/img/250px-Yucamp_logo.png"/>
			<dl class="dlist-align">
				<dt>Username: </dt>
				<dd class="text-right">{this.props.dataProfile.username}</dd>
			</dl>
			<dl class="dlist-align">
				<dt>Id:</dt>
				<dd class="text-right">{this.props.dataProfile.user_id}</dd>
			</dl>
			<dl class="dlist-align">
				<dt>Status:</dt>
				<dd class="text-right">{this.props.dataProfile.status}</dd>
			</dl>
			<dl class="dlist-align">
				<dt>E-mail:</dt>
				<dd class="text-right">{this.props.dataProfile.email}</dd>
			</dl>
			<dl class="dlist-align">
				<dt>Alamat:</dt>
				<dd class="text-right">{this.props.dataProfile.alamat}</dd>
			</dl>
			<dl class="dlist-align">
				<dt>Contact:</dt>
				<dd class="text-right">{this.props.dataProfile.contact}</dd>
			</dl>
			<hr/>
      <div className="text-center">
					<a data-original-title="Save to Wishlist" title="" href="" class="btn  btn-outline-secondary" data-toggle="modal" data-target="#profileModal" style={{marginRight:5}}><i class="fa fa-heart">Put Me</i></a>  
					<div class="modal fade" id="profileModal" tabindex="-1" role="dialog" aria-labelledby="profileModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="profileModalLabel">Edit Me Onee-chan</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <div class="card">
              <article class="card-body mx-auto" style={{maxWidth: 400}}>
                <h4 class="card-title mt-3 text-center">Update Profile</h4>
                <form onSubmit={e => e.preventDefault()}>
                <div class="form-group input-group">
                  <input 
                  type="text"
                  name="username" 
                  class="form-control" 
                  placeholder="username"
                  onChange={e => this.props.setField(e)}/>
                </div> 
                <div className="text-center">Status</div>
                <div class="form-group input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-list-alt"></i> </span>
                  </div>
                  <select class="form-control">
                    <option selected="" onClick={(e)=>this.props.setStatus(e)}></option>
                    <option onClick={(e)=>this.props.setStatus(e)}>customer</option>
                    <option onClick={(e)=>this.props.setStatus(e)}>merchant</option>
                  </select>
                </div> 
                <div class="form-group input-group">
                  <input 
                  type="text"
                  name="password" 
                  class="form-control" 
                  placeholder="password"
                  onChange={e => this.props.setField(e)}/>
                </div> 
                <div class="form-group input-group">
                  <input 
                  type="text"
                  name="email" 
                  class="form-control" 
                  placeholder="email"
                  onChange={e => this.props.setField(e)}/>
                </div> 
                <div class="form-group input-group">
                  <input 
                  type="text"
                  name="alamat" 
                  class="form-control" 
                  placeholder="alamat"
                  onChange={e => this.props.setField(e)}/>
                </div> 
                <div class="form-group input-group">
                  <input 
                  type="text"
                  name="contact" 
                  class="form-control" 
                  placeholder="contact"
                  onChange={e => this.props.setField(e)}/>
                </div> 
                <div class="form-group">
                  <button data-dismiss="modal" type="submit" class="btn btn-primary btn-block" onClick={()=>this.props.profileUpdate()}>Update</button>
                </div>
              </form>
              </article>
              </div>
            </div>
            {/* <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div> */}
            </div>
          </div>
          </div>
				</div>
      <br/><br/>      
			{/*  */}
			<div class="card">
              <article class="card-body mx-auto" style={{maxWidth: 400}}>
                <h4 class="card-title mt-3 text-center">Add Item</h4>
                <form onSubmit={e => e.preventDefault()}>
                <div class="form-group input-group">
                  <input 
                  type="text"
                  name="itemName" 
                  class="form-control" 
                  placeholder="Item Name"
                  onChange={e => this.props.setField(e)}/>
                </div> 
                <div className="text-center">Kategori</div>
                <div class="form-group input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-list-alt"></i> </span>
                  </div>
                  <select class="form-control">
                    <option selected="" onClick={(e)=>this.props.setKategori(e)}></option>
                    <option onClick={(e)=>this.props.setKategori(e)}>Tenda & Furniture</option>
                    <option onClick={(e)=>this.props.setKategori(e)}>Matras Camping</option>
                    <option onClick={(e)=>this.props.setKategori(e)}>Sleeping Bag</option>
                    <option onClick={(e)=>this.props.setKategori(e)}>Cooking Set</option>
                    <option onClick={(e)=>this.props.setKategori(e)}>Hammock</option>
                  </select>
                </div> 
                <div class="form-group input-group">
                  <input 
                  type="text"
                  name="merek" 
                  class="form-control" 
                  placeholder="Merek"
                  onChange={e => this.props.setField(e)}/>
                </div> 
                <div class="form-group input-group">
                  <input 
                  type="text"
                  name="harga" 
                  class="form-control" 
                  placeholder="Harga"
                  onChange={e => this.props.setField(e)}/>
                </div> 
                <div class="form-group input-group">
                  <input 
                  type="text"
                  name="url_picture" 
                  class="form-control" 
                  placeholder="link gambar"
                  onChange={e => this.props.setField(e)}/>
                </div> 
                <div class="form-group input-group">
                  <input 
                  type="text"
                  name="qty" 
                  class="form-control" 
                  placeholder="Quantity"
                  onChange={e => this.props.setField(e)}/>
                </div> 
                <textarea name="detail" placeholder="Item Description..." class="form-control" id="deskripsi item" onChange={e => this.props.setField(e)}></textarea>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-block" value={this.props.id} onClick={()=>this.props.postItem()}>Add Item</button>
                </div>
              </form>
              </article>
              </div>
		
			</aside>
			</div> 
			</div> 
			</section>
    </div>
    );
  }}
}

export default connect("is_login,dataProfile,listDashboard", actions)
(withRouter(Dashbord));
// export default Cart;