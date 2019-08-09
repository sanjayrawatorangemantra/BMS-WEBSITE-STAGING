import React from "react"
import { Route } from "react-router-dom"
import login from './login'
import Menu from './Admin/Menu'
// import { Menu } from "react-data-grid-addons";
// import Dashboard from "./Admin/Dashboard";
// import NotFound from './NotFound'
// import { Menu } from "react-data-grid-addons";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={login} />
      <Route path="/Dashboard" component={Menu} />
      {/* <Route component={NotFound} /> */}
   
    </div>
  )
}

export default Routes