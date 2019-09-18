import React, { Component } from 'react';

import avtr1 from './../Images/avatar01.png';
import avtr2 from './../Images/avatar02.png';
import avtr3 from './../Images/avatar03.png';
import './../App.css';
import './../css/Dashboard.css';
// import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Form, Nav, NavDropdown, FormControl, Button, Dropdown   } from 'react-bootstrap';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import DonutChart from "react-svg-donut-chart";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  Area, Bar
} from 'recharts';
import Header from './Header';




const dataPie = [
  
  {value: 150, stroke: "#ff4bac", strokeWidth: 2},
  {value: 40, stroke: "#f6f6f6", strokeWidth: 2}
  
  // {value: 30, stroke: "#3da18d"},
  // {value: 20, stroke: "#69c2b0"},
  // {value: 10, stroke: "#a1d9ce"},
]



class Footer extends Component {
  constructor(props) {
    super(props)
  }

  getYear() {
    return new Date().getFullYear();
}

render () {
  return (
    <div className="App">

<footer class="page-footer footer fixed footer-static footer-dark gradient-45deg-indigo-purple gradient-shadow navbar-border navbar-shadow">
<div class="footer-copyright">
        <div class="container">
            <p>
                {/* <span className="left">© 2019 <a href="#" target="_blank">Orange Overseas</a> All rights reserved.</span> */}
                {/* <span class="right hide-on-small-only">Powered by <a href="http://globaltrendz.com/">Global Trendz</a></span> */}
                <span class="right hide-on-small-only">
                  {/* © 2019 <a href="#" target="_blank">Orange Overseas</a> All rights reserved. */}
                  <span>
   © {this.getYear()} <a href="#" target="_blank" >Orange Overseas</a> All rights reserved.
</span>
                  </span>
            </p>
        </div>
      </div>
</footer>
    </div>
  );
}
}

export default Footer;
