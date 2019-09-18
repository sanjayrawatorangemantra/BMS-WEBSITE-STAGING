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
import fabricdress from './../Images/fabricdress.jpg';

import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import ImageUploader from 'react-images-upload';
import autobind from 'autobind-decorator';
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class ConfirmOrder extends Component {
    constructor(props){
        super(props)
        this.state = {
            dealerCode: '',
            companyName: '',
            Quantity: '',
            website: '',

            GSTNumber: '',
            officePhone: '',
            officeMobile: '',
            addressType: '',
            address: '',
            latitude: '',
            longitude: '',
            landMark: '',
            country: '',
            State:'',
            city: '',
            pinCode: '',

            cntctPersonName: '',
            cntctPersonMobile: '',
            cntctPersonEmail: ''

            



        }
    }
    changeQuantity = e => {
        this.setState({
            quantity: e.target.value
        })
    }
    changeStates = e => {
        this.setState({
            States:e.target.value
        })
    }
    changeBrand = e => {
        this.setState({
            brand:e.target.value
        })
    }
    changeFabricMaterial = e => {
        this.setState({
            fabricMaterial:e.target.value
        })
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
               <h5 class="breadcrumbs-title mt-0 mb-0">View Dealer Details</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">Product Management</a>
                 </li>
                 <li class="breadcrumb-item active">ConfirmOrder
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
      <p class="caption mb-0">Your Cart</p>
    </div>
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
          <h4 class="card-title">Your Cart</h4>

          <div className="row">
            <div className="col-lg-6">
            <img src={fabricdress} alt="fabric" className="fabricimageres5"  />
             
            </div>
            <div className="col-lg-3">
            <p><b>1 Item</b></p>
            <p><b>Article Number</b> : 100032</p>
            <p>Len : 2meter</p>
            </div>
            <div className="col-lg-3">
            
            <p><b>You Pay Rs.2000</b></p>
            <p>T-shirt</p>
            </div>
                {/* <div className="col-lg-6 col-md-6">
                  <p><b>1 Item</b></p>
                </div>
                <div className="col-lg-6 col-md-6">
                  <p><b>You Pay Rs.2000</b></p>
                </div> */}
               </div>
                    
                    {/* <div className="row">
                      
               <div className="col-lg-6">
                  <p><b>Article Number</b> : 100032</p>
                  <p>T-shirt</p>
                  <p>Len : 2meter</p>
                  
                  <div  className="input-field col-lg-6 quantity">
           <select value={this.state.quantity} onChange={this.changeQuantity}>
            <option value="male">1 </option>
            <option value="female">2 </option>
            <option value="others">3 </option>
          </select>
                  <label for="name6" className="">Quantity</label>
           </div>
              
           <p style={{marginLeft:'2px'}}><b><i class="fa fa-inr" aria-hidden="true"></i>2000</b></p>
             
               </div>
                    </div> */}
               {/* <div className="row">
                <div className="col-lg-6">
                <p>Product Type</p>
                <p>Accessories</p>
                </div>
                <div className="col-lg-6">
                <p>Tax</p>
                <p>100%</p>
                </div>
               </div> */}
              
            
            

             
          
         
               <a href="#" className="btn01" style={{float: 'left',marginBottom:'13px'}}>Remove</a>
               <a href="#" className="btn01" style={{float: 'right',marginBottom:'13px'}}>Move To Wishlist</a>
             
            
           
          </div>
                

        </div>
        </div>

        <div className="col-lg-12 col-md-12">
            <div className="prefixces" className="card card-default scrollspy">
                 <div className="card-content">
                <div style={{margin:'auto',width:'240px'}}>
                <a href="#" className="btn01" style={{marginBottom:'13px'}}>Place Order</a>
        
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

export default ConfirmOrder;