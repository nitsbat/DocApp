import React from 'react'

const BigButton = ({ text, url, white, borderWhite, icon }) => {
  const buttonStyles = {
    background: white === true ? '#fff' : '#257CFF',
    color: white === true ? '#257CFF' : '#fff',
    border: borderWhite === true ? '1px solid #257cff' : null
  }
  return (
    <>
      <a href={url} style={buttonStyles} className='button__big'>
        {icon}
        {text}
      </a>
    </>
  )
}

export default BigButton
