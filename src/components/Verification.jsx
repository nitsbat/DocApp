import BigButton from './BigButton'

const Verification = ({ title, paragraph, code, phone, actionButton }) => {
  return (
    <>
      <section className='verification'>
        <h3 className='verification__title'>{title}</h3>
        <p className='verification__paragraph'>{paragraph}</p>

        {code && (
          <article className='verification__numbercon'>
            <input className='verification__number' maxLength={1} type='text' />
            <input className='verification__number' maxLength={1} type='text' />
            <input className='verification__number' maxLength={1} type='text' />
            <input className='verification__number' maxLength={1} type='text' />
          </article>

        )}
        {
            phone && (
              <>
                <article className='verification__resendcon'>
                  <input className='verification__resend' type='text' placeholder='Type your phone number' />
                  <i className='fa-solid fa-globe' />
                </article>
              </>
            )
        }
        <span className='verification__resend'>Resend Code in <span>00:48</span></span>
        <article className='mg-top10'>
          <BigButton text='Continue' url={actionButton} />
        </article>
      </section>
    </>
  )
}

export default Verification
