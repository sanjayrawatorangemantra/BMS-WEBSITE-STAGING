import React, { Component } from 'react';

import avtr1 from './../Images/avatar01.png';
import avtr2 from './../Images/avatar02.png';
import avtr3 from './../Images/avatar03.png';
import './../App.css';
import './../css/Dashboard.css';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Form, Nav, NavDropdown, FormControl, Button, Dropdown   } from 'react-bootstrap';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import DonutChart from "react-svg-donut-chart";
import {
  LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  Area
} from 'recharts';
import Header from './Header';
import Footer from './Footer';

import { Bar,Line, Pie} from 'react-chartjs-2';






const dataPie = [
  
  {value: 150, stroke: "#ff4bac", strokeWidth: 2},
  {value: 40, stroke: "#f6f6f6", strokeWidth: 2}
  
  // {value: 30, stroke: "#3da18d"},
  // {value: 20, stroke: "#69c2b0"},
  // {value: 10, stroke: "#a1d9ce"},
]

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

const data01 = [
  {
    name: 'Page A', uv: 590, pv: 800, amt: 1400,
  }
];

// Pie Chart

const dataP = {
  labels: [
    'Fabric : 300',
    'Accessories : 50',
    'Readymade : 100'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
};

const options = {
  maintainAspectRatio: false,
  responsive: false,
  legend: {
    position: 'left',
    labels: {
      boxWidth: 10
    }
  }
}

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state ={
      chartData:{
        labels: ["April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March"],
        datasets: [{
          label: '',
          data: [10, 17, 4, 7, 10, 6, 2, 10, 17, 4, 7, 10, 6,0],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(54, 162, 235, 0.8)'
          ],
      }
    ]
    }
  }
}

componentDidMount(){
  document.title = "Dashboard || Orange Overseas || DOPS (Dealer Order Processing System)"
}



