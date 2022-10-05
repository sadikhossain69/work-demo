import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import PricingPlans from "./components/PricingPlans";
import Services from "./components/Services"; 

function App() {
  return (
    <div>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/pricingplan" element={<PricingPlans />} />
      </Routes>
    </div>
  );
}

export default App;
