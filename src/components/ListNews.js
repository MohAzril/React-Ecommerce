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
class ListNews extends Component {
  handleOnClick = e => {
    console.log("event", e.target.value);
    // let value = e.target.value;
    // this.props.setField(e);
    this.props.getById(e.target.value);
    this.props.history.replace("/detail");
  };
  render() {
    return (
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
        {/* <button className="btn btn-primary" name="search" value="SepakBola" onClick={(e)=>this.handleOnClick(e)}>SepakBola</button> */}
          <a href="#"><img class="card-img-top" src={this.props.img} alt=""/></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">{this.props.nama}</a>
            </h4>
            <h5>Rp {this.props.harga},00</h5>
            <p class="card-text">{this.props.merek}</p>
            <p class="card-text">{this.props.kategori}</p>
            <button className="btn btn-outline-primary" name="cariId" value={this.props.id} onClick={(e)=>this.handleOnClick(e)}>Detail</button>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>    
  );
  }
}

// export default ListNews;
export default connect("token,is_login,full_name,email,username,password", actions)(withRouter(ListNews));