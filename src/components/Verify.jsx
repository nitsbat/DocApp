import React from 'react'
import Verification from './Verification'

const Verify = () => {
  return (
    <>
      <Verification
        title='Verify Code'
        paragraph='Please enter the code we just sent to email timsmxxx@email.com'
        actionButton='/verifynumber'
        code
      />
    </>
  )
}

export default Verify
