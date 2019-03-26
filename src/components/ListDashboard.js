import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';
// import logo from './logo.svg';
// import '../styles/style.css';
// import '../styles/blog.css';
// const style ={
//   maxWidth: "200px"
// };
class ListDashboard extends Component {
  handleOnClick = e => {
    console.log("event", e.target.value);
    // let value = e.target.value;
    // this.props.setField(e);
    this.props.getById(e.target.value);
    this.props.history.replace("/detail");
  };
  render() {
    console.log("iki namae",this.props.nama)
    return (  
      <tr>
				<td>
			<figure class="media">
				<div class="img-wrap"><img src={this.props.img} class="img-thumbnail img-sm"/></div>
				<figcaption class="media-body">
					<h6 class="title text-truncate">{this.props.nama}</h6>
					<dl class="dlist-inline small">
						<dt>Id: </dt>
						<dd>{this.props.id}</dd>
					</dl>
					<dl class="dlist-inline small">
						<dt>Merek: </dt>
						<dd>{this.props.merek}</dd>
					</dl>
          <dl class="dlist-inline small">
						<dt>Kategori: </dt>
						<dd>{this.props.kategori}</dd>
					</dl>
          <dl class="dlist-inline small">
						<dt>Detail: </dt>
						<dd>{this.props.detail}</dd>
					</dl>
				</figcaption>
			</figure> 
				</td>
				<td>  
					<div class="price-wrap"> 
						<var class="price">{this.props.qty}</var> 
					</div> 
				</td>
				<td> 
					<div class="price-wrap"> 
						<var class="price">Rp {this.props.harga},00</var> 
					</div>
				</td>
				<td class="text-right">
				<a data-original-title="Save to Wishlist" title="" href="" class="btn  btn-outline-primary" data-toggle="modal" data-target="#exampleModal" style={{marginRight:5}}><i class="fa fa-heart">Put Me</i></a>  
                {/* <!-- Button trigger modal --> */}
        {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Launch demo modal
          </button> */}
          
          {/* <!-- Modal --> */}
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
                <h4 class="card-title mt-3 text-center">Update Item</h4>
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
                  <button data-dismiss="modal" type="submit" class="btn btn-primary btn-block" value={this.props.id} onClick={(e)=>this.props.itemUpdate(e)}>Update</button>
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
        <a href="" class="btn btn-outline-danger"> × Remove</a>
				</td>
			</tr>
  );
  }
}

// export default ListNews;
export default connect("token,is_login,full_name,email,username,password", actions)(withRouter(ListDashboard));