import React, {Component} from 'react';

import avtr1 from './../Images/avatar01.png';
// import './App.css';
import './../css/form.css';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../node_modules/font-awesome/css/font-awesome.min.css';
import {Navbar, Form, Nav, NavDropdown, FormControl, Button, Dropdown   } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";
import { Editors } from "react-data-grid-addons";

const { DropDownEditor } = Editors;
const issueTypes = [
  { id: 10, value: 10 },
  { id: 20, value: 20 },
  { id: 30, value: 30 }
];

const IssueTypeEditor = <DropDownEditor options={issueTypes} />;

const columns = [
  { key: "id", name: "Order Number" },
  { key: "title", name: "Order Date" },
  { key: "complete", name: "Order Value" },
  { key: "title", name: "IGST" },
  { key: "complete", name: "CGST" },
  { key: "color", name: "SGST" },
  { key: "brand", name: "Net Cost"},
  { key: "design", name: "Number of Items"},
  { key: "fabricMaterial", name: "Dealer's Name"},
  { key: "fabricMaterial", name: "Billing Address"},
  { key: "fabricMaterial", name: "Delivery Address"},
  { key: "fabricMaterial", name: "Order Source"},
  { key: "fabricMaterial", name: "Order Status"}
];

const rows = [
  { id: 0, title: "Task 1", issueType: 10, complete: 20, color: "Black", brand: "abc", design: "checks", fabricMaterial: "Cotton" },
  { id: 1, title: "Task 2", issueType: 20, complete: 40, color: "Blue", brand: "abc", design: "checks", fabricMaterial: "Cotton" },
  { id: 2, title: "Task 3", issueType: 30, complete: 60, color: "Brown", brand: "abc", design: "checks", fabricMaterial: "Cotton" }
];

class OrderGrid extends Component {
  state = { rows };
  
  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };

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
               <h5 class="breadcrumbs-title mt-0 mb-0">Order Management</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 {/* <li class="breadcrumb-item"><a href="#">Stock Management</a>
                 </li> */}
                 <li class="breadcrumb-item active">Order Management
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
      <p class="caption mb-0">Order Management</p>
    </div>
  </div>
  </div>
<div>
        <ReactDataGrid
          columns={columns}
          rowGetter={i => this.state.rows[i]}
          rowsCount={3}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
        />
        {/* <PageGuide /> */}
      </div>
      
      </div>
      </div>
      </div>
      <Footer />

    </div>
  );
}
}

export default OrderGrid;
