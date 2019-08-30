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
    // <Button className="btn01" 
    // onClick={()=>{
    //   console.log('click')
    //     // this.props.history.push('./AddFabric')
    //    return(
    //     <a class="btn01" href='/AddFabric'></a>
    //    )
        
    // }}
    // >
         <a class="btn01" href='/OrderView'>
        Edit
       </a>
     
      // </Button>;
 
var orderNums = [ 'Carlos', 'Juan', 'Jesus', 'Alberto', 'John' ];
var orderDates = [ 'Chicago', 'Tampico', 'San Francisco', 'Mexico City', 'Boston', 'New York' ];
var orderValues = [ '333 West Wacker Drive', '1931 Insurgentes Sur', '1 Lombard Street', '55 Av Hidalgo'];
var dealerNames = ['Amit', 'Anil', 'Ravi'];
var sources = ['Delhi', 'Mumbai'];
var status = ['Decline', 'Approved'];


var data = [];
for (var i = 0; i < 1000; i++) {
  data.push({
    id: i,
    orderNum: orderNums[~~(Math.random() * orderNums.length)],
    orderDate: orderDates[~~(Math.random() * orderDates.length)],
    orderValue: orderValues[~~(Math.random() * orderValues.length)],
    dealerName: dealerNames[~~(Math.random() * dealerNames.length)],
    source: sources[~~(Math.random() * sources.length)],
    status: status[~~(Math.random() * status.length)],
    
  });
}

var columns = [
  { title: 'Order Number', prop: 'orderNum'  },
  { title: 'Order Date', prop: 'orderDate' },
  { title: 'Order Value', prop: 'orderValue' },
  { title: "Dealer Name", prop: 'dealerName' },
  { title: 'Order Source', prop: 'source' },
  { title: 'Order Status', prop: 'status' },
  { title: 'Action', render: renderMapUrl, className: 'text-center' }

];



class OrderGrid extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
      document.title = "Order List || Orange Overseas || DOPS (Dealer Order Processing System)"
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
               <h5 class="breadcrumbs-title mt-0 mb-0">Order List</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                  <li class="breadcrumb-item"><a href="#">Order Management</a>
                  </li>  
                 <li class="breadcrumb-item active">Orders
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
      <p class="caption mb-0" style={{color: '#fff'}}>Order Management</p>
    </div>
  </div>
  </div>

  <div className="container mgbt">
      {/* <div className="row">
          <div className="col-lg-12">
            <Button className="btn01" style={{float: 'right'}}
            onClick={()=>{

                this.props.history.push('./')
          
              }} 
            >Add Dispatch</Button>
          </div>
      </div> */}

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

export default OrderGrid;
