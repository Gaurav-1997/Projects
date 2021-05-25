import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./styles.css";
import {BrowserRouter as Router , Switch, Route, Link} from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMial from "./SendMial";
import { useSelector } from "react-redux";


export default function App() {
  
  const composeModalIsOpen = useSelector(state => state.composeModalIsOpen);

  return (
    
    <Router>

    <div className="App">
     <Header />
     <div className="app_body">
     <Sidebar />

      <Switch>
        <Route path="/mail">
          <Mail />
        </Route>
        <Route path="/">
          <EmailList />
        </Route>
      </Switch>
     </div>
      {composeModalIsOpen && <SendMial />}
    </div>

    </Router>
    
  );
}
