import { Route, Routes } from "react-router-dom";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
