import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      <h2 className="tooltip">
        <div>
          <Tooltip text="This is a tooltip">Hover over me</Tooltip>
        </div>
      </h2>
      <p className="tooltip">
        <div>
          <Tooltip text="This is another tooltip">
            Hover over me to see another tooltip
          </Tooltip>
        </div>
      </p>
    </div>
  );
};

export default App;
