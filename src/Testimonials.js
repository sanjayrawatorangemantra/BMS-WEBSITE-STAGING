import React from 'react';
import logo from './logo.svg';

import Header from './Header'
import Footer from './Footer'
import News from './News';
import GetApiCall from "./GetApi";


class Testimonials extends React.Component {


    constructor(props){
        super(props)
        this.state={
          Testimonials : [],
          TestimonialsRef : [],
        }
      }
    
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
  return (

    <div className="App">    
<Header></Header>


      <div class="container" style={{display : this.state.TestimonialsRef[0]!= undefined && this.state.TestimonialsRef[0].fld_showOnWebsite == 'Yes' ? '' : 'none'}}>
            <div class="row">
                <div class="col-md-12">
                    <div class="testimonials-section">
                    <h2 class="title pull-left section-title"> Testimonials</h2>
                    {this.state.Testimonials.map((data,index)=>(
                    <div class="testimonial1">
                        <div class="row">
                            <div class="col-md-1">
                                <img src={data.fld_imageurl == null || data.fld_imageurl == '' ? "assets/images/user.png" : data.fld_imageurl} class="inner-testimonials-img"></img>
                            </div>
                            <div class="col-md-10">
                    <p class="inner-testimonial-text">{data.fld_feedback}</p>
                    <p class="inner-testimonial-username"><b>{data.fld_name}</b></p>

                    {/* {data.fld_rating == 1 ? 
                                 <p class="testimonial-city">
                                    <span class="star-rating"><i class="fa fa-star"></i></span>
                                </p>
                                :data.fld_rating == 2 ? 
                                <p class="testimonial-city">
                                 <span class="star-rating"><i class="fa fa-star"></i></span>
                                <span class="star-rating"><i class="fa fa-star"></i></span>
                                </p> :
                                data.fld_rating == 3 ? 
                                <p class="testimonial-city">
                                      <span class="star-rating"><i class="fa fa-star"></i></span>
                                <span class="star-rating"><i class="fa fa-star"></i></span>
                                <span class="star-rating"><i class="fa fa-star"></i></span>
                                </p> :
                                    data.fld_rating == 4 ? 
                                    <p class="testimonial-city">
                                     <span class="star-rating"><i class="fa fa-star"></i></span>
                                <span class="star-rating"><i class="fa fa-star"></i></span>
                                <span class="star-rating"><i class="fa fa-star"></i></span>
                                <span class="star-rating"><i class="fa fa-star"></i></span>
                                    </p> :
                                       <p class="testimonial-city">
                                         <span class="star-rating"><i class="fa fa-star"></i></span>
                                <span class="star-rating"><i class="fa fa-star"></i></span>
                                <span class="star-rating"><i class="fa fa-star"></i></span>
                                <span class="star-rating"><i class="fa fa-star"></i></span>
                                <span class="star-rating"><i class="fa fa-star"></i></span>
                                       </p>
                               } */}

                             
                            </div>
                        </div>
                    </div>

))}

                  
                    </div>

                </div>
            </div>
          </div>         
                   

 <Footer></Footer>                        
 </div>
  );
  }
}

export default Testimonials;
