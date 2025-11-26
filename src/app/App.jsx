import { BrowserRouter as Router} from "react-router-dom";
import { AppRoutes } from "./routes.jsx";
import { userInfo, stepsData } from "../data/data.js";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
