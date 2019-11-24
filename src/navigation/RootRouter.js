import React, { Component, useEffect} from "react";

import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import HomeLayout from "./Home";
import Login from "./SignIn";
import SignUp from "./SignUp";
import Page404 from "./Page404";
import Materials from "./Home/Materials";
import Blog from "./Blog";
import PrimarySearchAppBar from "../components/Appbar";
import Menu from "./Menu";
import Books from "./Home/Books";
import Assignments from "./Home/Assignments";
import NewsPapers from "./Home/NewsPapers";
import PastPapers from "./Home/PastPapers";
import ItemViewer from "./Home/View/ItemViewer";

const RootRouter = props => {
  const {pathname} = useLocation();
  
    return (
      <div>
      
      {pathname === "/signup" ? 
        null 
       :
        <div>
          {pathname === "/login" ?
            null
            :
            <div>
              <PrimarySearchAppBar />
            </div>
           }
        </div>
        }
        
        <div>
          <Switch>

            <Route exact path="/" component={HomeLayout} />
            <Route exact path="/antobolo" component={HomeLayout} />
            <Route path="/materials" component={Materials} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={Menu} />
            <Route path="/books" component={Books} />
            <Route path="/assignment" component={Assignments} />
            <Route path="/newspaper" component={NewsPapers} />
            <Route path="/pastpapers" component={PastPapers} />
            <Route path="/itemViewer" component={ItemViewer} />

            <Route component={Page404} />
            <Redirect to="/" />
            
          </Switch>
        </div>
        
      </div>
    );
  
}

export default RootRouter;
