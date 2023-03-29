import { useNavigate } from 'react-router-dom'
import date from '../images/date-picker.svg'
import flag from '../images/flag.svg'
import mail from '../images/mail.svg'

const EditInsuranceDetail = ({ editState }) => {
  const [editAccount, setEditAccount] = editState
  const navigate = useNavigate()
  return (
    <>
      <section className='profile__back'>
        <i onClick={() => setEditAccount(false)} className='fa-solid fa-chevron-left' />
        <h4 style={{ marginLeft: '8rem' }}>Edit Insurance</h4>
      </section>

      <section className='edit'>
        {/* Editable fields inside Personal */}
        <section className='edit__row'>

          <section className='edit__row_col_first'>
            <label className='edit__label'>
              Insurance Company Name
            </label>
            <input className='edit_input' type='text' value='BPJS Kesehatan' />
          </section>
          <section className='edit__row_col_first'>
            <label className='edit__label'>
              Insurance ID
            </label>
            <input className='edit_input' type='text' value='12039024329030' />
          </section>
          <section className='edit__row_col_first'>
            <label className='edit__label'>
              Your Name
            </label>
            <input className='edit_input' type='text' value='Zhafira Azalea' />
          </section>
          <section className='edit__row_col_first'>
            <label className='edit__label'>
              Date Of Birth
            </label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <input className='edit_input' type='text' value='Feb 12, 1994' />
              <img src={date} style={{ cursor: 'pointer', width: '20px', height: '20px' }} alt='' />
            </div>
          </section>
        </section>
      </section>

      <button onClick={() => setEditAccount(false)} className='bigbutton__summary_insurance'>Save Changes</button>

    </>
  )
}

export default EditInsuranceDetail
