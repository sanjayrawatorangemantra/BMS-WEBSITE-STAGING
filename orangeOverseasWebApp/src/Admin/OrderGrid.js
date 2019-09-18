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
         <a class="btn05" href='/OrderView'>
        <i class="fa fa-edit gridicon" aria-hidden="true"></i>
       </a>
     
 
var orderNums = [ '1110', '1220', '1330', '1440', '1550' ];
var orderDates = [ '22 Sept, 2019', '12 Sept, 2019', '23 Sept, 2019', '2 Jan, 2019', '4 Feb, 2019', '6 March, 2019' ];
var orderValues = [ '1,200', '15,000', '85,000', '40,000'];
var dealerNames = ['Amit Singh', 'Anil Khushwaha', 'Ravi Kant'];
var status = ['Cancelled', 'Approved'];


var data = [];
for (var i = 0; i < 1000; i++) {
  data.push({
    id: i,
    orderNum: orderNums[~~(Math.random() * orderNums.length)],
    orderDate: orderDates[~~(Math.random() * orderDates.length)],
    orderValue: orderValues[~~(Math.random() * orderValues.length)],
    dealerName: dealerNames[~~(Math.random() * dealerNames.length)],
    status: status[~~(Math.random() * status.length)],
    
  });
}

var columns = [
  { title: 'Order No.', prop: 'orderNum', width: '10%'  },
  { title: 'Order Date', prop: 'orderDate', width: '15%' },
  { title: 'Order Value (Rs.)', prop: 'orderValue',className: 'text-right', width: '20%' },
  { title: "Dealer Name", prop: 'dealerName', width: '30%' },
  // { title: 'Order Source', prop: 'source' },
  { title: 'Order Status', prop: 'status', className: 'text-center', width: '15%' },
  { title: 'Action', render: renderMapUrl, className: 'text-center', width: '10%' }

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
             <div class="col-lg-6 col-sm-12">
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
          <div className="col-lg-12 col-md-12">
      <div class="card">
    <div class="card-content">
    <div className="row">
    <div className="col-lg-4">
        <div className="abc" >
  <Form inline>
  <i class="fa fa-search search-icon" style={{color: '#f8b006'}}></i>
      <FormControl type="text" placeholder="Search" className="mr-sm-2 search" />
      <span><Button variant="" className="btn-search btn01">Search</Button></span>
    </Form>
    </div>
        </div>
        {/* <div className="col-lg-6">
        <Button className="btn01" style={{float: 'right'}}
            onClick={()=>{

                this.props.history.push('./Dealer')
          
              }} 
            >Add New Dealer</Button>
            </div> */}
            </div>
    </div>
  </div>
  </div>

  <div className="grid-mobile">
    <div className="datagrid">

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
    </div>
    <Footer />
  </div>
   
    );

      
  
}
}

export default OrderGrid;
