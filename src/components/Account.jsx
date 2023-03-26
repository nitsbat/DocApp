import React from 'react'
import { Link } from 'react-router-dom'

const Account = ({ desc, url, text }) => {
  return (
    <>
      <span className='getstarted__account'>{desc} <a href={url}>{text}</a></span>
    </>
  )
}

export default Account
