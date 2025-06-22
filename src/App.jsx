import './App.css'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { Header, Footer, Loader, Logo, Login, RTE } from './components/index'
import {login, logout} from './store/authSlice'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = React.useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .catch((error) => console.log('failed to fetching user credentials'))
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="min-h-screen flex flex-col bg-purple-200">
      {/* Header */}
      <Header />

      {/* Main Content (grows to fill space) */}
      <main className="flex-1 px-2.5">
        <Outlet />
      </main>

      {/* Footer sticks at bottom if content is short */}
      <Footer />
    </div>
  ) : <Loader text='Welcome to' highlightText='Blo-docs'/>
}

export default App
