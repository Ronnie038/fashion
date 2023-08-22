import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './page/home/Home.jsx';
import TopCategory from './page/home/man/TopCategory';
import WomanCategory from './page/woman/WomanCategory';
import Login from './page/login/Login';

const router = createBrowserRouter([
      
     {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/men",
          element: <TopCategory></TopCategory>
        },
        {
          path: "/woman",
          element:<WomanCategory></WomanCategory>
        },
        {
          path: "/login",
          element: <Login></Login>
        }
      ]
     }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
  
)
