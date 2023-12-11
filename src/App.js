
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DefaultNavbar, SimplifiedNavbar } from './comp/Navbar/Navbar';
import Home from './comp/Home/Home';
import SignInForm from './comp/SignInForm/SignInForm';
import Footer from './comp/Footer/Footer';
import Leaderboard from './comp2/leaderboard/Leaderboard';
import Profile from './comp2/profile/Profile';
import Registration from './comp/Registration/registration';
import Bgvid from './V108-7.mp4';
import "./App.css"

const SignIn = () => (
  <div>
    <SignInForm />
  </div>
);

const SignUp = () => (
  <div>
    <Registration />
  </div>
);

const App = () => {
  const isSimpleNavbar = window.location.pathname === '/';

  return (
    <div className="app-container">
     <video className="w-full h-full" autoPlay loop muted>
        <source src={Bgvid} type='video/mp4'/>
      </video>

      <Router>
        <div>
          {/* <Navbar /> */}
          {isSimpleNavbar ? <DefaultNavbar  /> : < SimplifiedNavbar/>}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;