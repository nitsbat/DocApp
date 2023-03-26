import React, { useState } from 'react'
import AppointmentDate from './AppointmentDate'
import DocInfo from './DocInfo'

const Schedule = () => {
  const [selectedOption, setSelectedOption] = useState('upcoming')

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value)
  }
  return (
    <>
      <section className='schedule'>
        <header className='schedule__header'>
          <h3 className='schedule__title'>Schedule</h3>
          <a href='/notifications'><i className='fa-regular fa-bell' />
          </a>
        </header>

        <section className='schedule__time'>
          <label style={selectedOption === 'upcoming' ? { background: '#fff', fontWeight: '700' } : null} className='schedule__upcoming'>
            <input
              type='radio'
              name='scheduleOption'
              value='upcoming'
              checked={selectedOption === 'upcoming'}
              onChange={handleOptionChange}
              hidden
            />
            Upcoming
          </label>
          <label style={selectedOption === 'past' ? { background: '#fff', fontWeight: '700' } : null} className='schedule__past'>
            <input
              type='radio'
              name='scheduleOption'
              value='past'
              checked={selectedOption === 'past'}
              onChange={handleOptionChange}
              hidden
            />
            Past
          </label>
        </section>

        <section className='schedule__appointmentdates'>
          <article className='schedule__appointmentdate'>
            <AppointmentDate />
          </article>
          <article className='schedule__appointmentdate'>
            <AppointmentDate />
          </article>
          <article className='schedule__appointmentdate'>
            {selectedOption === 'past' ? <AppointmentDate /> : null}
          </article>
        </section>

      </section>
    </>
  )
}

export default Schedule
