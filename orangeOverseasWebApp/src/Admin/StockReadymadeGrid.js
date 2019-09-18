import React, {Component} from 'react';

import avtr1 from './../Images/avatar01.png';
// import './App.css';
import './../css/table-twbs.css';
import './../css/addfabric.css';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../node_modules/font-awesome/css/font-awesome.min.css';
import {Navbar, Form, Nav, NavDropdown, FormControl, Button, Dropdown } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import InputFloat from 'react-floating-input';
// import ReactDataGrid from 'react-data-grid';

// var React = require('react');
var ReactDOM = require('react-dom');
var DataTable = require('react-data-components').DataTable;

const renderSth =
(val, row) =>
   
 
    <span><Button type="button" className="btn01">Stock History</Button></span>
   

  ;

const renderMapUrl =
    (val, row) =>
    
        // <a class="btn01" href='/StockReadymadeView'>
        // Add Stock
        // </a> 
        <i class="fa fa-pencil-square-o btn05" aria-hidden="true" data-toggle="modal" data-target="#myModal"></i>
        // <button type="button" class="btn01" data-toggle="modal" data-target="#myModal">Add Stock</button>
     ;
 
     var ptypes = [ '333 West Wacker Drive', '1931 Insurgentes Sur', '1 Lombard Street', '55 Av Hidalgo'];
     var stypes = [ '333 West Wacker Drive', '1931 Insurgentes Sur', '1 Lombard Street', '55 Av Hidalgo'];
     var articlenums =['01', '02'];
     var brands = ['Reymond', 'SiyaRams'];
     var tstocks = ['20', '50', '100'];

     var Updatedon= ['2 Sept, 2019'];
     
    //  var pnames = [ 'Carlos', 'Juan', 'Jesus', 'Alberto', 'John' ];
    //  var category = [ 'Chicago', 'Tampico', 'San Francisco', 'Mexico City', 'Boston', 'New York' ];
    
     // var edits = ['Edit'];
     
     
     var data = [];
     for (var i = 0; i < 1000; i++) {
       data.push({
         id: i,
         ptype: ptypes[~~(Math.random() * ptypes.length)],
         stype: ptypes[~~(Math.random() * stypes.length)],
         brand: brands[~~(Math.random() * brands.length)],
         tstock: tstocks[~~(Math.random() * tstocks.length)],
         Updatedon: Updatedon[~~(Math.random() * Updatedon.length)],
         articlenum: articlenums[~~(Math.random() * articlenums.length)],
        //  pname: pnames[~~(Math.random() * pnames.length)],
        //  category: category[~~(Math.random() * category.length)],
         // edit: edits[~~(Math.random() * edits.length)],
       });
     }
     
     var columns = [
      { title: 'Article Number', prop: 'articlenum', width: '8%'  },
      { title: 'Product Type', prop: 'ptype', width: '15%' },
      { title: 'Sub Type', prop: 'stype', width: '15%' },
     
      //  { title: 'Product Name', prop: 'pname'  },
      //  { title: 'Category', prop: 'category' },
      
       { title: 'Brand', prop: 'brand', width: '15%' },
       { title: 'Available Stock (Qty.)', prop: 'tstock', width: '10%' },
       { title: 'Updated On', prop: 'Updatedon', width: '10%' },
     //   { title: 'Edit', prop: 'edit' },
     { title: 'Stock History', render: renderSth, className: 'text-center', width: '20%' },
       { title: 'Action', render: renderMapUrl, className: 'text-center', width: '7%' }
     
     ];

class StockReadymadeGrid extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
      document.title = "Stock (Readymade Garments) List || Orange Overseas || DOPS (Dealer Order Processing System)"
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
               <h5 class="breadcrumbs-title mt-0 mb-0">Stock(Readymade Garments) List</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">Stock Management</a>
                  </li> 
                 <li class="breadcrumb-item active">Readymade Garments
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

                this.props.history.push('./AddReadyMade')
          
              }} 
            >Add New Readymade</Button>
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
       
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
      
         {/* Modal content */}
        <div class="modal-content">
          <div class="modal-header gradient-45deg-indigo-purple">
           <div className="col-lg-12 col-md-12 ">
           
            
            
             <h5 class="breadcrumbs-title mt-0 mb-0 addcolr">Alter Stock (Readymade Garment)</h5>
           
            
           
            
           </div>
              
          </div>
          <div class="modal-body">
          <div className="col-lg-12">
       
        <div class="card-content">
      
            <div className="col-lg-12">
            <div className="row">
            <div className="col-lg-6">
            <InputFloat
            value={1234566}
            onChange={({ target }) => this.setState({ articleNumber: target.value })}
            placeholder="Article Number" 
           />
                  
                </div>
                {/* */}
       
      
       <div  className=" col-lg-6">
          
                   <InputFloat
            value={300}
            onChange={({ target }) => this.setState({ totalStock : target.value })}
            placeholder="Current Stock" 
           /> 
           </div>
           
    
           
           </div>
              <div className="row">
              <div className="input-field col-lg-6">
            
            <select value={this.state.designation} onChange={this.changeDesignation}>
             <option value="male">Add stock</option>
             <option value="female">Remove stock</option>
             {/* <option value="others">Cleaner</option> */}
            </select>
               <label for="name6" className="">Alter Type</label>
               </div>
              <div  className="col-lg-6">
              <InputFloat
            value={this.state.newStock}
            onChange={({ target }) => this.setState({ newStock : target.value })}
            placeholder="New Stock" 
           /> 
           </div>
        
               
                
                </div>

                <div className="row">
            
                <div className="col-lg-6">
                <InputFloat
            value={500}
            onChange={({ target }) => this.setState({ totalStock : target.value })}
            placeholder="Total Stock" 
           />
                </div>
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
                    <a href='/StockReadymadeGrid'><Button className="btn01"style={{float: 'right'}}>Save</Button></a>
                    <Button className="btn01 btncl" data-dismiss="modal" style={{float: 'right',marginRight:'5px'}}>Close</Button>
                   
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

    </div>
    </div>
    <Footer />
  </div>
   
    );

      
  
}
}

export default StockReadymadeGrid;
