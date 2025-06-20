import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./componenti/homepage/Homepage";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
