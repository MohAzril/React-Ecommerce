import React from "react";
import {Route,Switch} from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Detail from "../pages/Detail";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Transaksi from "../pages/Transaksi";
// import Blog from "../pages/Blog";
// import Profile from "../pages/Profile";
// import Isi from '../pages/page1';
// import Category from '../pages/Category';
// import Isi2 from '../pages/page2';
// import Isi3 from '../pages/page3';

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route exact path="/detail" component={Detail}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route exact path="/signin" component={SignIn}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
            <Route exact path="/transaksi" component={Transaksi}></Route>
            {/*<Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/news" component={Blog}></Route>
            <Route exact path="/category" component={Category}></Route> */}
            {/* <Route exact path="/blog" component={Blog}></Route> */}
        </Switch>
    );
}
export default MainRoute;
