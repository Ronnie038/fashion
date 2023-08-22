import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Main from './Layout/Main';
import Home from './pages/Home/Home/Home';
import Men from './pages/Home/Men/Men';
import Women from './pages/Home/Women/Women';
import Kids from './pages/Home/Kids/Kids';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'men',
        element: <Men></Men>
      },
      {
        path: 'women',
        element: <Women></Women>
      },
      {
        path: 'kids',
        element: <Kids></Kids>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

)
