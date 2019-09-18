
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import FloatingLabel from "floating-label-react";
// import App from './App';
// import Menu from './Admin/Menu';
import * as serviceWorker from './serviceWorker';

import createHistory from 'history/createBrowserHistory'

import InputFloat from 'react-floating-input';

import logo01 from './Images/logo01.png';

// import dealer from 'images/dealer02.jpg';

const history = createHistory()

export default class Login extends Component {
    constructor(props) {
        super(props);
            this.state = {
                email: '',
                password: ''
            }            
    }
    getYear() {
      return new Date().getFullYear();
  }  
    render (){

        

        return (
            <div className="App">
                <div className="bg">
                        <div className="container">
                        <div class="row">
                        {/* <div className="box02">
                          
                          </div> */}
        {/* <div className="col-lg-3"></div> */}
        <div className="box02">
          <div className="row">
            <div className="col-lg-12">
              <img src={logo01} alt="logo" />
              <h2 className="welcome">Welcome to <span style={{color: '#f8b006'}}>DOPS</span></h2>
              <p>Dealer Order Processing System</p>
            </div>
          </div>
          {/* <div classNa */}
          <div className="">
          <div className="row demo">
           
            <div className="col-lg-7 col-sm-12" style={{paddingLeft: '0px', paddingRight: '0px'}}>
            <div className="box">
         
         <div className="bg-opacity-8 border-radius-6">
                  
                 <div class="row">
                     <div className="col-sm-12">
     <div class="input-field col s12">
       <h5 class="ml-4">LOGIN</h5>
       <p style={{textAlign: 'left'}} onClick={()=>{this.props.history.push('/AdminDashboard')}}>Sign in to your account to continue</p>
     </div>
     </div>
   </div>
   <div className="row">
   <div className="col-sm-12 pdlr">
   <InputFloat
         value={this.state.email}
         onChange={({ target }) => this.setState({ email: target.value })}
         placeholder="Email" 
        />
        </div>
             
             </div>
             <div className="row">
             <div className="col-sm-12 pdlr">
   <InputFloat
         value={this.state.password}
         onChange={({ target }) => this.setState({ password: target.value })}
         placeholder="Password" 
        />
        </div>
             </div>
             {/* <div className="row rem">
             <div className="col-sm-12">
             <label>
      
       <input
         name="isGoing"
         type="checkbox"
         checked={this.state.isGoing}
         onChange={this.handleInputChange} />
          <span style={{fontSize: '14px'}}> Remeber Me</span>
     </label>
     </div>
     </div> */}
             <div className="row">
               <div className="col-sm-12">
                 <button class="login-btn" type="button"   
                 onClick={()=>{

                   this.props.history.push('./Dashboard')
             
                 }}                 
                 >LOGIN</button>
                 
               </div>
               </div>
               <div className="row">
               {/* <div className="input-field  col s6">
                </div> */}
               <div className="col-lg-12 col-sm-12">
                   <p className="forgot">Forgot Password ?</p>
               </div>
            </div>
         </div>
         
         </div>
            </div>
            <div className="col-lg-5 col-sm-12" style={{paddingRight: '0px',paddingLeft: '0px'}}>
            <div className="box1">
            <div className="border-radius-6">
                     
                    <div class="row">
                        <div className="col-sm-12" style={{paddingRight: '0px',paddingLeft: '0px'}}>
        <img src="http://globaltrendz.online/orange_overseas/images/dealer02.jpg" className="login-img" alt="" />
        </div>
      </div>
      
                  
            </div>
            
            </div>
            </div>
            </div>
           
            
          </div>
         
         
            </div>
                   
        
            <div className="fixed">
            © {this.getYear()} <a href="#" target="_blank"><span className="colorchange">Orange Overseas</span></a> <span className="colorchange">All rights reserved.</span>
 
           </div>
            {/* <div className="col-lg-3"></div> */}
          </div>   
                        </div>
                        </div>
            </div>
        )
    }

}

// ReactDOM.render(<Menu />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// export default Login;

