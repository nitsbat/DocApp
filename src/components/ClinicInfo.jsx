import { useNavigate } from 'react-router-dom'
import name from '../images/insurance-name.svg'
import phone from '../images/insurance-phone.svg'
import mail from '../images/insurance-mail.svg'
import doc from '../images/doc.png'

const ClinicInfo = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className='profile__back'>
        <i onClick={() => navigate('/profile')} className='fa-solid fa-chevron-left' />
        <h4 style={{ marginLeft: '8rem' }}>Clinic Info</h4>
      </section>
      <section className='clinic__tiles'>
        <section className='clinical__info'>
          <img src={doc} alt='' />
        </section>
        <section style={{ display: 'flex', flexDirection: 'column', marginTop: '5rem' }}>
          <section className='clinic__info_name'>
            <img src={name} alt='' />
            <section className='clinic__info_name_labels'>
              <label className='clinic__label_upper'>Clinical Name</label>
              <label className='clinic__label_lower'> International Care Clinic</label>
            </section>
          </section>
          <hr className='hr__summary' />
          <section className='clinic__info_name'>
            <img src={phone} alt='' />
            <section className='clinic__info_name_labels'>
              <label className='clinic__label_upper'>Contact Number</label>
              <label className='clinic__label_lower'> 021 01293201</label>
            </section>
          </section>
          <hr className='hr__summary' />
          <section className='clinic__info_name'>
            <img src={mail} alt='' />
            <section className='clinic__info_name_labels'>
              <label className='clinic__label_upper'>Email</label>
              <label className='clinic__label_lower'>helloecare@gmail.com</label>
            </section>
          </section>
          <hr className='hr__summary' />
        </section>
      </section>
    </>
  )
}

export default ClinicInfo
