import React from 'react'
import coronavirus from '../images/coronavirus.webp'

const Video = () => {
  return (
    <>
      <section className='videocall'>
        <img src={coronavirus} alt='' />

        <article className='videocall__buttons'>
          <button className='videocall__audio'><i class='fa-solid fa-microphone' /></button>
          <button className='videocall__video'><i class='fa-sharp fa-solid fa-video' /></button>
        </article>
      </section>
    </>
  )
}

export default Video
