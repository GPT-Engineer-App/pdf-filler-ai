import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Download from "./pages/Download.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Index />} />
          <Route path="download" element={<Download />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
