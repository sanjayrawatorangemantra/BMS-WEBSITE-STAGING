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
import ImageUploader from 'react-images-upload';

class Form01 extends Component {
    constructor(props){
        super(props)
      
        this.state = {
            inputVal: '',
            designation: '',
            email: '',
            countryCode: '',
            mobile: '',
            pictures: [],
            department: '',
            value: '',
             
        }
        this.onDrop = this.onDrop.bind(this);
    }
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
    handleChange =e => {
        this.setState({
            value: e.target.value
        })
    }
    changeDesignation =e => {
      this.setState({
        designation: e.target.designation
    })
    }
    changeDepartment =e => {
      this.setState({
        department: e.target.department
    })
    }
    changeCountryCode =e => {
      this.setState({
        countryCode: e.target.countryCode
    })
    }
    componentDidMount(){
      document.title = "Add New Staff || Orange Overseas || DOPS (Dealer Order Processing System)"
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
               <h5 class="breadcrumbs-title mt-0 mb-0">Add New Staff</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">Staff Management</a>
                 </li>
                 <li class="breadcrumb-item active">Staff
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
   
      <p class="caption mb-0" style={{color: '#fff'}}>Add Staff Details</p>
    </div>
  </div>
  </div> */}
  <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy">
        <div class="card-content">
          <h4 class="card-title">Personal Details</h4>
            <div className="col-lg-12">
            <div className="row">
          <div className="col-lg-12">
           
          </div>
            </div>
                <div className="row">
                <div className="col-lg-4">
                <ImageUploader
                withIcon={false}
                label={true}
                withPreview={true}
                buttonText={<div><i class="fa fa-plus"></i></div>}
                onChange={this.onDrop}
                imgExtension={['.jpeg', '.jpg', '.png', '.gif']}
                maxFileSize={5242880}
            />
            </div>
            <div className="col-lg-8">
            <div className="row">
             <div className="input-field col-lg-6">
                <InputFloat
            value={this.state.inputVal}
            onChange={({ target }) => this.setState({ inputVal: target.value })}
            placeholder="Name" 
           />
          </div>
           <div className="input-field col-lg-6">
             <InputFloat
            value={this.state.email}
            onChange={({ target }) => this.setState({ email: target.value })}
            placeholder="Email" 
           /></div>
           
           </div>
          
            <div className="row">
             <div className=" col-lg-6">
             <InputFloat
            value={this.state.mobile}
            onChange={({ target }) => this.setState({ mobile: target.value })}
            placeholder="Mobile" 
           /></div>
             <div className="input-field col-lg-6">
                  <select value={this.state.value} onChange={this.handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
                  <label for="name6" className="">Gender</label>
                </div>
               
           {/* <select value={this.state.designation} onChange={this.changeDesignation}>
            <option value="male">Manager</option>
            <option value="female">Accountant</option>
            <option value="others">Cleaner</option>
           </select>
              <label for="name6" className="">Designation</label> */}
              
              </div>
           </div>
           </div>
           <div className="row">
           <div className="input-field col-lg-6">
                  {/* <i className="fa fa-lock prefix"></i> */}
                  <input id="dob" type="date" />
                  <label for="dob" className="">Date of Birth</label>
                </div>
                <div className="input-field col-lg-6">
                  {/* <i className="fa fa-lock prefix"></i> */}
                  <select value={this.state.value} onChange={this.handleChange}>
            <option value="married">Married</option>
            <option value="unmarried">Unmarried</option>
          </select>
                  <label for="name3" className="">Marital Status</label>
                </div>
              </div>
        
             
              
          
            </div>
          </div>
        </div>
        </div>

        <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy">
        <div class="card-content">
          <h4 class="card-title">Company Details</h4>
            <div className="col-lg-12">
               
            <div className="row">
             <div className="input-field col-lg-3">
            
           <select value={this.state.designation} onChange={this.changeDesignation}>
            <option value="male">Manager</option>
            <option value="female">Accountant</option>
            <option value="others">Cleaner</option>
           </select>
              <label for="name6" className="">Designation</label>
              </div>
              <div className="input-field col-lg-3">
                <select value={this.state.department} onChange={this.changeDepartment}>
            <option value="male">abc</option>
            <option value="female">def</option>
            <option value="others">ghi</option>
           </select>
              <label for="name6" className="">Department</label>
            </div>
           
                <div className="input-field col-lg-3">
                  {/* <i className="fa fa-comments prefix"></i> */}
                  <input id="dob" type="date" />
                  <label for="dob" className="">Date of Joining</label>
                </div>
                <div className="input-field col-lg-3">
                <select value={this.state.value} onChange={this.handleChange}>
            <option value="admin">Admin</option>
            <option value="staff">Staff</option>
          </select>
                  <label for="name3" className="">User Type</label>
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
                    <a href='/StaffGrid'><Button className="btn01" style={{float:'right'}}>Save</Button></a>
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

export default Form01;
