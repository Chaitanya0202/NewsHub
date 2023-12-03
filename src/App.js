
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Business from "./components/Business";
import Sport from "./components/Sport";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/business" element={<Business />} />
          <Route exact path="/sport" element={<Sport/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
