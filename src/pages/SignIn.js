import React, { Component } from "react";
// import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';
// import "../styles/App.css";

class SignIn extends Component {
    postLogin = () => {
        this.props.signIn().then(() => {
        console.log("this", this);
        this.props.history.replace("/");
        })
    };
    render() {
        console.log("state", this.props.email);
        return (
            <div style={{backgroundImage:"url("+"https://vignette.wikia.nocookie.net/yuru-camp/images/c/ca/Relaxed_Hot_Pot_camp.png/revision/latest?cb=20180119214453"+")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',}}>
            <section className="content signin text-center" style={{paddingBottom:'10%'}}>
                {/* <img src={require("../assets/img/user.jpg")}/> */}
                <form onSubmit={e => e.preventDefault()}>
                    <h1 style={{ marginBottom: "2%", paddingTop: "80px" }}>Sign In</h1>
                    <img src={require("../assets/img/250px-Yucamp_logo.png")} className="logo-animex"/>
                    {/* <img src={require("../images/img/background-auntum.jpg")} style={{width:"100%"}}/> */}
                    <div style={{ marginBottom: "2%" }}>
                        {/* <div class="input-group text-center">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                        </div> */}
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            onChange={e => this.props.setField(e)} //changeInput
                        />
                        {/* </div> */}
                        <br /> <br />
                        {/* <div class="input-group text-center">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                        </div> */}
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={e => this.props.setField(e)} //changeInput
                        />
                        {/* </div> */}
                    </div>
                    <button style={{ marginRight: "2%" }} onClick={() => this.postLogin()} className="btn btn-primary">SignIn</button>
                    <button type="reset" className="btn btn-primary">Reset</button>
                </form>
            </section>
            </div>
        );
    }
}

export default connect("token,is_login,full_name,email,username,password", actions)(withRouter(SignIn));