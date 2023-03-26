import React from 'react'
import BigButton from './BigButton'

const HelpCard = ({ title, paragraph, buttontitle, white, icon, borderWhite, url }) => {
  return (
    <>
      <section className='helpcard'>
        <h3 className='helpcard__title'>{title}</h3>
        <p className='helpcard__paragraph'>{paragraph}</p>
        <article className='helpcard__button'>
          <BigButton text={buttontitle} borderWhite={borderWhite} white={white} icon={icon} url={url} />
        </article>
      </section>
    </>
  )
}

export default HelpCard
