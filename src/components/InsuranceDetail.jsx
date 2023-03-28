import { useNavigate } from 'react-router-dom'
import editIcon from '../images/edit-button.svg'

const InsuranceDetail = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className='profile__back'>
        <i onClick={() => navigate('/profile')} className='fa-solid fa-chevron-left' />
        <h4 className='booking__title'>Insurance Detail</h4>
        <img src={editIcon} alt='' style={{ marginLeft: '28%' }} />
      </section>
    </>
  )
}

export default InsuranceDetail