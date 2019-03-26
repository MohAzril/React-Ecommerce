import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';
import TransaksiDetail from './transaksiDetail';
// import logo from './logo.svg';
// import '../styles/style.css';
// import '../styles/blog.css';
// const style ={
//   maxWidth: "200px"
// };
class ListTransaksi extends Component {
  handleOnClick = e => {
    console.log("event", e.target.value);
    // let value = e.target.value;
	// this.props.setField(e);
	// async()=>{await this.props.deleteCart(e.target.value).then(this.props.history.replace("/")).catch(error => {console.log(error)});}
	this.props.deleteCart(e.target.value).then(this.props.history.replace("/")).catch(error => {console.log(error)});
    // this.props.history.replace("/detail");
  };
  render() {
    return (
		<div>
		<hr/>
		<table class="table table-hover shopping-cart-wrap">
		<thead class="text-muted">
		<tr>
			<th scope="col">Transaksi Id: {this.props.id}</th>
			<th scope="col" width="120">Total Quantity: {this.props.total_qty}</th>
			<th scope="col" width="120">Total Harga: {this.props.total_harga}</th>
			<th scope="col" class="text-right" width="200">Paid Method: {this.props.paid_method}</th>
		</tr>
		<tr>
			<th scope="col" class="text-right" width="200">Created At: {this.props.tanggal}</th>
		</tr>
		</thead>
		<tbody>
			{this.props.detail.map((item,key) =>{
				return <TransaksiDetail status={item.status} index={key} id={this.props.id} harga={item.harga} nama={item.nama_item} img={item.url_picture} qty={item.qty}/>;
			})}
		</tbody>
		</table>
		</div>
  );
  }
}

export default connect("token,is_login,listTransaksi,listCart", actions)(withRouter(ListTransaksi));