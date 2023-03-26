import React, { useState } from 'react'
import Time from './Time'
import Day from './Day'

const BookingStepThree = ({ stepState, stepNumber }) => {
  const [step, setStep] = stepState
  const [show, setShow] = useState(false)
  const handleBack = () => {
    setStep(step - 1)
  }
  const handleStep = () => {
    setStep(step + 1)
  }

  return (
    <>
      <section className='back' onClick={handleBack}>
        <i className='fa-solid fa-chevron-left' />
      </section>
      <section className='booking'>
        <h3 className='booking__title'>Booking Appointment</h3>
        <span className='booking__step'>Step {stepNumber}</span>
      </section>
      <section className='bookingstepthree'>
        <h3 className='booking__subtitle'>Select Schedule</h3>
        <section className='day__schedules'>
          <Day day='M' date='7' />
          <Day day='T' date='8' disabled />
          <Day day='W' date='9' />
          <Day day='T' date='10' />
          <Day day='F' date='11' />
          <Day day='S' date='12' />
        </section>
        <hr className='hr__generic' />
        <label className='dayStatus'>Morning</label>
        <section className='time__schedules'>
          <Time time='09:00 AM' />
          <Time time='10:00 AM' disabled />
          <Time time='11:00 AM' />
          <Time time='12:00 AM' />
          <Time time='13:00 AM' />
          <Time time='14:00 AM' />
        </section>
        <label className='dayStatus'>Afternoon</label>
        <section className='time__schedules'>
          <Time time='12:00 PM' />
          <Time time='12:30 PM' disabled />
          <Time time='01:00 PM' />
          <Time time='01:00 PM' />
          <Time time='02:00 PM' />
          <Time time='02:30 PM' />
          <Time time='03:00 PM' />
          <Time time='03:30 PM' />
          <Time time='04:00 PM' />
        </section>
        <button onClick={handleStep} className='bigbutton'>Continue</button>
      </section>
    </>
  )
}

export default BookingStepThree
