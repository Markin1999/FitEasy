import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./componenti/homepage/Homepage";
import Registrazione from "./componenti/registrazione/Registrazione";
import Accedi from "./componenti/registrazione/Accedi";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/registrazione" element={<Registrazione />}></Route>
            <Route path="/accedi" element={<Accedi />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
