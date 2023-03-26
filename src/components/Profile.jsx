import React from 'react'
import Menu from './Menu'
import DocInfo from './DocInfo'
import ProfileCard from './ProfileCard'

const Profile = () => {
  return (
    <>
      <section className='profile'>
        <header className='profile__header'>
          <h3 className='profile__title'>Profile</h3>
          <a href='/notifications'><i className='fa-regular fa-bell' /></a>
        </header>
        <article className='profile__info'>
          <DocInfo name='dr. Nirmala Azalea' text='Orthopedic' white camera={false} />
        </article>
        <h3 className='profile__generaltitle'>General</h3>
        <article className='profile__general'>
          <ProfileCard title='Account Information' paragraph='Change your account information' icon='' />
          <ProfileCard title='Insurance Detail' paragraph='Add your insurance info' icon='' />
          <ProfileCard title='Medical Records' paragraph='History about you medical records' icon='' />
          <ProfileCard title='Clinic Info' paragraph='Information about our Clinic' icon='' />
          <ProfileCard title='Settings' paragraph='Manage & Settings' icon='' />
        </article>
      </section>
      <footer className='appointment__footer'>
        <Menu selected='home' />
      </footer>
    </>
  )
}

export default Profile
