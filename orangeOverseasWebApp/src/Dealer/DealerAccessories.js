import React, {Component} from 'react';

import avtr1 from './../Images/avatar01.png';
// import './App.css';
import './../css/table-twbs.css';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../node_modules/font-awesome/css/font-awesome.min.css';
import {Navbar, Form, Nav, NavDropdown, FormControl, Button, Dropdown   } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import fabricdress from './../Images/fabricdress.jpg';
import Accessoriesring from './../Images/Accessoriesring.jpg';

// import ReactDataGrid from 'react-data-grid';

// var React = require('react');



class DealerAccessories extends Component {
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
               <h5 class="breadcrumbs-title mt-0 mb-0">Accessories Management</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">Product Management</a>
                  </li> 
                 <li class="breadcrumb-item active">Accessories
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
      
    <p class="caption mb-0">Accessories List</p>
        </div>
        <div className="col-lg-4">
        <div className="abc" >
  <Form inline>
  <i class="fa fa-search search-icon" style={{color: '#f8b006'}}></i>
      <FormControl type="text" placeholder="Search" className="mr-sm-2 search" />
      <span><Button variant="" className="btn-search btn01">Search</Button></span>
    </Form>
    </div>
            </div>
            </div>
    </div>
  </div>
  </div>

  <div className="container mgbt" style={{background:'white'}}>
      <div className="row">
         <div className="col-lg-3">
             <div className="card cardshadow">
                <div className="row">
                   <div className="col-lg-3">
                     <div className="imgdiv2">
                     <img src={Accessoriesring} alt="fabric" className="img-responsive" style={{width:'150px'}} />
                     </div>
                     
                   </div>
                   </div>
                   
                   <div className="row">
                      <div className="col-md-12">
                        <ul className="productdetailist"style={{marginTop:'7px',fontSize: '13px'}}>
                          <li style={{fontSize: '13px'}}>Article Number<span className="articleno">: 10000</span></li>
                          <li style={{fontSize: '13px'}}>Brand<span className="articleno1">: Peter England</span></li>
                          <li style={{fontSize: '13px'}}>Color <span className="articleno2">: Black</span></li><br/>
                          <li className="rupeeheart"><b><i class="fa fa-inr" aria-hidden="true"></i>2000/mtr</b></li>
                        </ul>
                       
                       </div>
                      
                   </div>
                   <hr/>
                   <div className="detailbott">
                          <div className="row">
                              <div className="col-lg-4 col-xs-6 deh">
                              <i class="fa fa-heart-o detai" aria-hidden="true"></i>
                              </div>
                              <div className="col-lg-4 col-xs-6 deh">
                              <a href="/DealerAccessoriesDetail"><i class="fa fa-info detai1" aria-hidden="true"></i></a>
                              </div>
                              <div className="col-lg-4 col-xs-6">
                              <a href="/AddCart"><i class="fa fa-shopping-cart detai2" aria-hidden="true"></i></a>
                              </div>

                          </div>

                        
                          
                      </div>
                   
                  
                   
                   
                
             </div>
         </div>
        
         <div className="col-lg-3">
             <div className="card cardshadow">
                <div className="row">
                   <div className="col-lg-3">
                     <div className="imgdiv2">
                     <img src={Accessoriesring} alt="fabric" className="img-responsive" style={{width:'150px'}} />
                     </div>
                     
                   </div>
                   </div>
                   
                   <div className="row">
                      <div className="col-md-12">
                        <ul className="productdetailist"style={{marginTop:'7px',fontSize: '13px'}}>
                          <li style={{fontSize: '13px'}}>Article Number<span className="articleno">: 10000</span></li>
                          <li style={{fontSize: '13px'}}>Brand<span className="articleno1">: Peter England</span></li>
                          <li style={{fontSize: '13px'}}>Color <span className="articleno2">: Black</span></li><br/>
                          <li className="rupeeheart"><b><i class="fa fa-inr" aria-hidden="true"></i>2000/mtr</b></li>
                        </ul>
                       
                       </div>
                      
                   </div>
                   <hr/>
                   <div className="detailbott">
                          <div className="row">
                              <div className="col-lg-4 col-xs-6 deh">
                              <i class="fa fa-heart-o detai" aria-hidden="true"></i>
                              </div>
                              <div className="col-lg-4 col-xs-6 deh">
                              <a href="/DealerAccessoriesDetail"><i class="fa fa-info detai1" aria-hidden="true"></i></a>
                              </div>
                              <div className="col-lg-4 col-xs-6">
                              <a href="/AddCart"><i class="fa fa-shopping-cart detai2" aria-hidden="true"></i></a>
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
 

    <Footer/>

  </div>
   
    );

      
  
}
}

export default  DealerAccessories;
