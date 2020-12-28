import React from "react";
import Menu from "./Header";
import Footer from "./Footer";
import GetApiCall from "./GetApi";
import PostApiCall from "./Api";
import Notiflix from "notiflix-react";
import moment from "moment";

class BookListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Book: [],
      BookImage: [],
      BooksDetails: [],
      PriceData:[{fld_id: 1, fld_label: "Below ?500", fld_min: 0, fld_max: 500, fld_updatedon: "June 18, 2020"},
      {fld_id: 2, fld_label: "?501 - ?1000", fld_min: 501, fld_max: 1000, fld_updatedon: "June 18, 2020"},
       {fld_id: 3, fld_label: "?1001 - ?2000", fld_min: 1001, fld_max: 2000, fld_updatedon: "June 18, 2020"},
       {fld_id: 4, fld_label: "?2001 - ?3000", fld_min: 2001, fld_max: 3000, fld_updatedon: "June 18, 2020"},
      {fld_id: 5, fld_label: "?3001 Above", fld_min: 3001, fld_max: 50000, fld_updatedon: "June 18, 2020"},
      ],
      PriceFilter:[],
      sortBy:'',
      LanguageData : [],
      BrandData : [],

      LanguageFilter : [],
      BrandFilter : [],


      BrandDataRef: [],
      TypeData : [],
      TypeFilter : [],
      PriceData : [],
      PriceFilter : [],

      GenderData : [
        {fld_gender : 'Male'},
        {fld_gender : 'Female'},
        {fld_gender : 'Unisex'},
      ],


      done : false ,
      SearchDataRef : [],
      sortBy:'New Arrivals',
      FootwearData:[],
      bannerfood : [],
      images : []
    };
  }



  componentDidMount() {
    Notiflix.Loading.Init({
      svgColor: "#507dc0",
      //  #507dc0'
    });

    Notiflix.Loading.Dots("");

    let images=[]
    PostApiCall.postRequest(
      {
        verticle : 'Books',
        type:'Listing Page'
      }
      ,"Get_AdBannerWebsite").then(resultdes =>
    resultdes.json().then(obj => {
      // console.log(obj.data)
      if(obj.data.length > 0)
      {
        this.setState({
          bannerfood:[obj.data[0]]
          // images:images
        })  
      }   
      }))
      
      var login = localStorage.getItem("CustomerLoginDetails");
      var details = JSON.parse(login);
  
      this.setState({
        LoginData: details,
        CategorySelected : this.props.match.params.category
      });


    var arr = [];

    var search = JSON.parse(localStorage.getItem('SearchText'))

    // console.log(search)

    PostApiCall.postRequest(
        {
          category: this.props.match.params.id,
        },
        "GetBooksListing"
      ).then((results) =>
        results.json().then((obj) => {
          if (results.status == 200 || results.status == 201) {
  
          console.log(obj.data)

          var srDt= []
          if(search != null){

           obj.data.filter(item => {
              if (item.fld_name.toLowerCase().includes(search.toLowerCase())
              || item.fld_brand.toLowerCase().includes(search.toLowerCase())
              // || item.fld_description.toLowerCase().includes(search.toLowerCase())
              ) {
                srDt.push(item)
                
              }
            })
            this.setState({
  
              BooksDetails: srDt,
              BooksRef : obj.data,
              // FootVariantRef : obj.data,
              SearchDataRef : srDt
              
            });
          }else
          {
            this.setState({
  
              BooksDetails: obj.data,
              // FootVariantRef : obj.data,
              BooksRef : obj.data,
              
            });
          }
          
          Notiflix.Loading.Remove(); 
        }}
      ));



      PostApiCall.postRequest(
        {
          category: this.props.match.params.id,
        },"GetBooksTypeDataWebsite").then(resultdes =>
          resultdes.json().then(obj => {
            // console.log(obj.data)
              this.setState({
                  
              TypeData : obj.data
            })

          }))



        

            GetApiCall.getRequest("GetFootwearPriceDataFilter").then(resultdes =>
              resultdes.json().then(obj => {
                // console.log(obj.data)
                  this.setState({
                      
                  PriceData : obj.data
                })
        
              }))
        

              PostApiCall.postRequest(
                {
                  category: this.props.match.params.id,
                },"GetBooksLanguageDataWebsite").then(resultdes =>
          resultdes.json().then(obj => {
             

      
            this.setState({
              LanguageData : obj.data
            })
       
          }))


          PostApiCall.postRequest(
            {
              category: this.props.match.params.id,
            },
            "GetFilterBooksListing"
          ).then((results) =>
            results.json().then((obj) => {
              if (results.status == 200 || results.status == 201) {
         
                // console.log(obj.data)
                this.setState({
        
                  BooksVariantRef: obj.data,
                  done : true
                });
                Notiflix.Loading.Remove();
            }
              }));
    

              // this.getUpdatedCart()

             
  }


  onChangeSortBy=(e)=>{
    e.preventDefault()
    this.setState({
      ...this.state,
     sortBy:e.target.value
    })
  }


 

  OnSubmitPriceFilter(Ref){
  
    var  newData = []
    var count = 0;
  
    if( this.state.PriceFilter.length > 0){
    for(var i =0 ; i < this.state.PriceFilter.length;i++){

      Ref.filter(item => {
        if (item.fld_discountprice >= this.state.PriceFilter[i].fld_min && item.fld_discountprice <= this.state.PriceFilter[i].fld_max) {
          newData.push(item)
        }
      })
  
      
    
      count = count + 1
  
      if(count == this.state.PriceFilter.length){
  
        if(newData.length == 0){
  
          this.setState({
            BooksDetails : newData
          })
  
          Notiflix.Loading.Remove()
  
        }else
        {
  
          this.OnSubmitLanguageFilter(newData)
        }
       
  
      }
    
    }
  
  }
  else
  {
    this.OnSubmitLanguageFilter(Ref)
  }
  
  }
  

  OnSubmitLanguageFilter(Ref){
  
    var  newData = []
    var count = 0;
  
    if( this.state.LanguageFilter.length > 0){
    for(var i =0 ; i < this.state.LanguageFilter.length;i++){
  
      Ref.filter(item => {
        if (item.fld_language.includes(this.state.LanguageFilter[i])) {
          newData.push(item)
        }
      })
    
      count = count + 1
  
      if(count == this.state.LanguageFilter.length){
  
        if(newData.length == 0){
  
          this.setState({
            BooksDetails : newData
          })
  
          Notiflix.Loading.Remove()
  
        }else
        {
  
          this.OnSubmitTypeFilter(newData)
        }
       
  
      }
    
    }
  
  }
  else
  {
    this.OnSubmitTypeFilter(Ref)
  }
  
  }



  OnSubmitTypeFilter(Ref){
  
    var  newData = []
    var count = 0;
  
    if( this.state.TypeFilter.length > 0){
    for(var i =0 ; i < this.state.TypeFilter.length;i++){
  
      Ref.filter(item => {
        if (item.fld_type.includes(this.state.TypeFilter[i])) {
          newData.push(item)
        }
      })
    
      count = count + 1
  
      if(count == this.state.TypeFilter.length){
  
        var resArr = [];
        newData.forEach(function(item){
        var i = resArr.findIndex(x => x.fld_code == item.fld_code);
        if(i <= -1){
          resArr.push(item);
        }
      });

      // console.log(resArr)
  
          this.setState({
            BooksDetails : resArr
          })
  
          Notiflix.Loading.Remove()
  
       
      }
    
    }
  
  }
  else
  {

    // console.log(Ref)

    var resArr1 = [];
    Ref.forEach(function(item){
    var i = resArr1.findIndex(x => x.fld_code == item.fld_code);
    if(i <= -1){
      resArr1.push(item);
    }
  });

    this.setState({
      BooksDetails : resArr1
    })

    Notiflix.Loading.Remove()
  }
  
  }

  render() {
    return (
      <div>
        <Menu></Menu>
    


        <div class="container ad-banner">

<div class="d-none d-sm-none d-md-block">
{this.state.bannerfood && this.state.bannerfood.map(info=>(

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

  <div id="myTargetMobile" class="d-md-none d-sm-block">

  {this.state.bannerfood && this.state.bannerfood.map(info=>(
    <img 
    onClick={()=>{
      if(info.fld_url != ''){
        window.open(info.fld_url, '_blank');
       }
    }}
   src={info.fld_mobileimage}/>   
  ))
}

  </div>


</div>

        <main class="main">
        <div class="container healthcare-slider doctors-section">
          {/* <h3 class="section-title">Books</h3> */}
          <div class="row healthcare-slider">
            {/* {this.state.Book.map((book, index) => ( */}
          <div class="col-md-3 col-sm-3 col-xs-3 col-3">
              
              <div class="sidebar-overlay"></div>
                <div class="sidebar-toggle">
                  <i class="icon-sliders"></i>
                </div>
                </div>


                <div class="col-md-9 col-sm-9 col-xs-9 col-9">
                <div class="sort-dropdown">
                  <span>Sort By</span>
                  <select onChange={this.onChangeSortBy.bind(this)}>

<option value='New Arrivals'>New Arrivals</option>
                     
<option value='High to Low' >Price : High to Low</option>
<option value='Low to High'>Price : Low to High</option>
</select>
                </div>  
              </div>

                <aside class="sidebar-product col-md-2 padding-left-lg mobile-sidebar">
                  <div class="sidebar-wrapper">

                  <div class="filter-side">
              <div class="brands">
                  <h5 style={{borderTop: '0px',paddingTop:'0px'}}>{this.state.CategorySelected}  <br/>( {this.state.BooksDetails.length} Products )</h5>
                  </div>
                <div class="row">
                  <div class="col-md-12"><h4>Filters</h4></div>
               
                </div>
         
           
                <div class="brands">
                  <h5 style={{display : this.state.PriceData.length ==0 ? 'none' : ''}}>Price</h5>
                  <ul >
                 
                    
                         
                  {this.state.PriceData.map((dt, i) => (
                          <li>
                            <input
                              checked={
                                this.state.PriceFilter.includes(dt)
                                  ? true
                                  : false
                              }
                              type="checkbox"
                              name="checkbox3"
                              id="checkbox3"
                              class="css-checkbox"
                              onChange={() => {
                                var ar = [...this.state.PriceFilter];

                                if (ar.includes(dt)) {
                                  ar.splice(ar.indexOf(dt), 1);
                                } else {
                                  ar.push(dt);
                                }

                                this.setState({
                                  PriceFilter: ar,
                                },
                                ()=>{
                                  
                                  this.OnSubmitPriceFilter(this.state.BooksVariantRef)
                                });
                              }}
                            />
                            <label  class="css-label">
                              {dt.fld_label.replace(/[?]/g,'₹')}
                            </label>
                          </li>
                        ))}
                   
                   
                  
                  </ul>
                </div>


                <div class="brands">
                  <h5 style={{display : this.state.LanguageData.length ==0 ? 'none' : ''}}>Language</h5>
                  <ul  id="style-3">
                  {this.state.LanguageData.map((dt,i)=>(
                    <li>
                      <input
                       checked={this.state.LanguageFilter.includes(dt.fld_language) ? true : false}
                        type="checkbox"
                        name="checkbox3"
                        id="checkbox3"
                        class="css-checkbox"
                        onChange={()=>{
                          var ar = [...this.state.LanguageFilter]

                          if(ar.includes(dt.fld_language)){

                            ar.splice(ar.indexOf(dt.fld_language),1)

                          }else{
                            ar.push(dt.fld_language)
                          }

                          this.setState({
                           LanguageFilter : ar
                          },
                          ()=>{
                            
                            this.OnSubmitPriceFilter(this.state.BooksVariantRef)
                          });

                        }}
                      />
                      <label  class="css-label">
                       {dt.fld_language}
                      </label>
                    </li>
                  ))}
                    
                    
                  </ul>
                </div>

             

                <div class="brands">
                  <h5 style={{display : this.state.TypeData.length ==0 ? 'none' : ''}}>Type</h5>
                  <ul  id="style-3">
                  {this.state.TypeData.map((dt,i)=>(
                    <li>
                      <input
                       checked={this.state.TypeFilter.includes(dt.fld_type) ? true : false}
                        type="checkbox"
                        name="checkbox3"
                        id="checkbox3"
                        class="css-checkbox"
                        onChange={()=>{
                          var ar = [...this.state.TypeFilter]

                          if(ar.includes(dt.fld_type)){

                            ar.splice(ar.indexOf(dt.fld_type),1)

                          }else{
                            ar.push(dt.fld_type)
                          }

                          this.setState({
                            TypeFilter : ar
                          },
                          ()=>{
                            
                            this.OnSubmitPriceFilter(this.state.BooksVariantRef)
                          });

                        }}
                      />
                      <label  class="css-label">
                       {dt.fld_type}
                      </label>
                    </li>
                  ))}
                    
                    
                  </ul>

                  <a 
                   onClick={()=>{
                    this.setState({
                    
           
                      PriceFilter : [],
                  
                      TypeFilter : [],
                      LanguageFilter  : [],

                      BooksDetails : this.state.BooksRef

                    })
                   
                  }}
                  class="filter-btn btn">Reset Filters</a>
             
                </div>

             
               
               
               
              </div>
           

            </div>
            </aside>
            <div class="col-md-10">
              <div class="row">
              {this.state.BooksDetails.length==0 && this.state.done ?  
                  <div class="col-md-12">
                        <img src="/assets/images/No-product-Found.png" style={{    margin: 'auto'}}/>
                      </div>
               : ''}
                {this.state.BooksDetails.sort((a,b)=>{
                     if(this.state.sortBy!==''){
                       if(this.state.sortBy==='Low to High'){
                   return parseInt(a.fld_discountprice)-parseInt(b.fld_discountprice)
                    
                       }
                       else if(this.state.sortBy==='High to Low'){
                   return parseInt(b.fld_discountprice)-parseInt(a.fld_discountprice)
                      
                       }
                       else if(this.state.sortBy==='New Arrivals'){
                         
                        return new Date(b.fld_updatedon)-new Date(a.fld_updatedon)

                       }
                     }
                   

                  }).map((info, index)=>(
                <div class="col-md-3">
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
             
                </div>

))}
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

                                    </main>
       
        <Footer></Footer>
      </div>
    );
  }
}

export default BookListing;
