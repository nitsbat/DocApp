import React from 'react'
import Form from './Form'

const Signup = () => {
  const submitButton = {
    submitButtonLabel: 'Sign up',
    footerDesc: 'Have an Account?',
    footerUrl: '/signin',
    footerUrlText: 'Sign In'
  }
  return (
    <>
      <Form
        title='Sign Up'
        paragraph='Create account and enjoy all services'
        username
        email
        password
        terms
        forgotPassword
        actionButton='/verify'
        submitButton={submitButton}
      />
    </>
  )
}

export default Signup
