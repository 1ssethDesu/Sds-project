import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      {/* Routes for sign-in and register */}
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
