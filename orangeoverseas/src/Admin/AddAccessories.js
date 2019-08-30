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

class Accessories extends Component {
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
            totalStock: '',

            WPCategoryA: '',
            WPCategoryB: '',
            WPCategoryC: ''



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

    componentDidMount(){
      document.title = "Add New Accessories || Orange Overseas || DOPS (Dealer Order Processing System)"
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
               <h5 class="breadcrumbs-title mt-0 mb-0">Add New Accessories</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">Product Management</a>
                 </li>
                 <li class="breadcrumb-item active">Add Accessories
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
      <p class="caption mb-0" style={{color: '#fff'}}>Add Accessories Details</p>
    </div>
  </div>
  </div>
        <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy mgbt">
        <div class="card-content">
          <h4 class="card-title">Accessories Details</h4>
            <div className="col-lg-12">
            <div className="row">
            <div  className="col-lg-6">
                <InputFloat
            value={this.state.articleNumber}
            onChange={({ target }) => this.setState({ articleNumber: target.value })}
            placeholder="Article Number" 
           />
           </div>
                <div  className="col-lg-6">
                <InputFloat
            value={this.state.productName}
            onChange={({ target }) => this.setState({ productName: target.value })}
            placeholder="Product Name" 
           />
           </div>
           
           </div>
              <div className="row">
              <div  className="input-field col-lg-6">
           <select value={this.state.category} onChange={this.changeCategory}>
            <option value="male">A</option>
            <option value="female">B</option>
            <option value="others">C</option>
          </select>
                  <label for="name6" className="">Category</label>
           </div>
                <div className="input-field col-lg-6">
                <select value={this.state.productType} onChange={this.changeProductType}>
            <option value="Suiting">Suiting</option>
            <option value="female">B</option>
            <option value="others">C</option>
          </select>
                  <label for="name3" className="">Product Type</label>
                </div>
                </div>

                <div className="row">
              <div  className="input-field col-lg-4">
           <select value={this.state.subType} onChange={this.changeSubType}>
            <option value="male">A</option>
            <option value="female">B</option>
            <option value="others">C</option>
          </select>
                  <label for="name6" className="">Sub Type</label>
           </div>
                <div className="input-field col-lg-4">
                <select value={this.state.size} onChange={this.changeSize}>
            <option value="Suiting">Suiting</option>
            <option value="female">B</option>
            <option value="others">C</option>
          </select>
                  <label for="name3" className="">Size</label>
                </div>
                <div className="input-field col-lg-4">
                <select value={this.state.color} onChange={this.changeColor}>
            <option value="Suiting">Suiting</option>
            <option value="female">B</option>
            <option value="others">C</option>
          </select>
                  <label for="name3" className="">Color</label>
                </div>
                </div>

                <div className="row">
                <div className="col-lg-12">
                <InputFloat
            value={this.state.productDescription}
            onChange={({ target }) => this.setState({ productDescription : target.value })}
            placeholder="Product Description" 
           />
                 
                </div>
              </div>

                <div className="row">
                <div className="input-field col s12 col-sm-4">
                <select value={this.state.brand} onChange={this.changeBrand}>
            <option value="Suiting">Suiting</option>
            <option value="female">B</option>
            <option value="others">C</option>
          </select>
                  <label for="name3" className="">Brand</label>
                </div>
                <div className="input-field col s12 col-sm-4">
                <select value={this.state.brand} onChange={this.changeBrand}>
            <option value="Suiting">Suiting</option>
            <option value="female">B</option>
            <option value="others">C</option>
          </select>
                  <label for="name3" className="">Design</label>
                </div>
                
                <div className="input-field col s12 col-sm-4">
                <select value={this.state.measurement} onChange={this.changeMeasurement}>
                    <option value="number">Number</option>
                    <option value="meter">Meter</option>
                </select>
                  <label for="name3" className="">Unit Of Measurement</label>
                </div>
                

              </div>
              
              <div className="row">
                <div className="input-field col-sm-4">
                <select value={this.state.fabricMaterial} onChange={this.changeFabricMaterial}>
                    <option value="cotton">Cotton</option>
                    <option value="woolen">Woolen</option>
                </select>
                  <label for="name3" className="">Fabric Material</label>
                </div>
                <div className="col-sm-4">
                <InputFloat
            value={this.state.tax}
            onChange={({ target }) => this.setState({ tax : target.value })}
            placeholder="Tax %" 
           />
                </div>
                <div className="col-sm-4">
                <InputFloat
            value={this.state.totalStock}
            onChange={({ target }) => this.setState({ totalStock : target.value })}
            placeholder="Total Stock (Mtr)" 
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

export default Accessories;
