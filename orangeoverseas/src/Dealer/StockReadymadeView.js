import React, {Component} from 'react';

import avtr1 from './../Images/avatar01.png';
// import './App.css';
import './../css/form.css';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../node_modules/font-awesome/css/font-awesome.min.css';
import {Navbar, Form, Nav, NavDropdown, FormControl, Button, Dropdown   } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import InputFloat from 'react-floating-input';

import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import ImageUploader from 'react-images-upload';
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

var ReactDOM = require('react-dom');
var DataTable = require('react-data-components').DataTable;

var stockAddeds =['01 March 2019', '02 April 2019','05 july 2019'];
var addeds = [ '500', '400', '200', '100', '250' ];
var closingStock = [ '450', '250', '500', '350', '150', '100' ];
// var edits = ['Edit'];


var data = [];
for (var i = 0; i < 1000; i++) {
  data.push({
    id: i,
    stockAdded: stockAddeds[~~(Math.random() * stockAddeds.length)],
    added: addeds[~~(Math.random() * addeds.length)],
    closingStock: closingStock[~~(Math.random() * closingStock.length)]
    // edit: edits[~~(Math.random() * edits.length)],
  });
}

var columns = [
  { title: 'Stock Added On Date', prop: 'stockAdded'  },
  { title: 'Added Quantity', prop: 'added'  },
  { title: 'Closing Stock', prop: 'closingStock' }
//   { title: 'Edit', prop: 'edit' },

];

class StockReadymadeView  extends Component {
    constructor(props){
        super(props)
        this.state = {
            articleNumber: '',
            productName: '',
            category: '',
            productType: '',
            brand: '',
            totalStock: '',
            productDescription: '',
            measurement: '',
            fabricMaterial: '',
            tax: '',
            WPCategoryA: '',
            WPCategoryB: '',

            currentQuantity: '',
            addNewQuantity: '',
            totalQuantity: ''



        }
    }
    changeCategory = e => {
        this.setState({
            category: e.target.value
        })
    }
    changeProductType = e => {
        this.setState({
            productType:e.target.value
        })
    }
    changeBrand = e => {
        this.setState({
            brand:e.target.value
        })
    }
    changeFabricMaterial = e => {
        this.setState({
            fabricMaterial:e.target.value
        })
    }

render() {
  return (
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
               <h5 class="breadcrumbs-title mt-0 mb-0">View Stock(Readymade Garments)</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">Stock Management</a>
                 </li>
                 <li class="breadcrumb-item active">View Stock(Readymade Garments)
                 </li>
               </ol>
             </div>
             <div class="col-lg-6">
                 
               
             </div>
           </div>
         </div>
       </div>
      <div className="container">
      <div className="col-lg-12 col-md-12">
      <div class="card">
    <div class="card-content">
      <p class="caption mb-0">View Stock(Readymade Garments)</p>
    </div>
  </div>
  </div>

        <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy">
        <div class="card-content">
          <h4 class="card-title">Stock Details</h4>
            <div className="col-lg-12">
            <div className="row">
                <div  className="col-lg-6">
                <InputFloat
            value={this.state.currentQuantity}
            onChange={({ target }) => this.setState({ currentQuantity: target.value })}
            placeholder="Current Quantity" 
           />
           </div>
           <div  className="col-lg-6">
                <InputFloat
            value={this.state.addNewQuantity}
            onChange={({ target }) => this.setState({ addNewQuantity: target.value })}
            placeholder="Add New Quantity" 
           />
           </div>
           </div>
              <div className="row">
              <div  className="col-lg-12">
                <InputFloat
            value={this.state.totalQuantity}
            onChange={({ target }) => this.setState({ totalQuantity: target.value })}
            placeholder="Total Quantity" 
           />
           </div>

              </div>
              <div className="row">
                  <div className="col-lg-12">
                    <div className="btn-align mgtp">
                        <Button className="btn01">ADD STOCK</Button>
                        {/* <div class="sim-button button8"><span>Login</span></div> */}
                    </div>
                  </div>
              </div>
            </div>
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

export default StockReadymadeView;
