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

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

const renderMapUrl =
    (val, row) =>
    <Button className="btn01" onClick="myFunction()"
    >Edit</Button>
      //   <a class="btn01" href='/Dashboard/StaffView'>
      //   Edit
      // </a>
      ;
 
var names = [ 'Carlos', 'Juan', 'Jesus', 'Alberto', 'John' ];
var designations = [ 'Chicago', 'Tampico', 'San Francisco', 'Mexico City', 'Boston', 'New York' ];
var departments = [ '333 West Wacker Drive', '1931 Insurgentes Sur', '1 Lombard Street', '55 Av Hidalgo'];
var emails = ['tanya@gmail.com', 'nidhi@gmail.com', 'tapan@gmail.com'];
var mobiles = ['8974563215', '9632587415'];
var dojs = ['01 Jan 2019', '01 July 2019', '01 March 2019'];
var userTypes = ['Admin', 'Staff'];


var data = [];
for (var i = 0; i < 1000; i++) {
  data.push({
    id: i,
    name: names[~~(Math.random() * names.length)],
    designation: designations[~~(Math.random() * designations.length)],
    department: departments[~~(Math.random() * departments.length)],
    email: emails[~~(Math.random() * emails.length)],
    mobile: mobiles[~~(Math.random() * mobiles.length)],
    doj: dojs[~~(Math.random() * dojs.length)],
    userType: userTypes[~~(Math.random() * userTypes.length)],
    
  });
}

var columns = [
  { title: 'Name', prop: 'name'  },
  { title: 'Designation', prop: 'designation' },
  { title: 'Department', prop: 'department' },
  { title: 'Email', prop: 'email' },
  { title: 'Mobile', prop: 'mobile' },
  { title: 'Date of Joining', prop: 'doj' },
  { title: 'User Type', prop: 'userType' },
  { title: 'Action', render: renderMapUrl, className: 'text-center' }

];



class StaffGrid extends Component {
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
               <h5 class="breadcrumbs-title mt-0 mb-0">Staff Management</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 {/* <li class="breadcrumb-item"><a href="#">Product Management</a>
                  </li>  */}
                 <li class="breadcrumb-item active">Staff Management
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
      <p class="caption mb-0">Staff Management</p>
    </div>
  </div>
  </div>

  <div className="container mgbt">
      <div className="row">
          <div className="col-lg-12">
            <Button className="btn01" style={{float: 'right'}}
            onClick={()=>{

                this.props.history.push('./Staff')
          
              }} 
            >Add Staff</Button>
          </div>
      </div>

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

export default StaffGrid;
