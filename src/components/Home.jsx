import React from 'react'
import profile from '../images/profile.svg'
import elipse from '../images/elipse.svg'
import elipsebottom from '../images/elipsebottom.svg'
import SmallButton from './SmallButton'
import Docspot from './Docspot'
import Appointment from './Appointment'
import Menu from './Menu'

const Home = () => {
  return (
    <>
      <section className='home'>
        <a href='/profile'><img className='home__profile' src={profile} alt='' /></a>
        <a href='/notifications'><i className='home__notification fa-regular fa-solid fa-bell' /></a>
        <div className='home__overlay' />
        <img className='home__elipsebottom' src={elipsebottom} alt='' />
        <img className='home__elipse' src={elipse} alt='' />
        <article className='home__welcome'>
          <p className='home__paragraph'>Welcome Back!</p>
          <h3 className='home__name'>Zhafira Azalea</h3>
          <p className='home__treatment'>Need instant treatment?</p>
          <SmallButton text='Urgent Care' url='/help' />
        </article>

        <Docspot />
        <Appointment date='Wed Jun 20 . 8:00 - 8:30' />

      </section>

      <footer className='appointment__footer'>
        <Menu selected='home' />
      </footer>
    </>
  )
}

export default Home
