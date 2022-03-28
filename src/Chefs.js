import React, {Component} from "react";


class Chefs extends Component{

    render(){
        return(
           
            <div>

     <section class="breadcrumb breadcrumb_bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb_iner text-center">
                        <div class="breadcrumb_iner_item">
                            <h2>Experienced Chefs</h2>
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

    <section className="intro_video_bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="intro_video_iner text-center">
                        <h2>Expect The Best</h2>
                        <div className="intro_video_icon">
                            <a id="play-video_1" className="video-play-button popup-youtube"
                                href="https://www.youtube.com/watch?v=pBFQdxA-apI">
                                <span className="ti-control-play"></span>
                            </a>
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

    export default Chefs;           