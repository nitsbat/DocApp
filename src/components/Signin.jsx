import React from 'react'
import Form from './Form'

const Signin = () => {
  const submitButton = {
    submitButtonLabel: 'Sign In',
    footerDesc: "Don't have an account ?",
    footerUrl: '/signup',
    footerUrlText: 'Sign Up'
  }
  return (
    <>
      <Form
        title='Welcome Back!'
        paragraph='Sign in to your account'
        username={false}
        email
        password
        terms={false}
        forgotPassword
        actionButton='/home'
        submitButton={submitButton}
      />
    </>
  )
}

export default Signin
