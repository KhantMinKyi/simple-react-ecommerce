import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <MainRouter></MainRouter>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
