import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Diet from "./pages/Diet.jsx";
import Layout from "./pages/Layout.jsx";
import Analysis from "./pages/Analysis.jsx";
import Recepies from "./pages/Recepies.jsx";
import { userInfo } from "./data/data.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home userInfo={userInfo} />} />
          <Route path="diet" element={<Diet />} />
          <Route path="analysis" element={<Analysis />} />
          <Route path="recepies" element={<Recepies />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
