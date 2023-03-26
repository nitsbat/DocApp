import React from 'react'
import InputForm from './InputForm'

const Recovery = () => {
  return (
    <>
      <section className='recovery'>
        <h3 className='recovery__title'>Forgot Password</h3>
        <p className='recovery__paragraph caption'>Select verification method and we will send verification code</p>
        <InputForm type='email' placeholder='*********@mail.com' />
        <InputForm type='phone' placeholder='**** **** **** 2345' />
      </section>
    </>
  )
}

export default Recovery
