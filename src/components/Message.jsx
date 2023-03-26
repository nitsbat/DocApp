import React from 'react'
import InputForm from './InputForm'
import Menu from './Menu'
import MessageFrom from './MessageFrom'

const Message = () => {
  return (
    <>
      <section className='message'>
        <header className='message__header'>
          <h3 className='message__title'>Message</h3>
          <article className='message__icons'>
            <a href='/booking'><i className='fa-solid fa-plus' /></a>
            <a href='/notifications'><i className='fa-regular fa-bell' /></a>
          </article>
        </header>
        <article className='message__form'>
          <InputForm type='text' placeholder='Search message' name='search' />
          <i className='fa-solid fa-filter' />
        </article>

        <section className='message__messages'>
          <MessageFrom message='Hello Doc!' time='11:20' notRead />
          <MessageFrom message='My progress is getting better. Thank yo...' time='11:20' />
          <MessageFrom message='When I can get notification about my pa...' time='11:20' />
          <MessageFrom message='Just take a rest and don’t get too tired.' time='11:20' />
        </section>
      </section>
      <footer className='appointment__footer'>
        <Menu selected='message' />
      </footer>
    </>
  )
}

export default Message
