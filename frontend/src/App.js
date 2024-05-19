

import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages";
import Kurulus from "./pages/kurulus";
import Canta from "./pages/canta";
import Yardim from "./pages/yardim";

function App() {
  return (
      <Router>
          <Header />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/kurulus" element={<Kurulus />} />
              <Route exact path="/canta" element={<Canta />} />
              <Route exact path="/yardim" element={<Yardim />} />
          </Routes>
          <Footer />
      </Router>
  );
}

export default App;
