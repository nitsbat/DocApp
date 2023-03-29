import { useNavigate } from 'react-router-dom'
import ProfileCard from './ProfileCard'

const Settings = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className='profile__back'>
        <i onClick={() => navigate('/profile')} className='fa-solid fa-chevron-left' />
        <h4 style={{ marginLeft: '35%' }}>Settings</h4>
      </section>

      <section className='profile'>
        <h3 className='profile__generaltitle'>General</h3>
        <article className='profile__general'>
          <section className='profilecard'>
            <section className='profilecard__container'>
              <article className='profilecard__details'>
                <h3 className='profilecard__title'>Notifications</h3>
              </article>
            </section>
            <label class='switch'>
              <input type='checkbox' checked />
              <span class='slider round' />
            </label>
          </section>
        </article>
        <hr className='hr__setting' />
        <article className='profile__general'>
          <section className='profilecard'>
            <section className='profilecard__container'>
              <article className='profilecard__details'>
                <h3 className='profilecard__title'>Contact Us</h3>
              </article>
            </section>
            <button style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}><i className='fa-solid fa-chevron-right' /></button>
          </section>
        </article>
        <hr className='hr__setting' />
      </section>

      <section className='profile'>
        <h3 className='profile__generaltitle'>About</h3>
        <article className='profile__general'>
          <section className='profilecard'>
            <section className='profilecard__container'>
              <article className='profilecard__details'>
                <h3 className='profilecard__title'>Privacy Policy</h3>
              </article>
            </section>
            <button style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}><i className='fa-solid fa-chevron-right' /></button>
          </section>
        </article>
        <hr className='hr__setting' />
        <article className='profile__general'>
          <section className='profilecard'>
            <section className='profilecard__container'>
              <article className='profilecard__details'>
                <h3 className='profilecard__title'>About Us</h3>
              </article>
            </section>
            <button style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}><i className='fa-solid fa-chevron-right' /></button>
          </section>
        </article>
        <hr className='hr__setting' />
        <article className='profile__general'>
          <section className='profilecard'>
            <section className='profilecard__container'>
              <article className='profilecard__details'>
                <h3 className='profilecard__title'>FAQ</h3>
              </article>
            </section>
            <button style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}><i className='fa-solid fa-chevron-right' /></button>
          </section>
        </article>
        <hr className='hr__setting' />
        <article className='profile__general'>
          <section className='profilecard'>
            <section className='profilecard__container'>
              <article className='profilecard__details'>
                <h3 className='profilecard__title'>Legal</h3>
              </article>
            </section>
            <button style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}><i className='fa-solid fa-chevron-right' /></button>
          </section>
        </article>
        <hr className='hr__setting' />
      </section>
      <button className='settings_logout' onClick={() => navigate('/signin')}> Logout</button>
    </>
  )
}

export default Settings
