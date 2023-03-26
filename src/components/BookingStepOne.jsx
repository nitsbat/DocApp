import React, { useState } from 'react'
import Frame from './Frame'
import AppointmentType from './AppointmentType'
import phone from '../images/phone.svg'
import phonecall from '../images/phonecall.svg'
import person from '../images/person.svg'
import Back from './Back'

const BookingStepOne = ({ stepState, stepNumber }) => {
  const [step, setStep] = stepState

  return (
    <>
      <Back />
      <section className='booking'>
        <h3 className='booking__title'>Booking Appointment</h3>
        <span className='booking__step'>Step {stepNumber}</span>

        <article className='booking__article'>
          <h4 className='booking__subtitle'>Choose Type of Doctor</h4>

          <article className='container__flex'>
            <Frame text='General' selected />
            <Frame text='Specialist' />
          </article>

        </article>

        <article className='booking__article'>
          <h4 className='booking__subtitle'>Appointment Time</h4>

          <article className='container__flex'>
            <Frame text='Now' selected />
            <Frame text='Anytime' />
          </article>

        </article>

        <article className='booking__article'>
          <h4 className='booking__subtitle'>Appointment Type</h4>

          <article className='container__flexcolumn'>
            <AppointmentType text='In Person' active icon={person} />
            <AppointmentType text='Video Call' icon={phonecall} />
            <AppointmentType text='Phone' icon={phone} />
          </article>

        </article>

        <button className='bigbutton' onClick={() => setStep(prevStep => prevStep + 1)}>Continue</button>
      </section>
    </>
  )
}

export default BookingStepOne
