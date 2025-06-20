import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./componenti/homepage/Homepage";

function App() {
  const [count, setCount] = useState(0);

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
