import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { LockClosedIcon } from '@heroicons/react/outline';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { login, reset } from '../../features/auth/authSlice';
import Spinner from '../../components/spinner';


const LogIn = (props) => {

  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      sessionStorage.setItem('userId', user.user.userId)
      sessionStorage.setItem('role', user.user.role)
      window.location.reload(false)
      // TODO: navigate to each roles
      navigate('/')
    }

    dispatch(reset())
  },[user, isError, isSuccess, message, navigate, dispatch])

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {isLoading ? <Spinner /> : null}
      <div className="max-w-md w-full space-y-8">
        <div>
          {/* TODO: Change logo image */}
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={submitHandler}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Sign in
            </button>
          </div>

          <div className='flex items-center justify-center text-sm'>
            <p className='mr-4'>Don't have an account?</p>
            <Link to='/register' className='text-indigo-600 hover:text-indigo-500 font-medium'>Create Account</Link>
          </div>

          <div className='flex items-center justify-center text-sm'>
            <Link to='/forgotpassword' className='font-medium text-indigo-600 hover:text-indigo-500'>Forgot your password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LogIn;