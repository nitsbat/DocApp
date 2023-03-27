import React, { useState } from 'react'
import icon from '../images/card.svg'
import Insurance from './Insurance'

const BookingStepFive = ({ stepState, stepNumber }) => {
  const [step, setStep] = stepState
  const [show, setShow] = useState(false)
  const [card, setCard] = useState(true)
  const [insurance, setInsurance] = useState(false)
  const handleBack = () => {
    setStep(step - 1)
  }
  const handleStep = () => {
    setStep(step + 1)
  }

  const onChangeValue = (e) => {
    console.log(e.target.value)
    if (e.target.value === 'card') {
      setCard(true)
      setInsurance(false)
    } else {
      setCard(false)
      setInsurance(true)
    }
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
          <h3>Payment Option</h3>
        </header>
        <div className='bookingfive__tile' onChange={onChangeValue}>
          <label htmlFor='terms' className='form__terms'>
            <input type='radio' id='terms' name='terms' value='card' defaultChecked />
            Credit Card/Debit Card
          </label>
          {
            card ? <img src={icon} alt='' style={{ margin: '10px' }} /> : null
          }
          <label htmlFor='terms' className='form__terms'>
            <input type='radio' id='terms' name='terms' value='insurance' />
            Insurances
          </label>
          {
            insurance ? <Insurance /> : null
          }
        </div>
        <button onClick={handleStep} className='bigbutton no-mg'>Continue</button>
      </section>
    </>
  )
}

export default BookingStepFive
