import React from 'react'
import Verification from './Verification'

const VerifyNumber = () => {
  return (
    <>
      <Verification
        title='Verify Code'
        paragraph='Please enter the code we just sent to phone number (+1) 234 567 XXX'
        actionButton='/verified'
        code
      />
    </>
  )
}

export default VerifyNumber
