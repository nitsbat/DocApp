import React from 'react'
import DocInfo from './DocInfo'

const Appointment = ({ date }) => {
  return (
    <>
      <section className='appointment'>
        <header className='appointment__header'>
          <h3 className='appointment__title'>My Appointment</h3>
          <a href='/booking'>See All</a>
        </header>
        <span className='appointment__date'><i className='fa-regular fa-clock' /> {date}</span>

        <article className='appointment__pending'>

          <DocInfo name='dr. Nirmala Azalea' text='Orthopedic' camera />

          <span className='appointment__payment'>Pending Payment</span>
          <a className='appointment__link' href='/booking-detail'><i className='fa-solid fa-chevron-right' /></a>
        </article>
      </section>
    </>
  )
}

export default Appointment
