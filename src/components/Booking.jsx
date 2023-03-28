import React, { useState } from 'react'
import BookingContext from '../context/BookingContext'
import BookingStepFive from './BookingStepFive'
import BookingStepFour from './BookingStepFour'
import BookingStepOne from './BookingStepOne'
import BookingStepThree from './BookingStepThree'
import BookingStepTwo from './BookingStepTwo'
import SummaryStepSix from './SummaryStepSix'
import BookingSuccessfull from './BookingSuccessfull'

const Booking = () => {
  const [step, setStep] = useState(0)

  const [currentBooking, setCurrentBooking] = useState({
    title: '',
    icon: '',
    profesion: ''
  })

  return (
    <>
      <BookingContext.Provider value={[currentBooking, setCurrentBooking]}>
        {step === 0 && <BookingStepOne stepState={[step, setStep]} stepNumber='1/5' />}
        {step === 1 && <BookingStepTwo stepState={[step, setStep]} stepNumber='2/5' />}
        {step === 2 && <BookingStepThree stepState={[step, setStep]} stepNumber='3/5' />}
        {step === 3 && <BookingStepFour stepState={[step, setStep]} stepNumber='4/5' />}
        {step === 4 && <BookingStepFive stepState={[step, setStep]} stepNumber='5/5' />}
        {step === 5 && <SummaryStepSix stepState={[step, setStep]} />}
        {step === 6 && <BookingSuccessfull stepState={[step, setStep]} />}
      </BookingContext.Provider>
    </>
  )
}

export default Booking
