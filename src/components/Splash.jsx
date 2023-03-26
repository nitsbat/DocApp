import React from 'react'
import logo from '../images/logo.svg'
import background from '../images/bluebackground.svg'

const Splash = () => {
  return (
    <>
      <section className='splash'>
        <img className='splash__logo' src={logo} alt='' />
        <img className='splash__overlay' src={background} alt='' />
      </section>
    </>
  )
}

export default Splash
