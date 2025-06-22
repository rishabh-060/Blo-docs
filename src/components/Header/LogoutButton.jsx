import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import notify from '../../utils/alert'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = React.useState(false)

  const logoutHandler = () => {
    setLoading(true)
    authService.logout()
    .then(() => {
        dispatch(logout())
        notify.success('Logout successfully')
    })
    setLoading(false)
  }
  return (
    <button onClick={logoutHandler} className='px-2 py-2 ml-4 flex items-center justify-center font-semibold text-red-600 text-base border-b-2 border-transparent hover:border-red-600 transition-all duration-200'>
        {
          loading ? (
            <div className='border border-l-4 border-r-4 border-t-0 border-b-0 animate-spin rounded-full p-3 border-gray-600'></div>
          ) : 'Logout'
        }
    </button>
  )
}

export default LogoutButton