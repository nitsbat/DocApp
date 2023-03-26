import React from 'react'
import sun from '../images/sun.svg'

const SmallButton = ({ text, url, white }) => {
  return (
    <>
      <a style={white === true ? { background: '#fff', color: '#257CFF' } : null} className='smallbutton' href={url}>
        <img src={sun} alt='' />
        {text}
      </a>
    </>
  )
}

export default SmallButton
