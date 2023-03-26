import React from 'react'
import profile from '../images/profile.svg'
import camera from '../images/camera.svg'

const DocInfo = ({ name, text, white, showcamera }) => {
  return (
    <>
      <article className='container__flex no-mg'>
        <div className='appointment__imagecon'>
          <img className='appointment__image' src={profile} alt='' />
          <a style={showcamera ? { display: 'none' } : null} href='/videocall'><img className='appointment__icon' src={camera} alt='' /></a>
        </div>
        <div>
          <h3 style={white ? { color: '#fff' } : null} className='appointment__name'>{name}</h3>
          <span style={white ? { color: '#fff' } : null} className='appointment__text'>{text}</span>
        </div>
      </article>
    </>
  )
}

export default DocInfo
