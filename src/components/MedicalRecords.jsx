import { useNavigate } from 'react-router-dom'
import uploadIcon from '../images/upload.svg'
import bullet from '../images/bullet.svg'
import report1 from '../images/report1.svg'
import report2 from '../images/report2.svg'
import report3 from '../images/report3.svg'
import report4 from '../images/report4.svg'
import line from '../images/line.svg'
import InputForm from './InputForm'

const MedicalRecords = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className='profile__back'>
        <i onClick={() => navigate('/profile')} className='fa-solid fa-chevron-left' />
        <h4 style={{ marginLeft: '29%' }}>Medical Records</h4>
        <img src={uploadIcon} alt='' style={{ marginLeft: '29%' }} />
      </section>
      <section className='bookingstepfour'>
        <InputForm type='text' placeholder='Search file' name='search' />
      </section>
      <section className='med_main'>
        <img src={bullet} alt='' style={{ marginBottom: '9rem' }} />
        <section className='med_main_col'>
          <label className='med_main_date'>Jun 20, 2022</label>
          <section className='med_main_row'>
            <img src={report1} alt='' className='med_box_1' />
            <img src={report4} alt='' className='med_box_2' />
          </section>
        </section>
      </section>

      <section className='med_main'>
        <img src={bullet} alt='' style={{ marginBottom: '9rem' }} />
        <section className='med_main_col'>
          <label className='med_main_date'>Jun 12, 2022</label>
          <section className='med_main_row'>
            <img src={report2} alt='' className='med_box_1' />
          </section>
        </section>
      </section>
      <section className='med_main'>
        <img src={bullet} alt='' style={{ marginBottom: '9rem' }} />
        <section className='med_main_col'>
          <label className='med_main_date'>Jun 1, 2022</label>
          <section className='med_main_row'>
            <img src={report3} alt='' className='med_box_1' />
          </section>
        </section>
      </section>
      <img src={line} alt='' style={{ marginBottom: '9rem' }} />
    </>
  )
}

export default MedicalRecords
