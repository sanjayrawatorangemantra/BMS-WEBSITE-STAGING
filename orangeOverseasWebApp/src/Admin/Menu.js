import React, { Component } from 'react';

import logo01 from './../Images/logo01.png';
// import './App.css';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


import './../../node_modules/font-awesome/css/font-awesome.min.css';
import './../css/Menu.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom' ;

import Dashboard from './Dashboard';
import Form01 from './form';

import Staff from './Staff';
import StaffGrid from './StaffGrid';
import StaffView from './StaffView';

import DealerGrid from './DealerGrid';

import ProductFabricGrid from './ProductFabricGrid';
import Fabric from './AddFabric';
import ProductViewFabric from './ProductViewFabric';

import ProductAccessoriesGrid from './ProductAccessoriesGrid';
import Accessories from './AddAccessories';
import ProductViewAccessories from './ProductViewAccessories';

import ProductReadymadeGrid from './ProductReadymadeGrid';
import Readymade from './AddReadyMade';
import ProductViewReadymade from './ProductViewReadymade';

import StockFabricGrid from './StockFabricGrid';
import StockAddFabric from './StockAddFabric';
import StockFabricView from './StockFabricView';

import StockAccessoriesGrid from './StockAccessoriesGrid';
import StockAddAccessories from './StockAddAccessories';
import StockAccessoriesView from './StockAccessoriesView';

import StockReadymadeGrid from './StockReadymadeGrid';
import StockAddReadymade from './StockAddReadymade';
import StockReadymadeView from './StockReadymadeView';

import Dealer from './Dealer';
import DealerView from './DealerView';

import OrderGrid from './OrderGrid';
import OrderView from './OrderView';

import DispatchGrid from './DispatchGrid';
import Dispatch from './Dispatch';

import changePswd from './changePswd';

import NavLink from 'react-bootstrap/NavLink';
// import Form01 from './form';

class Menu extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return(
      <div className="App">
      <Router>
      <div class="nav-side-menu">
    <div class="brand">
    {/* <h1 class="logo-wrapper"> */}
      <a class="brand-logo darken-1" href="index.html">
      <img src={logo01} className="logo" alt="logo" />
      {/* <img src={avtr1} alt="aadhg" class="circle" /> */}
    </a>
    {/* </h1> */}
    
    </div>
    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
  
        <div class="menu-list">
  
            <ul id="menu-content" class="menu-content collapse out">
                {/* <li>
                  <a href="#">
                  <i class="fa fa-dashboard fa-lg"></i> Dashboard
                  </a>
                </li> */}
                <Link to={'/Dashboard'}><li>
                <i class="fa fa-dashboard fa-lg"></i> Dashboard 
                {/* <span class="arrow"></span> */}
                </li>  
                </Link>
                {/* <ul class="sub-menu collapse" id="service">
                  <li>Modern</li>
                  <li>eCommerce</li>
                  <li>Analytics</li>
                </ul> */}

                <li data-toggle="collapse" data-target="#service" class="collapsed">
                <i class="fa fa-shopping-bag fa-lg"></i> Product Management 
                <span class="arrow"></span>
                </li>
                  <ul class="sub-menu collapse" id="service">
                  <Link to={'/ProductFabricGrid'}><li>Fabric</li></Link>
                  <Link to={'/ProductAccessoriesGrid'}><li>Accessories</li></Link>
                  <Link to={'/ProductReadymadeGrid'}><li>Readymade Garments</li></Link>
                </ul>

                <li data-toggle="collapse" data-target="#stock" class="collapsed">
                <i class="fa fa-list-alt fa-lg"></i> Stock Management
                <span class="arrow"></span>
                </li>
                <ul class="sub-menu collapse" id="stock">
                  <Link to={'/StockFabricGrid'}><li>Fabric</li></Link>
                  <Link to={'/StockAccessoriesGrid'}><li>Accessories</li></Link>
                  <Link to={'/StockReadymadeGrid'}><li>Readymade Garments</li></Link>
                </ul>

                <Link to={'/DealerGrid'}>
                <li>
                <i class="fa fa-desktop fa-lg"></i> Dealer Management 
                </li></Link>

                <Link to={'/OrderGrid'}><li>
                <i class="fa fa-clipboard fa-lg"></i> Order Management 
                </li></Link>

                <Link to={'/DispatchGrid'}><li>
                <i class="fa fa-truck fa-lg"></i> Dispatch Management 
                </li></Link>


                <Link><li>
                <i class="fa fa-clipboard fa-lg"></i> Reports
                </li></Link>

                <Link to={'/StaffGrid'}><li>
                <i class="fa fa-users fa-lg"></i> Staff Management 
                </li></Link>

                <Link to={'/changePswd'}><li>
                <i class="fa fa-key fa-lg"></i> Change Password 
                </li></Link>

                <li>
                <i class="fa fa-sign-out fa-lg"></i> LogOut
                </li>

                
                

            </ul>
     </div>
</div>
<Switch>
      <Route exact path='/Dashboard' component={Dashboard} />
      <Route exact path='/form' component={Form01} />

      <Route exact path='/Staff' component={Staff} />
      <Route exact path='/StaffGrid' component={StaffGrid} />
      <Route exact path='/StaffView' component={StaffView} />

      <Route path='/ProductFabricGrid' component={ProductFabricGrid} />
      <Route exact path='/AddFabric' component={Fabric} />
      <Route exact path='/ProductViewFabric' component={ProductViewFabric} />

      <Route exact path='/ProductAccessoriesGrid' component={ProductAccessoriesGrid} />
      <Route exact path='/AddAccessories' component={Accessories} />
      <Route exact path='/ProductViewAccessories' component={ProductViewAccessories} />

      <Route exact path='/ProductReadymadeGrid' component={ProductReadymadeGrid} />
      <Route exact path='/AddReadyMade' component={Readymade} />
      <Route exact path='/ProductViewReadymade' component={ProductViewReadymade} />

      <Route exact path='/StockFabricGrid' component={StockFabricGrid} />
      <Route exact path='/StockAddFabric' component={StockAddFabric} />
      <Route exact path='/StockFabricView' component={StockFabricView} />

      <Route exact path='/StockAccessoriesGrid' component={StockAccessoriesGrid} />
      <Route exact path='/StockAddAccessories' component={StockAddAccessories} />
      <Route exact path='/StockAccessoriesView' component={StockAccessoriesView} />

      <Route exact path='/StockReadymadeGrid' component={StockReadymadeGrid} />
      <Route exact path='/StockAddReadymade' component={StockAddReadymade} />
      <Route exact path='/StockReadymadeView' component={StockReadymadeView} />

      <Route path='/DealerGrid' component={DealerGrid} />
      <Route exact path='/Dealer' component={Dealer} />
      <Route exact path='/DealerView' component={DealerView} />

      <Route exact path='/OrderGrid' component={OrderGrid} />
      <Route exact path='/OrderView' component={OrderView} />

      <Route exact path='/DispatchGrid' component={DispatchGrid} />
      <Route exact path='/Dispatch' component={Dispatch} />

      <Route exact path='/changePswd' component={changePswd} />

      </Switch>
</Router> 
 {/* <div><Dashboard /></div> */}

    </div>
    
    )
  }
   
}

export default Menu;

