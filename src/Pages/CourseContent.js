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
class CourseContentMain extends React.Component {
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
    };
  }

  componentDidMount() {
    Notiflix.Loading.Init({
      svgColor: "#507dc0",
      //  #507dc0'
    }); 
    //Notiflix.Loading.Dots()

    var log = localStorage.getItem("CustomerLoginDetails");
    var login = JSON.parse(log);
    if(login != null && login != ""){
      this.getChapterContentByUser(login.fld_userid);
      this.checkFeedbackByUser(login.fld_userid);
      // this.addUserEducationModule(login.fld_userid);
      this.LIstCustomerEducationDetailsAll(login.fld_userid);
    }else{
      this.getChapterContent();
    }
    this.getEducationModuleRating();
  }
  getEducationModuleRating=()=>{
    GetApiCall.getRequest("EducationDashboard").then((results) => {
      results.json().then(data => ({
        data: data,
      })
    ).then(res => {
          if(res.data.data)
          this.setState({ rating : res.data.data.overall_rating, rating_per : parseInt((res.data.data.overall_rating/5)*100)})
      });
    });
  }

  addUserEducationModule=(customerid)=>{
    PostApiCall.postRequest({ 
      
        customerid:customerid,
        currentchapter:0,
        currenttopic:0,
        iscompleted:0,
        alertmailsent:0,
        giftdeliverystatus:0,
        createdon:'',
        status:1
    
    },"AddCustomersEducation").then((results) => {
      results.json().then(data => ({
        data: data,
        status: results.status
      })
    ).then(res => {
      
      // setTimeout(  () =>  this.LIstCustomerEducationDetailsAll(customerid) , 2000);
    });
  })
  }

  LIstCustomerEducationDetailsAll=(customerid)=>{
    GetApiCall.getRequest("LIstCustomerEducationDetailsAll?customerid="+customerid).then((results) => {
      results.json().then(data => ({
        data: data,
        

      })
    ).then(res => {
      if(res.data && res.data.data){
        let data= {};
        data.isCompleted = res.data.data.fld_iscompleted === 1? true : false;
        data.fld_currentchapter = res.data.data.fld_currentchapter;
        data.fld_currenttopic = res.data.data.fld_currenttopic;
        data.start= (res.data.data.fld_currentchapter ===0 && res.data.data.fld_currenttopic === 0) ? true : false;
        let is_block_user = false;
        if( res.data.data.fld_is_email_verified === 0 && res.data.data.fld_is_trial_period === 0){
          is_block_user = true;
        }else if( res.data.data.fld_is_trial_period === 0 ){
          is_block_user = true;
        }
        this.setState({resume_learning : data, is_block_user : is_block_user});
      }else{
        this.addUserEducationModule(customerid);
        this.verifyEducationEmail();
      }
        
      })
    });
  }

  verifyEducationEmail=()=>{
    var log = localStorage.getItem("CustomerLoginDetails");
    var login = JSON.parse(log);
    if(login != null && login != ""){
      var random = Math.floor(100000 + Math.random() * 900000);
      localStorage.setItem("OTPEducation", random );
      PostApiCall.postRequest(
        {
          email : login.fld_email,
          otp : random,
          name : login.fld_name,
          customerid : login.fld_userid
        },
        "VerifyEducationEmail"
      ).then((results1) =>
        // const objs = JSON.parse(result._bodyText)
        results1.json().then((obj1) => {
          if (results1.status == 200 || results1.status == 201) {

          }else{
            Notiflix.Loading.Remove()
            Notiflix.Notify.Failure(obj1.data);
          }
        }))
    }
  }

  gotoResumeLearning=()=>{
    let resumeLearningData = this.state.resume_learning;
    if(this.state.ChapterData.length>0){
      let current_chapter = this.state.ChapterData.filter(x => x.fld_chapterid == resumeLearningData.fld_currentchapter);
      let current_topic = current_chapter[0].topics.filter(x=> x.fld_id === resumeLearningData.fld_currenttopic)[0]
      current_topic.fld_isunlocked = 1;
      this.goToTopic(current_chapter[0], current_topic);
    }
  }

  gotoStartLearning=()=>{
    var log = localStorage.getItem("CustomerLoginDetails");
    var login = JSON.parse(log);
    if(login != null && login != ""){
      let chapterData = this.state.ChapterData;
      //Notiflix.Loading.Dots();
      PostApiCall.postRequest(
        {
          customerid : login.fld_userid,
          topicid :  chapterData[0].topics[0].fld_id,
          isunlocked : 1,
          chapterid :  chapterData[0].topics[0].fld_chapterid,
          createdon :  moment().format('lll'),
          status : 1
        },
        "AddCustomerUnlockTopic"
      ).then((results1) =>
        // const objs = JSON.parse(result._bodyText)
        results1.json().then((obj1) => {
          if (results1.status == 200 || results1.status == 201) {
            
            chapterData[0].topics[0].fld_isunlocked = 1;
            this.setState({ChapterData : chapterData  });
            this.goToTopic(chapterData[0], chapterData[0].topics[0]);
            Notiflix.Loading.Remove()
          }else{
            Notiflix.Loading.Remove()
            Notiflix.Notify.Failure(obj1.data);
          }
      }));
    }
    
  }

  checkFeedbackByUser=( user_id )=>{
    GetApiCall.getRequest("ListCustomerEducationFeedbackById/?customerid="+user_id).then((results) => {
      results.json().then(data => ({
        data: data,
        status: results.status
      })
    ).then(res => {
        let feedback = res.data && res.data.data && res.data.data.length>0 ? true : false 
        localStorage.setItem( 'education_feedback', feedback)
        //Notiflix.Loading.Remove();
        });
    });
  }

  getChapterContentByUser=(current_user_id)=>{
    Notiflix.Loading.Dots()
    PostApiCall.postRequest({ customerid : current_user_id},"ListCustomerEducationDetails").then((results) => {
      results.json().then(data => ({
        data: data,
        status: results.status
      })
    ).then(res => {
        var chapterData = res.data.data.map(function(el , index) {
            var o = Object.assign({}, el);
            o.activeClass = (index==0 ? true:false);
            return o;
          });
          chapterData = chapterData.map(function(el , index) {
            var o = Object.assign({}, el);
            o.chapter_unLock = (index==0 ?  (chapterData[index].topics.length>0 && chapterData[index].topics[0].fld_isunlocked === 1? true : false): chapterData[index-1].fld_isQuestionTestCompleted === 1? true : false);
            return o;
          });
          // if(chapterData[0].topics[0].fld_isunlocked === 0){
          //   this.unlockTopic( current_user_id, chapterData[0].topics[0]);
          // }
          this.getChapterTeaserAll( chapterData);
          // this.setState({ ChapterData : chapterData });
          this.props.dispatch(setChapterListFullDetails(chapterData));
          this.setEducationProgressBar( chapterData );
          
          Notiflix.Loading.Remove();
        });
    });
  }
  getChapterTeaserAll( chapterData){
    GetApiCall.getRequest("GetTeaserAll").then((results) => {
      results.json().then(data => ({
        data: data,
        status: results.status
      })
    ).then(res => {
        let TeaserData = res.data.data;
        for(let i=0; i<chapterData.length; i++){
          chapterData[i].is_teaser = false;
          chapterData[i].teaser_val = '';
          for(let k=0; k<TeaserData.length; k++){
            if(chapterData[i].fld_chapterid === TeaserData[k].fld_chapterid){
              chapterData[i].is_teaser = true;
              chapterData[i].teaser_val = TeaserData[k].fld_title;
            }
          }
        }
        this.setState({ ChapterData : chapterData });

        console.log(chapterData)
        console.log(res.data)
        });
    });
  }

  setEducationProgressBar=(chapterData)=>{
    let countUnlock = 0;
    let totalCount = 0;
    for(let i= 0 ; i < chapterData.length ; i++){
      if( chapterData[i].fld_isQuestionTestCompleted === 1)
          countUnlock++;
          totalCount++;
    }
      // let topics= chapterData[i].topics;
      // // for( let j=0; j<topics.length; j++){
      // //   if(topics[j].fld_isunlocked===1)
      // //     countUnlock++;
      // //     totalCount++;
      // // }
    
    sessionStorage.setItem('educationProgress', JSON.stringify({countUnlock : countUnlock, totalCount : totalCount}));
  }

  unlockTopic=(current_user_id, topic_data)=>{
    
    //Notiflix.Loading.Dots();
    PostApiCall.postRequest(
      {
        customerid : current_user_id,
        topicid : topic_data.fld_id,
        isunlocked : 1,
        chapterid : topic_data.fld_chapterid,
        createdon :  moment().format('lll'),
        status : 1
      },
      "AddCustomerUnlockTopic"
    ).then((results1) =>
      // const objs = JSON.parse(result._bodyText)
      results1.json().then((obj1) => {
        if (results1.status == 200 || results1.status == 201) {
          let chapterData = this.state.ChapterData;
          chapterData[0].topics[0].fld_isunlocked = 1;
          this.setState({ChapterData : chapterData  });
          Notiflix.Loading.Remove()
        }else{
          Notiflix.Loading.Remove()
          Notiflix.Notify.Failure(obj1.data);
        }
      }));
  }

  getChapterContent=()=>{
    GetApiCall.getRequest("GetChaperListData").then((results) => {
      results.json().then(data => ({
        data: data,
        status: results.status
      })
  ).then(res => {
      var chapterData = res.data.data.map(function(el , index) {
          var o = Object.assign({}, el);
          o.activeClass = (index==0 ? true:false);
          return o;
        });
      this.setState({ ChapterData : chapterData });
      //Notiflix.Loading.Remove();
      });
  });
  }

  handleActiveclassName=( fld_chapterid)=>{ 
      var chapterData = this.state.ChapterData.map(function(el ) {
        var o = Object.assign({}, el);
        o.activeClass = (el.fld_chapterid == fld_chapterid ? true:false);
        return o;
      });
      this.setState({ ChapterData : chapterData });
  }

  goToTopic =( current_chapter, currect_topic )=>{
    var log = localStorage.getItem("CustomerLoginDetails");
    var login = JSON.parse(log);
    if(login != null && login != "" && currect_topic.fld_isunlocked===1){
      this.props.history.push({
        pathname : '/education-topic',
        state : {
          current_chapter : current_chapter,
          currect_topic : currect_topic,
          chaptersList : this.state.ChapterData
        }
      });
    }
    
  }


  render() {
    const { resume_learning, rating, rating_per, is_block_user, Show_Topics, current_topic_index , current_chapter_index, Show_Questions_Module, ChapterQuestionList,
      current_chapter_data, Show_Correct_Question_Ans, is_finel_chapter, Show_User_Feedback, Show_Congratulation_Page} = this.state;

      var log = localStorage.getItem(
        "CustomerLoginDetails"
      );
      var login = JSON.parse(log);

      
    return (
      <div>
        <Menu></Menu>
        <div className="account-section"> 
            <div className="co">
              <div className="banner-sec">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8">
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
                    <div className="col-md-4">
                      <div className="courseimage">
                           <img src="/assets/images/course.jpg" alt="course image"/>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
                <div className="container" style={{background:"none"}}>
                    <div className="row mt-2">
                        <div className="col-lg-8 order-lg-first ">
                        {this.state.ChapterData.length>0?
                            <div className="dashboard-content">
                                <HeaderCourseProgress login={login} ShowTimer={false}/>
                                <div className="panel-group" id="accordion">
                                <div className="row mt-2">
                                  {/* <div className="btn-sec"> <button className="viewdemobtn" onClick={()=>{ this.setState({is_show_teaser_model : true})}}>View Demo</button></div> */}
                                 </div>
                                {this.state.ChapterData.map(( Item, chapterIndex)=>{
                                 return <div className={"panel panel-default " + (Item.activeClass == true ? 'active' : 'deactive')}>
                                        <div className={"panel-heading "+( Item.chapter_unLock == true ? 'unlockedlockedtitle' : 'lockedtitle')} onClick={()=> this.handleActiveclassName( Item.fld_chapterid ) } >
                                            <h4 className="panel-title">                            
                                                Chapter Module {chapterIndex+1} : {Item.fld_title}
                                            </h4>
                                            <p><span className="topic">{Item.topics ? Item.topics.length :0 } Topics</span> . <span className="length">{ Item.fld_duration.includes(':') ? (Item.fld_duration.split(':')[0]+'m '+Item.fld_duration.split(':')[1]+'s') : Item.fld_duration } total length</span></p>
                                        </div>
                                        <div id="collapseOne" className={"panel-collapse " + (Item.activeClass == true ? 'active' : 'deactive')}>
                                            <div className="panel-body">
                                                <ul className="topiclist">
                                                    {Item.topics && Item.topics.length > 0 ? Item.topics.map(( TopicItem, index)=>{
                                                        return <li className={TopicItem.fld_isunlocked === 1 ?"unlocked":"locked"} onClick={()=>{ this.goToTopic( Item, TopicItem ) }} ><a className="card-edit">Topic { index+1 } - {TopicItem.fld_title}</a></li>
                                                    }) : ''}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    })}
                              </div>
                            </div>
                          :
                          <div className="dashboard-content">

                               <div
                                style={{
                                  width: "100%",
                                  height: "100",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center"
                                }}
                              >
                                <Loader type="ThreeDots" color="#00BFFF" height="50" width="50" />
                              </div>
                            </div>
                        }
                       </div>
                        <div className="col-lg-4">
                            <div className="course-side-bar">
                                { login != null && login != "" ? 
                                    <div className="login-box">
                                      {resume_learning.start == true ? 
                                      <>
                                       <h3>Want to start your free course?</h3>
                                        <a onClick={()=>{ this.gotoStartLearning() }} className="loginbutton">Start Learning</a>
                                      </> : resume_learning.isCompleted == true ?
                                      <>
                                        <h3> course completed</h3>
                                        {/* <a href="#" className="loginbutton">Resume Learning</a> */}
                                      </>:
                                      <>
                                        <h3>Want to start your free course?</h3>
                                        <a onClick={()=>{ this.gotoResumeLearning() }} className="loginbutton">Resume Learning</a>
                                      </>
                                      
                                    }
                                    </div>
                                    :
                                        <div className="login-box">
                                            <h3>Want to start your free course?</h3>
                                            <Link
                                          to={  { pathname :"/login", state: { pre_page_url: '/education' }}} className="loginbutton"  >
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
                        </div>
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

export default connect(mapStateToProps)(CourseContentMain);