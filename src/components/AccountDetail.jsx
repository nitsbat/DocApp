import { useNavigate } from 'react-router-dom'
import editIcon from '../images/edit-button.svg'
import Contact from './Contact'
import Personal from './Personal'

const AccountDetail = ({ editState }) => {
  const [editAccount, setEditAccount] = editState
  const navigate = useNavigate()

  const handleOnClick = () => {
    setEditAccount(true)
  }
  return (
    <>
      <section className='profile__back'>
        <i onClick={() => navigate('/profile')} className='fa-solid fa-chevron-left' />
        <h4 className='booking__title'>Account Information</h4>
        <img
          src={editIcon} alt='' style={{ marginLeft: '20%', cursor: 'pointer' }}
          onClick={handleOnClick}
        />
      </section>

      <section className='account'>
        <label className='account__label'>
          Personal
        </label>
        <Personal />
      </section>

      <section className='account'>
        <label className='account__label'>
          Contact
        </label>
        <Contact />
      </section>
    </>
  )
}

export default AccountDetail
