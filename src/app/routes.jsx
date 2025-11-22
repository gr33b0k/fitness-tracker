import { Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout.jsx";
import Home from "../pages/Home.jsx";
import Diet from "../pages/Diet.jsx";
import Analysis from "../pages/Analysis.jsx";
import Recipes from "../pages/Recipes.jsx";
import { userInfo, stepsData } from "../data/data.js";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<Home userInfo={userInfo} stepsData={stepsData} />}
        />
        <Route path="diet" element={<Diet />} />
        <Route path="analysis" element={<Analysis />} />
        <Route path="recipes" element={<Recipes />} />
      </Route>
    </Routes>
  );
};