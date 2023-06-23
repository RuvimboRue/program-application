import React,  { useState }from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import PropTypes from 'prop-types'
import card from "@material-tailwind/react/theme/components/card";


const Layout = (props) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar)
  }
  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar isOpen={isOpenSidebar} />

        <main className="flex flex-col h-full overflow-y-auto">
          {/* {props.children} */}
          <div className="flex flex-wrap mt-8 mx-8">
           SUP
      </div>
        </main>
    </div>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.any,
}