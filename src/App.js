import React from "react";
import {
  Home,
  EliteAcademy,
  EliteTableWater,
  Navbar,
  EliteTransport,
  EliteCookingGas,
  About,
} from "./components";
import "./index.css";

function App() {
  return (
    <div className="cover">
      <Navbar />
      <Home />
      <EliteAcademy />
      <EliteTableWater />
      <EliteTransport />
      <EliteCookingGas />
      <About />
    </div>
  );
}

export default App;
