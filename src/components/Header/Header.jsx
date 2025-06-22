import React from 'react'
import {Container, Logo, LogoutButton} from '../index'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const authStatus = useSelector((state) => state.status);
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'My Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus
    }
  ]

  return (
    <header className='w-full py-3 shadow-md bg-fuchsia-950'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to={'/'}>
              <Logo textColor='text-fuchsia-200'/>
            </Link>
          </div>

          <ul className='flex ml-auto'>
            {
              navItems.map((item, idx) => (
                item.active ? (
                  <li key={idx+'nav-menu'}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className={`inline-block px-2 py-2 mx-2 tracking-tight font-semibold text-fuchsia-200 border-b-2 border-transparent hover:border-fuchsia-200 transition-all duration-200`}
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              ))
            }

            {
              <li>{authStatus && (<LogoutButton />)}</li>
            }
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header