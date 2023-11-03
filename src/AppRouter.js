import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import TalkPage from "./modules/talk/TalkPage";

function AppRouter() {
  return (
    <Routes>
      {dashboard()}

      {/* Fallback */}
      <Route exact path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function dashboard() {
  return (
    <React.Fragment>
      <Route exact path="/" element={<Navigate to="/talk" />} />
      <Route exact path="/talk" element={<TalkPage />} />
    </React.Fragment>
  );
}

export default AppRouter;
