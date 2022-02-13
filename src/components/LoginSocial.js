import React from 'react'
import { Button } from 'react-bootstrap'
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import auth from '../firebase'

const LoginSocial = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  }

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider()
    signInWithPopup(auth, provider)
  }

  return (
    <div className='d-grid gap-2 mt-5'>
      <p className='text-center'>or Login With</p>
      <Button variant='outline-primary' size='lg' onClick={signInWithFacebook}>
        <i className='uil uil-facebook'></i> Login with Facebook
      </Button>
      <Button variant='outline-danger' size='lg' onClick={signInWithGoogle}>
        <i className='uil uil-google'></i> Login with Google
      </Button>
      <Button variant='outline-dark' size='lg'>
        <i className='uil uil-apple'></i> Login with Apple
      </Button>
    </div>
  )
}

export default LoginSocial
