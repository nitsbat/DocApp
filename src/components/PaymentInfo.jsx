import React from 'react'

const PaymentInfo = () => {
  return (
    <>
      <section className='paymentinfo'>
        <h3 className='paymentinfo__title'>Payment Info</h3>
        <section className='paymentinfo__container'>
          <article className='paymentinfo__article'>
            <span className='paymentinfo__subtitle'>Total Price</span>
            <span className='paymentinfo__price'>$75</span>
          </article>
          <article className='paymentinfo__article'>
            <span className='paymentinfo__subtitle'>Total Price</span>
            <span className='paymentinfo__price'>$0</span>
          </article>
          <article className='paymentinfo__article'>
            <span className='paymentinfo__total'>Total Price</span>
            <span className='paymentinfo__totalprice'>$75</span>
          </article>
        </section>
      </section>
    </>
  )
}

export default PaymentInfo
