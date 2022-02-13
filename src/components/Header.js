import React from 'react'
import FormContainer from './FormContainer'

const Header = () => {
  return (
    <FormContainer>
      <div className='d-flex justify-content-end mb-3'>
        <img src='/call.png' alt='call us' />
        <img src='/whatsapp.png' alt='whatsapp' />
      </div>
      <div className='d-flex justify-content-center'>
        <img src='/logo.png' alt='logo' />
      </div>
    </FormContainer>
  )
}

export default Header
