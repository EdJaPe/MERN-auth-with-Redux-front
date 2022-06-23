import { useState } from 'react';
import axios from 'axios';

const ForgotPassword = (props) => {

  // States
  const [ email, setEmail ] = useState('');
  const [ error, setError ] = useState('');
  const [ success, setSuccess ] = useState('');

  // Handlers
  const buttonHandler = async (e) => {
    e.preventDefault();

    const config ={
      header: {
        "Content-Type": "application/json"
      }
    };

    try {
      const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/forgotpassword`, { email }, config);
      if(data.success) {
        setSuccess(`${data.data}.  Please check your email.`)
      }
    } catch (error) {
      console.log(error)
      setError(error);
      setEmail('');
      setTimeout(() => {
        setError('');
      },5000)
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
          <p className='mt-2 text-center text-sm font-light leading-6 pt-4'>Please enter the email address you registered your account with.<br /> We will send you reset password confirmation to this email.</p>
          {!!error ? 
            <p className="mt-2 text-center text-sm font-medium text-indigo-500">
              {error}
            </p>
          :
          null
          }
          {!!success ?
            <p className='mt-2 text-center text-sm font-medium text-indigo-500'>{success}</p>
          :
          null
          }
        </div>
        <form className="mt-8 space-y-6" onSubmit={buttonHandler}>
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
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Confirmation Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ForgotPassword;