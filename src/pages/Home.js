import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../store";
import {withRouter} from "react-router-dom";
// import logo from './logo.svg';
// import SideList from '../components/SideList.js'
import ListNews from '../components/ListNews'

//dummy date
import az from "../assets/img/250px-Yucamp_logo.png"
import { async } from 'q';

//News API
const apiKey = "72aadd1aff8c490ea5c90d2e5225a042";
const baseUrl = "https://newsapi.org/v2/"
const urlHeadline = baseUrl + "top-headlines?" + "country=id&" + "pageSize=3&"+ "apiKey=" + apiKey;
const urlNews = baseUrl + "everything?" +"q=meme&" + "pageSize=3&"+ "apiKey=" + apiKey;

class Home extends Component {

componentDidMount = () =>{
    this.props.cariItemPublic();
}; 

render() {
    // console.log("here render")
    // // const news = this.state.ListNews;
    // console.log("is_login", this.props.is_login);
    // if(!this.props.is_login){
    //     return <Redirect to={{ pathname: "/signin"}}/>;
    // } else {
    return (
    <div className="Home">
      {/* <!-- Banner --> */}
      <header>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            {/* <!-- Slide One - Set the background image for this slide in the line below --> */}
            <div class="carousel-item active" style={{backgroundImage: "url("+"../assets/img/Yuru.Camp.full.2186360.jpg"+")",}}>
              {/* <!-- <div class="carousel-caption d-none d-md-block">
                <h2 class="display-4">First Slide</h2>
                <p class="lead">This is a description for the first slide.</p>
              </div> --> */}
            </div>
            {/* <!-- Slide Two - Set the background image for this slide in the line below --> */}
            <div class="carousel-item" style={{backgroundImage: "url("+"../assets/img/yuruCamp2.jpg"+")",}}>
              {/* <!-- <div class="carousel-caption d-none d-md-block">
                <h2 class="display-4">Second Slide</h2>
                <p class="lead">This is a description for the second slide.</p>
              </div> --> */}
            </div>
            {/* <!-- Slide Three - Set the background image for this slide in the line below --> */}
            <div class="carousel-item" style={{backgroundImage: "url("+"../assets/img/yurucamp3.jpg"+")",}}>
              {/* <!-- <div class="carousel-caption d-none d-md-block">
                <h2 class="display-4">Third Slide</h2>
                <p class="lead">This is a description for the third slide.</p>
              </div> --> */}
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
        </div>
      </header>
      {/* <!-- isi --> */}
      <div class="isi">
        <div class="container">

            <div class="row">
        
              <div class="col-lg-4">
                  <div id="carouselkategori" class="carousel slide" data-ride="carousel">
                      <ol class="carousel-indicators">
                        <li data-target="#carouselkategori" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselkategori" data-slide-to="1"></li>
                        <li data-target="#carouselkategori" data-slide-to="2"></li>
                      </ol>
                      <div class="carousel-inner" role="listbox">
                        {/* <!-- Slide One - Set the background image for this slide in the line below --> */}
                        <div class="carousel-item active" style={{backgroundImage: "url("+"../assets/img/kategori_tenda.jpg"+")",}}>
                          <div class="carousel-caption d-none d-md-block">
                            <h5 class="display-4" style={{color:"black", backgroundColor: "white",}}>Tenda</h5>
                          </div>
                        </div>
                        {/* <!-- Slide Two - Set the background image for this slide in the line below --> */}
                        <div class="carousel-item" style={{backgroundImage: "url("+"../assets/img/kategori_matras.jpg"+")",}}>
                          <div class="carousel-caption d-none d-md-block">
                            <h5 class="display-4" style={{color:"black", backgroundColor: "white",}}>Matras</h5>
                          </div>
                        </div>
                        {/* <!-- Slide Three - Set the background image for this slide in the line below --> */}
                        <div class="carousel-item" style={{backgroundImage: "url("+"../assets/img/kategori_hammock.jpg"+")",}}>
                          <div class="carousel-caption d-none d-md-block">
                            <h5 class="display-4" style={{color:"black", backgroundColor: "white",}}>Hammock</h5>
                            {/* <!-- <p class="lead">This is a description for the third slide.</p> --> */}
                          </div>
                        </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselkategori" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselkategori" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                <h1 class="my-4">Popular Kategori</h1>
        
              </div>
              {/* <!-- /.col-lg-4 --> */}
        
              <div class="col-lg-8">
                <div class="row">
        
                  {/* <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100">
                      <a href="#"><img class="card-img-top" src={require("../assets/img/hammock4.jpg")} alt=""/></a>
                      <div class="card-body">
                        <h4 class="card-title">
                          <a href="#">Nice Hammock</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p class="card-text">Lihat Detail</p>
                      </div>
                      <div class="card-footer">
                        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                      </div>
                    </div>
                  </div>
        
                  <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100">
                      <a href="#"><img class="card-img-top" src={require("../assets/img/tenda4.jpg")} alt=""/></a>
                      <div class="card-body">
                        <h4 class="card-title">
                          <a href="#">Item Two</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p class="card-text">Lihat Detail</p>
                      </div>
                      <div class="card-footer">
                        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                      </div>
                    </div>
                  </div> */}
        
                  {/* <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100">
                      <a href="#"><img class="card-img-top" src={require("../assets/img/tenda5.jpg")} alt=""/></a>
                      <div class="card-body">
                        <h4 class="card-title">
                          <a href="#">Item Three</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p class="card-text">Lihat Detail</p>
                      </div>
                      <div class="card-footer">
                        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                      </div>
                    </div>
                  </div> */}
                    {this.props.listItems.map((item,key) =>{
                        const src_img = item.url_picture === null ? az : item.url_picture;
                        const kategori = item.kategori !== null ? item.kategori : "";
                        return <ListNews index={key} id={item.id} harga={item.harga} merek={item.merek} nama={item.nama} img={src_img} kategori={kategori}/>;
                    })}
        
                </div>
                {/* <!-- /.row --> */}
        
              </div>
              {/* <!-- /.col-lg-8 --> */}
        
            </div>
            {/* <!-- /.row --> */}
        
          </div>
</div>

<section id="Hammock" class="section-content padding-bottom">
    <div class="container">
    
    <h4 class="title-text">Hammock</h4>
    <div class="slick-slider" data-slick='{"slidesToShow": 4, "slidesToScroll": 1}'>
        <div class="item-slide p-2">
    <figure class="card card-product">
        <span class="badge-new"> NEW </span>
        <div class="img-wrap"> <img src={require("../assets/img/hammock1.jpg")}/> </div>
        <figcaption class="info-wrap text-center">
            <h6 class="title text-truncate"><a href="#">Hammock Baru</a></h6>
        </figcaption>
    </figure>
        </div>
        <div class="item-slide p-2">
    <figure class="card card-product">
        <div class="img-wrap"> <img src={require("../assets/img/hammock2.jpg")}/> </div>
        <figcaption class="info-wrap text-center">
            <h6 class="title text-truncate"><a href="#">Good Hammock</a></h6>
        </figcaption>
    </figure>
        </div>
        <div class="item-slide p-2">
    <figure class="card card-product">
        <div class="img-wrap"> <img src={require("../assets/img/hammock3.jpg")}/> </div>
        <figcaption class="info-wrap text-center">
            <h6 class="title text-truncate"><a href="#">Fair Hammock</a></h6>
        </figcaption>
    </figure>
        </div>
        <div class="item-slide p-2">
    <figure class="card card-product">
        <div class="img-wrap"> <img src={require("../assets/img/hammock4.jpg")}/> </div>
        <figcaption class="info-wrap text-center">
            <h6 class="title text-truncate"><a href="#">Nice Hammock</a></h6>
        </figcaption>
    </figure>
        </div>
        <div class="item-slide p-2">
    <figure class="card card-product">
        <div class="img-wrap"> <img src={require("../assets/img/hammock5.jpg")}/> </div>
        <figcaption class="info-wrap text-center">
            <h6 class="title text-truncate"><a href="#">Hammock in</a></h6>
        </figcaption>
    </figure>
        </div>
    </div>
    
    </div>
    </section>

    <section id="tenda" class="section-content padding-bottom">
        <div class="container">
        
        <h4 class="title-text">Tenda</h4>
        <div class="slick-slider" data-slick='{"slidesToShow": 4, "slidesToScroll": 1}'>
            <div class="item-slide p-2">
        <figure class="card card-product">
            <span class="badge-new"> NEW </span>
            <div class="img-wrap"> <img src={require("../assets/img/tenda1.jpg")}/> </div>
            <figcaption class="info-wrap text-center">
                <h6 class="title text-truncate"><a href="product-detail.html">Tenda Baru</a></h6>
            </figcaption>
        </figure>
            </div>
            <div class="item-slide p-2">
        <figure class="card card-product">
            <div class="img-wrap"> <img src={require("../assets/img/tenda2.jpg")}/> </div>
            <figcaption class="info-wrap text-center">
                <h6 class="title text-truncate"><a href="product-detail.html">Tenda Kipa</a></h6>
            </figcaption>
        </figure>
            </div>
            <div class="item-slide p-2">
        <figure class="card card-product">
            <div class="img-wrap"> <img src={require("../assets/img/tenda3.jpg")}/> </div>
            <figcaption class="info-wrap text-center">
                <h6 class="title text-truncate"><a href="product-detail.html">Third Tenda</a></h6>
            </figcaption>
        </figure> 
            </div>
            <div class="item-slide p-2">
        <figure class="card card-product">
            <div class="img-wrap"> <img src={require("../assets/img/tenda4.jpg")}/> </div>
            <figcaption class="info-wrap text-center">
                <h6 class="title text-truncate"><a href="product-detail.html">Tenda Biru</a></h6>
            </figcaption>
        </figure>
            </div>
            <div class="item-slide p-2">
        <figure class="card card-product">
            <div class="img-wrap"> <img src={require("../assets/img/tenda5.jpg")}/> </div>
            <figcaption class="info-wrap text-center">
                <h6 class="title text-truncate"><a href="product-detail.html">Nice Tenda</a></h6>
            </figcaption>
        </figure>
            </div>
        </div>

        
        </div>
    </section>
    {/* <Footer/> */}
    </div>
    );
  }}
// }

export default connect("is_login,email,full_name,listItems,listTopNews", actions)
(withRouter(Home));
// export default Home;