import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';
// import logo from './logo.svg';
// import '../styles/style.css';

class Search extends Component {
  handleInputChange = e => {
    console.log("event", e.target.value);
    // let value = e.target.value;
    // this.props.setField(e);
    this.props.searchItems(e.target.value);
  };
  render() {
    return (
      <div className="Search">
        <form target="_blank" role="form" action="#" class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
          onChange = {e => this.handleInputChange(e)}
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    );
  }
}
export default connect("token", actions)(withRouter(Search));
// export default Search;
