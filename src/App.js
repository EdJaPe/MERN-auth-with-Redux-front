import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'

// Pages
import Landing from "./pages/public_routes/Landing";
import About from './pages/public_routes/About';
import TOC from './pages/public_routes/TOC';
import Projects from './pages/public_routes/Projects';
import Contact from './pages/public_routes/Contact';
import Pricing from './pages/public_routes/Pricing';
import NotFound from './pages/NotFound';
import LogIn from './pages/account/LogIn';
import Register from './pages/account/Register';
import ForgotPassword from './pages/account/ForgotPassword';
import ResetPassword from './pages/account/ResetPassword';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  // States
  const [ authUser, setAuthUser ] = useState('');
  const { user } = useSelector((state) => state.auth)

  // useEffect
  useEffect(() => {
    const setUser = (role) => {
      if (role === 'admin') {
        setAuthUser('admin')
      } else if (role === 'employee') {
        setAuthUser('employee')
      } else if (role === 'client') {
        setAuthUser('client')
      } else {
        setAuthUser('public')
      }
    }
    if (!!user) {
      const role = user.user.role
      setUser(role);
    }
  },[user])


  return (
    <>
      <Router>
        <Header authUser={authUser} />
        <Routes>
          {/* Public Route */}
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/terms' element={<TOC />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/resetpassword/:resetToken' element={<ResetPassword />} />
          <Route path='*' element={<NotFound />} />
          {/* Client Route */}
          {/* Employee Route */}
          {/* Admin Route */}
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
