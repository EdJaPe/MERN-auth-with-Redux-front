import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

const PublicHeader = (props) => {
  // States

  // Handlers

  return (
    <Disclosure as='nav' className='bg-white shadow'>
      {({ open}) => (
        <>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16'>
              <div className='flex'>
                <div className='flex-shrink-0 flex items-center'>
                  <Link to='/'>
                  {/* TODO: logo with text */}
                    <img
                      className="block h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                      alt="Workflow"
                    />
                  </Link>
                </div>
                {/* Left side of the nav */}
                <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                  <Link to='/projects' className='border-indigo-500 text-gray-900 inline-flex items-center px-1 py-1 text-sm font-medium hover:text-indigo-500'>
                    Projects
                  </Link>
                  <Link to='/pricing' className='border-indigo-500 text-gray-900 inline-flex items-center px-1 py-1 text-sm font-medium hover:text-indigo-500'>
                    Pricing
                  </Link>
                  <Link to='/contact' className='border-indigo-500 text-gray-900 inline-flex items-center px-1 py-1 text-sm font-medium hover:text-indigo-500'>
                    Contact
                  </Link>
                  <Link to='/about' className='border-indigo-500 text-gray-900 inline-flex items-center px-1 py-1 text-sm font-medium hover:text-indigo-500'>
                    About
                  </Link>
                </div>
              </div>
              {/* Right side of the nav */}
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Link to='login' className='border-indigo-500 text-grey-900 inline-flex items-center px-1 py-1 text-sm font-medium hover:text-indigo-500 '>
                  Sign in
                </Link>
              </div>
              {/* Hamburger Menu hidden */}
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          {/* hidden menu pop up */}
          <Disclosure.Panel className="sm:hidden">
            {/* nav section */}
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/projects"
                className="border-transparent text-gray-500 hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/pricing"
                className="border-transparent text-gray-500 hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Pricing
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className="border-transparent text-gray-500 hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Contact
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className="border-transparent text-gray-500 hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                About
              </Disclosure.Button>
            </div>
            {/* Account section */}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="/login"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Sign in
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
export default PublicHeader;