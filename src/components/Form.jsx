import React from 'react'
import Account from './Account'
import BigButton from './BigButton'
import googleIcon from '../images/google.svg'
import InputForm from './InputForm'

const Form = ({ title, paragraph, email, password, username, terms, forgotPassword, actionButton, submitButton }) => {
  return (
    <>
      <section className='registration'>
        <h3 className='registration__title'>{title}</h3>
        <span className='registration__paragraph'>{paragraph}</span>
        <a className='registration__button' href='/'>
          <img className='registration__googleicon' src={googleIcon} alt='' />
          <span>Sign in with Google</span>
        </a>
        <div className='registration__or'>OR</div>

        <form className='form' action=''>
          {username && <InputForm type='text' placeholder='Type your username' name='username' />}
          {email && <InputForm type='email' placeholder='Type your email' />}
          {password && <InputForm type='password' placeholder='Type your password' />}
          {forgotPassword && <a href='/recovery' className='form__forgot'>Forgot Password</a>}
          <div className='form__button'>
            <article className='mg-top10'>
              <BigButton text={submitButton.submitButtonLabel} url={actionButton} />
            </article>

          </div>
          {
            terms &&
              <label htmlFor='terms' className='form__terms'>
                <input type='checkbox' id='terms' name='terms' />
                <div>
                  I agree to the company <a href='/terms'>Terms of Service</a> and <a href='/privacy'>Privacy Policy</a>
                </div>
              </label>
          }
          <Account desc={submitButton.footerDesc} text={submitButton.footerUrlText} url={submitButton.footerUrl} />
        </form>
      </section>
    </>
  )
}

export default Form
