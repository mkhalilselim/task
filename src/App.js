import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Header from './components/Header'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ForgotPassScreen from './Screens/ForgotPassScreen'
import SuccessEScreen from './Screens/SuccessEScreen'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AuthProvider>
        <Routes>
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/forgotpass' element={<ForgotPassScreen />} />
          <Route path='/successe' element={<SuccessEScreen />} />
          <Route path='/' element={<LoginScreen />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
