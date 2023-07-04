import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import { HomeRounded, AssignmentOutlined, Event,Chat, EventAvailable, Person  } from '@material-ui/icons'
// import { CSSTransition } from 'react-transition-group'

const Sidebar = ({ isOpen }) => {
  return (
    <>
      <aside className="z-20 hidden md:block w-64 bg-white overflow-y-auto flex-shrink-0">
        <div className="py-4 text-gray-500">
          <Link to="/" className="ml-6 text-lg font-bold text-gray-800">
            Home
          </Link>
          <ul className="mt-6 text-gray-800">
            <li
              className={`relative px-6 py-3 hover:bg-blue-gray-900 hover:text-gray-600 transition-colors duration-500`}
            >
              <span
                className={`absolute inset-y-0 left-0 w-1 bg-blue-gray-900 rounded-tr-lg rounded-br-lg`}
              />
              <Link
                to="/"
                className="inline-flex items-center w-full text-sm font-semibold"
              >
                <span className="ml-4">Dashboard</span>
              </Link>
            </li>
            <li
              className={`relative px-6 py-3 hover:bg-blue-gray-900 hover:text-gray-600 transition-colors duration-500`}
            >
              <Link
                to="/"
                className="inline-flex items-center w-full text-sm font-semibold"
              >
                <span className="ml-4">Forms</span>
              </Link>
            </li>
            <li
              className={`relative px-6 py-3 hover:bg-blue-gray-900 hover:text-gray-600 transition-colors duration-500`}
            >
              <span
                className={`absolute inset-y-0 left-0 w-1 bg-blue-gray-900 rounded-tr-lg rounded-br-lg`}
              />
              <Link
                to="/"
                className="inline-flex items-center w-full text-sm font-semibold"
              >
                <span className="ml-4">Calendar</span>
              </Link>
            </li>
            <li
              className={`relative px-6 py-3 hover:bg-blue-gray-900 hover:text-gray-600 transition-colors duration-500`}
            >
              <span
                className={`absolute inset-y-0 left-0 w-1 bg-blue-gray-900 rounded-tr-lg rounded-br-lg`}
              />
              <Link
                to="/"
                className="inline-flex items-center w-full text-sm font-semibold"
              >
                <span className="ml-4">Messages</span>
              </Link>
            </li>
            {/* <li
              className={`relative px-6 py-3 hover:bg-${colorsClass.primary} hover:text-gray-600 transition-colors duration-500`}
            >
              <span
                className={`absolute inset-y-0 left-0 w-1 bg-${colorsClass.primary} rounded-tr-lg rounded-br-lg`}
              />
              <Link
                to="/appointments"
                className="inline-flex items-center w-full text-sm font-semibold"
              >
                <EventAvailable />
                <span className="ml-4">Book Appointment</span>
              </Link>
            </li>
            <li
              className={`relative px-6 py-3 hover:bg-${colorsClass.primary} hover:text-gray-600 transition-colors duration-500`}
            >
              <span
                className={`absolute inset-y-0 left-0 w-1 bg-${colorsClass.primary} rounded-tr-lg rounded-br-lg`}
              />
              <Link
                to="/"
                className="inline-flex items-center w-full text-sm font-semibold"
              >
                <Person />
                <span className="ml-4">Doctors Available</span>
              </Link>
            </li> */}
            
            
          </ul>
        </div>
      </aside>

      {/* <CSSTransition in={isOpen} timeout={200} unmountOnExit classNames="mob-sidebar"> */}
        <aside className="mob-sidebar fixed inset-y-0 z-20 w-64 mt-16 bg-white overflow-y-auto flex-shrink-0">
          <div className="py-4 text-gray-500">
            <ul className="mt-6 text-gray-800">
              <li
                className={`relative px-6 py-3 hover:bg-blue-gray-900 hover:text-gray-600 transition-colors duration-500`}
              >
                <span
                  className={`absolute inset-y-0 left-0 w-1 bg-blue-gray-900 rounded-tr-lg rounded-br-lg`}
                />
                <Link
                  to="/"
                  className="inline-flex items-center w-full text-sm font-semibold"
                >
                  <span className="ml-4">Dashboard</span>
                </Link>
              </li>
              <li
                className={`relative px-6 py-3 hover:bg-blue-gray-900 hover:text-gray-600 transition-colors duration-500`}
              >
                <Link
                  to="/diploma"
                  className="inline-flex items-center w-full text-sm font-semibold"
                >
                  <span className="ml-4">Diploma</span>
                </Link>
              </li>
              <li
                className={`relative px-6 py-3 hover:bg-blue-gray-900 hover:text-gray-600 transition-colors duration-500`}
              >
                <span
                  className={`absolute inset-y-0 left-0 w-1 bg-blue-gray-900 rounded-tr-lg rounded-br-lg`}
                />
                <Link
                  to="/"
                  className="inline-flex items-center w-full text-sm font-semibold"
                >
                  <span className="ml-4">Degree</span>
                </Link>
              </li>
              <li
                className={`relative px-6 py-3 hover:bg-blue-gray-900 hover:text-gray-600 transition-colors duration-500`}
              >
                <Link
                  to="/"
                  className="inline-flex items-center w-full text-sm font-semibold"
                >
                  <span className="ml-4">Master`s Degree</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      {/* </CSSTransition> */}
    </>
  )
}

export default Sidebar

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}