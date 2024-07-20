import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";

function PrivateRoute() {
  const [isAuth, setAuth] = useState(false);
  return (
    <>
      {isAuth ? (
        <Routes>
          <Route path="/" element={<h2>Welcome to the new era</h2>} />
        </Routes>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoute />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
