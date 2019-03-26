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
class ListCart extends Component {
  handleOnClick = e => {
    console.log("event", e.target.value);
    // let value = e.target.value;
    // this.props.setField(e);
	this.props.deleteCart(e.target.value).then(this.props.history.replace("/")).catch(error => {console.log(error)});
    // this.props.history.replace("/detail");
  };
  render() {
    return (
      <tr>
			<td>
			<figure class="media">
				<div class="img-wrap"><img src={this.props.img} class="img-thumbnail img-sm"/></div>
				<figcaption class="media-body">
					<h6 class="title text-truncate">{this.props.nama}</h6>
					<dl class="dlist-inline small">
						<dt>No: </dt>
						<dd>{this.props.index+1}</dd>
					</dl>
					<dl class="dlist-inline small">
						<dt>Cart Id: </dt>
						<dd>{this.props.id}</dd>
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
						<var class="price">Rp {this.props.harga}</var> 
						{/* <small class="text-muted">(USD5 each)</small>  */}
					</div>
				</td>
				<td class="text-right"> 
				{/* <a href="#" class="btn btn-outline-danger" value={this.props.id} onClick={e => this.handleOnClick(e)}> × Remove</a> */}
				<button className="btn btn-outline-danger" name="delCartId" value={this.props.id} onClick={(e)=>this.handleOnClick(e)}> × Remove</button>
				</td>
			</tr>    
  );
  }
}

export default connect("token,is_login,full_name,email,username,password", actions)(withRouter(ListCart));