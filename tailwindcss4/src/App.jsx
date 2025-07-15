import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./componenti/homepage/Homepage";
import Registrazione from "./componenti/registrazione/Registrazione";
import Accedi from "./componenti/registrazione/Accedi";
import HomepagePt from "./componenti/Dashboard-PT/Homepage-Pt";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/registrazione" element={<Registrazione />}></Route>
            <Route path="/accedi" element={<Accedi />}></Route>
            <Route path="/homepagePt" element={<HomepagePt />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
