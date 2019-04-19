import React from "react";

import Slider from "../Slider";
import "./styles.scss";

const App = () => {
  return (
    <div className="App">
      <Slider min="0" max="10" step="1" />
    </div>
  );
};

export default App;
