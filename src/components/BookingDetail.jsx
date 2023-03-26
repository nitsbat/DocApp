import React from 'react'
import camera from '../images/camera.svg'
import BigButton from './BigButton'
import DocInfo from './DocInfo'
import PaymentInfo from './PaymentInfo'
const BookingDetail = () => {
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
            <div className='bookingdetail__dates'>
              <h3>Date & Time</h3>
              <div>Monday, 20 Jun 2022</div>
              <span>08:00 AM</span>
            </div>
          </article>
        </section>

        <section className='bookingdetail__details'>
          <article>
            <img src={camera} alt='' />
            <div className='bookingdetail__dates'>
              <h3>Appointment Type</h3>
              <span>Video Call</span>
            </div>
          </article>
        </section>
        <h3 className='bookingdetail__subtitle'>Doctor Info</h3>
        <article className='bookingdetail__container'>
          <DocInfo name='dr. Nirmala Azalea' text='Surgery' showcamera={false} />
        </article>
        <article className='bookingdetail__containerflex'>
          <h3>Total Price</h3>
          <h3>$75</h3>
        </article>
        <article className='bookingdetail__buttoncontainer'>
          <BigButton text='Pay Now' url='/waitingtoenter' />
        </article>
      </section>
    </>
  )
}

export default BookingDetail
