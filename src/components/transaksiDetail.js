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
class TransaksiDetail extends Component {
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
						<dt>Transaksi Id: </dt>
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
					</div>
				</td>
				<td class="text-right">
					<div class="price-wrap"> 
						<var class="price">Status:{this.props.status}</var> 
					</div> 
				</td>
			</tr>    
  );
  }
}


// const ListNews = props => {
//   return (
//       <div class="col-lg-4 col-md-6 mb-4">
//         <div class="card h-100">
//           <a href="#"><img class="card-img-top" src={props.img} alt=""/></a>
//           <div class="card-body">
//             <h4 class="card-title">
//               <a href="#">{props.nama}</a>
//             </h4>
//             <h5>Rp {props.harga},00</h5>
//             <p class="card-text">{props.merek}</p>
//             <p class="card-text">{props.kategori}</p>
//           </div>
//           <div class="card-footer">
//             <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
//           </div>
//         </div>
//       </div>    
//   );
// };

// export default ListNews;
export default connect("token,is_login,full_name,email,username,password", actions)(withRouter(TransaksiDetail));