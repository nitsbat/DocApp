import React from 'react'
import Answer from './Answer'
import HelpCard from './HelpCard'
import InputForm from './InputForm'

const Help = () => {
  return (
    <>
      <section className='help'>
        <h3 className='help__title'>Help Center</h3>
        <InputForm type='text' placeholder='Find your answer here' name='search' />
        <div>
          {}
        </div>
        <article className='help__answers'>
          <Answer title='Get Started' />
          <Answer title='How to book a Doctor' />
          <Answer title='How to payment' />
          <Answer title='Close Account' />
        </article>
        <HelpCard
          title='Get more questions?'
          paragraph='You may also send a message to our customer support for further questions or information.'
          buttontitle='Get in touch with us'
          white
          icon
          borderWhite
          url='/message'
        />
        <HelpCard
          title='Chat with Us'
          paragraph='We are here to assist you better via online chat.'
          buttontitle='Chat with our Customer Service'
          icon={<i className='fa-brands fa-facebook-messenger' />}
          white={false}
          url='/videocall'
        />

      </section>
    </>
  )
}

export default Help
