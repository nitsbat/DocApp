import React, { useContext, useState } from 'react'
import DocIcons from './DocIcons'
import profile from '../images/profile.svg'
import greenTick from '../images/greenTick.svg'
import BookingContext from '../context/BookingContext'

const DocCard = ({ showState, title, profesion, price, phoneIcon, videoIcon, checkIcon }) => {
  const [show, setShow] = showState
  const [bookigContext, setBookingContext] = useContext(BookingContext)
  const handleDoctor = () => {
    setShow(true)
    setBookingContext({
      title,
      profesion
    })
  }
  return (
    <>
      <button onClick={handleDoctor} className='doccard'>
        <section className='doccard__data'>

          <img src={show === true ? greenTick : profile} alt='' />

          <article className='doccard__details'>

            <h3 className='doccard__title'>{title}</h3>
            <span className='doccard__profesion'>{profesion}</span>
            <footer className='doccard__footer'>
              <DocIcons phoneIcon={phoneIcon} videoIcon={videoIcon} checkIcon={checkIcon} />
            </footer>

          </article>

        </section>
        <span className='doccard__price'>{price}</span>

      </button>
    </>
  )
}

export default DocCard