render () {
  return (
    <div className="App">
    <Header />
<div id="main">
    <div className="row">
      <div class="content-wrapper-before gradient-45deg-indigo-purple"></div>

      <div class="breadcrumbs-dark pb-0" id="breadcrumbs-wrapper">         
         <div class="container">
           <div class="row">
             <div class="col-lg-6 col-sm-6">
               <h5 class="breadcrumbs-title mt-0 mb-0">Dashboard</h5>
               <ol class="breadcrumbs mb-0">
                 <li class="breadcrumb-item"><a href="index.html">Home</a>
                 </li>
                 <li class="breadcrumb-item active">Admin Dashboard
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
        <div className="col-lg-12">
          <div className="">
            
          <div class="row">
            <div className="col-lg-4">
              <div class="card animate fadeLeft">
                <div class="card-content">
                <h4 class="card-title mb-0">Product Wise Order Statistics <i class="fa fa-ellipsis-v" aria-hidden="true"></i></h4>
                  <p class="medium-small">Year : 2018 - 19</p>
                  {/* <DonutChart data={dataPie} /> */}
                  <div className="pieChart">
        <Pie data={dataP} height={340} width={315} options={options}/>
      </div>
                  {/* <div class="ct-fill-donut-label" data-fill-index="fdid-0" style={{position: 'absolute', top: '161px', left: '143px'}}>
                    <p class="small">Balance</p><h5 class="mt-0 mb-0">$ 10k</h5>
                  </div> */}
                  {/* <h5 class="center-align">$ 50,150.00</h5>
                  <p class="medium-small center-align">Used balance this billing cycle</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-8">
            <div>
            <div class="card animate fadeLeft">
                <div class="card-content">
                  <h4 class="card-title mb-0">Month Wise Order Statistics <i class="fa fa-ellipsis-v" aria-hidden="true"></i></h4>
                  <p class="medium-small">Year : 2018 - 19</p>
                  {/* <LineChart width={300} height={100} data={data}>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
      </LineChart> */}
                    <Bar
                                data={this.state.chartData}
                                width={100}
                                height={42}
                                options={{ }}
                              />
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className="row">
          <div className="col-lg-12">
            <div>
            <div class="card animate fadeLeft">
                <div class="card-content">
                  <h4 class="card-title mb-0">Month Wise Revenue Statistics <i class="fa fa-ellipsis-v" aria-hidden="true"></i></h4>
                  <p class="medium-small">Year : 2018 - 19</p>
                  {/* <LineChart width={300} height={100} data={data}>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
      </LineChart> */}
                    <Bar
                                data={this.state.chartData}
                                width={100}
                                height={25}
                                options={{ }}
                              />
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-lg-12">
            <div style={{height: '500px', width: '500px', backgroundColor: 'white', position: 'relative'}}>
        <Pie data={dataP} height={250} width={400} options={options}/>
      </div>
            </div>
          </div> */}
          

                    <div className="row">
                      <div className="col-lg-3">
                      <div class="card gradient-45deg-light-blue-cyan gradient-shadow min-height-100 white-text animate fadeLeft">
            <div class="padding-4">
            <div className="row">
               <div class="col-lg-6 col-sm-6">
                  <div><i class="fa fa-cart-plus dicon background-round mt-5"></i>
                  {/* <div><p>Orders</p></div>
                   */}
                    {/* <p className="new">6,00,00</p> */}
                    </div>
               </div>
               <div class="col-lg-6 col-sm-6 right-align">
                  <h5 class="mb-0 white-text">Dealers</h5>
                  <p class="no-margin new">Dealers : 690</p>
                  {/* <p className="new">6,00,00</p> */}
               </div>
               </div>
            </div>
         </div>
                      </div>

                      <div className="col-lg-3">
                    <div class="card gradient-45deg-green-teal gradient-shadow min-height-100 white-text animate fadeRight">
            <div class="padding-4">
              <div className="row">
               <div class="col-lg-4">
                  <i class="fa fa-shopping-bag dicon background-round mt-5"></i><br/>
                  {/* <p>Profit</p> */}
               </div>
               <div class="col-lg-8 right-align" style={{paddingRight: '0px'}}>
                 <h5 class="mb-0 white-text">Products</h5>
                  <p class="no-margin new">Fabric : 960</p>
                  <p class="no-margin new">Accessories : 890</p>
                  <p class="no-margin new">Readymade : 890</p>
                  {/* <p className="new">25,000</p> */}
               </div>
               </div>
            </div>
         </div>
         </div>

                      <div className="col-lg-3">
                      <div class="card gradient-45deg-red-pink gradient-shadow min-height-100 white-text animate fadeLeft">
            <div class="padding-4">
            <div className="row">
               <div class="col-lg-3 col-sm-6">
                  <i class="fa fa-clipboard dicon background-round mt-5"></i>
                  {/* <p>Clients</p> */}
               </div>
               <div class="col-lg-9 col-sm-6 right-align">
                  <h5 class="mb-0 white-text">Orders</h5>
                  <p class="no-margin new">Total Orders : 288</p>
                  <p class="no-margin new">Orders this month : 188</p>
                  {/* <p className="new">1,12,900</p> */}
               </div>
               </div>
            </div>
         </div>
                      </div>
                      <div className="col-lg-3 col-sm-12">
                      <div class="card gradient-45deg-amber-amber gradient-shadow min-height-100 white-text animate fadeRight">
            <div class="padding-4">
            <div className="row">
               <div class="col-lg-3 col-sm-6">
                  <i class="fa fa-line-chart dicon background-round mt-5"></i>
                  {/* <p>Sales</p> */}
               </div>
               <div class="col-lg-9 col-sm-6 right-align">
                  <h5 class="mb-0 white-text">Sales</h5>
                  <p class="no-margin new">Total Sales : 822</p>
                  <p class="no-margin new">Sales this month : 422</p>
                  {/* <p className="new">3,</p> */}
               </div>
               </div>
            </div>
         </div>
                    </div>
                   
                    </div>
                   

                  <div className="row mgbt">

          <div className="col-lg-12">
            <div class="card subscriber-list-card animate fadeRight">
              <div class="card-content pb-1">
                <h4 class="card-title mb-0">New Orders <i class="fa fa-ellipsis-v" aria-hidden="true"></i></h4>
              </div>
            
            <table class="subscription-table responsive-table highlight">
            <thead>
               <tr>
                  <th>Dealer Name</th>
                  <th>Order Number</th>
                  <th>Order Date</th>
                  <th>Order Value</th>
                  <th>Action</th>
                  {/* <th>Action</th> */}
               </tr>
            </thead>
            <tbody>
               <tr>
               <td>Michael Austin</td>
                  <td>0112</td>
                  
                  <td>Jan 1,2019</td>
                  <td> 1000.00</td>
                  <td><Button className="btn01" onClick={() =>{
                      this.props.history.push('/Dashboard/OrderView')
                  }}>View</Button></td>
                  {/* <td><span class="badge pink lighten-5 pink-text text-accent-2">Decline</span></td> */}
                  
                  {/* <td class="center-align"><a href="#"><i class="fa fa-times pink-text f25"></i></a></td> */}
               </tr>
               <tr>
                  
               <td>Aldin Rakić</td>
                  <td>0113</td>
                  <td>Jan 10,2019</td>
                  <td> 3000.00</td>
                  <td><Button className="btn01" onClick={() =>{
                      this.props.history.push('/Dashboard/OrderView')
                  }}>View</Button></td>
                  
                  {/* <td class="center-align"><a href="#"><i class="fa fa-times pink-text f25"></i></a></td> */}
               </tr>
               <tr>
                  
               <td>İris Yılmaz</td>
                  <td>0114</td>
                  <td>Jan 12,2019</td>
                  <td> 2000.00</td>
                  <td><Button className="btn01" onClick={() =>{
                      this.props.history.push('/Dashboard/OrderView')
                  }}>View</Button></td>
                 
                  {/* <td class="center-align"><a href="#"><i class="fa fa-times pink-text f25"></i></a></td> */}
               </tr>
               <tr>
                  
               <td>Lidia Livescu</td>
                  <td>0115</td>
                  <td>Jan 14,2019</td>
                  <td> 1100.00</td>
                  <td><Button className="btn01" onClick={() =>{
                      this.props.history.push('/Dashboard/OrderView')
                  }}>View</Button></td>
                  
                  {/* <td class="center-align"><a href="#"><i class="fa fa-times pink-text f25"></i></a></td> */}
               </tr>
            </tbody>
         </table>
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

export default Dashboard;
