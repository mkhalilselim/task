import React from 'react'
import { Link } from 'react-router-dom'
import { Tabs, Tab, Form } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import PersonalAccount from '../components/PersonalAccount'
import FamilyAccount from '../components/FamilyAccount'

const RegisterScreen = () => {
  return (
    <FormContainer>
      <h3 className='text-center mt-5 mb-3'>Sign Up</h3>
      <p className='text-center mb-5'>Add your details to sign up</p>
      <Tabs
        defaultActiveKey='personal'
        id='uncontrolled-tab-example'
        className='mb-3 d-flex justify-content-center'
      >
        <Tab eventKey='personal' title='Personal Account'>
          <PersonalAccount />
        </Tab>
        <Tab eventKey='family' title='Family Account'>
          <FamilyAccount />
        </Tab>
      </Tabs>
      <p className='text-center mt-5'>
        Already have an account? <Link to='/'>Login</Link>
      </p>
      <Form.Check
        type='checkbox'
        label='Sign me up to receive exclusive offers and news on hot new restaurants on Recounts '
      />
      <Form.Check type='checkbox' label='Receive order updates by SMS' />
      <p className='text-center mt-5'>
        By proceeding, you agree to our <u>Terms of Use</u> and confirm you have
        read our <u>Privacy and Cookie Statement</u>
      </p>
    </FormContainer>
  )
}

export default RegisterScreen
