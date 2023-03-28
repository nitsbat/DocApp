import { useNavigate } from 'react-router-dom'

const Settings = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className='profile__back'>
        <i onClick={() => navigate('/profile')} className='fa-solid fa-chevron-left' />
        <h4 className='booking__title'>Settings</h4>
      </section>
    </>
  )
}

export default Settings
