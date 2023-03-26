import React, { useState } from 'react'
import person from '../images/person.svg'
import InputForm from './InputForm'
import DocCard from './DocCard'
import VisitType from './VisitType'

const BookingStepTwo = ({ stepState, stepNumber }) => {
  const [step, setStep] = stepState
  const [show, setShow] = useState(false)
  const handleBack = () => {
    setStep(step - 1)
  }

  return (
    <>
      <section className='back' onClick={handleBack}>
        <i className='fa-solid fa-chevron-left' />
      </section>
      <section className='booking'>
        <h3 className='booking__title'>Booking Appointment</h3>
        <span className='booking__step'>Step {stepNumber}</span>

        <article className='booking__form'>
          <h3 className='booking__subtitle'>Choose Doctor</h3>
          <InputForm type='text' placeholder='Search doctor' name='search' />
        </article>
        <article className='booking__selection'>
          <DocCard
            title='dr. Nirmala Azalea'
            profesion='Orthopedic'
            price='$12'
            icon={person}
            videoIcon
            phoneIcon
            showState={[show, setShow]}
          />
          <DocCard
            title='dr. Agus Subandono'
            profesion='Pediatric'
            price='$12'
            icon={person}
            showState={[show, setShow]}
          />
          <DocCard
            title='dr. Bambang Sucat Pelat '
            profesion='Neurosurgeon'
            price='$12'
            icon={person}
            videoIcon
            phoneIcon
            showState={[show, setShow]}
          />
          <DocCard
            title='dr. Desi Sulawesi'
            profesion='Obstetrician'
            price='$12'
            icon={person}
            videoIcon
            phoneIcon
            showState={[show, setShow]}
          />
        </article>

      </section>
      {show && <VisitType stepState={stepState} showState={[show, setShow]} />}
    </>
  )
}

export default BookingStepTwo
