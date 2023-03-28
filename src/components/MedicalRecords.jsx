import { useNavigate } from 'react-router-dom'
import uploadIcon from '../images/upload.svg'

const MedicalRecords = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className='profile__back'>
        <i onClick={() => navigate('/profile')} className='fa-solid fa-chevron-left' />
        <h4 className='booking__title'>Medical Record</h4>
        <img src={uploadIcon} alt='' style={{ marginLeft: '35%' }} />
      </section>
    </>
  )
}

export default MedicalRecords
