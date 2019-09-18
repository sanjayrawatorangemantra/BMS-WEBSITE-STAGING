import React, {Component} from 'react';

import avtr1 from './../Images/avatar01.png';
// import './App.css';
import './../css/table-twbs.css';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../node_modules/font-awesome/css/font-awesome.min.css';
import {Navbar, Form, Nav, NavDropdown, FormControl, Button, Dropdown   } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import InputFloat from 'react-floating-input';
import Switch from "react-switch";
// import ReactDataGrid from 'react-data-grid';

// var React = require('react');
var ReactDOM = require('react-dom');
var DataTable = require('react-data-components').DataTable;

const renderAbc = 
 (val, row) =>
 
 
 <span><Button type="button" className="btn01 btnSet" data-toggle="modal" data-target="#myModal2">Set Password</Button></span>

 ;

const renderMapUrl =
    (val, row) =>
  
    <a  href='/DealerView'>
      <i class="fa fa-edit gridicon btn05" aria-hidden="true"></i>
     
      </a>
    
    
   
        
    ;
 
var dealerCodes = [ '10023', '10027', '11124', '65432', '54313' ];
var companyNames = [ 'Chicago Pvt. Ltd.', 'Tampico Pvt. Ltd.', 'San Francisco Pvt. Ltd.', 'Mexico City Pvt. Ltd.', 'Boston Pvt. Ltd.', 'New York Pvt. Ltd.' ];
var structure = [ 'Proprietorship', 'Partnership', 'Limited Liability Partnership', 'Private Limited Company', 'Limited Company'];
var cpnames = ['Reymond', 'SiyaRams'];
var emails = ['shivani@gmail.com', 'shubhasini@gmail.com', 'tapan@gmail.com'];
var status = ['Active', 'Inactive'];

var data = [];
for (var i = 0; i < 1000; i++) {
  data.push({
    id: i,
    dealerCode: dealerCodes[~~(Math.random() * dealerCodes.length)],
    companyName: companyNames[~~(Math.random() * companyNames.length)],
    structure: structure[~~(Math.random() * structure.length)],
    email: emails[~~(Math.random() * emails.length)],
    status: status[~~(Math.random() * status.length)]
  });
}

var columns = [
  { title: 'Dealer Code', prop: 'dealerCode', width: '10%'  },
  { title: 'Company Name', prop: 'companyName', width: '20%' },
  { title: 'Company Structure', prop: 'structure', width: '20%' },
  { title: 'Email', prop: 'email', width: '20%' },
  { title: 'Status', prop: 'status', width: '10%' },
  { title: 'Action', render: renderAbc, className: 'text-center', width: '20%' },
  { title: 'Action', render: renderMapUrl, className: 'text-center', width: '10%' }

];



class DealerGrid extends Component {
    constructor(props){
        super(props)
        this.state = {
           checked: false,
           checked1: true
          
          };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ checked });
  }
  handleChange1(checked1) {
    this.setState({ checked1 });
  }
 
    

    componentDidMount(){
      document.title = "Dealers List || Orange Overseas || DOPS (Dealer Order Processing System)"
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
               <h5 class="breadcrumbs-title mt-0 mb-0">Dealer Management</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">Dealer Management</a>
                 </li> 
                 <li class="breadcrumb-item active">Dealer List
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

                this.props.history.push('./Dealer')
          
              }} 
            >Add New Dealer</Button>
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
      pageLengthOptions={[ 50, 100, 200 ]}
    />
    </div>
    </div>
        
    

    
    <div class="modal fade" id="myModal2" role="dialog">
      <div class="modal-dialog">
      
         {/* Modal content */}
        <div class="modal-content">
          <div class="modal-header gradient-45deg-indigo-purple">
           <div className="col-lg-12 col-md-12 ">
           
            
            
             <h5 class="breadcrumbs-title mt-0 mb-0 addcolr">Reset Password</h5>
           
            
           
            
           </div>
              
          </div>
          <div class="modal-body">
          <div className="col-lg-12">
       
        <div class="card-content">
      
            <div className="col-lg-12">
            <div className="row">
            
          <label>
                  <span>Auto Generate Password</span>
                  <Switch onChange={this.handleChange} checked={this.state.checked} className="switchbt2"/>
                </label>
              
       </div>
       <div className="row">
           
                  <span>Require user to change <br/> password on next login</span>
                    <Switch onChange={this.handleChange1} checked={this.state.checked1} className="switchbt"/>
              
                 
                
         </div>
            </div>
          </div>
       
        </div>


          <div className="col-lg-12 col-md-12 mgbt4">
        
        <div class="card-content">
           

            <div className="col-lg-12">
              
              <div className="row btngri2">
                  <div className="col-lg-12">
                    <div className="btn-align4" >
                   <Button className="btn01"style={{float: 'right'}} data-toggle="modal" data-target="#myModal3" data-dismiss="modal">Reset</Button>
                    <Button className="btn01 btncl" data-dismiss="modal" style={{float: 'right',marginRight:'5px'}}>Cancel</Button>
                   
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
       
       {/* .........................Reset PAssword Model...................................................*/}

    <div class="modal fade" id="myModal3" role="dialog">
      <div class="modal-dialog">
      
         {/* Modal content */}
        <div class="modal-content">
          <div class="modal-header gradient-45deg-indigo-purple">
           <div className="col-lg-12 col-md-12 ">
           
            
            
             <h5 class="breadcrumbs-title mt-0 mb-0 addcolr">Reset Password</h5>
           
            
           
            
           </div>
              
          </div>
          <div class="modal-body">
          <div className="col-lg-12">
       
        <div class="card-content">
      
            <div className="col-lg-12">
           
            <div className="row">
            <div className="col-lg-12">
            <InputFloat
            value={this.state.password}
            onChange={({ target }) => this.setState({ articleNumber: target.value })}
            placeholder="Type New Password" 
           />
                  
                </div>
                <div  className=" col-lg-12">
          
                   <InputFloat
            value={this.state.repassword}
            onChange={({ target }) => this.setState({ repassword : target.value })}
            placeholder="Retype New Password" 
           /> 
           </div>
           
                 <span style={{marginLeft:'26px',marginTop:'4px'}}>Auto Generate Password</span>
                  <Switch onChange={this.handleChange} checked={this.state.checked} className="switchbt2"/>
                
              
       </div>
       <div className="row">
           
             
                <span style={{marginLeft:'26px'}}>Require user to change <br/> password on next login</span>
                    <Switch onChange={this.handleChange1} checked={this.state.checked1} className="switchbt"/>
              
              
                 
                
         </div>
            </div>
          </div>
       
        </div>


          <div className="col-lg-12 col-md-12 mgbt4">
        
        <div class="card-content">
           

            <div className="col-lg-12">
              
              <div className="row btngri2">
                  <div className="col-lg-12">
                    <div className="btn-align4" >
                   <Button className="btn01"style={{float: 'right'}}>Reset</Button>
                    <Button className="btn01 btncl" data-dismiss="modal" style={{float: 'right',marginRight:'5px'}}>Cancel</Button>
                   
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
    {/* ................................................End Model........................................ */}

    </div>
    </div>
    </div>
    <Footer />
  </div>
   
    );

      
  
}
}

export default DealerGrid;
