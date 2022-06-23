import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon, ShoppingBagIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ClientHeader = (props) => {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
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
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
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
                <Link to='/' className='bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:ouline-none focus:ring-2 focus:ring-offset-2 focus:rigng-indigo-500'>
                  <ShoppingBagIcon className='h-6 w-6' aria-hidden='true' />
                </Link>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <MenuIcon className="block h-6 w-6 rounded-full text-gray-400 hover:text-gray-500" aria-hidden="true" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link to='/' className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to='/pricing' className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <p
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            onClick={props.logoutHandler}
                          >
                            Sign out
                          </p>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Link to='/' className='bg-white p-3 rounded-full text-gray-400 hover:text-gray-500 focus:ouline-none focus:ring-2 focus:ring-offset-2 focus:rigng-indigo-500'>
                  <ShoppingBagIcon className='h-6 w-6' aria-hidden='true' />
                </Link>
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
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
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="">
                  <div className="text-base font-medium text-gray-800">Tom Cook</div>
                  <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="/"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Settings
                </Disclosure.Button>
                <button
                  className='block px-4 py-2 text-left font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 w-full'
                  onClick={props.logoutHandler}
                >
                  Sign out
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    // <div className='header_container'>
    //   <div>logo here</div>
    //   <ul className='header_items'>
    //     <li>Private Route - Client</li>
    //     <li><Link to='/projects'>Projects</Link></li>
    //     <li><button onClick={props.logoutHandler}>Log Out</button></li>
    //   </ul>
    // </div>
  );
}
export default ClientHeader;