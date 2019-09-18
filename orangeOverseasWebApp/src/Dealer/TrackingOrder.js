import React, {Component} from 'react';

import avtr1 from './../Images/avatar01.png';
// import './App.css';
import './../css/table-twbs.css';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../node_modules/font-awesome/css/font-awesome.min.css';
import {Navbar, Form, Nav, NavDropdown, FormControl, Button, Dropdown   } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';



class OrderHistory extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

render() {
 
    
  return(
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
               <h5 class="breadcrumbs-title mt-0 mb-0">Track Order</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">My Orders</a>
                  </li> 
                 <li class="breadcrumb-item active">Track Order
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
      <div class="card">
    <div class="card-content">
    
      <div className="row">
    <div className="col-lg-8">
      
    <p class="caption mb-0">Track Order</p>
        </div>
        <div className="col-lg-4">
        <div className="abc" >
  <Form inline>
  <i class="fa fa-search search-icon" style={{color: '#f8b006'}}></i>
      <FormControl type="text" placeholder="Enter Order No." className="mr-sm-2 search" />
      <span><Button variant="" className="btn-search btn01">Search</Button></span>
    </Form>
    </div>
            </div>
            </div>
    </div>
  </div>
  </div>
        <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy mgbt">
        <div class="card-content">
          <h4 class="card-title">Track Order <span style={{float:"right"}}><a href="/Orderdetails"> <i class="fa fa-angle-right" aria-hidden="true"></i> </a> </span></h4>
        
            <div className="row">
              <div className="col-lg-2 col-md-4">
              <i class="fa fa-shopping-cart sc"></i>
                   
              </div>
              <div className="col-lg-6 col-md-6">
              <p>Order Number : 1000203 <span></span></p> 
               <p>Product Type : Fabric</p>
               <p>Order Date : 10 Sept 2019</p>
               <p>Order Value :<i class="fa fa-inr" aria-hidden="true"></i>17,000 </p>
              
              </div>
            
            </div>
            <div className="containerste" style={{marginTop:'17px'}}>
               <h4 className="card-title">Order Tracker</h4>
               <div>
                 <ul className="progressbar">
                   <li className="active">
                      Placed
                   </li>
                   <li>
                      Approved
                   </li>
                   <li className="is-active">
                      Dispatched
                   </li>
                   <li>
                      Delivered
                   </li>

                 </ul>
               </div>
                  </div>

             
             {/* <div className="content" style={{marginTop:'17px'}}>
               <h4>Product Description</h4>
               <p className="productdescription">The brand was acquired by Aditya Birla Group in 2000 and quickly went on to become India’s Leading Menswear Brand. The brand was listed in top 5 most trusted brands in apparel category for 7 consecutive years. And keeping in sync with the youth, Peter England offers apparel that cater to every fashion occasion of a young professional’s life.The brand was acquired by Aditya Birla Group in 2000 and quickly went on to become India’s Leading Menswear Brand. The brand was listed in top 5 most trusted brands in apparel category for 7 consecutive years. And keeping in sync with the youth, Peter England offers apparel that cater to every fashion occasion of a young professional’s life.</p>
             </div>
                 */}
             {/* <div className="detail">
                <h4>Details</h4>
                <div className="row">
                  <div className="col-lg-6">
                        <ul className="detailsbrandlist">
                          <li style={{float:'left'}}>Brand <span className="brandp">:Peter England</span></li><br/>
                         
                          <li style={{float:'left'}}>Color <span className="brand2">: Black</span></li><br/>
                           <li style={{float:'left'}}>Pattern <span className="brand3">: Latest</span></li><br/>
                           <li style={{float:'left'}}>Fabric Material <span className="brand4">: Silk</span></li><br/>
                        </ul>
                  </div>
                </div>
                 </div> */}

             {/* <a href="/AddCart" className="btn01 addcar" style={{float: 'right',marginBottom:'13px'}}>Add To Cart </a>
                   */}


            
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

export default OrderHistory;
