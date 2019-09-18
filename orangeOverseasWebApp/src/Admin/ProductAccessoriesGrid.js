import React, {Component} from 'react';

import avtr1 from './../Images/avatar01.png';
// import './App.css';
import './../css/table-twbs.css';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../node_modules/font-awesome/css/font-awesome.min.css';
import {Navbar, Form, Nav, NavDropdown, FormControl, Button, Dropdown   } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import SearchField from "react-search-field";

// import ReactDataGrid from 'react-data-grid';

// var React = require('react');
var ReactDOM = require('react-dom');
var DataTable = require('react-data-components').DataTable;

const renderMapUrl =
    (val, row) =>
    
      <a href='/ProductViewAccessories' className="btn07">
        <i class="fa fa-edit gridicon" aria-hidden="true"></i>
       </a>;
 
      var ptypes = [ '333 West Wacker Drive', '1931 Insurgentes Sur', '1 Lombard Street', '55 Av Hidalgo'];
      var stypes = [ '333 West Wacker Drive', '1931 Insurgentes Sur', '1 Lombard Street', '55 Av Hidalgo'];

      var articlenums =['01', '02'];
     var pnames = [ 'Carlos', 'Juan', 'Jesus', 'Alberto', 'John' ];
     // var category = [ 'Chicago', 'Tampico', 'San Francisco', 'Mexico City', 'Boston', 'New York' ];
     var brands = ['Raymonds', 'SiyaRams'];
     var tstocks = ['20', '50', '100'];
     var Updatedon= ['2 Sept, 2019'];

var data = [];
for (var i = 0; i < 1000; i++) {
  data.push({
    id: i,
    ptype: ptypes[~~(Math.random() * ptypes.length)],
    stype: ptypes[~~(Math.random() * stypes.length)],
    
    articlenum: articlenums[~~(Math.random() * articlenums.length)],
    pname: pnames[~~(Math.random() * pnames.length)],
    // category: category[~~(Math.random() * category.length)],
    brand: brands[~~(Math.random() * brands.length)],
    tstock: tstocks[~~(Math.random() * tstocks.length)],
    Updatedon: Updatedon[~~(Math.random() * Updatedon.length)],
  });
}

var columns = [
  { title: 'Article Number', prop: 'articlenum', width: '10%'  },
  { title: 'Product Type', prop: 'ptype', width: '20%' },
  { title: 'Sub Type', prop: 'stype', width: '20%' },
  
  { title: 'Brand', prop: 'brand', width: '20%' },
  { title: 'Available Stock (Qty.)', prop: 'tstock', width: '10%' },
  // { title: 'Product Name', prop: 'pname'  },
  // { title: 'Category', prop: 'category' },
  
  
  { title: 'Updated On', prop: 'Updatedon', width: '10%' },
  { title: 'Action', render: renderMapUrl, className: 'text-center', width: '10%' }

];



class ProductAccessoriesGrid extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
      document.title = "Accessories List || Orange Overseas || DOPS (Dealer Order Processing System)"
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
               <h5 class="breadcrumbs-title mt-0 mb-0">Accessories List</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">Product Management</a>
                  </li> 
                 <li class="breadcrumb-item active">Accessories
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

                this.props.history.push('./AddAccessories')
          
              }} 
            >Add New Accessory</Button>
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

export default ProductAccessoriesGrid;
