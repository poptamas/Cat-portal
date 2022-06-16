import React from "react";
import Navbar from "./components/navbar";
import MyImages from "./pages/myImages";
import Upload from "./pages/upload";
import PublicImages from "./pages/publicImages";
import { HashRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <HashRouter>
      <Navbar></Navbar>

      <Switch>
        <Route path="/upload" component={Upload}></Route>
        <Route path="/myimages" component={MyImages}></Route>
        <Route path="/publicimages" component={PublicImages}></Route>
        <Route path="/home"></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
