import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./src/pages/Home/Home";
import PropertyDetail from "./src/pages/PropertyDetail/PropertyDetail";
import Login from "./src/components/Login/Login";
import Signup from "./src/components/Signup/Signup";
import Confirmation from "./src/pages/Confirmation/Confirmation";
import PageNotFound from "./src/pages/PageNotFound/PageNotFound";
import Wishlist from "./src/pages/Wishlist/Wishlist";
import Help from "./src/pages/Help/Help";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/properties/:id" element={<PropertyDetail />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/wishlist" element={<Wishlist />} /> {/* Add Wishlist route */}
          <Route path="/help" element={<Help />} /> {/* Add route for Help page */}
          <Route path="*" element={<PageNotFound />} />{" "}
          {/* Fallback route for 404 */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
