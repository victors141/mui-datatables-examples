import React from "react";
import ReactDOM from "react-dom";
/* import Table from "./customize-styling"; */
/* import Table from './customizeToolbar' */
/* import Table from "./customize-toolbarselect"; */
/* import Table from "./fixed-header"; */
/* import Table from "./themes"; */
/* import Table from "./text-localization"; */
/* import Table from './custom-action-columns' */
/* import Table from "./customize-columns"; */
/* import Table from "./responsive-demo"; */
import Table from "./custom-rows";
function App() {
  return <Table />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
