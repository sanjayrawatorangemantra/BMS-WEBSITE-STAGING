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
  { id: "bug", value: "Bug" },
  { id: "epic", value: "Epic" },
  { id: "story", value: "Story" }
];

const IssueTypeEditor = <DropDownEditor options={issueTypes} />;

const columns = [
  { key: "id", name: "Product Name" },
  { key: "title", name: "Category" },
  { key: "complete", name: "Product Type" },
  { key: "issueType", name: "Brand", editor: IssueTypeEditor },
  { key: "issueType", name: "Color", editor: IssueTypeEditor },
  { key: "issueType", name: "Pattern", editor: IssueTypeEditor },
  { key: "issueType", name: "Fabric Material", editor: IssueTypeEditor }
];

const rows = [
  { id: 0, title: "Task 1", issueType: "Bug", complete: 20 },
  { id: 1, title: "Task 2", issueType: "Story", complete: 40 },
  { id: 2, title: "Task 3", issueType: "Epic", complete: 60 }
];

class FabricGrid extends Component {
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
               <h5 class="breadcrumbs-title mt-0 mb-0">Fabric Stock</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">Stock Management</a>
                 </li>
                 <li class="breadcrumb-item active">Fabric
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
      <p class="caption mb-0">Fabric Stock</p>
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

export default FabricGrid;
