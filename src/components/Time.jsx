import React, { useState } from 'react'

const Time = ({ white, checked, time = '09:00 AM', name = 'scheduleOption', disabled }) => {
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
      <label style={selectedOption === time ? { background: '#257CFF', fontWeight: '700', color: '#fff' } : null} className='time__option' disabled={disabled}>
        <input
          type='radio'
          name={name}
          value={time}
          checked={selectedOption === checked}
          onChange={handleOptionChange}
          hidden
        />
        {time}
      </label>
    </>
  )
}

export default Time
