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
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProductViewFabric extends Component {
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
               <h5 class="breadcrumbs-title mt-0 mb-0">View Fabric Details</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">Product Management</a>
                 </li>
                 <li class="breadcrumb-item active">View Fabric Details
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
    <Button className="btn01" style={{float: 'right'}}>
      Edit</Button>
      <p class="caption mb-0">View Fabric Details</p>
     
    </div>
  </div>
  </div>
  <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy mgbt">
        <div class="card-content">
          <h4 class="card-title">Fabric Details</h4>
            <div className="col-lg-12">
            <div className="row">
           
            <div className="input-field col-lg-6">
                <select value={this.state.productType} onChange={this.changeProductType}>
            <option value="Suiting">Suiting</option>
            <option value="female">B</option>
            <option value="others">C</option>
          </select>
                  <label for="name3" className="">Product Type</label>
                </div>
           
                <div  className="col-lg-6">
                <InputFloat
            value={this.state.articleNumber}
            onChange={({ target }) => this.setState({ articleNumber: target.value })}
            placeholder="Article Number" 
           />
           </div>
           {/* <div  className="input-field col-lg-4">
           <select value={this.state.category} onChange={this.changeCategory}>
            <option value="male">A</option>
            <option value="female">B</option>
            <option value="others">C</option>
          </select>
                  <label for="name6" className="">Category</label>
           </div> */}
           </div>
              <div className="row">
                {/* <div className="input-field col-lg-4">
                <select value={this.state.productType} onChange={this.changeProductType}>
            <option value="Suiting">Suiting</option>
            <option value="female">B</option>
            <option value="others">C</option>
          </select>
                  <label for="name3" className="">Product Type</label>
                </div> */}
                <div className="input-field col-lg-6">
                <select value={this.state.brand} onChange={this.changeBrand}>
            <option value="Suiting">Suiting</option>
            <option value="female">B</option>
            <option value="others">C</option>
          </select>
                  <label for="name3" className="">Brand</label>
                </div>
                <div className="col-lg-6">
                <InputFloat
            value={this.state.totalStock}
            onChange={({ target }) => this.setState({ totalStock : target.value })}
            placeholder="Available Stock (Mtr)" 
           />
                </div>

              </div>
            </div>
          </div>
        </div>
        </div>



        <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy mgbt">
        <div class="card-content">
          <h4 class="card-title">Specification</h4>
            <div className="col-lg-12">
           
              
             
              <div className="row">
                
                <div className="input-field col-lg-4">
                <select value={this.state.pattern} onChange={this.changePattern}>
                    <option value="checks">Checks</option>
                    <option value="stripes">Stripes</option>
                    <option value="lining">Lining</option>
                </select>
                  <label for="dob" className="">Pattern</label>
                </div>
                <div className="input-field col-lg-4">
                <select value={this.state.color} onChange={this.changeColor}>
                    <option value="black">Black</option>
                    <option value="blue">Blue</option>
                    <option value="brown">Brown</option>
                </select>
                  <label for="name3" className="">Color</label>
                </div>
                <div className="input-field col-lg-4">
                <select value={this.state.material} onChange={this.material}>
                    <option value="fabric">Fabric</option>
                    <option value="silk">Silk</option>
                  
                </select>
                  <label for="name3" className="">Material</label>
                </div>
               
              </div>
             
             
            </div>
          </div>
        </div>
        </div>



        <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy mgbt">
        <div class="card-content">
          <h4 class="card-title">GST & pricing</h4>
            <div className="col-lg-12">
           
              
            
              
              <div className="row">
                <div className="input-field col-lg-6">
                <select value={this.state.gst} onChange={this.changeGst}>
                    <option value="cotton">10%</option>
                    <option value="woolen">20%</option>
                </select>
                  <label for="name3" className="">Gst%</label>
                </div>
                <div className="col-sm-6">
                <InputFloat
            value={this.state.WPCategoryA}
            onChange={({ target }) => this.setState({ WPCategoryA : target.value })}
            placeholder="Price(WP - Category A)" 
           />
                </div>
              
              </div>
              <div className="row">
               
                <div className="col-lg-6">
                <InputFloat
            value={this.state.WPCategoryB}
            onChange={({ target }) => this.setState({ WPCategoryB : target.value })}
            placeholder="Price(WP - Category B)" 
           />
                </div>
                <div className="col-lg-6">
                <InputFloat
            value={this.state.WPCategoryC}
            onChange={({ target }) => this.setState({ WPCategoryC : target.value })}
            placeholder="Price(WP - Category C)" 
           />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>


        <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy mgbt">
        <div class="card-content">
          <h4 class="card-title">Fabric Image</h4>
            <div className="col-lg-12">
              <div className="row">
              <div className="col-sm-12">
            <ImageUploader
                withIcon={false}
                multiple={false}
                withPreview={true}
                withLabel={true}
                label='Upload Product Images'
                buttonText={<div><i className="fa fa-plus"></i></div>}
                onChange={this.onDrop}
                imgExtension={['.jpeg', '.jpg', '.png', '.gif']}
                maxFileSize={5242880}
            />
            </div>
              </div>
            
            </div>
          </div>
        </div>
        </div>
          
        <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy mgbt">
        <div class="card-content">
         
            <div className="col-lg-12">
              
              <div className="row btngri">
                  <div className="col-lg-12">
                    <div className="btn-align3" >
                        <Button className="btn01">SAVE</Button>
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

export default ProductViewFabric;
