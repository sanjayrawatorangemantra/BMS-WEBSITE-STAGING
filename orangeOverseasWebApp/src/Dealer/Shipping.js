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

import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import ImageUploader from 'react-images-upload';
import autobind from 'autobind-decorator';
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Shipping extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         dealerCode: '',
    //         companyName: '',
    //         category: '',
    //         website: '',

    //         GSTNumber: '',
    //         officePhone: '',
    //         officeMobile: '',
    //         addressType: '',
    //         address: '',
    //         latitude: '',
    //         longitude: '',
    //         landMark: '',
    //         country: '',
    //         State:'',
    //         city: '',
    //         pinCode: '',

    //         cntctPersonName: '',
    //         cntctPersonMobile: '',
    //         cntctPersonEmail: ''

            



    //     }
    // }
    // changeCategory = e => {
    //     this.setState({
    //         category: e.target.value
    //     })
    // }
    // changeStates = e => {
    //     this.setState({
    //         States:e.target.value
    //     })
    // }
    // changeBrand = e => {
    //     this.setState({
    //         brand:e.target.value
    //     })
    // }
    // changeFabricMaterial = e => {
    //     this.setState({
    //         fabricMaterial:e.target.value
    //     })
    // }

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
             <div class="col-lg-6 shiphead">
               <h5 class="breadcrumbs-title mt-0 mb-0">Shipping Details</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">Product Management</a>
                 </li>
               
                 <li class="breadcrumb-item active">Shipping Address
                 </li>
               </ol>
             </div>
             <div class="col-lg-6 col-sm-6">
               <div className="dop dops">
                <h5 class="">DOPS</h5>
                <p>Dealer Order Processing System</p>
               </div>
             
             </div>
           </div>
         </div>
       </div>

      <div className="container">
      <div className="col-lg-12 col-md-12">
      <div class="card">
    <div class="card-content">
      <p class="caption mb-0">Select Shipping Address</p>
    </div>
  </div>
  </div>
        
     
        <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy">
        <div class="card-content">
          <h4 class="card-title">Billing Address</h4>
            <div className="col-lg-12">
            <div className="row">
              <div  className="col-lg-12">
              
              <p><b>Global Trendz</b></p>
           </div>
           </div>
            

             
           <div className="row">
             
           <div  className="col-lg-4">
               
                <p>621,3rd Floor,Anna Salai</p>
                <p>Chennai 600006, India,</p>
                <p><b>Phone</b>:+914443091999</p>
                <p><b>Landmark</b>: Near Gemini Flyover</p>
           </div>          
           </div>

            </div>
           
          </div>
                

        </div>
        </div>
        
     <div className="col-lg-12 col-md-12">
            <div className="prefixces" className="card card-default scrollspy">
                 <div className="card-content">
                <div className="row">
                  <div className="col-lg-6">
                  <input type="CheckBox" name="gender" value="select"/> 
                  &nbsp; <span>
                   <b>Shipping address is same as  Billing address</b>
                  </span>
                  </div>

                  {/* <div className="col-lg-6">
                  <a href="/ShippingAddress" className="btn01" style={{float:'right'}}>Select Shipping Address</a>
                  </div> */}
                </div>
                 </div>
            </div>

        </div>

        <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy">
        <div class="card-content">
         
            <div className="col-lg-12">
           <div className="row">
               <div className="col-lg-1">
               <input type="radio" name="opt1" value="select"/>
               </div>
               <div className="col-lg-6">
                 <p><b>Global Trendz</b></p>
                 <p>621,3rd Floor,Anna Salai</p>
                <p>Chennai 600006, India,</p>
                <p><b>Phone</b>:+914443091999</p>
                <p><b>Landmark</b>: Near Gemini Flyover</p>
               </div>
           </div>
           </div>
           
          </div>
                

        </div>
        </div>

        <div className="col-lg-12 col-md-12 mgbt2">
            <div className="prefixces" className="card card-default scrollspy ">
                 <div className="card-content">
             
                <a href="/ProceedCheckout" className="btn01" style={{float:'right'}}>Proceed To Checkout</a>
        
           
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


export default Shipping;
