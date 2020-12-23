import React from "react";
import Menu from "../Header";
import Footer from "../Footer";
import GetApiCall from "../GetApi";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import PostApiCall from "../Api";
import Notiflix from "notiflix-react";
import HeaderCourseProgress from '../Education/HeaderCourseProgress';
import {setChapterListFullDetails} from '../Actions/Education/actionType';
import moment from 'moment';
import CourseContentList from '../Education/CourseContentList';
import CourseContentDetails from '../Education/CourseContentDetails';
import CourseQuestionsAns from '../Education/CourseQuestionAns';
import CourseQuestionsAnsList from '../Education/CorrectQestionAnsList';
import UserFeedBackView from '../Education/UserFeedback';
import CongratulationView from '../Education/Congratulation';
import Loader from 'react-loader-spinner';
import TeaserModel from './TeaserModel';

import courseImage from '../images/course.jpg';
class EducationTeaser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EmailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      EnteredOtp: "",
      ChapterData: [],
      ResendCount: 0,
      MobileOtp: "",
      Show_course_content_list : true, //
      Show_Topics : false,
      Show_Questions_Module : false,
      Show_Correct_Question_Ans : false,
      Topic_Details : [],
      current_chapter_data: '',
      current_topic_index : 0,
      current_chapter_index : 0,
      ChapterQuestionList:[],
      is_finel_chapter : false,
      Show_User_Feedback : false,
      Show_Congratulation_Page : false,
      resume_learning : {isCompleted: false, fld_currentchapter : 0, fld_currenttopic : 0, start : true},
      rating:0,
      rating_per:0,
      is_block_user : false,
      is_show_teaser_model : false,
      teaserContent : ''
    };
  }

  componentDidMount() {
    Notiflix.Loading.Init({
      svgColor: "#507dc0",
      //  #507dc0'
    }); 
    Notiflix.Loading.Dots()

    var log = localStorage.getItem("CustomerLoginDetails");
    var login = JSON.parse(log);
    if(login != null && login != ""){
      
    }else{
      
    }
    this.getEducationModuleRating();
    this.getEducationTeaser();
  }
  getEducationModuleRating=()=>{
    GetApiCall.getRequest("EducationDashboard").then((results) => {
      results.json().then(data => ({
        data: data,
      })
    ).then(res => {
          if(res.data.data)
          this.setState({ rating : res.data.data.overall_rating, rating_per : parseInt((res.data.data.overall_rating/5)*100)})
          Notiflix.Loading.Remove();
      });
    });
  }


  getEducationTeaser=()=>{
    GetApiCall.getRequest("GetTeaserContentAll").then((results) => {
      results.json().then(data => ({
        data: data,
      })
    ).then(res => {
          if(res.data.data)
          this.setState({ teaserContent : res.data.data[0].fld_content })
      });
    });
  }

  
 


  render() {
    const { rating, rating_per, is_block_user , teaserContent} = this.state;

      var log = localStorage.getItem(
        "CustomerLoginDetails"
      );
      var login = JSON.parse(log);

      
    return (
      <div>
        <Menu></Menu>
        <div className="account-section"> 
            <div className="co">
                <div className="container" style={{background:"none"}}>
                <div className="banner-sec">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="head-text">
                        <h1 className="main-head">Diabetes Learning Program</h1>
                        <p className="sub-head">A brief about the course and what is expected to be delivered and many more</p>
                        <div className="rating-box">
                        <span className="ratingtext">{rating} Rating</span>
                        <span className="ratingsse">
                          <span className="star-rating" title={rating_per}>
                            <span className="back-stars">
                              <i className="icon-star-empty" aria-hidden="true"></i>
                              <i className="icon-star-empty" aria-hidden="true"></i>
                              <i className="icon-star-empty" aria-hidden="true"></i>
                              <i className="icon-star-empty" aria-hidden="true"></i>
                              <i className="icon-star-empty" aria-hidden="true"></i>

                              <span className="front-stars" style={{ width: rating_per+'%' }}>
                                <i className="icon-star" aria-hidden="true"></i>
                                <i className="icon-star" aria-hidden="true"></i>
                                <i className="icon-star" aria-hidden="true"></i>
                                <i className="icon-star" aria-hidden="true"></i>
                                <i className="icon-star" aria-hidden="true"></i>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                      </div>
                      <div className="tag-section">
                        <div className="tag-box"><img src="/assets/images/free.png" /><span className="tagtext">On Demand</span></div>

                      </div>
                    </div>
                    {/* <div className="col-md-4">
                      <div className="courseimage">
                           <img src="/assets/images/course.jpg" alt="course image"/>
                      </div>
                    </div> */}
                  </div>
                </div>

              </div>
                    <div className="row mt-2">
                        <div className="col-lg-12 order-lg-first ">
                        
                          <div className="dashboard-content">
                            <h3>Welcome to BMS Education </h3>
                                <div dangerouslySetInnerHTML= {{__html: teaserContent }}></div> 
                                <div class="navlinks" style={{ justifyContent:'center'}}>
                                  <div class="navlinkbutton next">
                                    <button class="activelink" style={{ float:'right'}} onClick={ ()=>{ this.props.history.push('/education')  }} >Enter <span><img src="/assets/images/next.png"/></span> </button>
                                  </div>
                                </div>
                               {/* <div
                                style={{
                                  width: "100%",
                                  height: "100",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center"
                                }}
                              >
                                <Loader type="ThreeDots" color="#00BFFF" height="50" width="50" />
                              </div> */}
                            </div>
                        
                       </div>
                        {/* <div className="col-lg-4">
                            <div className="course-side-bar">
                                { login != null && login != "" ? 
                                    <div className="login-box">
                                        <h3>Want to logout ?</h3>
                                        <Link
                                    to={  { pathname :"/Logout"}} className="loginbutton"  >
                                    Logout
                                    </Link>
                                    </div>
                                    :
                                        <div className="login-box">
                                            <h3>Want to start your free course?</h3>
                                            <Link
                                          to={  { pathname :"/login", state: { pre_page_url: '/education-teaser' }}} className="loginbutton"  >
                                           Login Now
                                          </Link>
                                        </div>
                                }
                              <div className="benefits">
                                 <h4>Course Benefits</h4>
                                 <ul>
                                   <li><strong>Flexible</strong> You pick the schedule</li>
                                   <li><strong>Pause</strong> Take break anytime</li>
                                   <li><strong>Reliable</strong> Prepared by experts</li>
                                   <li><strong>Goodies</strong> Free gifts on completion</li>
                                 </ul>
                              </div>
                              <div className="gift-hemper">
                                <h5>Gift Hamper</h5>
                                <img src="/assets/images/gifts.jpg" />
                              </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
       </div>
       <div className={"modal fade  "+ (is_block_user ===true ? 'show':'')} tabindex="1" role="dialog" style={{ backgroundColor:'rgb(191 189 204 / 40%)'}} >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title"> User Blocked !</h5>
              </div>
              <div className="modal-body">
                <p> Please verify your email to access Education Program.</p>
              </div>
              <div className="modal-footer">
                <button onClick={ ()=>{ this.verifyEducationEmail() }} className="btn btn-secondary" data-dismiss="modal">Resend mail</button>
              </div>
            </div>
          </div>
        </div>
        <TeaserModel 
          is_show_teaser_model={this.state.is_show_teaser_model}
          closeTeaserModel={()=>{ this.setState({ is_show_teaser_model : false }) }}
          />
        <Footer></Footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(EducationTeaser);