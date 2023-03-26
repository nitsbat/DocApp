import React from 'react'
import profileicon from '../images/profileicon.svg'

const ProfileCard = ({ title, paragraph }) => {
  return (
    <>
      <section className='profilecard'>
        <section className='profilecard__container'>
          <img src={profileicon} alt='' />
          <article className='profilecard__details'>
            <h3 className='profilecard__title'>{title}</h3>
            <p className='profilecard__paragraph'>{paragraph}</p>
          </article>
        </section>
        <i className='fa-solid fa-chevron-right' />
      </section>
    </>
  )
}

export default ProfileCard
