import React from 'react'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import LoginEmail from '../components/LoginEmail'
import LoginSocial from '../components/LoginSocial'
import { LinkContainer } from 'react-router-bootstrap'

const LoginScreen = () => {
  return (
    <FormContainer>
      <h3 className='text-center mt-5 mb-3'>Login</h3>
      <p className='text-center mb-5'>Add your details to login</p>
      <LoginEmail />
      <Link style={{ textDecoration: 'none' }} to='/forgotpass'>
        <div className='text-center mt-5 mb-3'>Forgot your password?</div>
      </Link>
      <LoginSocial />
      <p className='text-center mt-5'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
      <p className='text-center mt-5'>
        By proceeding, you agree to our <u>Terms of Use</u> and confirm you have
        read our <u>Privacy and Cookie Statement</u>
      </p>
    </FormContainer>
  )
}

export default LoginScreen
