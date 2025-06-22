import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'
import notify from '../utils/alert'

const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  
  const {register, handleSubmit} = useForm()
  const [error, setError] = useState('')

  const signup = async(data) => {
    setError('')
    setLoading(true)
    try {
        const session = await authService.createAccount(data);
        if(session) {
            const userData = await authService.getCurrentUser()

            if(userData) dispatch(authLogin(userData))
            notify.success('Account created successfully')
            navigate('/')
        }
    } catch (error) {
        setError(error?.message)
    } finally {
        setLoading(false)
    }
  }
  return (
    <div className='w-full flex items-center justify-center'>
        <div className='mx-auto w-full max-w-lg bg-purple-100 rounded-xl p-10 border border-black/10'>
            <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full '>
                    <Logo />
                </span>
            </div>

            <h2 className='text-center text-2xl font-semibold leading-tight'>SignUp to be a memeber</h2>

            <form onSubmit={handleSubmit(signup)} className='mt-8'>
                <div className='space-y-5'>
                    <Input
                        label='Name: '
                        placeholder='Type your name'
                        type= 'text'
                        {...register('name', {
                            required: true,
                        })}
                    />

                    <Input
                        label='Email: '
                        placeholder='Type your email'
                        type= 'email'
                        {...register('email', {
                            required: true,
                            validate: {matchPatern : (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || 'Email address must be a valid address'}
                        })}
                    />

                    <Input
                        label='Password: '
                        type='password'
                        placeholder='Type your password'
                        {...register('password', {
                            required: true,
                        })}
                    />

                    <Button type='submit' disabled={loading} className='w-full flex justify-center items-center'>
                        {
                            loading ? (
                                <div className='border border-l-4 border-r-4 border-t-0 border-b-0 animate-spin rounded-full p-3 border-gray-600'></div>
                            ):(
                                'Sign up'
                            )
                        }
                    </Button>
                </div>
            </form>

            <p className='mt-5 text-center text-base text-black/60'>
                Already have an account?&nbsp;
                <Link
                    to={'/login'}
                    className='font-medium text-primary transition-all duration-200 hover:underline'
                >Sign In</Link>
            </p>
            {
                error && <p className='text-red-500 text-center mt-8'>{error}</p>
            }
        </div>
    </div>
  )
}

export default Signup