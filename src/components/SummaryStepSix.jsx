import React, { useState } from 'react'
import date from '../images/date-picker-s.svg'
import person from '../images/person.svg'
import profile from '../images/profile.svg'
import visa from '../images/visa.svg'

const SummaryStepSix = ({ stepState, stepNumber }) => {
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
        <h3 className='booking__title'>Summary</h3>
      </section>
      <section className='bookingstepfour'>
        <header className='bookingfour__header'>
          <h3>Booking Info</h3>
        </header>
      </section>

      <section className='summary'>
        <section className='summary__tile'>
          <img src={date} alt='' />
          <section className='summary__label'>
            <label>Date & Time</label>
            <label className='summary__contents'>Thursday, 11 Jun 2022</label>
            <label className='summary__contents'>08:00 A.M.</label>
          </section>
        </section>
        <hr className='hr__summary' />
        <section className='summary__tile_l'>
          <img src={person} alt='' />
          <section className='summary__label'>
            <label>Appointment Type</label>
            <label className='summary__contents'>In Person</label>
          </section>
        </section>
        <hr className='hr__summary' />
      </section>
      <section className='bookingstepfour'>
        <header className='bookingfour__header'>
          <h3>Doctor Info</h3>
        </header>
      </section>
      <section className='summary__tile_l'>
        <img src={profile} alt='' />
        <section className='summary__label'>
          <label style={{ fontWeight: '700' }}>Dr. Amer Habib</label>
          <label className='summary__contents'>OrthoPedic</label>
          <label className='summary__highlight_g'>Backache</label>
        </section>
      </section>
      <section className='bookingstepfour'>
        <header className='bookingfour__header'>
          <h3>Payment Info</h3>
        </header>
      </section>
      <section className='summary__tile_l'>
        <img src={visa} alt='' />
        <section className='summary__label'>
          <label>Visa</label>
          <label className='summary__contents'> **** **** **** 9842</label>
        </section>
      </section>
      <section className='summary__footer'>
        <label style={{ fontWeight: '700' }}>Total Price</label>
        <label className='summary__price'>$ 12</label>
      </section>
      <button onClick={handleStep} className='bigbutton__summary'>Pay Now</button>
    </>
  )
}

export default SummaryStepSix
