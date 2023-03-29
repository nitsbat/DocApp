import { useNavigate } from 'react-router-dom'

const ClinicInfo = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className='profile__back'>
        <i onClick={() => navigate('/profile')} className='fa-solid fa-chevron-left' />
        <h4 style={{marginLeft: '8rem' }}>Clinic Info</h4>
      </section>
    </>
  )
}

export default ClinicInfo
