import React, { useState } from 'react'
import tick from '../images/successfull.svg'
import calendar from '../images/calendar.svg'
import { useNavigate } from 'react-router-dom'

const BookingSuccessfull = ({ stepState, stepNumber }) => {
  const [step, setStep] = stepState
  const navigate = useNavigate()
  const handleBack = () => {
    setStep(step - 1)
  }
  const handleStep = () => {
    navigate('/home')
  }

  return (
    <>
      <section className='back' onClick={handleBack}>
        <i className='fa-solid fa-chevron-left' />
      </section>
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img style={{ height: '130px', width: '130px', marginTop: '15%' }} src={tick} alt='' />
        <section style={{ marginTop: '1rem', fontFamily: 'Urbanist' }}>
          <label style={{ fontSize: '24px', fontWeight: '500' }}>Successfully</label>
        </section>
        <section style={{ marginTop: '1rem', fontFamily: 'Urbanist' }}>
          <label style={{ fontSize: '16px', color: 'grey', fontWeight: '400' }}>Your appointment has been requested.</label>
        </section>
        <section className='success'>
          <label>If you have any problem or any issue and you need change your visit, please call <b> 021-9012301</b></label>
        </section>
      </section>
      <img style={{ marginTop: '6rem', marginLeft: '5%', width: '90%', cursor: 'pointer' }} src={calendar} alt='' />
      <button onClick={handleStep} className='bigbutton__summary'>Pay Now</button>
    </>
  )
}

export default BookingSuccessfull
