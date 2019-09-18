import React, { Component } from 'react';

import logo01 from './../Images/logo01.png';
// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../node_modules/font-awesome/css/font-awesome.min.css';
import './../css/Menu.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom' ;

import Dashboard from './Dashboard';
import Form01 from './form';
import Staff from './Staff';
import Fabric from './AddFabric';
import Accessories from './AddAccessories';
import Readymade from './AddReadyMade';
import FabricGrid from './FabricGrid';
import AccessoriesGrid from './AccessoriesGrid';
import ReadymadeGrid from './ReadymadeGrid';
import Dealer from './Dealer';
import OrderGrid from './OrderGrid';
import DispatchGrid from './DispatchGrid';

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
    <h1 class="logo-wrapper"><a class="brand-logo darken-1" href="index.html">
      <img src={logo01} className="logo" alt="logo" />
      {/* <img src={avtr1} alt="aadhg" class="circle" /> */}
    </a></h1>
    
    </div>
    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
  
        <div class="menu-list">
  
            <ul id="menu-content" class="menu-content collapse out">
                {/* <li>
                  <a href="#">
                  <i class="fa fa-dashboard fa-lg"></i> Dashboard
                  </a>
                </li> */}
                <li>
                <Link to={'/Dashboard'}><i class="fa fa-dashboard fa-lg"></i> Dashboard </Link>
                {/* <span class="arrow"></span> */}
                </li>  
                {/* <ul class="sub-menu collapse" id="service">
                  <li>Modern</li>
                  <li>eCommerce</li>
                  <li>Analytics</li>
                </ul> */}

                <li>
                <Link to={'/Dealer'}><i class="fa fa-desktop fa-lg"></i> Dealer Management </Link>
                </li>
                <li data-toggle="collapse" data-target="#service" class="collapsed">
                <i class="fa fa-shopping-bag fa-lg"></i> Product Management 
                <span class="arrow"></span>
                </li>
                  <ul class="sub-menu collapse" id="service">
                  <li><Link to={'/AddFabric'}>Fabric</Link></li>
                  <li><Link to={'/AddAccessories'}>Accessories</Link></li>
                  <li><Link to={'/AddReadyMade'}>Readymade Garments</Link></li>
                </ul>
                
                <li data-toggle="collapse" data-target="#stock" class="collapsed">
                <i class="fa fa-list-alt fa-lg"></i> Stock Management
                <span class="arrow"></span>
                </li>
                <ul class="sub-menu collapse" id="stock">
                  <li><Link to={'/FabricGrid'}>Fabric</Link></li>
                  <li><Link to={'/AccessoriesGrid'}>Accessories</Link></li>
                  <li><Link to={'/ReadymadeGrid'}>Readymade Garments</Link></li>
                </ul>
                <li>
                <Link to={'/OrderGrid'}><i class="fa fa-clipboard fa-lg"></i> Order Management </Link>
                </li>
                <li>
                <Link to={'/DispatchGrid'}><i class="fa fa-truck fa-lg"></i> Dispatch Management </Link>
                </li>
                <li>
                <Link to={'/Staff'}><i class="fa fa-users fa-lg"></i> Staff Management </Link>
                </li>
                
                

            </ul>
     </div>
</div>
<Switch>
      <Route exact path='/Dashboard' component={Dashboard} />
      <Route exact path='/form' component={Form01} />
      <Route exact path='/Staff' component={Staff} />
      <Route exact path='/AddFabric' component={Fabric} />
      <Route exact path='/AddAccessories' component={Accessories} />
      <Route exact path='/AddReadyMade' component={Readymade} />
      <Route exact path='/FabricGrid' component={FabricGrid} />
      <Route exact path='/AccessoriesGrid' component={AccessoriesGrid} />
      <Route exact path='/ReadymadeGrid' component={ReadymadeGrid} />
      <Route exact path='/Dealer' component={Dealer} />
      <Route exact path='/OrderGrid' component={OrderGrid} />
      <Route exact path='/DispatchGrid' component={DispatchGrid} />

      </Switch>
</Router> 
 {/* <div><Dashboard /></div> */}

    </div>
    
    )
  }
   
}

export default Menu;

