import React, { useState } from 'react'

const Day = ({ white, checked, day = 'M', date = '7', name = 'scheduleOption', disabled }) => {
  const [selectedOption, setSelectedOption] = useState(true)

  const handleOptionChange = (e) => {
    const selectedDay = e.target.value
    if (selectedOption === selectedDay) {
      setSelectedOption(null)
    } else {
      setSelectedOption(e.target.value)
    }
  }
  return (
    <>
      <label style={selectedOption === day ? { background: '#257CFF', fontWeight: '700', color: '#fff' } : null} className='day__option' disabled={disabled}>
        <input
          type='radio'
          name={name}
          value={day}
          checked={selectedOption === checked}
          onChange={handleOptionChange}
          hidden
        />
        <label> {day} </label>
        <label style={{ marginTop: '.5rem', fontWeight: 600 }}>{date}</label>
      </label>
    </>
  )
}

export default Day
