import React, { Component } from 'react';

import avtr1 from './../Images/avatar01.png';
import avtr2 from './../Images/avatar02.png';
import avtr3 from './../Images/avatar03.png';
import './../App.css';
import './../css/Dashboard.css';
// import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Form, Nav, NavDropdown, FormControl, Button, Dropdown, NavItem   } from 'react-bootstrap';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import DonutChart from "react-svg-donut-chart";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  Area, Bar
} from 'recharts';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom' ;





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


class Header extends Component {
  constructor(props) {
    super(props)
  }

render () {
  return (
    <div className="App">
    <header>
      <Navbar bg="light" expand="lg"  fixed="top">
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    {/* <div className="abc" >
  <Form inline>
  <i class="fa fa-search search-icon" style={{color: '#fff'}}></i>
      <FormControl type="text" placeholder="Search" className="mr-sm-2 search" />
      <Button variant="" className="btn-search">Search</Button>
    </Form>
    </div> */}
    
    <Nav className="mr-auto01">
     
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"><i class="fa fa-bell-o" aria-hidden="true"></i></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
      <NavItem><h5>Welcome ! Tanya</h5></NavItem>
      <Dropdown>
    <Dropdown.Toggle id="dropdown-custom-components" >
      <i class="fa fa-bell-o bell-icon" aria-hidden="true"  style={{marginTop:'6 px'}}></i>
    </Dropdown.Toggle>

    <Dropdown.Menu style={{overflowY: 'scroll'}}>
      <Dropdown.Item eventKey="1">Red</Dropdown.Item>
      <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
      <Dropdown.Item eventKey="3">
        Orange
      </Dropdown.Item>
      <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <Dropdown>
    <Dropdown.Toggle id="dropdown-custom-components">
    <img src={avtr1} alt="aadhg" class="circle" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item eventKey="1"><Link to={'/changePswd'}><i class="fa fa-key" aria-hidden="true"></i>  Change Password</Link></Dropdown.Item>
     
      <Dropdown.Item eventKey="5"><i class="fa fa-sign-out" aria-hidden="true"></i>  LogOut</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>;
</header>

    </div>
  );
}
}

export default Header;
