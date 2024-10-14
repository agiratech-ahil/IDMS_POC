import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import TaskManagement from "../pages/task";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskManagement />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
