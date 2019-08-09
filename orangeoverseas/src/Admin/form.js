import React, {Component} from 'react';

import avtr1 from './../Images/avatar01.png';
// import './App.css';
import './../css/form.css';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../../node_modules/font-awesome/css/font-awesome.min.css';
import {Navbar, Form, Nav, NavDropdown, FormControl, Button, Dropdown   } from 'react-bootstrap';

class Form01 extends Component {
render() {
  return (
    <div className="App">
      <header>
      <Navbar bg="light" expand="lg"  fixed="top">
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Form inline>
      <FormControl type="text" placeholder="Explore Materialize" className="mr-sm-2" />
      {/* <Button variant="outline-success">Search</Button> */}
    </Form>
    <Nav className="mr-auto01">
      
      <Dropdown>
    <Dropdown.Toggle id="dropdown-custom-components" >
      <i class="fa fa-bell-o" aria-hidden="true"  style={{marginTop:'6 px'}}></i>
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item eventKey="1">Red</Dropdown.Item>
      <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
      <Dropdown.Item eventKey="3" active>
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
      <Dropdown.Item eventKey="1"><i class="fa fa-user-o" aria-hidden="true"></i>  Profile</Dropdown.Item>
      <Dropdown.Item eventKey="2"><i class="fa fa-comments-o" aria-hidden="true"></i>  Chat</Dropdown.Item>
      <Dropdown.Item eventKey="3">
      <i class="fa fa-question-circle" aria-hidden="true"></i>  Help
      </Dropdown.Item>
      <Dropdown.Item eventKey="4"><i class="fa fa-lock" aria-hidden="true"></i>  Lock</Dropdown.Item>
      <Dropdown.Item eventKey="5"><i class="fa fa-sign-out" aria-hidden="true"></i>  LogOut</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>;
</header>
<div id="main">
    <div className="row">
      <div class="content-wrapper-before gradient-45deg-indigo-purple"></div>
      <div className="container">
        <div className="col-lg-12 col-md-12">
        <div id="prefixes" class="card card card-default scrollspy">
        <div class="card-content">
          <h4 class="card-title">User Details</h4>
            <div className="col-lg-12">
              <div className="row">
                <div className="input-field col s12">
                  <i className="fa fa-user-circle-o prefix"></i>
                  <input id="name3" type="text" />
                  <label for="name3" className="">Name</label>
                </div>
                <div className="input-field col s12">
                  <i className="fa fa-envelope prefix"></i>
                  <input id="name3" type="text" />
                  <label for="name3" className="">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="fa fa-envelope prefix"></i>
                  <input id="name3" type="text" />
                  <label for="name3" className="">Country Code</label>
                </div>
                <div className="input-field col s12">
                  <i className="fa fa-mobile prefix"></i>
                  <input id="name3" type="text" />
                  <label for="name3" className="">Mobile</label>
                </div>

              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="fa fa-lock prefix"></i>
                  <input id="name3" type="text" />
                  <label for="name3" className="">Address</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="fa fa-comments prefix"></i>
                  <input id="name3" type="text" />
                  <label for="name3" className="">Country</label>
                </div>
                <div className="input-field col s12">
                  <i className="fa fa-comments prefix"></i>
                  <input id="name3" type="text" />
                  <label for="name3" className="">State</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="fa fa-comments prefix"></i>
                  <input id="name3" type="text" />
                  <label for="name3" className="">City</label>
                </div>
                <div className="input-field col s12">
                  <i className="fa fa-comments prefix"></i>
                  <input id="name3" type="text" />
                  <label for="name3" className="">Pin Code</label>
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
  );
}
}

export default Form01;
