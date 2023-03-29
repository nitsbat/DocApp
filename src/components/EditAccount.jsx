import { useNavigate } from 'react-router-dom'
import date from '../images/date-picker.svg'
import flag from '../images/flag.svg'
import mail from '../images/mail.svg'

const EditAccount = ({ editState }) => {
  const [editAccount, setEditAccount] = editState
  const navigate = useNavigate()
  return (
    <>
      <section className='profile__back'>
        <i onClick={() => setEditAccount(false)} className='fa-solid fa-chevron-left' />
        <h4 style={{ marginLeft: '8rem' }}>Edit Account</h4>
      </section>

      <section className='edit'>
        <label className='edit__label_main'>
          Personal
        </label>
        {/* Editable fields inside Personal */}
        <section className='edit__row'>
          <section className='edit__row_col_first_e'>
            <label className='edit__label'>
              Doc Spot ID
            </label>
            <label className='edit__label'>
              10923025
            </label>
          </section>

          <section className='edit__row_col_first'>
            <label className='edit__label'>
              Username
            </label>
            <input className='edit_input' type='text' value='zhafira' />
          </section>
          <section className='edit__row_col_first'>
            <label className='edit__label'>
              First Name
            </label>
            <input className='edit_input' type='text' value='Zhafira' />
          </section>
          <section className='edit__row_col_first'>
            <label className='edit__label'>
              Last Name
            </label>
            <input className='edit_input' type='text' value='Azalea' />
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
          <section className='edit__row_col_first'>
            <label className='edit__label'>
              Gender
            </label>
            <section style={{ display: 'flex' }}>
              <input className='edit_input_radio_first' type='radio' value='Azalea' />
              <label className='edit__label_radio'>
                Female
              </label>
              <input className='edit_input_radio_second' type='radio' value='Azalea' />
              <label className='edit__label_radio'>
                Male
              </label>
            </section>
          </section>
        </section>

      </section>
      {/* Contact Div Started */}
      <section className='edit'>
        <label className='edit__label_main'>
          Contact
        </label>
        {/* Editable fields inside Contact */}
        <section className='edit__row'>
          <section className='edit__col'>
            <img src={flag} style={{ cursor: 'pointer', marginRight: '10px', marginTop: '10px', width: '20px', height: '20px' }} alt='' />
            <section className='edit__row'>
              <label className='edit__label'>
                Type your phone number
              </label>
              <input className='edit_input' type='text' value='+6282332877994' />
            </section>
          </section>
          <section className='edit__col'>
            <img src={mail} style={{ cursor: 'pointer', marginRight: '10px', marginTop: '10px', width: '20px', height: '20px' }} alt='' />
            <section className='edit__row'>
              <label className='edit__label'>
                Type your email
              </label>
              <input className='edit_input' type='text' value='zhafira@gmail.com' />
            </section>
          </section>
          <section className='edit__row_col_first'>
            <label className='edit__label'>
              City
            </label>
            <input className='edit_input' type='text' value='Bandung' />
          </section>
          <section className='edit__row_col_first'>
            <label className='edit__label'>
              Province
            </label>
            <input className='edit_input' type='text' value='West Java' />
          </section>
          <section className='edit__row_col_first'>
            <label className='edit__label'>
              Address
            </label>
            <input className='edit_input' type='text' value='Jl. Sekar Wangi 20 A, Bancangan' />
          </section>
        </section>

      </section>

      <button onClick={() => setEditAccount(false)} className='bigbutton__summary'>Save Changes</button>
    </>
  )
}

export default EditAccount
