import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import TaskManagement from "../pages/taskManagement/Tasks";
import PrimaryLayout from "../layout/MainLayout";
import Document from "../pages/documents";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrimaryLayout />}>
          <Route path="/task" element={<TaskManagement />} />
          <Route path="/documents" element={<Document />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
