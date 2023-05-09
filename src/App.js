import React, { useState } from "react";
import TrainRows from "./components/TrainRows";
import getTrainData from "./getApiData";
import Header from "./components/Header";

function App() {

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [trips, updateTripData] = useState([]);

  function renderTrainData(data) {
    updateTripData(data)
  }

  return (
    <div className="App">

      <Header></Header>

      <div className="main">
        <h1>Vart vill du åka?</h1>
        <label>Jag åker från...</label>
        <input type="text" className="from" onChange={(event) => setFrom(event.target.value)}/>
        <label>Jag åker till...</label>
        <input type="text" className="to" onChange={(event) => setTo(event.target.value)}/>
        <button className="search" onClick={() => getTrainData(from, to, renderTrainData)}>Sök...</button>

          <TrainRows trips={trips}></TrainRows>

      </div>
    </div>
  );
}

export default App;
