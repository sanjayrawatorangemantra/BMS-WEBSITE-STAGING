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
    
        <a class="btn01" href='/Dashboard/ProductViewAccessories'>
        View
      </a>;
 
var onums =['0112', '0113', '0114', '0115'];
var ptypes = [ 'Fabric', 'Accessories', 'Readymade Garments' ];
var orderDates = [ 'Jan 1,2019', 'Jan 10,2019', 'Jan 12,2019', 'Jan 14,2019' ];
var orderValues = [ '1000.00', '3000.00', '2000.00', '1100.00'];
var orderStatus = ['Placed', 'Approved', 'Partial Dispatched', 'Delivered'];
// var edits = ['Edit'];


var data = [];
for (var i = 0; i < 1000; i++) {
  data.push({
    id: i,
    onum: onums[~~(Math.random() * onums.length)],
    ptype: ptypes[~~(Math.random() * ptypes.length)],
    orderDate: orderDates[~~(Math.random() * orderDates.length)],
    orderValue: orderValues[~~(Math.random() * orderValues.length)],
    orderStatus: orderStatus[~~(Math.random() * orderStatus.length)],
  });
}

var columns = [
    { title: 'Order Number', prop: 'onum'  },
  { title: 'Product Type', prop: 'ptype'  },
  { title: 'Order Date', prop: 'orderDate' },
  { title: 'Order Value', prop: 'orderValue' },
  { title: 'Order Status', prop: 'orderStatus' },
//   { title: 'Edit', prop: 'edit' },
  { title: 'Action', render: renderMapUrl, className: 'text-center' }

];



class OrderHistory extends Component {
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
               <h5 class="breadcrumbs-title mt-0 mb-0">Order History</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">Order Management</a>
                  </li> 
                 <li class="breadcrumb-item active">Order History
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
      <p class="caption mb-0">Order History</p>
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

export default OrderHistory;
