import React from 'react'
import profileicon from '../images/profileicon.svg'
import { useNavigate } from 'react-router-dom'

const ProfileCard = ({ title, paragraph }) => {
  const navigate = useNavigate()
  const onClickHandle = () => {
    switch (title) {
      case 'Account Information':
        navigate('/account-info')
        break
      case 'Insurance Detail':
        navigate('/insurance-detail')
        break
      case 'Medical Records':
        navigate('/medical-records')
        break
      case 'Clinic Info':
        navigate('/clinic-info')
        break
      case 'Settings':
        navigate('/settings')
        break
      default:
        navigate('/home')
        break
    }
  }

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
        <button onClick={onClickHandle} style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}><i className='fa-solid fa-chevron-right' /></button>
      </section>
    </>
  )
}

export default ProfileCard
