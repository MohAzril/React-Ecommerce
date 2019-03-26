import React, { Component } from 'react';
// import logo from './logo.svg';
// import '../styles/style.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        {/* <!-- Footer --> */}
        <footer>
        	<div class="footer-top">
		        <div class="container">
		        	<div class="row">
		        		<div class="col-md-4 col-lg-3 footer-about wow fadeInUp">
		        			<img class="logo-footer" src={require("../assets/img/250px-Yucamp_logo.png")} alt="logo-footer" data-at2x="../assets/img/logo.png"/>
		        			<p>
		        				We are a young company who like to share camp experients
		        			</p>
		        			<p><a href="#">Our Team</a></p>
	                    </div>
		        		<div class="col-md-4 col-lg-4 offset-lg-1 footer-contact wow fadeInDown">
		        			<h3>Contact</h3>
		                	<p><i class="fas fa-map-marker-alt"></i> Koreng's , Malang Indonesia</p>
		                	<p><i class="fas fa-phone"></i> Phone: 0895367216949</p>
		                	<p><i class="fas fa-envelope"></i> Email: <a href="mailto:hello@domain.com">m42121l@gmail.com</a></p>
		                	{/* <p><i class="fab fa-skype"></i> Skype: you_online</p> */}
	                    </div>
	                    <div class="col-md-4 col-lg-4 footer-links wow fadeInUp">
	                    	<div class="row">
	                    		<div class="col">
	                    			<h3>Links</h3>
	                    		</div>
	                    	</div>
	                    	<div class="row">
	                    		<div class="col-md-6">
	                    			<p><a class="scroll-link" href="#top-content">Home</a></p>
	                    			<p><a class="scroll-link" href="#section-1">Tenda</a></p>
	                    			<p><a class="scroll-link" href="#section-2">Matras</a></p>
	                    			<p><a class="scroll-link" href="#section-3">Hammock</a></p>
	                    		</div>
	                    	</div>
	                    </div>
		            </div>
		        </div>
	        </div>
	        <div class="footer-bottom">
	        	<div class="container">
	        		<div class="row">
	           			<div class="col-md-6 footer-copyright">
	                    	&copy; CAMP WIKI
	                    </div>
	           			<div class="col-md-6 footer-social">
	                    	<a href="#"><i class="fab fa-facebook"></i></a> 
							<a href="#"><i class="fab fa-twitter"></i></a> 
							<a href="#"><i class="fab fa-google-plus-g"></i></a> 
							<a href="#"><i class="fab fa-instagram"></i></a> 
                            <a href="#"><i class="fab fa-pinterest"></i></a>
	                    </div>
	           		</div>
	        	</div>
	        </div>
        </footer>
				<script src="../assets/js/jquery-3.3.1.slim.min.js"></script>
				<script src="../assets/js/bootstrap.bundle.min.js"></script>
				{/* <!-- JS footer --> */}
				<script src="../assets/js/jquery-3.2.1.min.js"></script>
				<script src="../assets/js/jquery.backstretch.min.js"></script>
				<script src="../assets/js/wow.min.js"></script>
				<script src="../assets/js/scripts.js"></script>
				{/* <!-- jQuery --> */}
				<script src="../assets/plugins/slickslider/slick.min.js"></script>
      </div>
    );
  }
}

export default Footer;
