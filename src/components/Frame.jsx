import React from 'react'

const Frame = ({ text, selected }) => {
  return (
    <>
      <button style={selected === true ? { background: '#257CFF', color: '#fff' } : null} className='frame'>{text}</button>
    </>
  )
}

export default Frame
