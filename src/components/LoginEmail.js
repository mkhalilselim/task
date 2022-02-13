import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../firebase'

const LoginEmail = () => {
  const handleLogin = async (e) => {
    e.preventDefault()
    const { email, password } = e.target.elements
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      )
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group className='mb-3' controlId='email'>
        <Form.Control type='email' placeholder='Your Email' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='password'>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>

      <div className='d-grid gap-2'>
        <Button variant='warning' type='submit' size='lg'>
          Login
        </Button>
      </div>
    </Form>
  )
}

export default LoginEmail
