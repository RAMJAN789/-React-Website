import React, {Component} from "react";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Home extends Component{
    state ={

        general:[],
        chef:[],
        feed:[]
    }
    componentDidMount(){
        fetch('http://localhost/Laravel/project/indexAPI')
        .then(res => res.json())
        .then((data) => {
            this.setState({general:data.general})
            this.setState({chef:data.chef})
            this.setState({feed:data.feed})

            console.log(this.state.general)
            console.log(data.chef)
            console.log(data.feed)
        })
        .catch(console.log)
    }
    render(){
        return(
           
            <div>
           
             <section className="banner_part">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="banner_text">
                        <div className="banner_text_iner">
                            <h5>{this.state.general.slider_f_heading}</h5>
                            <h1>{this.state.general.slider_s_heading}</h1>
                            <p>{this.state.general.slider_description}</p>
                            <div className="banner_btn">
                                <div className="banner_btn_iner">
                                    <a href="#" className="btn_2">Reservation <img src={require('./asset/img/icon/left_1.svg')}/></a>
                                </div>
                                <a href="https://www.youtube.com/watch?v=pBFQdxA-apI" className="popup-youtube video_popup">
                                    <span><img src={require('./asset/img/icon/play.svg')}/></span> Watch our story</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="exclusive_item_part blog_item_section">
        <div className="container">
            <div className="row">
                <div className="col-xl-5">
                    <div className="section_tittle">
                        <p>Popular Dishes</p>
                        <h2>Our Exclusive Items</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-lg-4">
                    <div className="single_blog_item">
                        <div className="single_blog_img">
                            <img src={require('./asset/img/food_item/food_item_1.png')}/>
                        </div>
                        <div className="single_blog_text">
                            <h3>Indian Burger</h3>
                            <p>Was brean shed moveth day yielding tree yielding day were female and </p>
                            <a href="#" className="btn_3">Read More <img src={require('./asset/img/icon/left_2.svg')} /></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="single_blog_item">
                        <div className="single_blog_img">
                            <img src={require('./asset/img/food_item/food_item_2.png')}/>
                        </div>
                        <div className="single_blog_text">
                            <h3>Cremy Noodles</h3>
                            <p>Was brean shed moveth day yielding tree yielding day were female and </p>
                            <a href="#" className="btn_3">Read More <img src={require('./asset/img/icon/left_2.svg')} /></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="single_blog_item">
                        <div className="single_blog_img">
                            <img src={require('./asset/img/food_item/food_item_3.png')}/>
                        </div>
                        <div className="single_blog_text">
                            <h3>Honey Meat</h3>
                            <p>Was brean shed moveth day yielding tree yielding day were female and </p>
                            <a href="#" className="btn_3">Read More <img src={require('./asset/img/icon/left_2.svg')} /></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 d-none d-sm-block d-lg-none">
                    <div className="single_blog_item">
                        <div className="single_blog_img">
                            <img src={require('./asset/img/food_item/food_item_1.png')} />
                        </div>
                        <div className="single_blog_text">
                            <h3>Cremy Noodles</h3>
                            <p>Was brean shed moveth day yielding tree yielding day were female and </p>
                            <a href="#" className="btn_3">Read More <img src={require('./asset/img/icon/left_2.svg')} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="about_part">
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
                        <h2>{this.state.general.history_title}</h2>
                        <h4>{this.state.general.history_sub_title}</h4>
                        <p>{this.state.general.history_description}</p>
                        <a href="#" className="btn_3">Read More <img src={require('./asset/img/icon/left_2.svg')} /></a>
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

     <section className="food_menu gray_bg">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-5">
                    <div className="section_tittle">
                        <p>Popular Menu</p>
                        <h2>Delicious Food Menu</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="nav nav-tabs food_menu_nav" id="myTab" role="tablist">
                        <a className="active" id="Special-tab" data-toggle="tab" href="#Special" role="tab"
                            aria-controls="Special" aria-selected="false">Special <img src={require('./asset/img/icon/play.svg')} /></a>
                        <a id="Breakfast-tab" data-toggle="tab" href="#Breakfast" role="tab" aria-controls="Breakfast"
                            aria-selected="false">Breakfast <img src={require('./asset/img/icon/play.svg')} /></a>
                        <a id="Launch-tab" data-toggle="tab" href="#Launch" role="tab" aria-controls="Launch"
                            aria-selected="false">Launch <img src={require('./asset/img/icon/play.svg')} /></a>
                        <a id="Dinner-tab" data-toggle="tab" href="#Dinner" role="tab" aria-controls="Dinner"
                            aria-selected="false">Dinner <img src={require('./asset/img/icon/play.svg')} /> </a>
                        <a id="Sneaks-tab" data-toggle="tab" href="#Sneaks" role="tab" aria-controls="Sneaks"
                            aria-selected="false">Sneaks <img src={require('./asset/img/icon/play.svg')} /></a>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active single-member" id="Special" role="tabpanel"
                            aria-labelledby="Special-tab">
                            <div className="row">
                                <div className="col-sm-6 col-lg-6">
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_1.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Pork Sandwich</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_2.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Roasted Marrow</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_3.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Summer Cooking</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_4.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Easter Delight</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_5.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Tiener Schnitze</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_6.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Chicken Roast</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade single-member" id="Breakfast" role="tabpanel"
                            aria-labelledby="Breakfast-tab">
                            <div className="row">
                                <div className="col-sm-6 col-lg-6">
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_4.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Easter Delight</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_5.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Tiener Schnitze</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_6.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Chicken Roast</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_1.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Pork Sandwich</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_2.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Roasted Marrow</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_3.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Summer Cooking</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade single-member" id="Launch" role="tabpanel"
                            aria-labelledby="Launch-tab">
                            <div className="row">
                                <div className="col-sm-6 col-lg-6">
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_1.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Pork Sandwich</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_2.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Roasted Marrow</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_3.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Summer Cooking</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_4.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Easter Delight</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_5.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Tiener Schnitze</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_6.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Chicken Roast</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="tab-pane fade single-member" id="Dinner" role="tabpanel"
                            aria-labelledby="Dinner-tab">
                            <div className="row">
                                <div className="col-sm-6 col-lg-6">
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_4.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Easter Delight</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_5.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Tiener Schnitze</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_6.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Chicken Roast</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_1.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Pork Sandwich</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_2.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Roasted Marrow</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_3.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Summer Cooking</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="tab-pane fade single-member" id="Sneaks" role="tabpanel"
                            aria-labelledby="Sneaks-tab">
                            <div className="row">
                                <div className="col-sm-6 col-lg-6">
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_1.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Pork Sandwich</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_2.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Roasted Marrow</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_3.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Summer Cooking</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_4.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Easter Delight</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_5.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Tiener Schnitze</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                    <div className="single_food_item media">
                                        <img src={require('./asset/img/food_menu/single_food_6.png')} />
                                        <div className="media-body align-self-center">
                                            <h3>Chicken Roast</h3>
                                            <p>They're wherein heaven seed hath nothing</p>
                                            <h5>$40.00</h5>
                                        </div>
                                    </div>
                                </div>
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
                {this.state.chef.map((v,i)=><ChefBlock single={v}/>)}
                
                
            </div>
        </div>
    </section>

     <section className="regervation_part section_padding">
        <div className="container">
            <div className="row">
                <div className="col-xl-5">
                    <div className="section_tittle">
                        <p>Reservation</p>
                        <h2>Book A Table</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="regervation_part_iner">
                        <form>
                            <div className="form-row">
                              
                                <div className="form-group col-md-6">
                                    <input type="password" className="form-control" id="inputPassword4"
                                        placeholder="Email address *"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <select className="form-control" id="Select">
                                        <option value="1" selected>Persons *</option>
                                        <option value="2">Number of guests 1</option>
                                        <option value="3">Number of guests 2</option>
                                        <option value="4">Number of guests 3</option>
                                        <option value="5">Number of guests 4</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" id="pnone" placeholder="Phone number *"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <div className="input-group date">
                                        <input id="datepicker" type="text" className="form-control" placeholder="Date *" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <select className="form-control" id="Select2">
                                        <option value="" selected>Time *</option>
                                        <option value="1">8 AM TO 10AM</option>
                                        <option value="1">10 AM TO 12PM</option>
                                        <option value="1">12PM TO 2PM</option>
                                        <option value="1">2PM TO 4PM</option>
                                        <option value="1">4PM TO 6PM</option>
                                        <option value="1">6PM TO 8PM</option>
                                        <option value="1">4PM TO 10PM</option>
                                        <option value="1">10PM TO 12PM</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-12">
                                    <textarea className="form-control" id="Textarea" rows="4"
                                        placeholder="Your Note *"></textarea>
                                </div>
                            </div>


                            <div className="regerv_btn">
                                <a href="#" className="btn_4">Book A Table</a>
                            </div>
                        </form>
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
                         {this.state.feed.map((v,i)=><FeedBlock single1={v}/>)}
                       
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

        




            </div>
           
            );
        }
    }


    class ChefBlock extends Component{

        render(){
            var url="http://localhost/Laravel/project/public/img/";
            return(
              
                 <div className="col-sm-6 col-lg-4">
                    <div className="single_blog_item">
                        <div className="single_blog_img">
                            <img src={url+this.props.single.photo} />
                        </div>
                        <div className="single_blog_text text-center">
                            <h3>{this.props.single.name}</h3>
                            <p>{this.props.single.designation}</p>
                            <div className="social_icon">
                                <a href="/"> <i className="ti-facebook"></i> </a>
                                <a href="/"> <i className="ti-twitter-alt"></i> </a>
                                <a href="/"> <i className="ti-instagram"></i> </a>
                                <a href="/"> <i className="ti-skype"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>  
                
                )
        }
    }



    class FeedBlock extends Component{

        render(){
             var url="http://localhost/Laravel/project/public/img/";
            return(
                 <div className="client_review_single media">
                            <div className="client_img align-self-center">
                                <img src={url+this.props.single1.photo} />
                            </div>
                            <div className="client_review_text media-body">
                                <p>{this.props.single1.heading}</p>
                                <h4>{this.props.single1.description}</h4>
                            </div>
                           
                        </div>
                        
                )
        }
    }

    export default Home;