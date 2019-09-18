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
import autobind from 'autobind-decorator';
import parse from 'html-react-parser';
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class ProceedCheckout extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         dealerCode: '',
    //         companyName: '',
    //         category: '',
    //         website: '',

    //         GSTNumber: '',
    //         officePhone: '',
    //         officeMobile: '',
    //         addressType: '',
    //         address: '',
    //         latitude: '',
    //         longitude: '',
    //         landMark: '',
    //         country: '',
    //         State:'',
    //         city: '',
    //         pinCode: '',

    //         cntctPersonName: '',
    //         cntctPersonMobile: '',
    //         cntctPersonEmail: ''

            



    //     }
    // }
    // changeCategory = e => {
    //     this.setState({
    //         category: e.target.value
    //     })
    // }
    // changeStates = e => {
    //     this.setState({
    //         States:e.target.value
    //     })
    // }
    // changeBrand = e => {
    //     this.setState({
    //         brand:e.target.value
    //     })
    // }
    // changeFabricMaterial = e => {
    //     this.setState({
    //         fabricMaterial:e.target.value
    //     })
    // }

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
             <div class="col-lg-6 shiphead">
               <h5 class="breadcrumbs-title mt-0 mb-0">CheckOut</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 <li class="breadcrumb-item"><a href="#">Product Management</a>
                 </li>
               
                 <li class="breadcrumb-item active">CheckOut
                 </li>
               </ol>
             </div>
             <div class="col-lg-6 col-sm-6">
               <div className="dop dops">
                <h5 class="">DOPS</h5>
                <p>Dealer Order Processing System</p>
               </div>
             
             </div>
           </div>
         </div>
       </div>

      <div className="container">
      {/* <div className="col-lg-12 col-md-12">
      <div class="card">
    <div class="card-content">
      <p class="caption mb-0">Select Shipping Address</p>
    </div>
  </div>
  </div> */}
        
     
        <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy">
        <div class="card-content">
             <div>
                 { parse(
                    '<!doctype html/>'+
         
'<html>'+

 	'<head>'+
		'<style>'+
'tr.success td {-webkit-print-color-adjust: exact;background-color: #f7f7f7 !important;}'+
'tr.success th {-webkit-print-color-adjust:exact;background-color: #f7f7f7 !important;}'+
'body{bacbackground-color: white!important;}'+
'@media only screen and (max-width: 1024px) and (min-width: 360px) {'+
    
    'body{overflow:scroll}}'+ 

'tr.danger td {background-color: #f7f7f7 !important;-webkit-print-color-adjust: exact;}'+
'</style>'+
		'<title>Orange Overseas</title>'+
	'</head>'+
	
	'<body style="text-align: center;">'+
		'<table style="width:1000px; text-align: center; margin-left: auto; margin-right: auto; bottom: 0px; border-right-color:'+
         '#000; border-collapse: collapse;" border="1" cellspacing="0" cellpadding="0">'+
			'<tbody>'+
                '<tr>'+
                    '<td rowspan="2" style="width:20%"><img src='+require('../Images/orange_overseas.png')+' style="width: 78%;"/></td>'+
                    '<td colspan="8" style="width:80%"> <h2 style="text-align: center; font-size: 25px; font-weight: bold;">'+
                     'Orange Overseas</h2><p style="text-align: center;">26, Ring Road, Lajpat Nagar - 4, New Delhi - 110024.'+
                        'INDIA<br/>Phone: +91 11 4155 0305 | +91 11 4155 0306</p>'+
                           '<tr class="success">'+
                    		'<td colspan="8" style="text-align: right; padding-right: 1%; font-weight: bold; font-size: 20px; ">'+
                            'Order Form</td></tr></td>'+
                '</tr>'+

                    	
                '<tr>'+
                	'<td colspan="1" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+
                        '<span style="font-weight: bold; font-size: 16px;">Order Date</span></td>'+
                	'<td colspan="3" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">4'+
                        '<sup>th</sup> September 2019</td>'+
                	'<td colspan="3" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+
                        '<span style="font-weight: bold; font-size: 16px;">Purchase Order No.</span></td>'+
                	'<td colspan="4" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">10001</td>'+

                '</tr>'+  	                 


                '<tr class="success">'+
                    '<td colspan="4" style="padding-top: 1%; padding-bottom: 1%; font-weight: bold; font-size: 15px;text-align:center">Billing'+ 
                    'Address</td>'+
                	'<td colspan="5" style="padding-top: 1%; padding-bottom: 1%; font-weight: bold; font-size: 15px;text-align:center">'+
                    'Shipping Address</td>'+
                '</tr>'+
                '<tr>'+
                	'<td colspan="4" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+
                        '<span style="font-weight: bold; font-size: 18px;">Global Trendz</span><p>621, 3rd Floor, Anna Salai,'+
                        '<br/>Chennai 600 006. INDIA.<br/>Phone: +91 44 4309 9119<br/>Landmark: Near Gemini Flyover<br/>GSTIN:'+
                        '08AWBRR12245UU <br/>Contact Person: Renit Daniel ( +91 98 4009 3858 )</p></td>'+

                	'<td colspan="5" style=" text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+
                        '<span style="font-weight: bold; font-size: 18px;">Global Trendz</span><p>92 A, Ground Floor, LIG'+
                             'Apartments<br/>New Delhi 110 027. INDIA.<br/>Phone: +91 11 4703 7722<br/>Landmark: Near Bharat Sweets'+
                            '<br/>GSTIN: 08AWBRR12245UU <br/>Contact Person: Renit Daniel ( +91 98 4009 3858 )</p></td>'+
                '</tr>'+

            '</tbody>'+
        '</table>'+
        		'<table style="width:1000px; text-align: center; margin-left: auto; margin-right: auto; border-right-color:'+
                 '#000; border-top: hidden;" border="1" cellspacing="0" cellpadding="0">'+
			'<tbody>'+
                '<tr class="success">'+
                	'<td style="padding-top: 1%; padding-bottom: 1%;text-align:center"><span style="font-weight: bold;">Article No.</span></td>'+
                    '<td colspan="3" style="padding-top: 1%; padding-bottom: 1%;text-align:center"><span style="font-weight: bold;">'+ 
                    'Description</span></td>'+
                    '<td style="padding-top: 1%; padding-bottom: 1%;text-align:center"><span style="font-weight: bold;">Qty</span></td>'+
                    '<td style="padding-top: 1%; padding-bottom: 1%;text-align:center"><span style="font-weight: bold;">Rate</span></td>'+
                    '<td style="padding-top: 1%; padding-bottom: 1%;text-align:center"><span style="font-weight: bold;">GST %</span></td>'+
                    '<td style="padding-top: 1%; padding-bottom: 1%;text-align:center"><span style="font-weight: bold;">GST</span></td>'+
                    '<td style="padding-top: 1%; padding-bottom: 1%;text-align:center"><span style="font-weight: bold;">Total (INR)</span></td>'+
                '</tr>'+
                '<tr>'+
                    '<td>100001<br/>(Fabric)</td>'+
                    '<td colspan="3" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+
                        'Brand: Zara<br/>Product Type: Suit<br/>Color: Black<br/>Material: Silk<br/>Length: 2 Mts</td>'+
                    '<td style="text-align:center">2</td>'+
                    '<td style="text-align: right; padding-right: 1%;">500.00</td>'+
                    '<td style="text-align:center">5%</td>'+
                    '<td style="text-align: right; padding-right: 1%;">25.00</td>'+
                    '<td style="text-align: right; padding-right: 1%;">1000.00</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>200002<br/>(Accessories)</td>'+
                    '<td colspan="3" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+
                        'Brand: Zara<br/>Product Type: Suit<br/>Color: Black<br/>Material: Silk<br/>Size: Large</td>'+
                    '<td style="text-align:center">2</td>'+
                    '<td style="text-align: right; padding-right: 1%;">500.00</td>'+
                    '<td style="text-align:center">5%</td>'+
                    '<td style="text-align: right; padding-right: 1%;">25.00</td>'+
                    '<td style="text-align: right; padding-right: 1%;">1000.00</td>'+
                '</tr>'+ 
                '<tr>'+
                    '<td>300003<br/>(Readymade)</td>'+
                    '<td colspan="3" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+
                        'Brand: Zara<br/>Product Type: Suit<br/>Color: Black<br/>Material: Silk<br/>Size: Large</td>'+
                    '<td style="text-align:center">2</td>'+
                    '<td style="text-align: right; padding-right: 1%;">500.00</td>'+
                    '<td style="text-align:center">5%</td>'+
                    '<td style="text-align: right; padding-right: 1%;">25.00</td>'+
                    '<td style="text-align: right; padding-right: 1%;">1000.00</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>300003<br/>(Readymade)</td>'+
                    '<td colspan="3" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+
                        'Brand: Zara<br/>Product Type: Suit<br/>Color: Black<br/>Material: Silk<br/>Size: Large</td>'+
                    '<td style="text-align:center">2</td>'+
                    '<td style="text-align: right; padding-right: 1%;">500.00</td>'+
                    '<td style="text-align:center">5%</td>'+
                    '<td style="text-align: right; padding-right: 1%;">25.00</td>'+
                    '<td style="text-align: right; padding-right: 1%;">1000.00</td>'+
                '</tr>'+

            '</tbody>'+
        '</table>'+

        '<table style="width:1000px; text-align: center; margin-left: auto; margin-right: auto; border-right-color: #000;'+ 
        'border-top: hidden;" border="1" cellspacing="1" cellpadding="0">'+
			'<tbody>'+

                '<tr>'+
                	'<td rowspan="5" colspan="4" style="text-align: left; padding-left: 1%;"><span style="font-weight: bold;">'+ 
                    'Note:</span>'+
                		'<ul style="text-align: left;">'+
                			'<li>Shipping Cost Extra On Actuals</li>'+
                			'<li>Express Shipping Cost Will be additional</li>'+
                			'<li>Delivery Date Will be given on Confirmation<br/>of Order</li>'+
                		'</ul>'+
                		
                		'<td colspan="4" style="text-align: right; padding-right: 1%;"><span style="font-weight: bold;">Sub Total'+
                        '</span></td>'+
                		'<td style="text-align: right; padding-right: 1%;">1,00,000.00</td>'+
                		'<tr><td colspan="4" style="text-align: right; padding-right: 1%;"><span style="font-weight: bold;">'+
                        'GST 5%</span></td><td style="text-align: right; padding-right: 1%;">0.00</td></tr>'+
                		'<tr><td colspan="4" style="text-align: right; padding-right: 1%;"><span style="font-weight: bold;">'+
                        'GST 12%</span></td><td style="text-align: right; padding-right: 1%;">100.00</td></tr>'+
                		'<tr><td colspan="4" style="text-align: right; padding-right: 1%;"><span style="font-weight: bold;">'+
                        'Total GST</span></td><td style="text-align: right; padding-right: 1%;">0.00</td></tr>'+
                		'<tr><td colspan="4" style="text-align: right; padding-right: 1%;"><span style="font-weight: bold;">'+
                        'Total Amount (Inclusive of all Taxes)</span></td><td style="text-align: right; padding-right: 1%;">0.00'+
                        '</td></tr>'+               	    
                	'</td>'+

                '</tr>'+


                '<tr>'+
                	'<td colspan="10" style="text-align: left; padding-left: 1%; padding-top: 1%; padding-bottom: 1%;">'+
                        '<span style="font-weight: bold;">Amount in Words:</span> Rupees Twenty Thousand Only</td>'+
                '</tr>'+

                '<tr>'+
                	'<th colspan="10" style="text-align: center; padding-top: 1%; padding-bottom: 1%;"><span style="font-weight:'+ 
                    'bold;">Total Products to be Delivered : 5 Articles (20 Items)</span></th>'+
                '</tr>'+

                '<tr class="success">'+
                	'<th rowspan="2" style="text-align: center;">Taxable Value</th>'+
                	'<th colspan="2" style="text-align: center;">Central Tax (CGST)</th>'+
                	'<th colspan="2" style="text-align: center;">State Tax (SGST)</th>'+
                	'<th colspan="2" style="text-align: center;">Integrated Tax (IGST)</th>'+
                	'<th rowspan="2" colspan="2" style="text-align: center;">Total GST</th>'+
                    '<tr class="success">'+
                     '<th style="text-align: center;">Rate</th><th style="text-align: center; ">Amount</th>'+
                     '<th style="text-align: center;">Rate</th><th style="text-align: center;">Amount</th>'+
                     '<th style="text-align: center;">Rate</th><th style="text-align: center;">Amount</th>'+
                     '</tr>'+
                '</tr>'+


                    
                '<tr>'+
                	'<td style="text-align: right; padding-right: 1%;">2000.00</td>'+
                	'<td style="text-align:center">2.5%</td>'+
                	'<td style="text-align: right; padding-right: 1%;">1000.00</td>'+
                	'<td style="text-align:center">2.5%</td>'+
                	'<td style="text-align: right; padding-right: 1%;">1000.00</td>'+
                	'<td style="text-align:center">5%</td>'+
                	'<td style="text-align: right; padding-right: 1%;">0.00</td>'+
                	'<td colspan="2" style="text-align: right; padding-right: 1%;">2000.00</td>'+
                '</tr>'+ 
                '<tr>'+
                	'<td style="text-align: right; padding-right: 1%;">2000.00</td>'+
                	'<td style="text-align:center">6%</td>'+
                	'<td style="text-align: right; padding-right: 1%;">2000.00</td>'+
                	'<td style="text-align:center">6%</td>'+
                	'<td style="text-align: right; padding-right: 1%;">2000.00</td>'+
                	'<td style="text-align:center">12%</td>'+
                	'<td style="text-align: right; padding-right: 1%;">0.00</td>'+
                	'<td colspan="2" style="text-align: right; padding-right: 1%;">2000.00</td>'+
                '</tr>'+                    
                '<tr>'+
                	'<td colspan="10" style="padding: 1%;"></td>'+
                '</tr>'+
                '<tr>'+
                	'<th colspan="10" style=" padding-top: 1%; padding-bottom: 1%; text-align: center;">Have a Question? Call us on'+  
                    '+91 11 4155 0305 or Email us at info@orangeoverseas.com</th>'+
                '</tr>'+

                '<tr class="success">'+
                '<th colspan="10" style="padding-top: 1%; padding-bottom: 1%; text-align: center; background: #f7f7f7;">Visit'+
                     'us at www.orangeoverseas.com</th>'+
                '</tr>'+
                
            '</tbody>'+
		'</table>'+
	'</body>'+
'</html>'
)
                 }
             </div>
       
           
          </div>
                

        </div>
        </div>
        
  

       

        <div className="col-lg-12 col-md-12 mgbt2">
            <div className="prefixces" className="card card-default scrollspy ">
                 <div className="card-content">
             
                <a href="" className="btn01" style={{float:'right'}} data-toggle="modal" data-target="#myModal">Checkout</a>
              

    
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
      
         {/* Modal content */}
        <div class="modal-content">
          {/* <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Modal Header</h4>
          </div> */}
          <div class="modal-body">
          <p style={{textAlign:'center'}}><i class="fa fa-check-circle" style={{fontSize:'70px',color:'#d14d07'}}></i></p>
           <p style={{textAlign:'center',color:'#f8b006',fontSize:'22px'}}>Order Placed Successfully</p>
           <p style={{textAlign:'center'}}>
               Your Order has been successfully placed. You can view order <br/> details and track your order in order history.
           </p>
             <div style={{width:'304px',margin:'auto'}}>
                  <ul>
                      <li><b>Order Number</b><span className="ordercs">12368545</span></li>
                   <li><b>Order Date</b><span className="ordercs1">September 6,2019</span></li>
                   <li><b>Order Value</b><span className="ordercs2"><i class="fa fa-inr" aria-hidden="true"></i>45000</span></li>
                  </ul>
             </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default btn01" data-dismiss="modal">Close</button>
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


export default ProceedCheckout;
