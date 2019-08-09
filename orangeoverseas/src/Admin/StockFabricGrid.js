import React, {Component} from 'react';

import avtr1 from './../Images/avatar01.png';
// import './App.css';
import './../css/table-twbs.css';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../node_modules/font-awesome/css/font-awesome.min.css';
import {Navbar, Form, Nav, NavDropdown, FormControl, Button, Dropdown   } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

// import ReactDataGrid from 'react-data-grid';

// var React = require('react');
var ReactDOM = require('react-dom');
var DataTable = require('react-data-components').DataTable;

const renderMapUrl =
    (val, row) =>
        <a class="btn01" href='/Dashboard/StockFabricView'>
        Add Stock
      </a>
      ;

 var articlenums =['01', '02'];
var pnames = [ 'Carlos', 'Juan', 'Jesus', 'Alberto', 'John' ];
var category = [ 'Chicago', 'Tampico', 'San Francisco', 'Mexico City', 'Boston', 'New York' ];
var ptypes = [ '333 West Wacker Drive', '1931 Insurgentes Sur', '1 Lombard Street', '55 Av Hidalgo'];
var brands = ['Reymond', 'SiyaRams'];
var tstocks = ['20', '50', '100'];
// var edits = ['Edit'];


var data = [];
for (var i = 0; i < 1000; i++) {
  data.push({
    id: i,
    articlenum: articlenums[~~(Math.random() * articlenums.length)],
    pname: pnames[~~(Math.random() * pnames.length)],
    category: category[~~(Math.random() * category.length)],
    ptype: ptypes[~~(Math.random() * ptypes.length)],
    brand: brands[~~(Math.random() * brands.length)],
    tstock: tstocks[~~(Math.random() * tstocks.length)],
    // edit: edits[~~(Math.random() * edits.length)],
  });
}

var columns = [
  { title: 'Article Number', prop: 'articlenum'  },
  { title: 'Product Name', prop: 'pname'  },
  { title: 'Category', prop: 'category' },
  { title: 'Product Type', prop: 'ptype' },
  { title: 'Brand', prop: 'brand' },
  { title: 'Total Stock (Mtr)', prop: 'tstock' },
//   { title: 'Edit', prop: 'edit' },
  { title: 'Action', render: renderMapUrl, className: 'text-center' }

];



class StockFabricGrid extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

render() {
 
    
  return(
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
               <h5 class="breadcrumbs-title mt-0 mb-0">Stock(Fabric) Management</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">Stock Management</a>
                  </li> 
                 <li class="breadcrumb-item active">Stock(Fabric) Management
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
      <p class="caption mb-0">Stock(Fabric) Management</p>
    </div>
  </div>
  </div>

  <div className="container mgbt">

          <DataTable
      className="container"
      keys="id"
      columns={columns}
      initialData={data}
      initialPageLength={50}
      initialSortBy={{ prop: 'city', order: 'descending' }}
      pageLengthOptions={[ 50, 100, 200]}
    />
    </div>
    </div>
    </div>
    </div>
    <Footer />
  </div>
   
    );

      
  
}
}

export default StockFabricGrid;
