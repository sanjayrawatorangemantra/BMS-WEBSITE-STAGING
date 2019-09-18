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


class MyProfile extends Component {
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
           gst: '',
            WPCategoryA: '',
            WPCategoryB: '',
            WPCategoryC: '',
            size:'',
            design:'',
            file: '',
            imagePreviewUrl: ''



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
    changeGst = e => {
      this.setState({
          gst:e.target.value
      })
  }
  changeSize  = e => {
    this.setState({
        size:e.target.value
    })
}
_handleSubmit(e) {
  e.preventDefault();
  // TODO: do something with -> this.state.file
  console.log('handle uploading-', this.state.file);
}

_handleImageChange(e) {
  e.preventDefault();

  let reader = new FileReader();
  let file = e.target.files[0];

  reader.onloadend = () => {
    this.setState({
      file: file,
      imagePreviewUrl: reader.result
    });
  }

  reader.readAsDataURL(file)
}
    componentDidMount(){
      document.title = "Add New Accessories || Orange Overseas || DOPS (Dealer Order Processing System)"
    }
render() {
  let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} className="img4"/>);
    } else {
      $imagePreview = (<div className="previewText2">Please select an Image</div>);
    }
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
               <h5 class="breadcrumbs-title mt-0 mb-0">My Profile</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">Product Management</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">My Profile</a></li>
               </ol>
             </div>
             <div class="col-lg-6">
                 
               
             </div>
           </div>
         </div>
       </div>

      <div className="container">
      
        
        <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy">
        <div class="card-content">
          <h4 class="card-title"> Image</h4>
            <div className="col-lg-12">
           
            <div className="row">
              <div className="col-lg-6">
              <div className="previewComponent2">
              <div className="imgPreview2">
        {$imagePreview}
      </div>
      <form onSubmit={(e)=>this._handleSubmit(e)}>
        <input className="bt01" 
          type="file" 
          onChange={(e)=>this._handleImageChange(e)} />
        {/* <button className="submitButton9" 
          type="submit" 
          onClick={(e)=>this._handleSubmit(e)}>Upload Image</button> */}
      </form>
      
    </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                  <div className="col-lg-6">
                  <InputFloat
                        value={this.state.totalStock}
                        onChange={({ target }) => this.setState({ totalStock : target.value })}
                        placeholder="Nidhi" 
                    />
                  </div>
                  <div className="col-lg-6">
                  <InputFloat
                        value={this.state.totalStock}
                        onChange={({ target }) => this.setState({ totalStock : target.value })}
                        placeholder="Global Trendz" 
                    />
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-6">
                  <InputFloat
                        value={this.state.totalStock}
                        onChange={({ target }) => this.setState({ totalStock : target.value })}
                        placeholder="nidhi@globaltrendz.com" 
                    />
                  </div>
                  <div className="col-lg-6">
                  <InputFloat
                        value={this.state.totalStock}
                        onChange={({ target }) => this.setState({ totalStock : target.value })}
                        placeholder="Www.globaltrendz.com" 
                    />
                  </div>
              </div>
            </div>
              
              
              </div>
              <div className="row">
             
              
              
              </div>
             
            </div>
          </div>
        </div>
        </div>

        <div className="col-lg-12 col-md-12 ">
        <div id="prefixes" class="card card card-default scrollspy">
        <div class="card-content">
          <h4 class="card-title">Billing Address</h4>
         
            <div className="col-lg-12">
            {/* <div className="row">
                    <div className="col-sm-12">
                    <input type="radio" name="gender" value="select" className="shippingbutton"/> 
                    </div>
                </div> */}
            <div className="row">
            <div className="col-lg-4">
                <InputFloat
            value={this.state.gst}
            onChange={({ target }) => this.setState({ gst : target.value })}
            placeholder="GST Number" 
           />
                </div>
                <div className="col-lg-4">
                <InputFloat
            value={this.state.office}
            onChange={({ target }) => this.setState({ office : target.value })}
            placeholder="Office Phone" 
           />
                </div>
                <div className="col-lg-4">
                <InputFloat
            value={this.state.totalStock}
            onChange={({ target }) => this.setState({ totalStock : target.value })}
            placeholder="Office Mobile" 
           />
                </div>
           </div>
           <div className="row">
           <div className="col-lg-12">
                <InputFloat
            value={this.state.address}
            onChange={({ target }) => this.setState({ address : target.value })}
            placeholder="Address" 
           />
                </div>
           </div>
            

             
           <div className="row">
           <div className="col-lg-4">
                <InputFloat
            value={this.state.latitude}
            onChange={({ target }) => this.setState({ latitude : target.value })}
            placeholder="Latitude" 
           />
           </div>
           <div className="col-lg-4">
                <InputFloat
            value={this.state.longitude}
            onChange={({ target }) => this.setState({ longitude : target.value })}
            placeholder="Longitude" 
           />
           </div>
           <div className="col-lg-4">
                <InputFloat
            value={this.state.landmark}
            onChange={({ target }) => this.setState({ landmark : target.value })}
            placeholder="Landmark" 
           />
           </div>
           </div>

           <div className="row">
           <div  className="input-field col-lg-3">
           <select value={this.state. size} onChange={this.changeSize}>
            <option value="male">India</option>
            <option value="female">Japan</option>
            {/* <option value="others">L</option> */}
          </select>
                  <label for="name6" className="">Country</label>
           </div>
            <div  className="input-field col-lg-3">
           <select value={this.state. size} onChange={this.changeSize}>
            <option value="male">Delhi</option>
            <option value="female">xyz</option>
          
          </select>
                  <label for="name6" className="">State</label>
           </div>
           <div className="col-lg-3">
                <InputFloat
            value={this.state.city}
            onChange={({ target }) => this.setState({ city : target.value })}
            placeholder="City" 
           />
           </div>
           <div className="col-lg-3">
                <InputFloat
            value={this.state.pincode}
            onChange={({ target }) => this.setState({ pincode : target.value })}
            placeholder="Pincode" 
           />
           </div>
          


                  
           </div>
           <div className="row">
           <div className="col-lg-4">
                <InputFloat
            value={this.state.person}
            onChange={({ target }) => this.setState({ person : target.value })}
            placeholder="Contact Person Name" 
           />
           </div>
           <div className="col-lg-4">
                <InputFloat
            value={this.state.email}
            onChange={({ target }) => this.setState({ email : target.value })}
            placeholder="Contact Person Email" 
           />
           </div>
           <div className="col-lg-4">
                <InputFloat
            value={this.state.mobile}
            onChange={({ target }) => this.setState({ mobile : target.value })}
            placeholder="Contact Person Mobile" 
           />
           </div>
           </div>
             
            </div>
           
          </div>
                

        </div>
        </div>

        <div className="col-lg-12 col-md-12 mgbt">
        <div id="prefixes" class="card card card-default scrollspy">
        <div class="card-content">
          <h4 class="card-title">Shipping Address</h4>
         
            <div className="col-lg-12">
            {/* <div className="row">
                    <div className="col-sm-12">
                    <input type="radio" name="gender" value="select" className="shippingbutton"/> 
                    </div>
                </div> */}
            <div className="row">
            <div className="col-lg-4">
                <InputFloat
            value={this.state.gst}
            onChange={({ target }) => this.setState({ gst : target.value })}
            placeholder="GST Number" 
           />
                </div>
                <div className="col-lg-4">
                <InputFloat
            value={this.state.office}
            onChange={({ target }) => this.setState({ office : target.value })}
            placeholder="Office Phone" 
           />
                </div>
                <div className="col-lg-4">
                <InputFloat
            value={this.state.totalStock}
            onChange={({ target }) => this.setState({ totalStock : target.value })}
            placeholder="Office Mobile" 
           />
                </div>
           </div>
           <div className="row">
           <div className="col-lg-12">
                <InputFloat
            value={this.state.address}
            onChange={({ target }) => this.setState({ address : target.value })}
            placeholder="Address" 
           />
                </div>
           </div>
            

             
           <div className="row">
           <div className="col-lg-4">
                <InputFloat
            value={this.state.latitude}
            onChange={({ target }) => this.setState({ latitude : target.value })}
            placeholder="Latitude" 
           />
           </div>
           <div className="col-lg-4">
                <InputFloat
            value={this.state.longitude}
            onChange={({ target }) => this.setState({ longitude : target.value })}
            placeholder="Longitude" 
           />
           </div>
           <div className="col-lg-4">
                <InputFloat
            value={this.state.landmark}
            onChange={({ target }) => this.setState({ landmark : target.value })}
            placeholder="Landmark" 
           />
           </div>
           </div>

           <div className="row">
           <div  className="input-field col-lg-3">
           <select value={this.state. size} onChange={this.changeSize}>
            <option value="male">India</option>
            <option value="female">Japan</option>
            {/* <option value="others">L</option> */}
          </select>
                  <label for="name6" className="">Country</label>
           </div>
            <div  className="input-field col-lg-3">
           <select value={this.state. size} onChange={this.changeSize}>
            <option value="male">Delhi</option>
            <option value="female">xyz</option>
          
          </select>
                  <label for="name6" className="">State</label>
           </div>
           <div className="col-lg-3">
                <InputFloat
            value={this.state.city}
            onChange={({ target }) => this.setState({ city : target.value })}
            placeholder="City" 
           />
           </div>
           <div className="col-lg-3">
                <InputFloat
            value={this.state.pincode}
            onChange={({ target }) => this.setState({ pincode : target.value })}
            placeholder="Pincode" 
           />
           </div>
          


                  
           </div>
           <div className="row">
           <div className="col-lg-4">
                <InputFloat
            value={this.state.person}
            onChange={({ target }) => this.setState({ person : target.value })}
            placeholder="Contact Person Name" 
           />
           </div>
           <div className="col-lg-4">
                <InputFloat
            value={this.state.email}
            onChange={({ target }) => this.setState({ email : target.value })}
            placeholder="Contact Person Email" 
           />
           </div>
           <div className="col-lg-4">
                <InputFloat
            value={this.state.mobile}
            onChange={({ target }) => this.setState({ mobile : target.value })}
            placeholder="Contact Person Mobile" 
           />
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


export default MyProfile;
