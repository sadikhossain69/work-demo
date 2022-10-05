import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import OurTeamPage from "./components/OurTeamPage";
import PricingPlans from "./components/PricingPlans";
import Services from "./components/Services"; 

function App() {
  return (
    <div>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/pricingplan" element={<PricingPlans />} />
        <Route path="/ourteam" element={<OurTeamPage />} />
      </Routes>
    </div>
  );
}

export default App;
