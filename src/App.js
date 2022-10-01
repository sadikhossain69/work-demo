import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
