import React from 'react'

const VisitInput = ({ name, title }) => {
  return (
    <>
      <label className='visittype__radio' htmlFor={title}>
        <input id={title} type='radio' name={name} />
        <span>{title}</span>
      </label>
    </>
  )
}

export default VisitInput
