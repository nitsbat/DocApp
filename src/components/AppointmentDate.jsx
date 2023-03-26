import React from 'react'
import DocInfo from './DocInfo'

const AppointmentDate = () => {
  return (
    <>
      <section className='appointmentdate'>
        <header className='appointmentdate__header'>
          <article className='appointmentdate__details'>
            <span className='appointmentdate__title'>Appointment Date</span>
            <span className='appointmentdate__date'>
              <i className='fa-regular fa-clock' />
              Wed Jun 20 <div className='dot' /> 8:00 - 8:30 AM
            </span>
          </article>
          <i className='fa-solid fa-ellipsis-vertical appointmentdate__dots' />
        </header>
        <article className='appointmentdate__docinfocon'>
          <DocInfo name='dr. Nirmala Azalea' text='Orthopedic' />
        </article>

      </section>
    </>
  )
}

export default AppointmentDate
