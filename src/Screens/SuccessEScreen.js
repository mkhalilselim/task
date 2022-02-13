import React from 'react'
import { Button, Figure } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const SuccessEScreen = () => {
  return (
    <FormContainer>
      <div className='text-center mb-5 mt-5'>
        <Figure>
          <Figure.Image src='/Success.png' />
          <Figure.Caption>Success</Figure.Caption>
        </Figure>
      </div>

      <p className='text-center mb-5'>
        Please check your email to create a new password
      </p>
      <p className='text-center mt-5'>Can't get email? Resubmit</p>
      <div className='d-grid gap-2'>
        <Button variant='warning' type='submit' size='lg'>
          Check your email
        </Button>
      </div>
    </FormContainer>
  )
}

export default SuccessEScreen
