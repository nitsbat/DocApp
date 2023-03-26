import React, { useState } from 'react'

const BookingStepFive = ({ stepState, stepNumber }) => {
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
      <button onClick={handleStep} className='bigbutton no-mg'>Continue</button>

    </>
  )
}

export default BookingStepFive
