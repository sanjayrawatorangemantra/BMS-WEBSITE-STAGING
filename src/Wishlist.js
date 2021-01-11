/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Menu from './Header'
import Footer from './Footer'
import Header from './Header'
import PostApiCall from "./Api";
import Notiflix from "notiflix-react";
import Parser from "html-react-parser";
import GetApiCall from './GetApi'
import moment from 'moment'



class Wishlist extends React.Component {

  
    constructor(props){
        super(props)
        this.state={
            Cart : [],
            RawData : [],
            quantity : [],
            cartPrice : [],
            SubTotal : 0,


            FoodData : [],
            FootwearData : [],
            SocksData : [],


            ExtraCharges : [],
            ShippingCharge : 0,
            COD : 0,
            ShippingTh : 0,
            Offer : 0,
            PayCod : false,

            OfferData : [],
            SelectedCouponData : [] ,

            showoffer : false,
            Couponcode : '',
            done : false

           
        }

    }

    componentDidMount(){
        Notiflix.Loading.Init({
            svgColor: "#507dc0",
            //  #507dc0'
          });
      this.getUpdatedCart()

    }

    getUpdatedCart(){

        var log = localStorage.getItem('CustomerLoginDetails')
        var login = JSON.parse(log)


        var arr = []
        var subt = 0
        var cn = 0

        if(login != null && login != ''){

            Notiflix.Loading.Dots('');

            PostApiCall.postRequest(
                {
                    product_category: 'Food',
                    customer_id : login.fld_userid
                },
                "GetWishlistFoodVariant"
              ).then((results) =>
                results.json().then((obj) => {
                  if (results.status == 200 || results.status == 201) {
               
                    if(obj.data.length > 0){
                        arr.push(obj.data)


                        // for(var i = 0 ; i<Object.keys(obj.data).length;i++){
                        //     subt = subt + obj.data[i].fld_discountprice
                        // }

                    }

                    this.setState({
                      FoodData: obj.data,
                      Cart : arr
                    },
                    ()=>{
                        cn = cn +1

                        PostApiCall.postRequest(
                            {
                                product_category: 'Footwear',
                                customer_id : login.fld_userid
                            },
                            "GetWishlistFootwearVariant"
                          ).then((results) =>
                            results.json().then((obj) => {
                              if (results.status == 200 || results.status == 201) {
                           
                                if(obj.data.length > 0){
                                    arr.push(obj.data)
            
                                    // for(var i = 0 ; i<Object.keys(obj.data).length;i++){
                                    //     subt = subt + obj.data[i].fld_discountprice
                                    // }
                                }
                               
                                this.setState({
                                  FootwearData: obj.data,
                                  Cart : arr
                                },
                                ()=>{
                                    cn = cn +1

                                    PostApiCall.postRequest(
                                        {
                                            product_category: 'Socks',
                                            customer_id : login.fld_userid
                                        },
                                        "GetWishlistSocksVariant"
                                      ).then((results) =>
                                        results.json().then((obj) => {
                                          if (results.status == 200 || results.status == 201) {
                                       
                                           if(obj.data.length > 0){
                                                arr.push(obj.data)
                        
                                                // for(var i = 0 ; i<Object.keys(obj.data).length;i++){
                                                //     subt = subt + obj.data[i].fld_discountprice
                                                // }
                                            }
                        
                                            this.setState({
                                              SocksData: obj.data,
                                              Cart : arr
                                            },
                                            ()=>{
                                                cn = cn +1
                        
                                                // console.log(this.state.Cart)

                                                Notiflix.Loading.Remove()
                                                this.setState({
                                                    done : true
                                                })
                        
                                                var ar1 = []
                                                for(var i = 0 ; i<Object.keys(this.state.Cart).length;i++){
                        
                                                    for(var j = 0 ; j<Object.keys(this.state.Cart[i]).length;j++){
                                                        subt = subt + this.state.Cart[i][j].fld_discountprice*this.state.Cart[i][j].fld_quantity
                                                        ar1.push(this.state.Cart[i][j])
                                                        this.setState({
                                                            SubTotal : subt,
                                                            Cart : ar1
                                                        })
                                                    }
                                             
                                                }
                                            });
                        
                                        }
                                    }))
            
                                   
                                });
            
                            }
                        }))
                    });
                 

                }
            }))

           

           

      
      
           

            
    
         

         
        }
    }


