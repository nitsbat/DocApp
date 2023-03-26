import React from 'react'
import medicines from '../images/medicines.svg'
import consultation from '../images/consultation.svg'
import ambulance from '../images/ambulance.svg'

const Docspot = () => {
  return (
    <>
      <section className='docspot'>
        <h3 className='docspot__title'>DocSpot Services</h3>
        <article className='docspot__container'>
          <article className='docspot__card'>
            <img src={consultation} alt='' />
            <span>Consultation</span>
          </article>
          <article className='docspot__card'>
            <img src={medicines} alt='' />
            <span>Medicines</span>
          </article>
          <article className='docspot__card'>
            <img src={ambulance} alt='' />
            <span>Ambulance</span>
          </article>
        </article>
      </section>
    </>
  )
}

export default Docspot
