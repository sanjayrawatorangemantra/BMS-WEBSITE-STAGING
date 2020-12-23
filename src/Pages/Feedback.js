import React from "react";
import Menu from "../Header";
import Footer from "../Footer";
import GetApiCall from "../GetApi";
import PostApiCall from "../Api";
import Notiflix from "notiflix-react";
import moment from 'moment';

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating:'',
            comments:'',
            show_congratulation : false,
            congratulaion: '',
            address :'',
            is_email_verified_user : true
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
            GetApiCall.getRequest("LIstCustomerEducationDetailsAll?customerid="+ login.fld_userid).then((results) => {
                results.json().then(data => ({
                data: data,
                })
            ).then(res => {
                if(res.data && res.data.data){
                    this.setState({ is_email_verified_user : res.data.data.fld_is_email_verified === 0 ? true : false });
                }
                })
            
            });
            this.getCongratulation();
        }else{
            this.props.history.push('/Login')
        }
    }

    verifyEducationEmail=()=>{
        Notiflix.Loading.Dots();
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
                Notiflix.Loading.Remove();
                Notiflix.Notify.Success('E-mail has been sent.');
              }else{
                Notiflix.Loading.Remove();
                Notiflix.Notify.Failure(obj1.data);
              }
            }))
        }
      }

    SubmitFeedback =()=>{
        if( this.state.rating != '' ){
            if(this.state.address != ''){
                var log = localStorage.getItem("CustomerLoginDetails");
                var login = JSON.parse(log);
                if(login != null && login != ""){
                    Notiflix.Loading.Dots()
                    let data={};
                    data.customerid= login.fld_userid;
                    data.feedbacktext = this.state.comments;
                    data.createdon = moment().format('lll');
                    data.rating = this.state.rating;
                    data.delivery_address = this.state.address
                    data.status = 1;
                    Notiflix.Loading.Dots();

                    PostApiCall.postRequest(
                    {
                        data
                    },
                    "AddCustomerEducationFeedback",
                    ).then((results1) =>
                    // const objs = JSON.parse(result._bodyText)
                    
                    results1.json().then((obj1) => {
                        if (results1.status == 200 || results1.status == 201) {
                            Notiflix.Loading.Remove();
                            this.getCongratulation();
                            this.setState({ show_congratulation : true})
                            //get congratulaion
                        }else{
                            Notiflix.Loading.Remove()
                            Notiflix.Notify.Failure( obj1.data );
                    
                        }
                    }));
                }
            }else{
                Notiflix.Notify.Failure( "Please enter yours's address !"  );
            }
        }else{
            Notiflix.Notify.Failure( ' Please give rating first !' );
        }
    }

    getCongratulation=()=>{
        GetApiCall.getRequest("ListCongratulation").then((results) => {
            results.json().then(data => ({
              data: data,
            })
        ).then(res => {
            console.log(res.data);
            this.setState({ congratulaion : res.data.data && res.data.data.length>0 ? res.data.data[0].fld_content:'' });
            Notiflix.Loading.Remove();
            });
        });
    }

    render() {
        const {  is_email_verified_user } = this.state;

        var log = localStorage.getItem(
            "CustomerLoginDetails"
        );
        var login = JSON.parse(log);


        return (
            <div>
                <Menu></Menu>
                <div class="account-section">
                    <div class="co">
                        <div class="container" style={{ background: "none" }}>
                            <div class="row mt-2">
                                <div class="col-lg-12 order-lg-first ">
                                    <div class="dashboard-content">
                                        <div class="question-course-details-feedback">
                                            <div class="homelink">
                                                <a href="/education"><i class="fa fa-home" aria-hidden="true"></i></a>
                                            </div>
                                            {this.state.show_congratulation === true? 
                                            <div class="feedback-section">
                                               
                                                <h3>Congratulaion !! </h3>
                                                <div class="col-md-12">
                                                    <div dangerouslySetInnerHTML= {{__html: this.state.congratulaion}}></div>
                                                </div>
                                                <div class="col-md-12">
                                                {is_email_verified_user === true ? 
                                                <div class="feedback-section">
                                                    <div  class="feedback-section">
                                                        <p> Please verify your email to access Education Program.</p>
                                                        <button onClick={ ()=>{ this.verifyEducationEmail() }} className="btn btn-secondary" data-dismiss="modal">Resend mail</button>
                                                    </div>
                                                </div>:''
                                               
                                                }
                                                </div>
                                                </div>:
                                                <div class="feedback-section">
                                                    <h3>Give Us Feedback</h3>
                                                    <p>Overall, how satisfied were you with our products?</p>
                                                    <div class="feedback-rating" style={{width: "50rem"}}>
                                                        <input onClick={(e)=>{ this.setState( {rating : e.target.value })} } id="rating-5" type="radio" name="rating" value="5" /><label for="rating-5"><i class="fas fa-3x fa-star"></i></label>
                                                        <input onClick={(e)=>{ this.setState( {rating : e.target.value })} } id="rating-4" type="radio" name="rating" value="4"/><label for="rating-4"><i class="fas fa-3x fa-star"></i></label>
                                                        <input onClick={(e)=>{ this.setState( {rating : e.target.value })} } id="rating-3" type="radio" name="rating" value="3" /><label for="rating-3"><i class="fas fa-3x fa-star"></i></label>
                                                        <input onClick={(e)=>{ this.setState( {rating : e.target.value })} } id="rating-2" type="radio" name="rating" value="2"/><label for="rating-2"><i class="fas fa-3x fa-star"></i></label>
                                                        <input onClick={(e)=>{ this.setState( {rating : e.target.value })} } id="rating-1" type="radio" name="rating" value="1"/><label for="rating-1"><i class="fas fa-3x fa-star"></i></label>
                                                    </div>
                                                    <p>Any additional comments or suggestion?</p>
                                                    <div class="textbox">
                                                    <textarea maxlength="300" onChange={(e)=>{ this.setState({ comments : e.target.value })}} id="w3review" name="w3review" rows="2" cols="50" > </textarea>
                                                    </div>
                                                    <p> Your's address ?</p>
                                                    <div class="textbox">
                                                    <textarea maxlength="300" onChange={(e)=>{ this.setState({ address : e.target.value })}} id="w3review" name="w3review" rows="2" cols="50" > </textarea>
                                                    </div>
                                                    
                                                    <div class="submitbtn">
                                                        <button class="activelinksubmit" onClick={this.SubmitFeedback.bind(this)} ><span>Submit Feedback </span><span><img src="/assets/images/next.png" /></span></button>
                                                    </div>
                                            </div>}
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

export default Feedback;
