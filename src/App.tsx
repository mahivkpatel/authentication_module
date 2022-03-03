import React from 'react';
import { BrowserRouter as Router, Route, Link,Routes } from "react-router-dom";
import { SignUp } from './components/SignUp/signup.component';
import Login from './components/Login/Login.component';


const App: React.FC = () => {
  return (
    <div className="App"> 
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route  path='/' element={<Login/>} />
            <Route path="/sign-in" element={<Login/>} />
            <Route path="/sign-up" element={<SignUp/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;