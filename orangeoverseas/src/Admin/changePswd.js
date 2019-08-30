import React, {Component} from 'react';

import avtr1 from './../Images/avatar01.png';
// import './App.css';
import './../css/form.css';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../node_modules/font-awesome/css/font-awesome.min.css';
import {Navbar, Form, Nav, NavDropdown, FormControl, Button, Dropdown   } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import InputFloat from 'react-floating-input';


class changePswd extends Component {
    constructor(props){
        super(props)
        this.state = {
            oldPswd: '',
            newPswd: '',
            confirmNew: ''         

        }
    }
    changeCategory = e => {
        this.setState({
            category: e.target.value
        })
    }

    componentDidMount(){
      document.title = "Change Password || Orange Overseas || DOPS (Dealer Order Processing System)"
    }
    
render() {
  return (
    <div className="App">
       <Header />
      
<div id="main">
    <div className="row">
    
      <div class="content-wrapper-before gradient-45deg-indigo-purple">
     
      </div>
      <div class="breadcrumbs-dark pb-0 pt-4" id="breadcrumbs-wrapper">
         
         <div class="container">
           <div class="row">
             <div class="col-lg-6">
               <h5 class="breadcrumbs-title mt-0 mb-0">Change Password</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 {/* <li class="breadcrumb-item"><a href="#">Dealer Management</a>
                 </li> */}
                 <li class="breadcrumb-item active">Change Password
                 </li>
               </ol>
             </div>
             <div class="col-lg-6">
                 
               
             </div>
           </div>
         </div>
       </div>

      <div className="container">
      <div className="col-lg-12 col-md-12">
      <div class="card">
    <div class="card-content">
      <p class="caption mb-0" style={{color: '#fff'}}>Change Password</p>
    </div>
  </div>
  </div>
        <div className="col-lg-12 col-md-12 mgbt">
        <div id="prefixes" class="card card card-default scrollspy">
        <div class="card-content">
          <h4 class="card-title">Change Password</h4>
            <div className="col-lg-12">
            <div className="row">
                <div  className="col-lg-12">
                <InputFloat
            value={this.state.oldPswd}
            onChange={({ target }) => this.setState({ oldPswd: target.value })}
            placeholder="Old Password" 
           />
           </div>
           </div>
            <div className="row">
                <div  className="col-lg-6">
                <InputFloat
            value={this.state.newPswd}
            onChange={({ target }) => this.setState({ newPswd: target.value })}
            placeholder="New Password" 
           />
           </div>
           <div  className="col-lg-6">
                <InputFloat
            value={this.state.confirmNew}
            onChange={({ target }) => this.setState({ confirmNew: target.value })}
            placeholder="Confirm New Password" 
           />
           </div>
           </div>

           <div className="row">
                  <div className="col-lg-12">
                    <div className="btn-align">
                        <Button className="btn01 mgtp">Submit</Button>
                        {/* <div class="sim-button button8"><span>Login</span></div> */}
                    </div>
                   
                  </div>
              </div>


            </div>
          </div>
        </div>
        </div>
     
     
 </div>

      </div>
      </div>
      <Footer />

    </div>
  );
}
}

export default changePswd;
