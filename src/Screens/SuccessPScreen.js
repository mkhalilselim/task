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
        Congratulations your password has been changed
      </p>

      <div className='d-grid gap-2'>
        <Button variant='warning' type='submit' size='lg'>
          Login
        </Button>
      </div>
    </FormContainer>
  )
}

export default SuccessEScreen
