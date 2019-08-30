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
    <a class="btn01" href='/DealerView'>
        View
      </a>;
 
var dealerCodes = [ 'Carlos', 'Juan', 'Jesus', 'Alberto', 'John' ];
var companyNames = [ 'Chicago', 'Tampico', 'San Francisco', 'Mexico City', 'Boston', 'New York' ];
var categories = [ '333 West Wacker Drive', '1931 Insurgentes Sur', '1 Lombard Street', '55 Av Hidalgo'];
var cpnames = ['Reymond', 'SiyaRams'];
var cpmobiles = ['20', '50', '100'];
var cpemails = ['Blue', 'Black', 'Grey'];

var data = [];
for (var i = 0; i < 1000; i++) {
  data.push({
    id: i,
    dealerCode: dealerCodes[~~(Math.random() * dealerCodes.length)],
    companyName: companyNames[~~(Math.random() * companyNames.length)],
    category: categories[~~(Math.random() * categories.length)],
    cpname: cpnames[~~(Math.random() * cpnames.length)],
    cpmobile: cpmobiles[~~(Math.random() * cpmobiles.length)],
    cpemail: cpemails[~~(Math.random() * cpemails.length)]
  });
}

var columns = [
  { title: 'Dealer Code', prop: 'dealerCode'  },
  { title: 'Company Name', prop: 'companyName'  },
  { title: 'Category', prop: 'category' },
  { title: 'Contact Person Name', prop: 'cpname' },
  { title: 'Contact Person Mobile', prop: 'cpmobile' },
  { title: 'Contact Person Email', prop: 'cpemail' },
  { title: 'Action', render: renderMapUrl, className: 'text-center' }

];



class DealerGrid extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
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
             <div class="col-lg-6">
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
      <p class="caption mb-0" style={{color: '#fff'}}>Dealer Details</p>
    </div>
  </div>
  </div>

  <div className="container mgbt">
      <div className="row">
          <div className="col-lg-12">
            <Button className="btn01" style={{float: 'right'}}
            onClick={()=>{

                this.props.history.push('./Dealer')
          
              }} 
            >Add New Dealer</Button>
          </div>
      </div>

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
    </div>
    </div>
    <Footer />
  </div>
   
    );

      
  
}
}

export default DealerGrid;
