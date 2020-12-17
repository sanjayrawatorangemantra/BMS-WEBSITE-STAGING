import React from "react";
import Menu from "./Header";
import Footer from "./Footer";
// import GetApiCall from "./GetApi";
import PostApiCall from "./Api";
import Notiflix from "notiflix-react";
import moment from "moment";

class VerifyEducationEmailSuccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isVisible: false,
      password: "",
      EmailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

      EnteredOtp: "",
      CustomerData: [],
      ResendCount: 0,
      MobileOtp: "",
      content:'',
    };
  }

  componentDidMount() {
    Notiflix.Loading.Init({
      svgColor: "#507dc0",
      //  #507dc0'
    });
    debugger
    Notiflix.Loading.Dots()
    PostApiCall.postRequest(
        {
          email: this.props.match.params.email,
          otp : this.props.match.params.otp
        },
        "VerifyEducationEmailOtp"
      ).then((results1) =>
        // const objs = JSON.parse(result._bodyText)
        results1.json().then((obj1) => {
            debugger;
            console.log(obj1);
          if (results1.status == 200 || results1.status == 201) {

            this.setState({ content : 'You Email Address has been verified.'});
            Notiflix.Loading.Remove();

          }else{
            this.setState({ content : 'You Email Address or OTP is not valid.'});
            Notiflix.Loading.Remove();

          }
        }))
  }


  render() {
    return (
      <div>
        <Menu></Menu>
        <main>
            <div style={{ display:'flex',justifyContent:'center', padding:'10px'}}>{this.state.content}</div>
        </main>
       
        <Footer></Footer>
      </div>
    );
  }
}

export default VerifyEducationEmailSuccess;

