import React from "react";
import Menu from "../Header";
import Footer from "../Footer";
import GetApiCall from "../GetApi";
import PostApiCall from "../Api";
import Notiflix from "notiflix-react";
import HeaderCourseProgress from '../Education/HeaderCourseProgress';
import CourseContentList from '../Education/CourseContentList';
import CourseContentDetails from '../Education/CourseContentDetails';
import CourseQuestionsAns from '../Education/CourseQuestionAns';
import CourseQuestionsAnsList from '../Education/CorrectQestionAnsList';
import UserFeedBackView from '../Education/UserFeedback';
import CongratulationView from '../Education/Congratulation';

import courseImage from '../images/course.jpg'
class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      EmailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

      EnteredOtp: "",
      ChapterData: [],
      ResendCount: 0,
      MobileOtp: "",
      Show_course_content_list: true, //
      Show_Topics: false,
      Show_Questions_Module: false,
      Show_Correct_Question_Ans: false,
      Topic_Details: [],
      current_chapter_data: '',
      current_topic_index: 0,
      current_chapter_index: 0,
      ChapterQuestionList: [],
      is_finel_chapter: false,
      Show_User_Feedback: false,
      Show_Congratulation_Page: false
    };
  }

  componentDidMount() {
    Notiflix.Loading.Init({
      svgColor: "#507dc0",
      //  #507dc0'
    });

    Notiflix.Loading.Dots()
    GetApiCall.getRequest("GetChaperListData").then((results) => {

      results.json().then(data => ({
        data: data,
        status: results.status
      })
      ).then(res => {
        this.setState({ ChapterData: res.data.data });
        Notiflix.Loading.Remove();
      })
    })
  }

  showTopicDetails = (topic, current_chapter_data, current_topic_index, chapterIndex) => {
    if (chapterIndex === this.state.ChapterData.length - 1) {
      this.setState({ is_finel_chapter: true });
    }

    this.setState({
      Show_course_content_list: false,
      Show_Topics: true,
      Show_Questions_Module: false,
      Show_Correct_Question_Ans: false,
      Topic_Details: topic,
      current_chapter_data: current_chapter_data,
      current_topic_index: current_topic_index,
      current_chapter_index: chapterIndex
    });
  }

  setQuestionsView = (chapter_id) => {
    // chapterid
    Notiflix.Loading.Dots()
    GetApiCall.getRequest("ListQuestion?chapterid=" + chapter_id).then(resultdes =>
      resultdes.json().then(obj => {
        this.setState({
          ChapterQuestionList: obj.data, Show_Questions_Module: true, Show_Topics: false, Show_course_content_list: false, Show_Correct_Question_Ans: false, Show_User_Feedback: false
        })
        Notiflix.Loading.Remove();
      }))
  }

  updateUserAnsAndShowCorrectAns = (questionDataWithUserAns) => {
    // post api to users answer of questions.
    this.setState({
      ChapterQuestionList: questionDataWithUserAns, Show_Questions_Module: false, Show_Topics: false, Show_course_content_list: false, Show_Correct_Question_Ans: true, Show_User_Feedback: false
    })
    console.log(questionDataWithUserAns);
  }

  gotoNextTopic = (current_topic_index) => {
    debugger;
    this.setState({ Topic_Details: this.state.current_chapter_data.topics[current_topic_index], current_topic_index: current_topic_index });
  }

  goToNextChapterTopic = () => {
    let ChapterData = this.state.ChapterData;
    debugger;
    if (this.state.current_chapter_index < ChapterData.length - 1) {
      let current_chapter_data = ChapterData[this.state.current_chapter_index + 1];
      let topic = current_chapter_data.topics.length > 0 ? current_chapter_data.topics[0] : '';
      let current_topic_index = 0;
      let current_chapter_index = this.state.current_chapter_index + 1;
      //unlock new chapter first topic.
      this.showTopicDetails(topic, current_chapter_data, current_topic_index, current_chapter_index)
    } else {
      this.setState({
        Show_course_content_list: false,
        Show_Topics: false,
        Show_Questions_Module: false,
        Show_Correct_Question_Ans: false,
        Show_User_Feedback: true,
      });
    }

  }

  onSubmitFeedback = (feedback) => {
    // user feedback api...
    // go to congratulation .....
    this.setState({
      Show_course_content_list: false,
      Show_Topics: false,
      Show_Questions_Module: false,
      Show_Correct_Question_Ans: false,
      Show_User_Feedback: false,
      Show_Congratulation_Page: true
    });
  }


  render() {
    const { Show_course_content_list, Topic_Details, Show_Topics, current_topic_index, current_chapter_index, Show_Questions_Module, ChapterQuestionList,
      current_chapter_data, Show_Correct_Question_Ans, is_finel_chapter, Show_User_Feedback, Show_Congratulation_Page } = this.state;
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
                        <span className="ratingtext">4.8 Rating</span>
                        <span className="ratingsse">
                          <span className="star-rating" title="70%">
                            <span className="back-stars">
                              <i className="icon-star-empty" aria-hidden="true"></i>
                              <i className="icon-star-empty" aria-hidden="true"></i>
                              <i className="icon-star-empty" aria-hidden="true"></i>
                              <i className="icon-star-empty" aria-hidden="true"></i>
                              <i className="icon-star-empty" aria-hidden="true"></i>

                              <span className="front-stars" style={{ width: "70%" }}>
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
                      <div className="tag-box"><span><img src="/assets/images/free.png" /></span><span className="tagtext">On Demand</span></div>

                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="courseimage">
                      <img src="/assets/images/course.jpg" alt="course image" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="container" style={{ background: "none" }}>
              <div className="row mt-2">
                <div className="col-lg-8 order-lg-first ">
                  <div className="dashboard-content">


                    <HeaderCourseProgress />
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default">
                        <div className="panel-heading unlockedlockedtitle" id="headingOne">
                          <h4 className="panel-title">
                            Chapter Number 1 : Diabetes Learning Program1
                                  </h4>
                          <p><span className="topic">6 Topics</span> . <span className="length">26h 35m total length</span></p>
                        </div>
                        <div id="collapseOne" className="panel-collapse">
                          <div className="panel-body">
                            <ul className="topiclist">
                              <li className="unlocked"><a className="card-edit">Topic 1 - Lorem Ipsum dummy text lorem</a></li>
                              <li className="locked"><a className="card-edit">Topic 2 - Lorem Ipsum dummy text lorem</a></li>
                              <li className="locked"><a className="card-edit">Topic 3 - Lorem Ipsum dummy text lorem</a></li>
                              <li className="locked"><a className="card-edit">Topic 4 - Lorem Ipsum dummy text lorem</a></li>
                              <li className="locked"><a className="card-edit">Topic 5 - Lorem Ipsum dummy text lorem</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading lockedtitle" id="headingOne">
                          <h4 className="panel-title">
                            Chapter Number 2 : Diabetes Learning Program1
                                  </h4>
                          <p><span className="topic">6 Topics</span> . <span className="length">26h 35m total length</span></p>
                        </div>
                        <div id="collapseOne" className="panel-collapse">
                          <div className="panel-body">
                            <ul className="topiclist">
                              <li className="locked"><a className="card-edit">Topic 1 - Lorem Ipsum dummy text lorem</a></li>
                              <li className="locked"><a className="card-edit">Topic 2 - Lorem Ipsum dummy text lorem</a></li>
                              <li className="locked"><a className="card-edit">Topic 3 - Lorem Ipsum dummy text lorem</a></li>
                              <li className="locked"><a className="card-edit">Topic 4 - Lorem Ipsum dummy text lorem</a></li>
                              <li className="locked"><a className="card-edit">Topic 5 - Lorem Ipsum dummy text lorem</a></li>
                            </ul>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        {Show_course_content_list === true ?
                          <CourseContentList
                            ChapterData={this.state.ChapterData}
                            showTopicDetails={this.showTopicDetails}
                          />
                          : Show_Topics === true ?
                            <CourseContentDetails
                              current_chapter_data={current_chapter_data}
                              Topic_Details={Topic_Details}
                              current_topic_index={current_topic_index}
                              current_chapter_index={current_chapter_index}
                              gotoNextTopic={this.gotoNextTopic}
                              setQuestionsView={this.setQuestionsView}
                            />
                            : Show_Questions_Module === true ?
                              <CourseQuestionsAns
                                ChapterQuestionList={ChapterQuestionList}
                                updateUserAnsAndShowCorrectAns={this.updateUserAnsAndShowCorrectAns}
                              />
                              : Show_Correct_Question_Ans === true ?
                                <CourseQuestionsAnsList
                                  ChapterQuestionList={ChapterQuestionList}
                                  goToNextChapterTopic={this.goToNextChapterTopic}
                                  is_finel_chapter={is_finel_chapter}
                                />
                                : Show_User_Feedback === true ?
                                  <UserFeedBackView onSubmitFeedback={this.onSubmitFeedback} />
                                  : Show_Congratulation_Page === true ?
                                    <CongratulationView />
                                    :
                                    ''
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="course-side-bar">
                    <div className="login-box">
                      <p class="topicname">Topic Name</p>
                      <h3>Want to start your free course?</h3>
                      <a href="#" className="loginbutton">Login Now</a>
                    </div>
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
        <Footer></Footer>
      </div>
    );
  }
}

export default Education;
