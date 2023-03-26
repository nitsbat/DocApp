import React, { useState } from 'react'
import icon from '../images/plus-circle.svg'
import InputForm from './InputForm'

const BookingStepFour = ({ stepState, stepNumber }) => {
  const diseases = ['Appendictis', 'Backache', 'Bone Fracture', 'Cold', 'Constipation', 'Cough', 'Diarrohea', 'Dizzy']
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
      <section className='bookingstepfour'>
        <header className='bookingfour__header'>
          <h3>Select Reason</h3>
          <img src={icon} alt='' />
          <a href='/booking'>Add Reason</a>
        </header>
        <InputForm type='text' placeholder='Search reason' name='search' />
        <div className='bookingfour__tile'>
          {Object.values(diseases).map((disease) => (
            <div className='bookingfour__content' key={disease.id}>
              <label>{disease}</label>
              <hr className='hr__four' />
            </div>
          ))}
        </div>
        <button onClick={handleStep} className='bigbutton'>Continue</button>
      </section>
    </>
  )
}

export default BookingStepFour
