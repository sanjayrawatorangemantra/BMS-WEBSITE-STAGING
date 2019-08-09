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

class StockAddFabric extends Component {
    constructor(props){
        super(props)
        this.state = {
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
            WPCategoryB: '',

            currentQuantity: '',
            addNewQuantity: '',
            totalQuantity: ''



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
               <h5 class="breadcrumbs-title mt-0 mb-0">Add Stock (Fabric)</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">Stock Management</a>
                 </li>
                 <li class="breadcrumb-item active">Add Stock (Fabric)
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
      <p class="caption mb-0">Add Stock (Fabric)</p>
    </div>
  </div>
  </div>
        <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy mgbt">
        <div class="card-content">
          <h4 class="card-title">Fabric Details</h4>
            <div className="col-lg-12">
            <div className="row">
                <div  className="col-lg-6">
                <InputFloat
            value={this.state.productName}
            onChange={({ target }) => this.setState({ productName: target.value })}
            placeholder="Product Name" 
           />
           </div>
           <div  className="input-field col-lg-6">
           <select value={this.state.category} onChange={this.changeCategory}>
            <option value="male">A</option>
            <option value="female">B</option>
            <option value="others">C</option>
          </select>
                  <label for="name6" className="">Category</label>
           </div>
           </div>
              <div className="row">
                <div className="input-field col-lg-4">
                <select value={this.state.productType} onChange={this.changeProductType}>
            <option value="Suiting">Suiting</option>
            <option value="female">B</option>
            <option value="others">C</option>
          </select>
                  <label for="name3" className="">Product Type</label>
                </div>
                <div className="input-field col s12">
                <select value={this.state.brand} onChange={this.changeBrand}>
            <option value="Suiting">Suiting</option>
            <option value="female">B</option>
            <option value="others">C</option>
          </select>
                  <label for="name3" className="">Brand</label>
                </div>
                <div className="col-lg-4">
                <InputFloat
            value={this.state.totalStock}
            onChange={({ target }) => this.setState({ totalStock : target.value })}
            placeholder="Total Stock(Mts)" 
           />
                </div>

              </div>
              <div className="row">
                <div className="input-field col s12">
                <select value={this.state.color} onChange={this.changeColor}>
                    <option value="black">Black</option>
                    <option value="blue">Blue</option>
                    <option value="brown">Brown</option>
                </select>
                  <label for="name3" className="">Color</label>
                </div>
                <div className="input-field col s12">
                <select value={this.state.pattern} onChange={this.changePattern}>
                    <option value="checks">Checks</option>
                    <option value="stripes">Stripes</option>
                    <option value="lining">Lining</option>
                </select>
                  <label for="dob" className="">Pattern</label>
                </div>
                
              </div>
              <div className="row">
                <div className="input-field col-sm-6">
                <select value={this.state.fabricMaterial} onChange={this.changeFabricMaterial}>
                    <option value="cotton">Cotton</option>
                    <option value="woolen">Woolen</option>
                </select>
                  <label for="name3" className="">Fabric Material</label>
                </div>
                <div className="col-sm-6">
                <InputFloat
            value={this.state.tax}
            onChange={({ target }) => this.setState({ tax : target.value })}
            placeholder="Tax %" 
           />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                <InputFloat
            value={this.state.WPCategoryA}
            onChange={({ target }) => this.setState({ WPCategoryA : target.value })}
            placeholder="WP - Category A" 
           />
                </div>
                <div className="col-sm-4">
                <InputFloat
            value={this.state.WPCategoryB}
            onChange={({ target }) => this.setState({ WPCategoryB : target.value })}
            placeholder="WP - Category B" 
           />
                </div>
                <div className="col-sm-4">
                <InputFloat
            value={this.state.WPCategoryC}
            onChange={({ target }) => this.setState({ WPCategoryC : target.value })}
            placeholder="WP - Category C" 
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
          <h4 class="card-title">Stock Details</h4>
            <div className="col-lg-12">
            <div className="row">
                <div  className="col-lg-6">
                <InputFloat
            value={this.state.currentQuantity}
            onChange={({ target }) => this.setState({ currentQuantity: target.value })}
            placeholder="Current Quantity" 
           />
           </div>
           <div  className="col-lg-6">
                <InputFloat
            value={this.state.addNewQuantity}
            onChange={({ target }) => this.setState({ addNewQuantity: target.value })}
            placeholder="Add New Quantity" 
           />
           </div>
           </div>
              <div className="row">
              <div  className="col-lg-12">
                <InputFloat
            value={this.state.totalQuantity}
            onChange={({ target }) => this.setState({ totalQuantity: target.value })}
            placeholder="Total Quantity" 
           />
           </div>

              </div>
              <div className="row">
                  <div className="col-lg-12">
                    <div className="btn-align">
                        <Button className="btn01">SUBMIT</Button>
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

export default StockAddFabric;
