import React,  { useState }from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import PropTypes from 'prop-types'
import { Card, CardHeader,
  CardBody,
  CardFooter,
  Button,
  Typography,
  Progress,} from '@material-tailwind/react';


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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 align-items-center">
          <Card className="w-100">
      <CardHeader shadow={false} floated={false} className="h-100">
        {/* <img 
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" 
          className="w-full h-full object-cover"
        /> */}
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-2">
          <h2><b>
            DIPLOMA
            </b> </h2>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography variant="small" color="gray" className="font-normal opacity-75">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>

    <Card className="w-100">
      <CardHeader shadow={false} floated={false} className="h-100">
        {/* <img 
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" 
          className="w-full h-full object-cover"
        /> */}
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-2">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography variant="small" color="gray" className="font-normal opacity-75">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
        >
          Add to Cart
        </Button>
        <div className="w-full">
      <div className="flex items-center justify-between gap-4 mb-2">
        <Typography color="blue" variant="h6">Completed</Typography>
        <Typography color="blue" variant="h6">50%</Typography>
      </div>
      <Progress value={50} />
    </div>
      </CardFooter>
    </Card>

    <Card className="w-100">
      <CardHeader shadow={false} floated={false} className="h-300">
        {/* <img 
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" 
          className="w-full h-full object-cover"
        /> */}
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-2">
          <Typography color="blue-gray" className="font-medium">
            Apple AirPods
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography variant="small" color="gray" className="font-normal opacity-75">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
            </div>
      </div>
        </main>
    </div>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.any,
}