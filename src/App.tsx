import { useEffect, useState } from "react";
import socket from "./socketConnection";
import { PerformanceData } from "./types";
import Widget from "./components/Widget";

const App = () => {
  return (
    <div className="container">
      <Widget />
    </div>
  );
};

export default App;
