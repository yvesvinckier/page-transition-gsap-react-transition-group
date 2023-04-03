import React from "react";
import { Routes, Route } from "react-router-dom";

import TransitionComponent from "../components/Transition";

import Home from "../pages/Home";
import Contact from "../pages/Contact";

const Router = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <TransitionComponent>
            <Home />
          </TransitionComponent>
        }
      />
      <Route
        path="/contact"
        element={
          <TransitionComponent>
            <Contact />
          </TransitionComponent>
        }
      />
    </Routes>
  );
};

export default Router;
