import React, { useState } from 'react'
import icon from '../images/plus-circle.svg'
import InputForm from './InputForm'
import greenTick from '../images/greenTick.svg'

const BookingStepFour = ({ stepState, stepNumber }) => {
  const diseases = ['Appendictis', 'Backache', 'Bone Fracture', 'Cold', 'Constipation', 'Cough', 'Diarrohea', 'Dizzy']
  const [step, setStep] = stepState
  const [show, setShow] = useState(false)
  const [selectedOption, setSelectedOption] = useState(false)

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
              <button onClick={() => setSelectedOption(disease)}>
                <label style={selectedOption === disease ? { fontWeight: '700', display: 'flex', flexDirection: 'row' } : null}>
                  {disease}
                  {
                    selectedOption === disease ? <img src={greenTick} alt='' style={{ marginLeft: '80%' }} /> : null
                  }
                </label>
              </button>
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
