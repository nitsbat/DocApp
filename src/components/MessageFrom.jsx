import React, { useEffect, useState } from 'react'
import DocInfo from './DocInfo'

const MessageFrom = ({ message, time, notRead }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(notRead)
  }, []) /* eslint-disable-line */
  return (
    <>
      <section className='messagefrom'>
        <DocInfo name='dr. Nirmala Azalea' text='Orthopedic' showcamera={false} />
        <article>
          <span className='messagefrom__message'>{message}</span>
        </article>
        <span className='messagefrom__time'>{time}</span>
        {isOpen && <div className='messagefrom__notification'>2</div>}
      </section>

    </>
  )
}

export default MessageFrom
