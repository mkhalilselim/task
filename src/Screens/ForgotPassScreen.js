import React from 'react'
import { Form, Button } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const ForgotPassScreen = () => {
  return (
    <FormContainer>
      <h3 className='text-center mt-5 mb-3'>Forgot Password</h3>
      <p className='text-center mb-5'>Enter your registered email below</p>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control type='email' placeholder='Your Email' />
        </Form.Group>

        <div className='d-grid gap-2'>
          <a href='/successe' className='btn btn-warning' role='button'>
            submit
          </a>
        </div>
      </Form>
      <p className='text-center mt-5'>
        Remember the password? <Link to='/register'>Sign In</Link>
      </p>
    </FormContainer>
  )
}

export default ForgotPassScreen
