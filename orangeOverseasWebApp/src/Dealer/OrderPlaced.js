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


class OrderPlaced extends Component {
    constructor(props){
        super(props)
        this.state = {
           



        }
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
             <div class="col-lg-6 ordhead">
               <h5 class="breadcrumbs-title mt-0 mb-0">Order Details</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">Product Management</a>
                 </li>
                 <li class="breadcrumb-item active">Order
                 </li>
               </ol>
             </div>
             <div class="col-lg-6 col-sm-6">
               <div className="dop">
                <h5 class="">DOPS</h5>
                <p>Dealer Order Processing System</p>
               </div>
             
             </div>
           </div>
         </div>
       </div>

      <div className="container">
    

  

        <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy">
        <div class="card-content">
        

         <p style={{textAlign:'center'}}><i class="fa fa-check-circle" style={{fontSize:'100px',color:'#d14d07'}}></i></p>
           <p style={{textAlign:'center',color:'#f8b006',fontSize:'26px'}}>Order Placed Successfully</p>
           <p style={{textAlign:'center'}}>
               Your Order has been successfully placed. You can view order <br/> details and track your order in order history.
           </p>
             <div style={{width:'304px',margin:'auto'}}>
                  <ul>
                      <li><b>Order Number</b><span className="ordercs">12368545</span></li>
                   <li><b>Order Date</b><span className="ordercs1">September 6,2019</span></li>
                   <li><b>Order Value</b><span className="ordercs2"><i class="fa fa-inr" aria-hidden="true"></i>45000</span></li>
                  </ul>
             </div>
                
              
            
           
          </div>
                

        </div>
        </div>

        <div className="col-lg-12 col-md-12 mgbt2">
            <div className="prefixces" className="card card-default scrollspy ">
                 <div className="card-content">
                <div className="vieword">
                <a href='' className="btn01" style={{marginBottom:'13px'}}>View Order Details</a>
        
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

export default OrderPlaced;