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


class ShippingAddress extends Component {
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
             <div class="col-lg-6">
               <h5 class="breadcrumbs-title mt-0 mb-0">View Dealer Details</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">Product Management</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">Shipping Address</a></li>
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
      <p class="caption mb-0">Select shipping Address</p>
    </div>
  </div>
  </div>

     <div className="row">
      <div className="col-lg-12">
      <a href="/BuyProduct" className="btn01" style={{float:'right'}}>Next</a>
      </div>
     </div>
        
  {/* <div className="col-lg-12 col-md-12">
      <div class="card">
    <div class="card-content">
      <a href="/ShippingAddress" className="btn01" style={{float:'right'}}>Next</a>
        
    </div>
  </div>
  </div> */}
 
         

        <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy">
        <div class="card-content">
          <h4 class="card-title">Billing Address</h4>
         
            <div className="col-lg-12">
            <div className="row">
                    <div className="col-sm-12">
                    <input type="radio" name="gender" value="select" className="shippingbutton"/> 
                    </div>
                </div>
            <div className="row">
              <div  className="col-lg-12">
              <h6>Address</h6>
              <p>Rajouri Garden</p>
           </div>
           </div>
            

             
           <div className="row">
                <div  className="col-lg-3">
              <h6>Latitute</h6>
              <p>12345678</p>
          
           </div>
           <div  className="col-lg-3">
                <h6>Longitude</h6>
                <p>1234567</p>
           </div>
           <div  className="col-lg-3">
                <h6>Landmark</h6>
                <p>Near Polka Bakery</p>
           </div>  
           <div  className="col-lg-3">
              <h6>Country</h6>
              <p>India</p>
           </div>          
           </div>
           <div className="row">
          
          
           <div  className="col-lg-3">
               <h6>State</h6>
                <p>Delhi</p>
           </div> 
           <div  className="col-lg-3">
               <h6>City</h6>
               <p>Delhi</p>
           </div> 
           <div  className="col-lg-3">
                <h6>Pincode</h6>
                <p>123456</p>
           </div>          
           </div>
             
            </div>
           
          </div>
                

        </div>
        </div>

        {/* <div className="col-lg-12 col-md-12">
            <div className="prefixces" className="card card-default scrollspy">
                 <div className="card-content">
                <div style={{margin:'auto',width:'240px'}}>
                <a href="/ShippingAddress" className="btn01" style={{marginBottom:'13px'}}>Select Shipping Address</a>
        
                </div>
                 </div>
            </div>

        </div> */}

        
            
 </div>

      </div>
      </div>
      <Footer />

    </div>
  );
}
}


export default ShippingAddress;
