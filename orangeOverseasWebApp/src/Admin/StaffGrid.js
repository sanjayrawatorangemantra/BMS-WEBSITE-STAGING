import React, {Component} from 'react';

import avtr1 from './../Images/avatar001.png';
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
const renderAbc = 
 (val, row) =>
 <a  href=''>
 
 <span><Button type="button" className="btnSet">Set Password</Button></span>
 </a>
 ;
const renderMapUrl =
    (val, row) =>
    // <Button className="btn01" onClick="myFunction()"
    // >Edit</Button>
        <a  href='/StaffView' className="btn05 btns05">
            <i class="fa fa-edit gridicon" aria-hidden="true" style={{marginTop: '38%'}}></i>
      </a>
      ;
 
      const profileImage =
      (val, row) =>
      // <Button className="btn01" onClick="myFunction()"
      // >Edit</Button>
      <img src={avtr1} className="profile" alt="profile" />
        //   <a class="btn01" href='/Dashboard/StaffView'>
        //   Edit
        // </a>
        ;

var names = [ 'Rajat Singh', 'Priyanka Sinha', 'Gyan Kumar' ];
// var photos = [ 'Carlos', 'Juan', 'Jesus', 'Alberto', 'John' ];
var emails = ['tanya@gmail.com', 'nidhi@gmail.com', 'tapan@gmail.com'];
var mobiles = ['8974563215', '9632587415'];
var dojs = ['01 Jan 2019', '01 July 2019', '01 March 2019'];
var userTypes = ['Admin', 'Staff'];
var Status = ['Active', 'Inactive'];


var data = [];
for (var i = 0; i < 1000; i++) {
  data.push({
    id: i,
    name: names[~~(Math.random() * names.length)],
    // photo: photos[~~(Math.random() * photos.length)],
    email: emails[~~(Math.random() * emails.length)],
    mobile: mobiles[~~(Math.random() * mobiles.length)],
    doj: dojs[~~(Math.random() * dojs.length)],
    userType: userTypes[~~(Math.random() * userTypes.length)],
    Status: Status[~~(Math.random() * Status.length)],
    
  });
}

var columns = [
  { title: 'Name', prop: 'name', width: '15%'  },
  { title: 'Profile Photo',render: profileImage, className: 'text-center', width: '10%'},
  { title: 'Email', prop: 'email', width: '12%' },
  { title: 'Mobile', prop: 'mobile', width: '10%' },
  { title: 'Date of Joining', prop: 'doj', width: '15%' },
  { title: 'User Type', prop: 'userType', width: '8%' },
  { title: 'Status', prop: 'Status', width: '10%' },
  { title: 'Action', render: renderAbc, className: 'text-center', width: '15%' },
  { title: 'Action', render: renderMapUrl, className: 'text-center', width: '5%' }

];



class StaffGrid extends Component {
    constructor(props){
        super(props)
        this.state = {


        }
    }

    componentDidMount(){
      document.title = "Staff List || Orange Overseas || DOPS (Dealer Order Processing System)"
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
               <h5 class="breadcrumbs-title mt-0 mb-0">Staff List</h5>
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
        <div className="col-lg-8">
        <Button className="btn01 btnAdd" style={{float: 'right'}}
            onClick={()=>{

                this.props.history.push('./Staff')
          
              }} 
            >Add New Staff</Button>
            </div>
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

export default StaffGrid;
