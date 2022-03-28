import React, {Component} from "react";
import Home from "./Home.js";
import About from "./About.js";
import Menu from "./Menu.js";
import Chefs from "./Chefs.js";
import Contact from "./Contact.js";
import {Route,NavLink,HashRouter} from "react-router-dom";


class Main extends Component{

	render(){
		return(
            <HashRouter>
			<div>
			<header className="main_menu home_menu">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                  
		<nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="./"> <img src={require('./asset/img/logo.png')} /> </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse main-menu-item justify-content-end"
                            id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink exact to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/menu">Menu</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/chefs">Chefs</NavLink>
                                </li>
                                
                                <li className="nav-item">
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="menu_btn">
                            <a href="#" className="btn_1 d-none d-sm-block">book a tabel</a>
                        </div>
                    </nav>
                  </div>
            </div>
        </div>
    </header>


                   
    <div className="content">
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/menu" component={Menu}/>
        <Route path="/chefs" component={Chefs}/>
        <Route path="/contact" component={Contact}/>
    </div>




    <footer className="footer-area">
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-sm-6 col-md-3 col-lg-3">
                    <div className="single-footer-widget footer_1">
                        <h4>About Us</h4>
                        <p>Heaven fruitful doesn't over for these theheaven fruitful doe over days
                            appear creeping seasons sad behold beari ath of it fly signs bearing
                            be one blessed after.</p>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-md-2 col-lg-3">
                    <div className="single-footer-widget footer_2">
                        <h4>Important Link</h4>
                        <div className="contact_info">
                            <ul>
                                <li><a href="#">WHMCS-bridge</a></li>
                                <li><a href="#"> Search Domain</a></li>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Shopping Cart</a></li>
                                <li><a href="#"> Our Shop</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-md-3 col-lg-3">
                    <div className="single-footer-widget footer_2">
                        <h4>Contact us</h4>
                        <div className="contact_info">
                            <p><span> Address :</span>Hath of it fly signs bear be one blessed after </p>
                            <p><span> Phone :</span> +2 36 265 (8060)</p>
                            <p><span> Email : </span>info@colorlib.com </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-md-4 col-lg-3">
                    <div className="single-footer-widget footer_3">
                        <h4>Newsletter</h4>
                        <p>Heaven fruitful doesn't over lesser in days. Appear creeping seas</p>
                        <form action="#">
                            <div className="form-group">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder='Email Address'
                                        onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'"/>
                                    <div className="input-group-append">
                                        <button className="btn" type="button"><i className="fas fa-paper-plane"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="copyright_part_text">
                <div className="row">
                    
                    <div className="col-lg-4">
                        <div className="copyright_social_icon text-right">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="ti-dribbble"></i></a>
                            <a href="#"><i className="fab fa-behance"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>


    


			</div>
            </HashRouter>
			);
		}
	}

	export default Main;