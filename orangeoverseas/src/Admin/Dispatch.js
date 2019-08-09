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


class Dispatch extends Component {
    constructor(props){
        super(props)
        this.state = {
            orderNum: '',
            orderDate: '',
            orderValue: '',

            igst: '',
            cgst: '',
            sgst: '',

            netCost: '',
            noOfItems: '',
            dealerName: '',
            orderSource: '', 
            
            dispatchId: '',
            invoiceNum: '',
            dispatchMode: '',
            trackingId: ''


        }
    }
    changeCategory = e => {
        this.setState({
            category: e.target.value
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
               <h5 class="breadcrumbs-title mt-0 mb-0">Dispatch</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 {/* <li class="breadcrumb-item"><a href="#">Dealer Management</a>
                 </li> */}
                 <li class="breadcrumb-item active">Dispatch
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
      <p class="caption mb-0">Dispatch</p>
    </div>
  </div>
  </div>
        <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy">
        <div class="card-content">
          <h4 class="card-title">Order Details</h4>
            <div className="col-lg-12">
            <div className="row">
                <div  className="col-lg-4">
                <InputFloat
            value={this.state.orderNum}
            onChange={({ target }) => this.setState({ orderNum: target.value })}
            placeholder="Order Number" 
           />
           </div>
           <div  className="col-lg-4">
                <InputFloat
            value={this.state.orderDate}
            onChange={({ target }) => this.setState({ orderDate: target.value })}
            placeholder="Order Date" 
           />
           </div>
           <div  className="col-lg-4">
                <InputFloat
            value={this.state.orderValue}
            onChange={({ target }) => this.setState({ orderValue: target.value })}
            placeholder="Order Value" 
           />
           </div>
           </div>

           <div className="row">
                <div  className="col-lg-4">
                <InputFloat
            value={this.state.igst}
            onChange={({ target }) => this.setState({ igst: target.value })}
            placeholder="IGST" 
           />
           </div>
           <div  className="col-lg-4">
                <InputFloat
            value={this.state.cgst}
            onChange={({ target }) => this.setState({ cgst: target.value })}
            placeholder="CGST" 
           />
           </div>
           <div  className="col-lg-4">
                <InputFloat
            value={this.state.sgst}
            onChange={({ target }) => this.setState({ sgst: target.value })}
            placeholder="SGST" 
           />
           </div>
           </div>

           <div className="row">
                <div  className="col-lg-6">
                <InputFloat
            value={this.state.netCost}
            onChange={({ target }) => this.setState({ netCost: target.value })}
            placeholder="Net Cost" 
           />
           </div>
           <div  className="col-lg-6">
                <InputFloat
            value={this.state.noOfItems}
            onChange={({ target }) => this.setState({ noOfItems: target.value })}
            placeholder="Number of Items" 
           />
           </div>
           </div>

           <div className="row">
                <div  className="col-lg-6">
                <InputFloat
            value={this.state.dealerName}
            onChange={({ target }) => this.setState({ dealerName: target.value })}
            placeholder="Dealer Name" 
           />
           </div>
           <div  className="col-lg-6">
                <InputFloat
            value={this.state.orderSource}
            onChange={({ target }) => this.setState({ orderSource: target.value })}
            placeholder="Order Source" 
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
          <h4 class="card-title">Dispatch Details</h4>
            <div className="col-lg-12">
            <div className="row">
           <div  className="col-lg-6">
                <InputFloat
            value={this.state.dispatchId}
            onChange={({ target }) => this.setState({ dispatchId: target.value })}
            placeholder="Dispatch ID" 
           />
           </div>
           <div  className="col-lg-6">
                <InputFloat
            value={this.state.invoiceNum}
            onChange={({ target }) => this.setState({ invoiceNum: target.value })}
            placeholder="Invoice Number" 
           />
           </div>
           </div>

           <div className="row">
                <div  className="col-lg-6">
                <InputFloat
            value={this.state.dispatchMode}
            onChange={({ target }) => this.setState({ dispatchMode: target.value })}
            placeholder="Dispatch Mode" 
           />
           </div>
           <div  className="col-lg-6">
                <InputFloat
            value={this.state.trackingId}
            onChange={({ target }) => this.setState({ trackingId: target.value })}
            placeholder="Tracking ID" 
           />
           </div>
           </div>

         


           <div className="row">
                  <div className="col-lg-12">
                    <div className="btn-align">
                        <Button className="btn01 mgtp" style={{marginLeft: '15%'}}>SUMMIT</Button>
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

export default Dispatch;
