import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from '../firebase'

const PersonalAccount = () => {
  const handleRegister = async (e) => {
    e.preventDefault()
    console.log(e.target.elements.email.value)
    const { email, password } = e.target.elements
    try {
      const user = await createUserWithEmailAndPassword(
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
    <Form onSubmit={handleRegister}>
      <Form.Group className='mb-3' controlId='firstName'>
        <Form.Control type='firstName' placeholder='First Name' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='lastName'>
        <Form.Control type='lastName' placeholder='Last Name' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='email'>
        <Form.Control type='email' placeholder='Email Address' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='phoneNumber'>
        <Form.Control type='phone' placeholder='Phone Number' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='password'>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='password'>
        <Form.Control type='password' placeholder='Re-enter Password' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='checkbox'>
        <Form.Check type='checkbox' label='Save password' />
      </Form.Group>
      <div className='d-grid gap-2'>
        <Button variant='warning' size='lg' type='submit'>
          Create account
        </Button>
      </div>
    </Form>
  )
}

export default PersonalAccount
