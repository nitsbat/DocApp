import React from 'react'
import BigButton from './BigButton'
import check from '../images/check.svg'

const Verified = ({ actionButton }) => {
  return (
    <>
      <section className='verified'>
        <img className='verified__image' src={check} alt='' />
        <h3 className='verified__title'>Account Verified</h3>
        <p className='verified__paragraph'>Your account has been verified successfully!</p>
        <article className='mg-top10'>
          <BigButton text='Get Started' url='/home' white />
        </article>
      </section>
    </>
  )
}

export default Verified
