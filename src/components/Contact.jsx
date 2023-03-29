const Contact = () => {
  return (
    <>
      <section className='account__section'>
        <section className='account__row'>
          <section className='account__row_col_first'>
            <label className='account__label'>
              Phone Number
            </label>
            <label className='account__field'>
              80324832943
            </label>
          </section>

          <section className='account__row_col_second'>
            <label className='account__label'>
              Email
            </label>
            <label className='account__field'>
              zhafira@gmail.com
            </label>
          </section>

        </section>

        <section className='account__row'>
          <section className='account__row_col_first'>
            <label className='account__label'>
              City
            </label>
            <label className='account__field'>
              Bandung
            </label>
          </section>

          <section className='account__row_col_second'>
            <label className='account__label'>
              Province
            </label>
            <label className='account__field'>
              West Java
            </label>
          </section>

        </section>

        <section className='account__row'>
          <section className='account__row_col_address'>
            <label className='account__label'>
              Address
            </label>
            <label className='account__field'>
              Jl. Sekar Wangi 20 A, Bancangan
            </label>
          </section>

        </section>

      </section>
    </>
  )
}

export default Contact
