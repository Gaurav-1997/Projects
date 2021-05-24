import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./styles.css";
import {BrowserRouter as Router , Switch, Route, Link} from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMial from "./SendMial";
import { useSelector, Provider } from "react-redux";
import { selectcomposeModalIsOpen } from "../src/app/reducers/mailSlice";


export default function App() {
  
  const composeModalIsOpen = useSelector(selectcomposeModalIsOpen);

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
