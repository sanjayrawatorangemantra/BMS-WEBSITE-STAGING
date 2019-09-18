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
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DealerFabricDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            articleNumber: '',
            productName: '',
            category: '',
            productType: '',
            brand: '',
            totalStock: '',
            productDescription: '',
            measurement: '',
            fabricMaterial: '',
            tax: '',
            WPCategoryA: '',
            WPCategoryB: ''



        }
    }
    changeCategory = e => {
        this.setState({
            category: e.target.value
        })
    }
    changeProductType = e => {
        this.setState({
            productType:e.target.value
        })
    }
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

    componentDidMount(){
      document.title = "View Fabric Details || Orange Overseas || DOPS (Dealer Order Processing System)"
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
             <div class="col-lg-6 viewfabhead">
               <h5 class="breadcrumbs-title mt-0 mb-0">Fabric Details</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">Product Management</a>
                 </li>
                 <li class="breadcrumb-item active">Fabric Details
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
      {/* <div className="col-lg-12 col-md-12">
      <div class="card">
    <div class="card-content">
      <p class="caption mb-0" style={{color: '#fff'}}>View Fabric Details</p>
    </div>
  </div>
  </div> */}
        <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy mgbt">
        <div class="card-content">
          <h4 class="card-title">Fabric Details</h4>
            <div className="row">
              <div className="col-lg-5 col-md-4">
              <img src={fabricdress} alt="fabric" className="fabricimageres"  />
                   
              </div>
              <div className="col-lg-6 col-md-6">
              <p>Article Number : 1000203 <span></span></p> 
              <p>Peter England</p> 
            
               <p>Product Type : Dress</p>
               <p style={{fontSize:'25px'}}><b><i class="fa fa-inr" aria-hidden="true"></i>2000/mtr</b></p>
              </div>
              <div className="col-lg-1 col-md-1">
              <i class="fa fa-heart-o" style={{float:'right'}}></i>
                </div>
           
            
            </div>

             
             <div className="content" style={{marginTop:'17px'}}>
               <h4 class="card-title">Product Description</h4>
               <p className="productdescription">The brand was acquired by Aditya Birla Group in 2000 and quickly went on to become India’s Leading Menswear Brand. The brand was listed in top 5 most trusted brands in apparel category for 7 consecutive years. And keeping in sync with the youth, Peter England offers apparel that cater to every fashion occasion of a young professional’s life.The brand was acquired by Aditya Birla Group in 2000 and quickly went on to become India’s Leading Menswear Brand. The brand was listed in top 5 most trusted brands in apparel category for 7 consecutive years. And keeping in sync with the youth, Peter England offers apparel that cater to every fashion occasion of a young professional’s life.</p>
             </div>
                
             <div className="detail">
                <h4 class="card-title">Details</h4>
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
                {/* <div className="row">
                    <div className="col-lg-12 branddetail">
                    <div className="row">
                     <div className="col-md-2 col-sm-2">
                     <p>Brand </p>
                     </div>
                     <div className="col-lg-3 col-sm-3">
                     <p>: Peter England </p>
                     </div>
                </div>
                <div className="row">
                     <div className="col-md-2 col-sm-2">
                     <p>Length </p>
                     </div>
                     <div className="col-lg-3 col-sm-3">
                     <p>: 20 meter </p>
                     </div>
                </div>
                <div className="row">
                     <div className="col-md-2">
                     <p>Color </p>
                     </div>
                     <div className="col-lg-3">
                     <p>: Black </p>
                     </div>
                </div>
                <div className="row">
                     <div className="col-md-2">
                     <p>Pattern </p>
                     </div>
                     <div className="col-lg-3">
                     <p>: Badhiya </p>
                     </div>
                </div>
                <div className="row">
                     <div className="col-md-2">
                     <p>Fabric Material </p>
                     </div>
                     <div className="col-lg-3">
                     <p>: Silk </p>
                     </div>
                </div>
                    </div>

                </div> */}
               
                
             </div>

             <a href="/AddCart" className="btn01 addcar" style={{float: 'right',marginBottom:'13px'}}>Add To Cart </a>
                  


            
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

export default DealerFabricDetail;
