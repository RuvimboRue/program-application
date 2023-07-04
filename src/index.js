import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from './dashboard';
import Diploma from './diploma';
import Signup from './signup';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },

   {
    path: "diploma",
    element: <Diploma/>
  },

  {
    path: "dashboard",
    element: <Layout/>
  },

  {
    path: "signup",
    element: <Signup/>
  },


])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider router={router} />
);

// ReactDOM.render((
//   <BrowserRouter>
//     <App /> {/* The various pages will be displayed by the `Main` component. */}
//   </BrowserRouter>
//   ), document.getElementById('root')
// );

