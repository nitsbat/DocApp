import React from 'react'
import camera from '../images/camera.svg'
import DocInfo from './DocInfo'
import PaymentInfo from './PaymentInfo'

const EnterWaitingRoom = () => {
  return (
    <>
      <section className='bookingdetail'>
        <article className='container__flex space-between'>
          <h3 className='bookingdetail__title'>Booking Detail</h3>
          <button className='bookingdetail__button'>Confirmed</button>
        </article>
        <article className='bookingdetail__notification'>
          <i className='fa-solid fa-circle-exclamation' />
          <span>Tap Enter Waiting Room no earlier to 15 min</span>
        </article>

        <section className='bookingdetail__details'>
          <article>
            <i className='fa-solid fa-calendar' />
            <div>
              <h3>Date & Time</h3>
              <span>Monday, 20 Jun 2022</span>
              <span>08:00 AM</span>
            </div>
          </article>
        </section>

        <section className='bookingdetail__details'>
          <article>
            <img src={camera} alt='' />
            <div>
              <h3>Appointment Type</h3>
              <span>Video Call</span>
            </div>
          </article>
          <a className='bookingdetail__bigbutton' href='/waitingroom'>Enter Waiting Room</a>
        </section>
        <h3 className='bookingdetail__subtitle'>Doctor Info</h3>
        <article className='bookingdetail__container'>
          <DocInfo name='dr. Nirmala Azalea' text='Surgery' showcamera={false} />
        </article>
        <PaymentInfo />
      </section>
    </>
  )
}

export default EnterWaitingRoom
