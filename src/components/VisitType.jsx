import React, { useContext } from 'react'
import DocInfo from './DocInfo'
import BookingContext from '../context/BookingContext'
import VisitInput from './VisitInput'

const VisitType = ({ showState, stepState }) => {
  const [show, setShow] = showState
  const [currentBooking, setCurrentBooking] = useContext(BookingContext)
  const [step, setStep] = stepState

  const handleClose = () => {
    setShow(false)
  }

  const handleStep = () => {
    setStep(step + 1)
  }
  return (
    <>
      <section className='visittype'>
        <div className='visittype__overlay' />
        <article className='visittype__card'>
          <h3 className='visittype__title'>Choose Type of Visit</h3>
          <span className='visittype__cancel' onClick={handleClose}>Cancel</span>

          <article className='visittype__profile'>
            <DocInfo name={currentBooking.title} text={currentBooking.profesion} />
          </article>
          <article className='visittype__inputs'>
            <VisitInput name='visittype' title='In Person' />
            <VisitInput name='visittype' title='Video Call' />
            <VisitInput name='visittype' title='Phone' />
            <button onClick={handleStep} className='bigbutton no-mg'>Continue</button>
          </article>
        </article>
      </section>
    </>
  )
}

export default VisitType
