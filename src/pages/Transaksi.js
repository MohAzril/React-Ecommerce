import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";
// import logo from './logo.svg';
// import SideList from '../components/SideList.js'
// import ListCart from '../components/ListCart';
import ListTransaksi from '../components/ListTransaksi';


//dummy date
// import az from "../images/berita1.jpg"
import { async } from 'q';

class Transaksi extends Component {

componentDidMount = () =>{
	this.props.getProfile().then(() => {
        console.log("this",this);
	});
	this.props.getTransaksi().then(() => {
        console.log("this",this);
    });
}; 

ComponentDidUpdate = () =>{
	this.props.getProfile().then(() => {
        console.log("this",this);
	});
	this.props.getTransaksi().then(() => {
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
    <div className="Transaksi">
	  <section class="section-content bg padding-y border-top">
			<div class="container">
			
			<div class="row">
				<main class="col-md-9">
			
			<div class="card">
			{this.props.listTransaksi.map((item,key) =>{
				return <ListTransaksi index={key} tanggal={item.created_at} id={item.id} status={item.status} total_qty={item.total_qty} total_harga={item.total_harga} paid_method={item.paid_method} detail={item.detail}/>;
			})}
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
					<a data-original-title="Save to Wishlist" title="" href="" class="btn  btn-outline-secondary" data-toggle="modal" data-target="#exampleModal" style={{marginRight:5}}><i class="fa fa-heart">Put Me</i></a>  
					<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Edit Me Onee-chan</h5>
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

export default connect("is_login,dataProfile,listTransaksi", actions)
(withRouter(Transaksi));
// export default Cart;