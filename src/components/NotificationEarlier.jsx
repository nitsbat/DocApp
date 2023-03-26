import React from 'react'
import profile from '../images/profile.svg'

const NotificationEarlier = () => {
  return (
    <>
      <section className='notificationearlier'>
        <img src={profile} alt='' />
        <article className='notificationearlier__details'>
          <span className='notificaionearlier__date'>Jun 20 <div className='dot' /> 8:00 AM</span>
          <p className='notificationearlier__paragraph'>Lorem ipsum dolor sit amet cosectures adipsing chalengge</p>
        </article>
      </section>
    </>
  )
}

export default NotificationEarlier
