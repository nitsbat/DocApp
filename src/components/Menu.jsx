const Menu = (selected) => {
  return (
    <>
      <li className='menu__item'>
        <a className='menu__anchor' href='/home'>
          <i style={selected === 'home' ? { color: '#257CFF' } : null} className='fa-solid fa-house' />
        </a>
      </li>

      <li className='menu__item'>
        <a className='menu__anchor' href='/schedule'>
          <i style={selected === 'schedule' ? { color: '#257CFF' } : null} className='fa-solid fa-book' />
        </a>
      </li>

      <li className='menu__item'>
        <a className='menu__anchor' href='/booking'>
          <i style={selected === 'booking' ? { color: '#257CFF' } : null} className='menu__plus fa-solid fa-plus' />
        </a>
      </li>

      <li className='menu__item'>
        <a className='menu__anchor' href='/message'>
          <i style={selected === 'message' ? { color: '#257CFF' } : null} className='fa-regular fa-message' />
        </a>
      </li>

      <li className='menu__item'>
        <a className='menu__anchor' href='/profile'>
          <i style={selected === 'profile' ? { color: '#257CFF' } : null} className='fa-solid fa-user' />
        </a>
      </li>
    </>
  )
}

export default Menu
