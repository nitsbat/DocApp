import React from 'react'

const InputForm = ({ type, placeholder, name }) => {
  return (
    <>
      <article className='form__inputcon'>
        <input className='form__input' placeholder={placeholder} type={type} />
        <i className={`form__icon fa-regular fa-envelope ${name === 'username' && 'fa-user'} ${name === 'search' && 'fa-solid fa-magnifying-glass'} ${type === 'email' && 'fa-envelope'} ${type === 'password' && 'fa-solid fa-lock'} ${type === 'phone' && 'fa-solid fa-phone'}`} />
      </article>

      {type === 'password' && (
        <>
          <article className='form__messages'>
            <span className='form__message'>
              <i className='fa-solid fa-x' />
              <span>Minimum 8 characters</span>
            </span>
            <span className='form__message'>
              <i className='fa-solid fa-check' />
              <span>Atleast 1 number (1-9)</span>
            </span>
            <span className='form__message'>
              <i className='fa-solid fa-check' />
              <span>Atleast lowercase or uppercase letters</span>
            </span>
          </article>
        </>
      )}
    </>
  )
}

export default InputForm
