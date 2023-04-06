import React, { useEffect, useState } from 'react'
import logo from '../images/logo.svg'
import background from '../images/blue-degradation.svg'
import mockup from '../images/mockup.webp'
import circle from '../images/blue-deco.svg'
import Splash from './Splash'

const Onboard = () => {
  const [isOnboarded, setIsOnboarded] = useState(false)

  useEffect(() => {
    alert('This is a mobile app and should be tested in Responsive Design Mode from your Developer tools (right click -> Inspect)')
    setTimeout(() => {
      setIsOnboarded(true)
    }, 1000)
  }, [isOnboarded])

  return (
    <>
      {isOnboarded
        ? (
          <section className='onboard'>
            <img className='onboard__logo' src={logo} alt='' />
            <img className='onboard__mockup' src={mockup} alt='' />
            <img className='onboard__overlay' src={background} alt='' />
            <article className='onboard__details'>
              <img className='onboard__circle' src={circle} alt='' />
              <h2 className='onboard__title'>Your health, our priority</h2>
              <p className='onboard__paragraph'>Book online doctor appointments instantly with DocSpot</p>
            </article>
            <a href='/getstarted' className='onboard__next'><i className='fa-solid fa-arrow-right' /></a>
          </section>
        )
        : (
          <Splash />
        )}
    </>
  )
}

export default Onboard
