import React from "react";
import Menu from "./Header";
import Footer from "./Footer";
import Parser from "html-react-parser";

import PostApiCall from "./Api";
import Notiflix from "notiflix-react";

import GetApiCall from "./GetApi";
import moment from "moment";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactImageMagnify from "react-image-magnify";

class BookDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FootMaster: [],
      FootVariants: [],

      SelectedVariant: [],

      selectedFootImg: "",

      SelectedColor: "",
      SelectedSize: "",

      SizeData: [],
      ColorData: [],

      RelatedProducts: [],

      quantity: 1,
      done : false,
  
      bannerfood:[],
      images:[],
      images1:[],
      SideBannerFood : [],

      BookDetails : []
    };
  }


  componentDidMount() {

    let images=[]
    let images1=[]
    PostApiCall.postRequest(
      {
        verticle : 'Books',
        type:'Detail Page'
      }
      ,"Get_AdBannerWebsite").then(resultdes =>
      resultdes.json().then(obj => {
        if(obj.data.length > 0)
        {
          this.setState({
            bannerfood:[obj.data[0]]
            // images:images
          }) 
        }
        }))

        PostApiCall.postRequest(
          {
            verticle : 'Books',
            type:'Detail Page Side Banner'
          }
          ,"Get_AdBannerWebsite").then(resultdes =>
          resultdes.json().then(obj => {
          
            if(obj.data.length > 0)
            {
              this.setState({
                SideBannerFood:[obj.data[0]]
                // images1:images1
              }) 
            }
            }))

    Notiflix.Loading.Init({
      svgColor: "#507dc0",
      //  #507dc0'
    });

    Notiflix.Loading.Dots("");

    PostApiCall.postRequest(
      {
        id: this.props.match.params.bookid,
      },
      "GetBooksMasterDetailsWebsite"
    ).then((results) =>
      results.json().then((obj) => {
        console.log(obj.data)
        if (results.status == 200 || results.status == 201) {
          this.setState({
            FootMaster: obj.data[0],
         
          });

          // Notiflix.Loading.Remove();
         

    PostApiCall.postRequest(
      {
        id: this.props.match.params.bookid,
      },
      "GetBooksVariantDetailsWebsite"
    ).then((results) =>
      results.json().then((obj) => {
        if (results.status == 200 || results.status == 201) {
          console.log(obj.data)

          this.setState({
            FootVariants: obj.data,
            done : true
          });
          Notiflix.Loading.Remove();
          for (var i = 0; i < Object.keys(obj.data).length; i++) {
            if (obj.data[i].fld_id == this.props.match.params.varid) {
              this.setState({
                SelectedVariant: obj.data[i],
              });
            }
          }
        }
      })
    );
  }
}))


PostApiCall.postRequest(
  {
    category: 0,
  },
  "GetBooksRelatedListing"
).then((results) =>
  results.json().then((obj) => {
    if (results.status == 200 || results.status == 201) {

    
      this.setState({

      //  RelatedProducts: obj.data,
        
      });

  }}
));

  }

  AddToCart(info){


    var log = localStorage.getItem(
                                           "CustomerLoginDetails"
                                         );
                                         var login = JSON.parse(log);
  
                                         if (login != null && login != "") {
                                           Notiflix.Loading.Dots("");
  
                                           PostApiCall.postRequest(
                                             {
                                               customer_id: login.fld_userid,
                                               variant_id: info.fld_id,
                                               product_category: "Books",
                                               quantity: this.state.quantity,
                                               amount: info.fld_discountprice,
                                               updated_on: moment().format("lll"),
                                               updated_by: login.fld_userid,
                                               url : `/books/${ info.fld_bookid +"/" +info.fld_id +"/" +info.fld_title
                                                  .replace(/ /g, "-")
                                                  .replace(/\//g, "-")
                                                  .replace(
                                                    /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                                                    "-"
                                                  )
                                              }`
                                               // updated_by :13
                                             },
                                             "AddShoppingCart"
                                           ).then((results) =>
                                             // const objs = JSON.parse(result._bodyText)
                                             results.json().then((obj) => {
                                               if (
                                                 results.status == 200 ||
                                                 results.status == 201
                                               ) {
                                                 Notiflix.Loading.Remove();
  
  
  
                                                 Notiflix.Notify.Info(
                                                   "Product added to Cart."
                                                 );
                                                 // window.location.reload();
  
                                                 this.props.setcartitemcount(obj.data.length)
                                                 this.props.setcartamount(obj.data.reduce(function (result, item) {
                                                   return result + (item.fld_amount*item.fld_quantity);
                                                 }, 0))
  
                                               } else {
                                                 Notiflix.Loading.Remove();
                                                 Notiflix.Notify.Failure(
                                                   "Something went wrong, try again later."
                                                 );
                                               }
                                             })
                                           );
                                         } else {
                                          
  
                                          var cart_info = JSON.parse(localStorage.getItem('BMSCartData'))
  
                                          // console.log(cart_info)
                                          var newCart = cart_info != null ? cart_info : []
  
                                          if(cart_info != null){
  
                                        
                                            var item = newCart.filter(val => val.fld_variantid == info.fld_id && val.fld_productcategory == 'Books')
  
                                            // console.log(item)
                                            if(item[0] != undefined){
  
                                              var newIndex = newCart.indexOf(item[0])
  
                                              newCart[newIndex].fld_quantity =  newCart[newIndex].fld_quantity + 1
  
                                              // console.log(newCart)
  
                                              localStorage.setItem('BMSCartData',JSON.stringify(newCart))
                                                this.props.setcartitemcount(newCart.length)
                                                this.props.setcartamount(newCart.reduce(function (result, item) {
                                                  return result + (item.fld_amount*item.fld_quantity);
                                                }, 0))
                                              Notiflix.Notify.Info("Product added to Cart.");
  
                                              
  
                                            }else{
  
                                              const addNewCartData ={
                                                fld_variantid : info.fld_id,
                                                fld_productcategory : 'Books',
                                                fld_quantity : this.state.quantity,
                                                fld_amount : info.fld_discountprice,
                                                fld_addedon : moment().format('lll'),
                                                fld_url : `/books/${ info.fld_bookid +"/" +info.fld_id +"/" +info.fld_title
                                                .replace(/ /g, "-")
                                                .replace(/\//g, "-")
                                                .replace(
                                                  /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                                                  "-"
                                                )
                                                }`
  
                                              }
  
                                              newCart.push(addNewCartData)
                                             
                                              localStorage.setItem('BMSCartData',JSON.stringify(newCart))
                                              this.props.setcartitemcount(newCart.length)
                                              this.props.setcartamount(newCart.reduce(function (result, item) {
                                                return result + (item.fld_amount*item.fld_quantity);
                                              }, 0))
                                              Notiflix.Notify.Info("Product added to Cart.");
  
                                            }
                                          }else
                                          {
  
                                            const addNewCartData ={
                                              fld_variantid : info.fld_id,
                                              fld_productcategory : 'Books',
                                              fld_quantity : this.state.quantity,
                                              fld_amount : info.fld_discountprice,
                                              fld_addedon : moment().format('lll'),
                                              fld_url : `/books/${ info.fld_bookid +"/" +info.fld_id +"/" +info.fld_title
                                              .replace(/ /g, "-")
                                              .replace(/\//g, "-")
                                              .replace(
                                                /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                                                "-"
                                              )
                                              }`
  
                                            }
  
                                            newCart.push(addNewCartData)
                                            
                                            localStorage.setItem('BMSCartData',JSON.stringify(newCart))
                                            this.props.setcartitemcount(newCart.length)
                                            this.props.setcartamount(newCart.reduce(function (result, item) {
                                              return result + (item.fld_amount*item.fld_quantity);
                                            }, 0))
                                                   Notiflix.Notify.Info("Product added to Cart.");
  
                                          }
                                           
  
                                         }
  
  }

  AddToCartBooks(info){


    var log = localStorage.getItem(
                                           "CustomerLoginDetails"
                                         );
                                         var login = JSON.parse(log);
  
                                         if (login != null && login != "") {
                                           Notiflix.Loading.Dots("");
  
                                           PostApiCall.postRequest(
                                             {
                                               customer_id: login.fld_userid,
                                               variant_id: info.fld_id,
                                               product_category: "Books",
                                               quantity: 1,
                                               amount: info.fld_discountprice,
                                               updated_on: moment().format("lll"),
                                               updated_by: login.fld_userid,
                                               url : `/books/${ info.fld_bookid +"/" +info.fld_id +"/" +info.fld_title
                                                  .replace(/ /g, "-")
                                                  .replace(/\//g, "-")
                                                  .replace(
                                                    /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                                                    "-"
                                                  )
                                              }`
                                               // updated_by :13
                                             },
                                             "AddShoppingCart"
                                           ).then((results) =>
                                             // const objs = JSON.parse(result._bodyText)
                                             results.json().then((obj) => {
                                               if (
                                                 results.status == 200 ||
                                                 results.status == 201
                                               ) {
                                                 Notiflix.Loading.Remove();
  
  
  
                                                 Notiflix.Notify.Info(
                                                   "Product added to Cart."
                                                 );
                                                 // window.location.reload();
  
                                                 this.props.setcartitemcount(obj.data.length)
                                                 this.props.setcartamount(obj.data.reduce(function (result, item) {
                                                   return result + (item.fld_amount*item.fld_quantity);
                                                 }, 0))
  
                                               } else {
                                                 Notiflix.Loading.Remove();
                                                 Notiflix.Notify.Failure(
                                                   "Something went wrong, try again later."
                                                 );
                                               }
                                             })
                                           );
                                         } else {
                                          
  
                                          var cart_info = JSON.parse(localStorage.getItem('BMSCartData'))
  
                                          // console.log(cart_info)
                                          var newCart = cart_info != null ? cart_info : []
  
                                          if(cart_info != null){
  
                                        
                                            var item = newCart.filter(val => val.fld_variantid == info.fld_id && val.fld_productcategory == 'Books')
  
                                            // console.log(item)
                                            if(item[0] != undefined){
  
                                              var newIndex = newCart.indexOf(item[0])
  
                                              newCart[newIndex].fld_quantity =  newCart[newIndex].fld_quantity + 1
  
                                              // console.log(newCart)
  
                                              localStorage.setItem('BMSCartData',JSON.stringify(newCart))
                                                this.props.setcartitemcount(newCart.length)
                                                this.props.setcartamount(newCart.reduce(function (result, item) {
                                                  return result + (item.fld_amount*item.fld_quantity);
                                                }, 0))
                                              Notiflix.Notify.Info("Product added to Cart.");
  
                                              
  
                                            }else{
  
                                              const addNewCartData ={
                                                fld_variantid : info.fld_id,
                                                fld_productcategory : 'Books',
                                                fld_quantity : 1,
                                                fld_amount : info.fld_discountprice,
                                                fld_addedon : moment().format('lll'),
                                                fld_url : `/books/${ info.fld_bookid +"/" +info.fld_id +"/" +info.fld_title
                                                .replace(/ /g, "-")
                                                .replace(/\//g, "-")
                                                .replace(
                                                  /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                                                  "-"
                                                )
                                                }`
  
                                              }
  
                                              newCart.push(addNewCartData)
                                             
                                              localStorage.setItem('BMSCartData',JSON.stringify(newCart))
                                              this.props.setcartitemcount(newCart.length)
                                              this.props.setcartamount(newCart.reduce(function (result, item) {
                                                return result + (item.fld_amount*item.fld_quantity);
                                              }, 0))
                                              Notiflix.Notify.Info("Product added to Cart.");
  
                                            }
                                          }else
                                          {
  
                                            const addNewCartData ={
                                              fld_variantid : info.fld_id,
                                              fld_productcategory : 'Books',
                                              fld_quantity : 1,
                                              fld_amount : info.fld_discountprice,
                                              fld_addedon : moment().format('lll'),
                                              fld_url : `/books/${ info.fld_bookid +"/" +info.fld_id +"/" +info.fld_title
                                              .replace(/ /g, "-")
                                              .replace(/\//g, "-")
                                              .replace(
                                                /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                                                "-"
                                              )
                                              }`
  
                                            }
  
                                            newCart.push(addNewCartData)
                                            
                                            localStorage.setItem('BMSCartData',JSON.stringify(newCart))
                                            this.props.setcartitemcount(newCart.length)
                                            this.props.setcartamount(newCart.reduce(function (result, item) {
                                              return result + (item.fld_amount*item.fld_quantity);
                                            }, 0))
                                                   Notiflix.Notify.Info("Product added to Cart.");
  
                                          }
                                           
  
                                         }
  
  }

  AddWishlist() {
    // console.log(this.state.Book)

    var log = localStorage.getItem("CustomerLogin");
    var login = JSON.parse(log);

    if (login != null && login != "") {
      Notiflix.Loading.Dots("");

      PostApiCall.postRequest(
        {
          customer_id: login.fld_userid,
          // customer_id : 13,
          product_id: this.state.Book.fld_bookid,
          product_category: "Books",
          value: this.state.Book.fld_discountprice,
          number_of_items: this.state.quantity,
          updated_on: moment().format("lll").toString(),
          updated_by: login.fld_userid,
          // updated_by :13
        },
        "AddWishlist"
      ).then((results) =>
        // const objs = JSON.parse(result._bodyText)
        results.json().then((obj) => {
          if (results.status == 200 || results.status == 201) {
            Notiflix.Loading.Remove();
            Notiflix.Notify.Info("Product Added to Wishlist");
            window.location.reload();
          } else {
            Notiflix.Loading.Remove();
            Notiflix.Notify.Failure("Something went wrong, try again later.");
          }
        })
      );
    } else {
      // console.log('please login first')
      Notiflix.Notify.Failure("Please Login to add Products to your wishlist.");
    }
  }

  render() {

    const settings = {
   
      centerMode: false,
      centerPadding: '60px',
      dots: false,
      infinite: true,
      arrows: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};


    return (
      <div>
        <Menu></Menu>
        <div class="container ad-banner">
          <img src="../assets/images/images.png"></img>
        </div>
        <div class="container">
          <div class="container-box" style={{ marginTop: "40px" }}>
            <div class="row">
              <div class="col-lg-9">
                <div class="product-single-container product-single-default">
                  <div class="row">
                    {/* <ReactImageMagnify {...{
                                                        smallImage: {
                                                            alt: 'Wristwatch by Ted Baker London',
                                                            isFluidWidth: true,
                                                            src: this.state.selectedBook,
                                                        },
                                                        largeImage: {
                                                            src: this.state.selectedBook,
                                                            width: 1200,
                                                            height: 1800
                                                        }
                                                    }} /> */}
                    <div class="col-lg-1 col-md-1">
                    <div class="image-list">
                        {this.state.SelectedVariant.Photos != undefined
                          ? this.state.SelectedVariant.Photos.split("#").map(
                              (url, index) => (
                                <img
                                  src={url}
                                  onMouseOver={() => {
                                    this.setState({
                                      selectedFootImg: url,
                                    });
                                  }}
                                ></img>
                              )
                            )
                          : ""}
                      </div>
                    </div>
                    <div class="col-lg-5 col-md-5 product-single-gallery">
                      <div class="product-slider-container product-item">
                        <div class="product-item product-single-image">
                        <ReactImageMagnify
                            {...{
                              smallImage: {
                                alt: "Wristwatch by Ted Baker London",
                                isFluidWidth: true,
                                src:
                                  this.state.selectedFootImg == ""
                                    ? this.state.SelectedVariant.Photos !=
                                      undefined
                                      ? this.state.SelectedVariant.Photos.split(
                                          "#"
                                        )[0]
                                      : ""
                                    : this.state.selectedFootImg,
                              },
                              largeImage: {
                                src:
                                  this.state.selectedFootImg == ""
                                    ? this.state.SelectedVariant.Photos !=
                                      undefined
                                      ? this.state.SelectedVariant.Photos.split(
                                          "#"
                                        )[0]
                                      : ""
                                    : this.state.selectedFootImg,
                                width: 1500,
                                height: 2000,
                              },
                              lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
                              isHintEnabled: true,
                              shouldHideHintAfterFirstActivation: false,
                              enlargedImageContainerDimensions: {
                                width: "150%",
                                height: "200%",
                              },
                            }}
                          />
                        </div>

                        {/* {this.state.Photo.map(
                                                  (book,index) => (

                                                    
                                                <div class="product-item">
                                                    <img class="product-single-image" src={book} onMouseOver={()=>{
                                                        console.log(book)
                                                    }}/>
                                                </div>
                                                  ))} */}
                        {/* <div class="product-item">
                                                    <img class="product-single-image" src="assets/images/cauliflowerbook.jpg" data-zoom-image="assets/images/cauliflowerbook.jpg"/>
                                                </div>
                                                <div class="product-item">
                                                        <img class="product-single-image" src="assets/images/cauliflowerbook.jpg" data-zoom-image="assets/images/cauliflowerbook.jpg"/>
                                                    </div>
                                                    <div class="product-item">
                                                        <img class="product-single-image" src="assets/images/cauliflowerbook.jpg" data-zoom-image="assets/images/cauliflowerbook.jpg"/>
                                                    </div> */}

                        {/* </div>
                                           
                                            <span class="prod-full-screen">
                                                <i class="icon-plus"></i>
                                            </span>
                                        </div>
                                        <div class="prod-thumbnail row owl-dots" id='carousel-custom-dots'>
                                        {this.state.Photo.map(
                                                  (book,index) => (

                                            <div class="col-3 owl-dot">
                                                <img src={book}/>
                                            </div>
                                                  ))} */}
                        {/* <div class="col-3 owl-dot">
                                                <img src="assets/images/cauliflowerbook.jpg"/>
                                            </div>
                                            <div class="col-3 owl-dot">
                                                    <img src="assets/images/cauliflowerbook.jpg"/>
                                                </div>
                                                <div class="col-3 owl-dot">
                                                    <img src="assets/images/cauliflowerbook.jpg"/>
                                                </div> */}
                      </div>
                    </div>

                    <div class="col-lg-5 col-md-6">
                      <div class="product-single-details">
                
                        <h1 class="product-title">
                        {this.state.SelectedVariant.fld_title}
                        </h1>

                        <div class="ratings-container">
                   
                          <span>
                            {" "}
                            <a href="#" class="rating-link">
                              Author{" "}
                              <span class="company-name">{this.state.FootMaster.fld_authorname}</span>
                            </a>
                          </span>
                          <span>
                            {" "}
                            <a href="#" class="rating-link">
                              Published By{" "}
                              <span class="company-name">{this.state.FootMaster.fld_publishedby}</span>
                            </a>
                          </span>
                          {/* <p class="rating-link">
                          Country Of Origin  <span class="company-name">{this.state.FootMaster.fld_countryoforigin}</span>
                          </p> */}
                        </div>

                        {/* <p>
                          <span class="product-price">&#8377; 700.00</span>
                          <p class="extrapheight"></p>
                        </p> */}

{this.state.SelectedVariant.fld_discountpercent == 0 ? (
                          <div>
                            <div class="price-box">
                              <span class="product-price">
                                &#8377;{" "}
                                {this.state.SelectedVariant.fld_discountprice}
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div class="price-box">
                              <span class="product-price">
                                &#8377;{" "}
                                {this.state.SelectedVariant.fld_discountprice}
                              </span>
                              <span class="old-price">
                                <strike>
                                  &#8377;{this.state.SelectedVariant.fld_price}
                                </strike>
                              </span>
                            </div>

                            <p class="discount-price">
                              <span
                                class="old-price old-price-updated"
                                style={{ padding: "0px" }}
                              >
                                {" "}
                                 You Save &#8377;{" "}
                                {this.state.SelectedVariant.fld_price -
                                  this.state.SelectedVariant.fld_discountprice} ({this.state.SelectedVariant.fld_discountpercent}
                                    %)
                              </span>
                            </p>
                          </div>
                        )}

                        <div class="product-desc">
                          <p>
                            <b>Available as</b>
                          </p>
                                  <p class="dashed-border">{this.state.SelectedVariant.fld_type}</p>
                          {/* <select class="book-size">
                                                        <option>Select</option>
                                                        <option>Papper Back</option>
                                                    <option>E-Book</option>
                                                   
                                                </select> */}
                        </div>
                        <div class="product-desc">
                          <p>
                            <b>Language</b>
                          </p>
                          <p class="dashed-border">{this.state.SelectedVariant.fld_language}</p>
                          {/* <select class="book-size">
                                                        <option>Select</option>
                                                        <option>Papper Back</option>
                                                    <option>E-Book</option>
                                                   
                                                </select> */}
                        </div>
                        <br />
                       

                     
        

                                                <ul class="product-list">
                          <li
                            class="stock"
                            style={{
                              display:
                                this.state.SelectedVariant.fld_availability ==
                                "In stock"
                                  ? ""
                                  : "none",
                            }}
                          >
                            In Stock <span style={{ color: "#bdbdbd" }}>|</span>
                          </li>

                          <li
                            class="return"
                            style={{
                              display:
                                this.state.SelectedVariant.fld_availability ==
                                "Out of stock"
                                  ? ""
                                  : "none",
                            }}
                          >
                            <i class="fas fa-times-circle"></i> Out Of Stock{" "}
                            <span style={{ color: "#bdbdbd" }}>|</span>
                          </li>

                          <li
                            class="return"
                            style={{
                              display:
                                this.state.FootMaster.fld_returnable == "No"
                                  ? ""
                                  : "none",
                            }}
                          >
                            <i class="fas fa-times-circle"></i> Not Returnable
                          </li>

                          <li
                            class="return"
                            style={{
                              display:
                                this.state.SelectedVariant.fld_availability ==
                                "Banned"
                                  ? "none"
                                  : "none",
                            }}
                          >
                            Banned
                          </li>
                          <li
                            class="return"
                            style={{
                              display:
                                this.state.SelectedVariant.fld_availability ==
                                "Discontinued"
                                  ? "none"
                                  : "none",
                            }}
                          >
                            Discontinued
                          </li>
                          <li
                            class="returnable"
                            style={{
                              display:
                                this.state.FootMaster.fld_returnable == "Yes"
                                  ? ""
                                  : "none",
                            }}
                          >
                            Returnable
                          </li>
                        </ul>

                        <div class="product-action product-all-icons">
                          <div class="product-single-qty">
                            <div class="input-group bootstrap-touchspin bootstrap-touchspin-injected">
                              <span class="input-group-btn input-group-prepend">
                                <button
                                  class="btn btn-outline btn-down-icon bootstrap-touchspin-down"
                                  type="button"
                                  onClick={() => {
                                    if (this.state.quantity > 1) {
                                      this.setState({
                                        quantity: this.state.quantity - 1,
                                      });
                                    }
                                  }}
                                ></button>
                              </span>
                              <input
                                class="quantity-box"
                                type="text"
                                value={this.state.quantity}
                              />
                              <span class="input-group-btn input-group-append">
                                <button
                                  class="btn btn-outline btn-up-icon bootstrap-touchspin-up"
                                  type="button"
                                  onClick={() => {
                                    this.setState({
                                      quantity: this.state.quantity + 1,
                                    });
                                  }}
                                ></button>
                              </span>
                            </div>
                          </div>

                   
                          <a
                            class="paction add-cart"
                            title="Add to Cart"
                            style={{
                              display:
                                this.state.SelectedVariant.fld_availability ==
                                "In stock"
                                  ? ""
                                  : "none",
                            }}
                            onClick={this.AddToCart.bind(this)}
                          >
                            <span>Add to Cart</span>
                          </a>

                          <a
                            onClick={() => {
                              var log = localStorage.getItem(
                                "CustomerLoginDetails"
                              );
                              var login = JSON.parse(log);

                              if (login != null && login != "") {
                                Notiflix.Loading.Dots("");

                                PostApiCall.postRequest(
                                  {
                                    customer_id: login.fld_userid,

                                    variant_id: this.state.SelectedVariant
                                      .fld_id,
                                    product_category: "Books",
                                    quantity: this.state.quantity,
                                    updated_on: moment().format("lll"),
                                    updated_by: login.fld_userid,
                                  },
                                  "AddWishlist"
                                ).then((results) =>
                                  // const objs = JSON.parse(result._bodyText)
                                  results.json().then((obj) => {
                                    if (
                                      results.status == 200 ||
                                      results.status == 201
                                    ) {
                                      Notiflix.Loading.Remove();
                                      Notiflix.Notify.Info(
                                        "Product added to Wishlist."
                                      );
                                      // window.location.reload()
                                    } else {
                                      Notiflix.Loading.Remove();
                                      Notiflix.Notify.Failure(
                                        "Something went wrong, try again later."
                                      );
                                    }
                                  })
                                );
                              } else {
                                // console.log('please login first')
                                Notiflix.Notify.Failure(
                                  "Please Login to add products to your wishlist."
                                );
                              }
                            }}
                            class="paction add-wishlist"
                            title="Add to Wishlist"
                          >
                            <span>Add to Wishlist</span>
                          </a>
                        
                    {/* <a href="#" class="paction add-compare" title="Add to Compare">
                                                    <span>Add to Compare</span>
                                                </a> */}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 detail-description">
                   <h4>About Book</h4>
                   <p style={{textAlign: "justify"}}>

                   {Parser(
                          (
                            "<p>" +
                            this.state.FootMaster.fld_aboutbook +
                            "</p>"
                          ).replace(/font-family/g, "")
                        )}
</p>
<h4>
                          About Author
                          </h4>
                          <p>
                        
                   {Parser(
                          (
                            "<p>" +
                            this.state.FootMaster.fld_aboutauthor +
                            "</p>"
                          ).replace(/font-family/g, "")
                        )}

                          </p>
                 </div>
                  </div>
                </div>
              </div>

              <div class="sidebar-overlay"></div>
              <div class="sidebar-toggle">
                <i class="icon-sliders"></i>
              </div>
              <aside class="sidebar-product col-lg-3 padding-left-lg mobile-sidebar">
                <div class="sidebar-wrapper">
                  <div class="widget widget-info">
                    <ul>
                      <li>
                        <img src="/assets/images/free-shiping.png" class="side-bar-icon"></img>
                        <h4 >
                          FREE
                          <br />
                          SHIPPING
                        </h4>
                      </li>
                      <li>
                      <img src="/assets/images/genuine-products.png" class="side-bar-icon"></img>
                        <h4>
                          100% GENUINE
                          <br />
                          PRODUCTS
                        
                        </h4>
                      </li>
                      <li>
                      <img src="/assets/images/customer-support.png" class="side-bar-icon"></img>
                        <h4>
                          ONLINE
                          <br />
                          SUPPORT 
                        </h4>
                      </li>
                    </ul>
                  </div>

                  <div class="widget widget-banner">
                    <div class="banner banner-image">
                      <a href="#">
                        {/* <img
                          src="/assets/images/banners/banner-sidebar.jpg"
                          alt="Banner Desc"
                        /> */}
                       <div>
                        {this.state.SideBannerFood && this.state.SideBannerFood.map(info=>(
        
                          <img 
                          onClick={()=>{
                            if(info.fld_url != ''){
                              window.open(info.fld_url, '_blank');
                             }
                          }}
                        src={info.fld_image}/>  
                                 
                        ))
                          }
                     

                        </div>
                      </a>
                    </div>
                  </div>
               
                </div>
              </aside>
          
        </div>
          </div>
        </div>
        <div class="container product-section">
          <h3 class="section-title" style={{display : this.state.RelatedProducts.length == 0 ? 'none' : ''}}>Related Products</h3>
          <div class="row healthcare-slider">
            <div class="col-md-12">
              <div class="row">
                 <ul class="related-products-list">
                 <Slider {...settings}>

                {this.state.RelatedProducts.map((info, index) => (
                  <li>
                      <div class="partner book-inner">
                  <div id="overlay" style={{display : info.fld_availability =='In stock' ? 'none' : ''}}>Out Of Stock</div>

                
                  <img
                      src={info.Photos.split(',')[0]}
                      alt="product"
                      class="footcare-image img-center"
                      onClick={()=>{
                        window.location.href = `/books/${info.fld_bookid+"/"+info.fld_id+"/"+info.fld_title.replace( / /g,'-').replace( /\//g,'-').replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-')}`
                      }}
                    />
                    {/* <div class="button"><a onClick={()=>{
                                       
                                    window.location.href = `/book/${book.fld_bookid+"-"+book.fld_title.replace( / /g,'-')}`
                                 
                                      
                                    }}> Quick View </a></div> */}
                    <div class="product-details">
                    <p class="product-title">
                        <a 
                        onClick={()=>{
                        window.location.href = `/books/${info.fld_bookid+"/"+info.fld_id+"/"+info.fld_title.replace( / /g,'-').replace( /\//g,'-').replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-')}`
                      }}
                        class="item-name">
                          {info.fld_title}
                        </a>
                      </p>
                      {/* {book.fld_discountpercent == 0.0 ? ( */}
                     
                     
                      <p class="small-desc item-name"><span style={{color:"#222222",fontWeight:"600"}}>Author:</span> {info.fld_authorname}</p>


                      <p class="discount-height">
                      {info.fld_discountpercent == 0 ? 
    
    <p class="price">
      
    &#8377; {info.fld_discountprice}
    
  </p>
    :
      <p class="price">
      
        &#8377; {info.fld_discountprice}
        {" "}<span>
          <s>&#8377;  {info.fld_price}</s>
        </span>
        
      </p>
  }

                        {info.fld_discountpercent == 0 ? '' :
      <p class="discount-price">  You Save &#8377; {info.fld_price - info.fld_discountprice} ({info.fld_discountpercent}%)</p>
    }
                      </p>


                      <p class="brief-desc"></p>
                      <ul class="group-buttons">
                        <li>
                          {" "}
                          <button class="add-to-cart-btn">
                            <i class="fas fa-shopping-cart"></i> ADD TO CART
                          </button>
                        </li>
                        <li>
                          <button class="like-btn">
                            <i class="fas fa-heart"></i>
                          </button>{" "}
                        </li>
                        {/* <li><button class="like-btn"><i class="fas fa-info-circle"></i></button> </li> */}
                      </ul>
                    </div>
                  </div>
             
                  </li>
                ))}
                </Slider>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="container-box container-box-lg info-boxes ">
          <div class="row">
            <div class="col-md-12">
              <p style={{ textAlign: "justify", fontSize: "13px" }}>
                <b>Disclaimer:</b> BeatMySugar team always put in their best
                effort towards making the vendor/service provider ensure that
                the product information given on the website is correct and
                updated. However, always read the product labels for direction
                for use, warnings, and precautions before using the product. It
                is advisable to consult your doctor or healthcare provider
                before using a product.{" "}
                <a
                  href="https://www.beatmysugar.com/"
                  style={{ fontWeight: 700, color: "#000" }}
                >
                  www.BeatMySugar.com
                </a>
                , being only a facilitator and not the business
                operator/manufacturer/vendor/service provider, is not legally
                liable and does not assume any responsibility for any untoward
                occurrence from the use of any product available on the web
                site. All liabilities rest with the business operator/
                manufacturer/vendor/service provider.
              </p>
            </div>
          </div>
          </div>
        </div>

           
       
        <Footer></Footer>
      </div>
    );
  }
}

export default BookDetails;
