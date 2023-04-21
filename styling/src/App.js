
import React from 'react';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/Sign_In_Page/Sign_in';
import SignUpPage from './pages/Sign_Up_Page/Sign_up';
import Home from './pages/Home';
import TestFinishPage from './pages/Congrats';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/c" element={<TestFinishPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
