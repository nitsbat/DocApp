import React from 'react'

const AppointmentType = ({ text, active, icon }) => {
  return (
    <>
      <section className='appointmenttype'>

        <article className='appointmenttype__details'>
          <img src={icon} alt='' />
          <span className='appointmenttype__text'>{text}</span>
        </article>

        <article>
          <label className='switch'>
            <input type='checkbox' name='' id='' checked={active} />
            <span className='slider' />
          </label>
        </article>

      </section>
    </>
  )
}

export default AppointmentType
