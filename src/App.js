import React, { Component } from 'react';
import Login from "./components/Login";
import LogOut from "./components/LogOut";
import SignUp from "./components/SignUp";
import Navigation from "./components/Navigation";
import Error from "./components/Error";
import Admin from "./components/Admin";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import './login.css';

class App extends Component {

  render() {

    return (

        <div className ="container-fluid p-0">
          <div  className ="row" >
            <div className ="col-md-12">
              <BrowserRouter>
                <div>
                  <Navigation/>
                  <Switch>
                    <Route path="/" component={Login} exact/>
                    <Route path="/Login" component={Login} exact/>
                    <Route path="/SignUp" component={SignUp} exact/>
                    <Route path="/Admin" component={Admin} exact/>
                    <Route path="/logout" component={LogOut} exact/>
                    <Route component={Error} exact/>
                  </Switch>
                </div>
              </BrowserRouter>
            </div>{/* </col-md-12*/}
          </div>{/* </row> */}
        </div>

    );
  }
}

export default App;
