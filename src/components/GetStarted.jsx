import React from 'react'
import logo from '../images/logo.svg'
import coronavirus from '../images/coronavirus.webp'
import Account from './Account'
import BigButton from './BigButton'

const GetStarted = () => {
  return (
    <>
      <section className='getstarted'>
        <img className='getstarted__logo' src={logo} alt='' />
        <img className='getstarted__coronavirus' src={coronavirus} alt='' />
        <article className='getstarted__details'>
          <h2 className='getstarted__title'>Get well soon, with DocSpot by your side</h2>
          <article className='getstarted__button'>
            <BigButton url='/signup' text='Get Started' />
          </article>
          <Account url='/signin' text='Login' />
        </article>
      </section>
    </>
  )
}

export default GetStarted
