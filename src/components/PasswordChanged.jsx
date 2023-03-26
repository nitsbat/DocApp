import React from 'react'
import BigButton from './BigButton'
import check from '../images/check.svg'

const PasswordChanged = ({ actionButton }) => {
  return (
    <>
      <section className='verified'>
        <img className='verified__image' src={check} alt='' />
        <h3 className='verified__title'>Password Changed</h3>
        <p className='verified__paragraph'>Password changed successfully, you can login again with a new password.</p>
        <article className='mg-top10'>
          <BigButton text='Get Started' url='/home' white />
        </article>
      </section>
    </>
  )
}

export default PasswordChanged
