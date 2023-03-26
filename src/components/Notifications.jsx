import React from 'react'
import AppointmentDate from './AppointmentDate'
import NotificationEarlier from './NotificationEarlier'

const Notifications = () => {
  return (
    <>
      <section className='notifications'>
        <header className='notifications__header'>
          <div />
          <h3 className='notifications__title'>Notifications</h3>
          <a href='/home' className='notifications__close'>Close</a>
        </header>
        <h3 className='notifications__subtitle'>Pending Approval</h3>
        <AppointmentDate />
        <h3 className='notifications__subtitle'>Earlier Notification</h3>
        <article className='notifications__earlier'>
          <NotificationEarlier />
          <NotificationEarlier />
          <NotificationEarlier />
        </article>
      </section>
    </>
  )
}

export default Notifications