  render(){
  return (

    <div className="App">    
<Header></Header>


  <div class="account-section">             
<div class="co">
                <div class="container" style={{background:"none"}}>
                    <div class="row mt-2">
                        <div class="col-lg-9 order-lg-last ">
                            <div class="dashboard-content">
                            
                            <div class="row">
                               
                                <div class="col-md-12">
                                <div class="card">
                                        <div class="card-header">
                                           My Wishlist
                                            
                                            
                                        </div>

                                        <div class="card-body order-history" style={{    font:"normal 400 1.4rem / 17px 'Open Sans',sans-serif"}}>
                                         
                                        {this.state.Cart.length == 0 && this.state.done ? (
                
                <div class="col-md-12">
                  <img src="/assets/images/Empty-Wishlist.png" style={{    margin: 'auto'}}/>
                </div>
           
            ) : (
              <div class="col-md-12">
                {/* <h2 class="light-title section-title" style={{marginBottom: "20px"}}>{this.state.CategorySelected} </h2> */}
              </div>
            )}


                                        {this.state.Cart.map((info,index)=>(
                                        
                                            <div class="row" style={{    border: '1px solid #dcdcdc',
                                                margin: '10px'}}>
                                                <div class="col-md-2">
                                                    {/* {info.VariantImage == undefined ? '' : info.VariantImage.split('#')[0]} */}
                                                    <img src={info.VariantImage == undefined ? '' : info.VariantImage.split('#')[0]} style={{    width: "150px"}}></img>
                                                </div>
                                                <div class="col-md-6">
                                                    <h4 style={{lineHeight:"17px"}}>{info.fld_name}
</h4>
                                                </div>
                                                <div class="col-md-2">
                                                <h4><span style={{fontWeight:"700"}}>Price</span></h4>
                                                    <h4>  &#8377;{info.fld_discountprice} <s style={{fontSize:"12px",marginLeft:"5px", display:info.fld_discountpercent == 0 ? 'none' :''}} >&#8377;{info.fld_price}</s></h4>
                                                </div>

                                                <div class="col-md-2">
                                                <h4><span style={{fontWeight:"700"}}></span></h4>
                                                    <a 
                                                      onClick={()=>{
                                                        var log = localStorage.getItem('CustomerLoginDetails')
                                                        var login = JSON.parse(log)
                                                
                                                
                                                        if(login != null && login != ''){
                                                
                                                            Notiflix.Loading.Dots('');
                                                
                                                            PostApiCall.postRequest({
                                                    
                                                                customer_id : login.fld_userid,
                                                                // customer_id : 13,
                                                                variant_id : info.fld_id[1],
                                                                product_category : info.fld_productcategory,
                                                                quantity :1,
                                                               updated_on : moment().format('lll'),
                                                               updated_by : login.fld_userid
                                                            // updated_by :13
                                                            
                                                            },"AddShoppingCart").then((results) => 
                                                            
                                                              // const objs = JSON.parse(result._bodyText)
                                                              results.json().then(obj => {
                                                   
                                                            
                                                              if(results.status == 200 || results.status==201){


                                                                PostApiCall.postRequest({
                                                
                                                                    id : info.fld_id[0],
                                                                   
                                                                
                                                                },"DeleteItemWishlist").then((results1) => 
                                                                
                                                                  // const objs = JSON.parse(result._bodyText)
                                                                  results1.json().then(obj1 => {
                                                        
                                                                
                                                                  if(results1.status == 200 || results1.status==201){
                                                
                                                                
                                                                Notiflix.Loading.Remove()
                                                                Notiflix.Notify.Info('Product added to Cart.')
                                                                window.location.reload()

                                                               
                                                                  }else{
                                                                    Notiflix.Loading.Remove()
                                                                    Notiflix.Notify.Failure('Something went wrong, try again later.') 
                                                                  }
                                                        
                                                               }))
                                                   
                                                              }else{
                                                                Notiflix.Loading.Remove()
                                                                Notiflix.Notify.Failure('Something went wrong, try again later.') 
                                                              }

                                                              
                                                   
                                                           }))
                                                
                                                        }else{
                                                        // console.log('please login first')
                                                            Notiflix.Notify.Failure('Please Login to add products to your cart.')
                                                        }
                                                
                                                    }}
                                                    class="btn add-to-cart">Add to Cart</a>
                                                    <a 
                                                    
                                                    onClick={()=>{
                                                    
                                                        Notiflix.Loading.Dots('');
                                                
                                                        PostApiCall.postRequest({
                                                
                                                            id : info.fld_id[0],
                                                           
                                                        
                                                        },"DeleteItemWishlist").then((results) => 
                                                        
                                                          // const objs = JSON.parse(result._bodyText)
                                                          results.json().then(obj => {
                                                
                                                        
                                                          if(results.status == 200 || results.status==201){
                                                
                                                            
                                                            window.location.reload()
                                                            // this.getUpdatedCart()
                                                
                                                          }else{
                                                            Notiflix.Loading.Remove()
                                                            Notiflix.Notify.Failure('Something went wrong, try again later.') 
                                                          }
                                                
                                                       }))
                                                
                                                   
                                                }} 
                                                    
                                                    class="btn add-to-cart">Remove</a>
                                                </div>

                                                <div class="col-md-2">
                                                <h4><span style={{fontWeight:"700"}}></span></h4>
                                                    
                                                </div>
                                            </div>
                                            
                                            ))}
                                            <hr></hr>
                                       
                                            
                                        </div>
                                    </div>
                            
                                </div>

                              
                            </div>
                           
                            {/* <form action="#">
                                <div class="row">
                                    <div class="col-sm-11">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="form-group required-field">
                                                    <label for="acc-name">First Name</label>
                                                    <input type="text" class="form-control" id="acc-name" name="acc-name" required/>
                                                </div>
                                            </div>

                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="acc-mname">First Name</label>
                                                    <input type="text" class="form-control" id="acc-mname" name="acc-mname"/>
                                                </div>
                                            </div>

                                            <div class="col-md-4">
                                                <div class="form-group required-field">
                                                    <label for="acc-lastname">Last Name</label>
                                                    <input type="text" class="form-control" id="acc-lastname" name="acc-lastname" required/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group required-field">
                                    <label for="acc-email">Email</label>
                                    <input type="email" class="form-control" id="acc-email" name="acc-email" required/>
                                </div>

                                <div class="form-group required-field">
                                    <label for="acc-password">Password</label>
                                    <input type="password" class="form-control" id="acc-password" name="acc-password" required/>
                                </div>

                                <div class="mb-2"></div>

                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="change-pass-checkbox" value="1"/>
                                    <label class="custom-control-label" for="change-pass-checkbox">Change Password</label>
                                </div>

                                <div id="account-chage-pass">
                                    <h3 class="mb-2">Change Password</h3>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group required-field">
                                                <label for="acc-pass2">Password</label>
                                                <input type="password" class="form-control" id="acc-pass2" name="acc-pass2"/>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group required-field">
                                                <label for="acc-pass3">Confirm Password</label>
                                                <input type="password" class="form-control" id="acc-pass3" name="acc-pass3"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="required text-right">* Required Field</div>
                                <div class="form-footer">
                                    <a href="#"><i class="icon-angle-double-left"></i>Back</a>

                                    <div class="form-footer-right">
                                        <button type="submit" class="btn btn-primary">Save</button>
                                    </div>
                                </div>
                            </form> */}
                        </div>
                        </div>
                        <aside class="sidebar col-lg-3">
                            <div class="widget widget-dashboard">

                            <ul class="list">
                                    <li >
                                        <a href="/account">Account Dashboard</a>
                                        <p>Get an Overview of your Account</p>
                                    </li>

                                    <li class="">
                                        <a href="/orderhistory">My Orders</a>
                                        <p>Check Shipping Status, Re Order Items</p>
                                    </li>

                                    <li class="">
                                        <a href="/wishlist">My Wishlist</a>
                                        <p>Add item to cart, Remove item</p>
                                    </li>

                                    <li class="" >
                                        <a href="/editprofile">My Profile</a>
                                        <p>Your Name, Phone Number, Password</p>
                                    </li>

                                    <li class="">
                                        <a href="/addressbook">My Address Book</a>
                                        <p>Add, Edit address</p>
                                    </li>

                                    <li class="">
                                        <a href="/diabeticprofile">Diabetic Profile</a>
                                        <p>Types of Diabetes</p>
                                    </li>
                                  
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            </div>
 <Footer></Footer>                        
 </div>
  );
  }
}

export default Wishlist;
