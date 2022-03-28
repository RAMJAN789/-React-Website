import React, {Component} from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class About extends Component{

    render(){
        return(
           
            <div>

    		<section className="breadcrumb breadcrumb_bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb_iner text-center">
                        <div className="breadcrumb_iner_item">
                            <h2>About Us</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     <section className="about_part about_bg">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-sm-4 col-lg-5 offset-lg-1">
                    <div className="about_img">
                        <img src={require('./asset/img/about.png')} />
                    </div>
                </div>
                <div className="col-sm-8 col-lg-4">
                    <div className="about_text">
                        <h5>Our History</h5>
                        <h2>Where The Food’s As Good
                            As The Root Beer.</h2>
                        <h4>Satisfying people hunger for simple pleasures</h4>
                        <p>May over was. Be signs two. Spirit. Brought said dry own firmament lesser best sixth deep
                            abundantly bearing, him, gathering you
                            blessed bearing he our position best ticket in month hole deep </p>
                        <a href="#" className="btn_3">Read More <img src={require('./asset/img/icon/left_2.svg')} /></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="review_part gray_bg section_padding">
        <div className="container">
            <div className="row">
                <div className="col-xl-5">
                    <div className="section_tittle">
                        <p>Testimonials</p>
                        <h2>Customers Feedback</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-11">
                    <div className="client_review_part owl-carousel">
                       
                        <div className="client_review_single media">
                            <div className="client_img align-self-center">
                                <img src={require('./asset/img/client/client_1.png')} />
                            </div>
                            <div className="client_review_text media-body">
                                <p>Also made from. Give may saying meat there from heaven it lights face had is gathered
                                    god dea earth light for life may itself shall whales made they're blessed whales
                                    also made from give
                                    may saying meat. There from heaven it lights face had amazing place</p>
                                <h4>Mosan Cameron, <span>Executive of fedex</span></h4>
                            </div>
                        </div>
                        <div className="client_review_single media">
                            <div className="client_img align-self-center">
                                <img src={require('./asset/img/client/client_1.png')} />
                            </div>
                            <div className="client_review_text media-body">
                                <p>Also made from. Give may saying meat there from heaven it lights face had is gathered
                                    god dea earth light for life may itself shall whales made they're blessed whales
                                    also made from give
                                    may saying meat. There from heaven it lights face had amazing place</p>
                                <h4>Mosan Cameron, <span>Executive of fedex</span></h4>
                            </div>
                        </div>
                        <div className="client_review_single media">
                            <div className="client_img align-self-center">
                                <img src={require('./asset/img/client/client_1.png')} />
                            </div>
                            <div className="client_review_text media-body">
                                <p>Also made from. Give may saying meat there from heaven it lights face had is gathered
                                    god dea earth light for life may itself shall whales made they're blessed whales
                                    also made from give
                                    may saying meat. There from heaven it lights face had amazing place</p>
                                <h4>Mosan Cameron, <span>Executive of fedex</span></h4>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="chefs_part blog_item_section section_padding">
        <div className="container">
            <div className="row">
                <div className="col-xl-5">
                    <div className="section_tittle">
                        <p>Team Member</p>
                        <h2>Our Experience Chefs</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-lg-4">
                    <div className="single_blog_item">
                        <div className="single_blog_img">
                            <img src={require('./asset/img/team/chefs_1.png')} />
                        </div>
                        <div className="single_blog_text text-center">
                            <h3>Adam Billiard</h3>
                            <p>Chef Master</p>
                            <div className="social_icon">
                                <a href="#"> <i className="ti-facebook"></i> </a>
                                <a href="#"> <i className="ti-twitter-alt"></i> </a>
                                <a href="#"> <i className="ti-instagram"></i> </a>
                                <a href="#"> <i className="ti-skype"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="single_blog_item">
                        <div className="single_blog_img">
                            <img src={require('./asset/img/team/chefs_2.png')} />
                        </div>
                        <div className="single_blog_text text-center">
                            <h3>Fred Macyard</h3>
                            <p>Chef Master</p>
                            <div className="social_icon">
                                <a href="#"> <i className="ti-facebook"></i> </a>
                                <a href="#"> <i className="ti-twitter-alt"></i> </a>
                                <a href="#"> <i className="ti-instagram"></i> </a>
                                <a href="#"> <i className="ti-skype"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="single_blog_item">
                        <div className="single_blog_img">
                            <img src={require('./asset/img/team/chefs_3.png')} />
                        </div>
                        <div className="single_blog_text text-center">
                            <h3>Justin Stuard</h3>
                            <p>Chef Master</p>
                            <div className="social_icon">
                                <a href="#"> <i className="ti-facebook"></i> </a>
                                <a href="#"> <i className="ti-twitter-alt"></i> </a>
                                <a href="#"> <i className="ti-instagram"></i> </a>
                                <a href="#"> <i className="ti-skype"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-none d-sm-block d-lg-none">
                    <div className="single_blog_item">
                        <div className="single_blog_img">
                            <img src={require('./asset/img/team/chefs_1.png')} />
                        </div>
                        <div className="single_blog_text text-center">
                            <h3>Justin Stuard</h3>
                            <p>Chef Master</p>
                            <div className="social_icon">
                                <a href="#"> <i className="ti-facebook"></i> </a>
                                <a href="#"> <i className="ti-twitter-alt"></i> </a>
                                <a href="#"> <i className="ti-instagram"></i> </a>
                                <a href="#"> <i className="ti-skype"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>









              </div>
           
            );
        }
    }

    export default About;          