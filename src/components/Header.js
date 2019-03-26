import React, { Component } from 'react';
// import logo from './logo.svg';
import {Link} from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';
import Search from './Search';

class Header extends Component {
  // handleOnClick = e => {
  //   console.log("event", e.target.value);
  //   // let value = e.target.value;
  //   // this.props.setField(e);
  //   this.props.getById(e.target.value);
  //   this.props.history.replace("/detail");
  // };
  render() {
    if ((this.props.is_login)&&(this.props.status=="customer")){
    return (
    <div className="Header">
        <a href="#"><img class="logo-footer" src={require("../assets/img/250px-Yucamp_logo.png")} style={{marginTop:10, marginLeft:90, height:75,}}/></a>
    <img class="logo-footer" src={require("../assets/img/image.png")} style={{marginTop:10, marginLeft:90, height:75,}}/>
    <nav class="navbar navbar-expand-lg navbar-light sticky-top">
        <div class="container">
          <a class="navbar-brand" href="#"><strong>CAMP WIKI</strong></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link to="/"><a class="nav-link" href="#"><strong>Home</strong>
                    <span class="sr-only">(current)</span>
                </a></Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <strong>Kategori</strong>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Tenda & Property</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Matras</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Hammock</a>
                </div>
              </li>
              <Search/>
              {/* <form target="_blank" role="form" action="#" class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form> */}
              <Link to="/transaksi"><li class="nav-item">
                {/* <!-- <a class="nav-link" href="#">Services</a> --> */}
                <div class="icon-wrap"><a href="#"><i class="nav-link icon-sm fa fa-user"></i></a></div>
              </li></Link>
              <Link to="/signin"><li><div class="text-wrap text-light" onClick={() => this.props.signOut()}>Sign Out</div></li></Link>
              <li class="nav-item">
                {/* <!-- <a class="nav-link" href="#">About</a> --> */}
                <Link to="/cart"><div class="icon-wrap"><a href="#"><i class="nav-link icon-sm fa fa-shopping-cart"></i></a></div></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    );
}
if ((this.props.is_login)&&(this.props.status=="merchant")){
  return (
  <div className="Header">
      <a href="#"><img class="logo-footer" src={require("../assets/img/250px-Yucamp_logo.png")} style={{marginTop:10, marginLeft:90, height:75,}}/></a>
  <img class="logo-footer" src={require("../assets/img/image.png")} style={{marginTop:10, marginLeft:90, height:75,}}/>
  <nav class="navbar navbar-expand-lg navbar-light sticky-top">
      <div class="container">
        <a class="navbar-brand" href="#"><strong>CAMP WIKI</strong></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link to="/"><a class="nav-link" href="#"><strong>Home</strong>
                  <span class="sr-only">(current)</span>
              </a></Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <strong>Kategori</strong>
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Tenda & Property</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Matras</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Hammock</a>
              </div>
            </li>
            <Search/>
            {/* <form target="_blank" role="form" action="#" class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
            <Link to="/dashboard"><li class="nav-item">
              {/* <!-- <a class="nav-link" href="#">Services</a> --> */}
              <div class="icon-wrap"><a href="#"><i class="nav-link icon-sm fa fa-user"></i></a></div>
            </li></Link>
            <Link to="/signin"><li><div class="text-wrap text-light" onClick={() => this.props.signOut()}>Sign Out</div></li></Link>
            <li class="nav-item">
              {/* <!-- <a class="nav-link" href="#">About</a> --> */}
              {/* <Link to="/cart"><div class="icon-wrap"><a href="#"><i class="nav-link icon-sm fa fa-shopping-cart"></i></a></div></Link> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  );
}
else{    return (
  <div className="Header">
      <a href="#"><img class="logo-footer" src={require("../assets/img/250px-Yucamp_logo.png")} style={{marginTop:10, marginLeft:90, height:75,}}/></a>
  <img class="logo-footer" src={require("../assets/img/image.png")} style={{marginTop:10, marginLeft:90, height:75,}}/>
  <nav class="navbar navbar-expand-lg navbar-light sticky-top">
      <div class="container">
        <a class="navbar-brand" href="#"><strong>CAMP WIKI</strong></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link to="/"><a class="nav-link" href="#"><strong>Home</strong>
                  <span class="sr-only">(current)</span>
              </a></Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <strong>Kategori</strong>
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Tenda & Property</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Matras</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Hammock</a>
              </div>
            </li>
            <Search/>
            {/* <form target="_blank" role="form" action="#" class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
            <Link to="/signin"><li class="nav-item"><div class="text-wrap text-light nav-link">Sign In</div></li></Link>
            <Link to="/signup"><li class="nav-item"><div class="text-wrap text-light nav-link">Sign Up</div></li></Link>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  );}
}
}
export default connect("token,is_login,full_name,email,username,password,status", actions)(withRouter(Header));
// export default Header;
