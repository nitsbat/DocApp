import { useNavigate } from 'react-router-dom'
import highlightLabel from '../images/class1.svg'
import icon from '../images/company_symbol.jpg'
import editIcon from '../images/edit-button.svg'

const InsuranceDetailInfo = ({ editState }) => {
  const navigate = useNavigate()
  const [editInsurance, setEditInsurance] = editState

  const handleOnClick = () => {
    setEditInsurance(true)
  }

  return (
    <>
      <section className='profile__back'>
        <i onClick={() => navigate('/profile')} className='fa-solid fa-chevron-left' />
        <h4 className='booking__title'>Insurance Detail</h4>
        <img src={editIcon} alt='' style={{ marginLeft: '28%' }} onClick={handleOnClick} />
      </section>

      <section className='insurance-detail'>
        <section className='insurance-detail__header'>
          <label className='insurance-detail__title'>Zhafira Azalea</label>
          <img src={highlightLabel} alt='' style={{ marginLeft: '40%' }} />
        </section>
        <section className='insurance-detail__footer'>
          <img src={icon} alt='' style={{ marginTop: '10px', marginLeft: '10%', width: '30px', height: '30px' }} />
          <section className='insurance-detail__footer__label'>
            <label className='insurance-detail__name'>BPJS Kesehatan</label>
            <label className='insurance-detail__number'>12039024329030</label>
          </section>
        </section>
      </section>
    </>
  )
}

export default InsuranceDetailInfo
