import React from 'react'
import Verification from './Verification'

const Resend = () => {
  return (
    <>
      <Verification
        title='Verification'
        paragraph='Enter your phone number, we will send a authentication code'
        phone
      />
    </>
  )
}

export default Resend
