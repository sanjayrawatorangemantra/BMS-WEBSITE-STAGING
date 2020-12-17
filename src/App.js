/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./Header";
import Footer from "./Footer";
import GetApiCall from "./GetApi";
import Parser from "html-react-parser";
import Notiflix from "notiflix-react";
import moment from "moment";
import ItemsCarousel from "react-items-carousel";
import range from "lodash/range";
import PostApiCall from "./Api";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DiwaliOffersHP from "./DiwaliOffersHP";
import { connect } from "react-redux";
import { setcartitemcount, setcartamount } from "./Actions/actionType";
import FoodHP from "./HomePage/FoodHP";
import FootwearHP from "./HomePage/FootwearHP";
import SocksHP from "./HomePage/SocksHP";
import BannerHP from "./HomePage/BannerHP";
import HealthHP from "./HomePage/HealthHP";
import CovidHP from "./HomePage/CovidHP";
import AccessoriesHP from "./HomePage/AccessoriesHP";

var  testimonialSlider = {}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Device: [],
      Foot: [],
      Book: [],
      activeItemIndex: 0,
      Blog: [],
      Doctor: [],
      DoctorRef: [],
      Nutri: [],

      Food: [],
      Footwear: [],
      Socks: [],
      ProductData: [],

      bannerHome: [],
      images: [],

      Testimonials : [],
      TestimonialsRef : [],
    };
  }

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  componentDidMount(){
    GetApiCall.getRequest("Get_TestimonialWebsite").then(resultdes =>
      resultdes.json().then(obj => {
     
      
      var dt = obj.data.filter(val=> val.fld_id != 1)
      
      console.log(dt)

        this.setState({
         TestimonialsRef : obj.data,
         Testimonials : dt
        })
    
      }))
  }

  render(){

    if(this.state.Testimonials.length == 1){

     testimonialSlider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 990,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
      
          {
            breakpoint: 740,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      }

    }else if(this.state.Testimonials.length == 2){
       testimonialSlider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        autoplay: true,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 990,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
      
          {
            breakpoint: 740,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      }
    }else
    {
        testimonialSlider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        autoplay: true,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 990,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
      
          {
            breakpoint: 740,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      }
    }
   
    return (
      <div className="App">
        <div class="page-wrapper">
          <Menu></Menu>

          <main class="main">
           <BannerHP />
            <div>
              <DiwaliOffersHP />
           
            </div>
           <FoodHP />
           <FootwearHP/>
           <SocksHP />
          <CovidHP />
          <AccessoriesHP />
        <HealthHP />

        <div class="container" style={{display : this.state.TestimonialsRef[0]!= undefined && this.state.TestimonialsRef[0].fld_showOnWebsite == 'Yes' ? '' : 'none'}}>
              <div class="app-section margin-top margin-bottom">
                <div class="app-section-bg">
                  <div class="row ">
                    <div class="col-md-6">
                    <h3 class="app-title testimonial-title">
                        Testimonials
                      </h3>
                    </div>
                    <div class="col-md-6">
                    <a href="/testimonials" class="view-all-btn" style={{marginTop:"0px"}}>View All</a>
                      </div>
                    <div class="col-md-12">
                    
                      <Slider {...testimonialSlider}>
                        {this.state.Testimonials.map((data,index)=>(

                              <div class="testimonial center-block" >
                              <img src={data.fld_imageurl == null || data.fld_imageurl == '' ? "assets/images/user.png" : data.fld_imageurl} class="testimonial-img"></img>
                              <p class="user-text">
                              
                                {data.fld_feedback.length > 200 ?
                                 [`${data.fld_feedback.substring(0, 200)}...`, <a href="/testimonials">Read More</a>]: data.fld_feedback
                                } 
                              </p>
                              <p class="user-name"> {data.fld_name}</p>
                              <p class="testimonial-city">
                               
                               {data.fld_rating == 1 ? 
                                 <p class="testimonial-city">
                                <i class="fa fa-star" aria-hidden="true" style={{color:'#FF9529'}}></i>
                                </p>
                                :data.fld_rating == 2 ? 
                                <p class="testimonial-city">
                                <i class="fa fa-star" aria-hidden="true" style={{color:'#FF9529'}}></i>
                                <i class="fa fa-star" aria-hidden="true" style={{color:'#FF9529'}}></i>
                                </p> :
                                data.fld_rating == 3 ? 
                                <p class="testimonial-city">
                                <i class="fa fa-star" aria-hidden="true" style={{color:'#FF9529'}}></i>
                                <i class="fa fa-star" aria-hidden="true" style={{color:'#FF9529'}}></i>
                                <i class="fa fa-star" aria-hidden="true" style={{color:'#FF9529'}}></i>
                                </p> :
                                    data.fld_rating == 4 ? 
                                    <p class="testimonial-city">
                                    <i class="fa fa-star" aria-hidden="true" style={{color:'#FF9529'}}></i>
                                    <i class="fa fa-star" aria-hidden="true" style={{color:'#FF9529'}}></i>
                                    <i class="fa fa-star" aria-hidden="true" style={{color:'#FF9529'}}></i>
                                    <i class="fa fa-star" aria-hidden="true" style={{color:'#FF9529'}}></i>
                                    </p> :
                                       <p class="testimonial-city">
                                       <i class="fa fa-star" aria-hidden="true" style={{color:'#FF9529'}}></i>
                                       <i class="fa fa-star" aria-hidden="true" style={{color:'#FF9529'}}></i>
                                       <i class="fa fa-star" aria-hidden="true" style={{color:'#FF9529'}}></i>
                                       <i class="fa fa-star" aria-hidden="true" style={{color:'#FF9529'}}></i>
                                       <i class="fa fa-star" aria-hidden="true" style={{color:'#FF9529'}}></i>
                                       </p>
                               }
                           
                              
                             

                              </p>
                              </div>

                        ))}
                      
                  
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>

   
         
            <div class="clearfix"></div>

         

            <div class="clearfix"></div>

          

            <div class="container margin-top"></div>
          </main>
        
          <Footer></Footer>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    CartReducer: state.CartReducer,
  };
}

export default connect(mapStateToProps, {
  setcartitemcount,
  setcartamount,
})(App);
