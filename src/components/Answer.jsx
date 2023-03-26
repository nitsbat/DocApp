import React from 'react'

const Answer = ({ title = 'default title' }) => {
  return (
    <>
      <section className='answer'>
        <h3 className='answer__title'>{title}</h3>
        <i className='fa-solid fa-chevron-right' />
      </section>
    </>
  )
}

export default Answer
