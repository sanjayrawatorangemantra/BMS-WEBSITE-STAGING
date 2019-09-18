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


class Dealer extends Component {
    constructor(props){
        super(props)
        this.state = {
            dealerCode: '',
            companyName: '',
            category: '',
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
    changeCategory = e => {
        this.setState({
            category: e.target.value
        })
    }
    
    componentDidMount(){
      document.title = "Add New Dealer || Orange Overseas || DOPS (Dealer Order Processing System)"
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
             <div class="col-lg-6 col-sm-12">
               <h5 class="breadcrumbs-title mt-0 mb-0">Add New Dealer</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                  <li class="breadcrumb-item"><a href="#">Dealer Management</a>
                 </li> 
                 <li class="breadcrumb-item active">Dealer
                 </li>
               </ol>
             </div>
             <div class="col-lg-6 col-sm-12">
               <div className="dop">
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
      <p class="caption mb-0" style={{color: '#fff'}}>Add Dealer Details</p>
    </div>
  </div>
  </div> */}
        <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy">
        <div class="card-content">
          <h4 class="card-title">Dealer Details</h4>
            <div className="col-lg-12">
            <div className="row">
                <div  className="col-lg-6">
                <InputFloat
            value={this.state.dealerCode}
            onChange={({ target }) => this.setState({ dealerCode: target.value })}
            placeholder="Dealer Code" 
           />
           </div>
           <div  className="col-lg-6">
                <InputFloat
            value={this.state.companyName}
            onChange={({ target }) => this.setState({ companyName: target.value })}
            placeholder="Company Name" 
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
           <div  className="input-field col-lg-6">
           <select value={this.state.category} onChange={this.changeCategory}>
            <option value="male">A</option>
            <option value="female">B</option>
            <option value="others">C</option>
          </select>
                  <label for="name6" className="">Company Structure</label>
           </div>

              </div>
              <div className="row">
              <div className="col-lg-6">
                <InputFloat
            value={this.state.website}
            onChange={({ target }) => this.setState({ email : target.value })}
            placeholder="Company Email" 
           />
                </div>
                <div className="col-lg-6">
                <InputFloat
            value={this.state.website}
            onChange={({ target }) => this.setState({ website : target.value })}
            placeholder="Website" 
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
                    <a href=''> <Button className="btn01">Add New Address</Button></a>
                        {/* <div class="sim-button button8"><span>Login</span></div> */}
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        </div>

       
     
        <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy">
        <div class="card-content">
          <h4 class="card-title">Address Details</h4>
          <div className="col-lg-12">
            <div className="row">
            <div  className="input-field col-lg-12">
           <select value={this.state.country} onChange={this.changeCountry}>
            <option value="male">Billing </option>
            <option value="female">Shipping</option>
           
          </select>
                  <label for="name6" className="">AddressType</label>
           </div>
           </div>
           <div className="row">
           <div  className="col-lg-12">
                <InputFloat
            value={this.state.address}
            onChange={({ target }) => this.setState({ address: target.value })}
            placeholder="Address" 
           />
           </div>
           </div>
        
         <div className="row">
            
         <div  className="col-lg-3">
                <InputFloat
            value={this.state.landMark}
            onChange={({ target }) => this.setState({landMark: target.value })}
            placeholder="Landmark" 
           />
            </div>
            <div  className="input-field col-lg-3">
           <select value={this.state.country} onChange={this.changeCountry}>
            <option value="male">India</option>
            <option value="female">B</option>
            <option value="others">C</option>
          </select>
                  <label for="name6" className="">Country</label>
           </div>
           <div  className="input-field col-lg-3">
           <select value={this.state.States} onChange={this.changeStates}>
            <option value="male">Delhi</option>
            <option value="female">B</option>
            <option value="others">C</option>
          </select>
                  <label for="name6" className="">State</label>
           </div>
           
           <div  className="input-field col-lg-3">
           <select value={this.state.city} onChange={this.changeCity}>
            <option value="male">Delhi</option>
            <option value="female">B</option>
            <option value="others">C</option>
          </select>
                  <label for="name6" className="">City</label>
           </div>
         </div>
                          
         
           <div className="row">
          
          
           <div  className="col-lg-3">
                <InputFloat
            value={this.state.pinCode}
            onChange={({ target }) => this.setState({ pinCode: target.value })}
            placeholder="Pin Code" 
           />
           </div>
            <div  className="col-lg-3">
                <InputFloat
            value={this.state.GSTNumber}
            onChange={({ target }) => this.setState({ GSTNumber: target.value })}
            placeholder="GST Number" 
           />
           </div>
           <div  className="col-lg-3">
                <InputFloat
            value={this.state.officePhone}
            onChange={({ target }) => this.setState({ officePhone: target.value })}
            placeholder="Office Phone" 
           />
           </div>
           <div  className="col-lg-3">
                <InputFloat
            value={this.state.officeMobile}
            onChange={({ target }) => this.setState({ officeMobile: target.value })}
            placeholder="Office Mobile" 
           />
           </div>
                  
           </div>

             
            </div>
           
          <h4 class="card-title" style={{marginTop:'26px'}}>Contact Person Details</h4>
            <div className="col-lg-12">
            <div className="row">
                <div  className="col-lg-12">
                <InputFloat
            value={this.state.cntctPersonName}
            onChange={({ target }) => this.setState({ cntctPersonName: target.value })}
            placeholder="Contact Person Name" 
           />
           </div>
           </div>
              <div className="row">
              <div  className="col-lg-6">
                <InputFloat
            value={this.state.cntctPersonMobile}
            onChange={({ target }) => this.setState({ cntctPersonMobile: target.value })}
            placeholder="Contact Person Mobile" 
           />
           </div>
           <div  className="col-lg-6">
                <InputFloat
            value={this.state.cntctPersonEmail}
            onChange={({ target }) => this.setState({ cntctPersonEmail: target.value })}
            placeholder="Contact Person Email" 
           />
           </div>

              </div>
             
            </div>
          
          </div>
        </div>
        </div>
            
        <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy">
        <div class="card-content">
          <h4 class="card-title">Profile Verification</h4>
            <div className="col-lg-12">
               
            <div className="row">
             <div className="input-field col-lg-6">
            
           <select value={this.state.designation} onChange={this.changeDesignation}>
            <option value="male">Yes</option>
            <option value="female">No</option>
            {/* <option value="others">Cleaner</option> */}
           </select>
              <label for="name6" className="">Verified</label>
              </div>
              <div className="input-field col-lg-6">
                <select value={this.state.department} onChange={this.changeDepartment}>
            <option value="male">Active</option>
            <option value="female">Inactive</option>
          
           </select>
              <label for="name6" className="">Status</label>
            </div>
           
            </div>
            </div>
          </div>
        </div>
        </div>

        <div className="col-lg-12 col-md-12 mgbt2">
        <div id="prefixes" class="card card card-default scrollspy">
        <div class="card-content">
         
            <div className="col-lg-12">
              
              <div className="row btngri">
                  <div className="col-lg-12">
                    <div className="btn-align3" >
                    <a href='/DealerGrid'> <Button className="btn01">Save</Button></a>
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

export default Dealer;
