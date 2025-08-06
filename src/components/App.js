
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      <h2 className="tooltip">
        <div>
      <Tooltip text="This is a tooltip" children="Hover over me"/>
      </div>
      </h2>
      <p className="tooltip">
        <div>
      <Tooltip text="This is another tooltip" children="Hover over me to see another tooltip"/>
      </div>
        </p>
    </div>
  )
}

export default App
