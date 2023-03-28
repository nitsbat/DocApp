import icon from '../images/company_symbol.jpg'
import date from '../images/date-picker.svg'
import front from '../images/front.svg'
import back from '../images/back.svg'

const Insurance = () => {
  return (
    <div className='insurance__header'>
      <div className='insurance__tile'>
        <label className='insurance__label'>
          Insurance Company Name
        </label>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <input className='insurance__input' />
          <img src={icon} style={{ cursor: 'pointer' }} alt='' />
        </div>
      </div>
      <div className='insurance__tile'>
        <label className='insurance__label'>
          Insurance ID
        </label>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <input className='insurance__input' />
        </div>
      </div>
      <div className='insurance__tile'>
        <label className='insurance__label'>
          Your Name
        </label>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <input className='insurance__input' />
        </div>
      </div>
      <div className='insurance__tile'>
        <label className='insurance__label'>
          Date of Birth
        </label>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <input className='insurance__input' />
          <img src={date} style={{ cursor: 'pointer' }} alt='' />
        </div>
      </div>
      <div className='insurance__tile'>
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '1rem' }}>
          <img src={front} style={{ cursor: 'pointer' }} alt='' />
          <img src={back} style={{ marginLeft: '1rem', cursor: 'pointer' }} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Insurance
