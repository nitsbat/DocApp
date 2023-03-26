import React from 'react'

const DocIcons = ({ phoneIcon, videoIcon, checkIcon }) => {
  return (
    <>
      <section className='docicons'>
        {phoneIcon && <i className='docicons__icon fa-solid fa-phone' />}
        {videoIcon && <i className='docicons__icon fa-solid fa-video' />}
        {checkIcon && <i className='docicons__icon fa-solid fa-check' />}
      </section>
    </>
  )
}

export default DocIcons
