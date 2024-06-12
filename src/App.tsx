import React from 'react';
import './App.css';
import MyTable from "./MyTable";
import {data } from "./data";

function App() {
  return (
    <div className="App">
      <MyTable data={data} />
    </div>
  );
}

export default App;
