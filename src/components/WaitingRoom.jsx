import React, { useState } from 'react'
import Back from './Back'

const WaitingRoom = () => {
  const [selectedOption, setSelectedOption] = useState('Video')

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value)
  }
  return (
    <>
      <section className='waitingroom'>
        <header className='waitingroom__header'>
          <Back />
          <h3 className='waitingroom__title'>Waiting Room</h3>
          <div />
          <section />
        </header>

        <section className='schedule__time'>
          <label style={selectedOption === 'Video' ? { background: '#fff', fontWeight: '700' } : null} className='schedule__upcoming'>
            <input
              type='radio'
              name='scheduleOption'
              value='Video'
              checked={selectedOption === 'video'}
              onChange={handleOptionChange}
              hidden
            />
            Video
          </label>
          <label style={selectedOption === 'Audio' ? { background: '#fff', fontWeight: '700' } : null} className='schedule__past'>
            <input
              type='radio'
              name='scheduleOption'
              value='Audio'
              checked={selectedOption === 'audio'}
              onChange={handleOptionChange}
              hidden
            />
            Audio
          </label>

          <label style={selectedOption === 'E-Book' ? { background: '#fff', fontWeight: '700' } : null} className='schedule__past'>
            <input
              type='radio'
              name='scheduleOption'
              value='E-Book'
              checked={selectedOption === 'ebook'}
              onChange={handleOptionChange}
              hidden
            />
            E-Book
          </label>
        </section>
        <article className='waitingroom__videos'>
          <iframe className='waitingroom__video' width='853' height='480' src='https://www.youtube.com/embed/TFfBkLGFjfU' title='Medical grade blood pressure monitor unboxing -  YHE BP Doctor MED' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen />
          <iframe className='waitingroom__video' width='853' height='480' src='https://www.youtube.com/embed/TFfBkLGFjfU' title='Medical grade blood pressure monitor unboxing -  YHE BP Doctor MED' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen />
          <iframe className='waitingroom__video' width='853' height='480' src='https://www.youtube.com/embed/TFfBkLGFjfU' title='Medical grade blood pressure monitor unboxing -  YHE BP Doctor MED' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen />
        </article>
      </section>
    </>
  )
}

export default WaitingRoom
