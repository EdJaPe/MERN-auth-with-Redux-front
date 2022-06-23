import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { register, reset } from '../../features/auth/authSlice';
import Spinner from '../../components/spinner';

const formatContactNumber = (Num) => {
  if(!Num) return Num;

  const telPhoneNum = Num.replace(/[^\d]/g, "");
  const phoneNumberLength = telPhoneNum.length;
  if (phoneNumberLength < 4) return telPhoneNum;
  if (phoneNumberLength < 7) {
    return `(${telPhoneNum.slice(0, 3)}) ${telPhoneNum.slice(3)}`;
  }
  return `(${telPhoneNum.slice(0, 3)}) ${telPhoneNum.slice(
    3,
    6
  )}-${telPhoneNum.slice(6, 10)}`;
}

const Register = (props) => {

  const [ formData, setFormData ] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact: '',
  });

  const { username, email, password, confirmPassword, contact } = formData

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    if(isSuccess || user) {
      sessionStorage.setItem('userId', user.user.userId)
      sessionStorage.setItem('role', user.user.role)
      window.location.reload(false)
      navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

  // handlers
  
  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  
  const phoneNumberHandler = (e) => {
    const formattedPhoneNumber = formatContactNumber(e.target.value);
    setFormData((prevState) => ({
      ...prevState,
      ['contact']: formattedPhoneNumber,
    }))
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    if(password !== confirmPassword) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        username,
        email,
        password,
        contact
      }

      dispatch(register(userData))
    }
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      { isLoading ? <Spinner /> : null}
      <div className="max-w-md w-full space-y-8">
        <div>
          {/* TODO: Change logo image */}
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={submitHandler}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Name
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="on"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name*"
                value={username}
                onChange={changeHandler}
              />
            </div>
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address*"
                value={email}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label htmlFor="contact" className="sr-only">
                Contact
              </label>
              <input
                id="contact"
                name="contact"
                type="tel"
                autoComplete="on"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Contact Number*"
                value={contact}
                onChange={phoneNumberHandler}
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password*"
                value={password}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label htmlFor="passwordConfirm" className="sr-only">
                Password
              </label>
              <input
                id="passwordConfirm"
                name="confirmPassword"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm password*"
                value={confirmPassword}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Account
            </button>
          </div>

          <div className='flex items-center justify-center text-sm'>
            <p className='mr-4'>Already have an account?</p>
            <Link to='/login' className='text-indigo-600 hover:text-indigo-500 font-medium'>Login Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;