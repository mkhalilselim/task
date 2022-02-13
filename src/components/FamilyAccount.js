import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from '../firebase'

const FamilyAccount = () => {
  const handleRegister = async (e) => {
    e.preventDefault()
    const { email, password } = e.target.elements
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password) //email.value
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <h6>Your Info</h6>
      <Form onSubmit={handleRegister}>
        <Form.Group className='mb-3' controlId='famFirstName'>
          <Form.Control type='firstName' placeholder='First Name' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='famLastName'>
          <Form.Control type='lastName' placeholder='Last Name' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='famEmail'>
          <Form.Control type='email' placeholder='Email Address' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='famPhoneNumber'>
          <Form.Control type='phone' placeholder='Phone Number' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='famPassword'>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='famPassword'>
          <Form.Control type='password' placeholder='Re-enter Password' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='famCheckbox'>
          <Form.Check type='checkbox' label='Save password' />
        </Form.Group>
        <div className='d-grid gap-2'>
          <Button variant='warning' type='submit' size='lg'>
            Create account
          </Button>
        </div>

        <div className='d-grid gap-2'>
          <Button variant='light' type='submit' size='lg'>
            <i className='uil uil-angle-down'></i>
          </Button>
        </div>
        <Card>
          <Card.Body>
            Would you like to add your spouse to your account?*{' '}
            <Button variant='light' type='submit' size='lg'>
              <i className='uil uil-angle-right-b'></i>
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            Would you like to add your Kids to your account?*{' '}
            <Button variant='light' type='submit' size='lg'>
              <i className='uil uil-angle-right-b'></i>
            </Button>
          </Card.Body>
        </Card>
      </Form>
    </>
  )
}

export default FamilyAccount
