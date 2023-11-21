// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About"; // Import your AboutPage component
import FaqPage from "./pages/Faq"; // Import your FaqPage component
import Navbar from "./components/Navbar";
import "./App.css";
import Privacy from "./pages/PrivacyPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
