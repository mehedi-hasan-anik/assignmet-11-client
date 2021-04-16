import React from 'react';
import './SideBar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import OrderList from '../OrderList/OrderList';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AddService from '../AddService/AddService';
import MakeAddmin from '../MakeAddmin/MakeAddmin';
import ManageService from '../ManageService/ManageService';


const SideBar = () => {
    return (
       
        <div className="container">
        <Router>
                 <nav className="second-nav">
                     <ul>
                             <li>
                                 <Link to="/orderlist" style={{ fontSize:'20px'}}>OrderList</Link>
                             </li>
                             <li>
                             <Link to="/addService" style={{ fontSize:'20px'}}>Add Service</Link>
                             </li>
                             <li>
                             <Link to="/makeAdmin" style={{ fontSize:'20px'}}>Make Admin</Link>
                             </li>
                             <li>
                             <Link to="/manageService" style={{ fontSize:'20px'}}>Manage Service</Link>
                             </li>

                     </ul>
                 </nav>
                 <Switch>
                     <Route path="/orderList">
                         <OrderList></OrderList>
                     </Route>
                     <Route path="/addService">
                         <AddService></AddService>
                     </Route>
                     <Route path="/makeAdmin">
                         <MakeAddmin></MakeAddmin>
                     </Route>
                     <Route path="/manageService">
                         <ManageService></ManageService>
                     </Route>
                     
                 </Switch>
        </Router>
    </div>

    );
};

export default SideBar;