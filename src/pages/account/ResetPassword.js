import { useState } from 'react';
import axios from 'axios';

const ResetPassword = (props) => {

  // States
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const [ error, setError ] = useState('');
  const [ success, setSuccess ] = useState('');

  // Handlers
  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json"
      }
    };

    if(password !== confirmPassword) {
      setPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setError('');
      },5000)
      return setError('Passwords does not match')
    }

    try {
      let resetToken = window.location.pathname.slice(15)
      console.log(resetToken)
      const { data } = await axios.put(`${process.env.REACT_APP_SERVER_URL}/auth/resetpassword/${resetToken}`, { password }, config)
      if(data.success) {
        setSuccess(`${data.data} Please login again`)
      }
    } catch (error) {
      console.log(error)
      setError(error.response);
      setTimeout(() => {
        setError('');
      }, 5000)
    }
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          {/* TODO: Change logo image */}
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset your password</h2>
          {!!error ? 
            <p className="mt-2 text-center text-sm font-medium text-indigo-500">
              {error}
            </p>
          :
          null
          }
          {!!success?
            <p className='mt-2 text-center text-sm font-medium text-indigo-500'>
              {success}
            </p>
          :
          null
          }
        </div>
        <form className="mt-8 space-y-6" onSubmit={resetPasswordHandler}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="passwordConfirm" className="sr-only">
                Confirm Password
              </label>
              <input
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset your password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ResetPassword;