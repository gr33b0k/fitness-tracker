import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Diet from "./pages/Diet.jsx";
import Layout from "./pages/Layout.jsx";
import Analysis from "./pages/Analysis.jsx";
import Recepies from "./pages/Recepies.jsx";

function App() {
  const userInfo = {
    id: 1,
    name: "Bob",
    surname: "Johnson",
    weight: 79,
    height: 189,
    norms: {
      calorie_intake: 2000,
      protein_intake: 150,
      carbs_intake: 200,
      fat_intake: 50,
      water_intake: 2500,
    },
    current: {
      calorie_intake: 2000,
      protein_intake: 50,
      carbs_intake: 100,
      fat_intake: 30,
      water_intake: 1000,
    },
  };
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
