import React from 'react'

const Back = () => {
  const handleClick = () => {
    window.history.back()
  }

  return (
    <>
      <a href='/home' className='back'>
        <i className='fa-solid fa-chevron-left' />
      </a>
    </>
  )
}

export default Back
