import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Main from './Layout/Main';
import Home from './pages/Home/Home/Home';
import Men from './pages/Home/Men/Men';
import Women from './pages/Home/Women/Women';
import Kids from './pages/Home/Kids/Kids';
import Error from './pages/Error/Error';
import OrderDone from './pages/OrderDone/OrderDone';
import LoginPage from './pages/LoginPage/LoginPage';
import Cart from './pages/Cart/Cart';
import SignUp from './pages/SignUp/SignUp';
import SingleProductDetailsPage from './pages/SingleProductDetailsPage/SingleProductDetailsPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      // home page 
      {
        path: '/',
        element: <Home></Home>
      },
      // pages 
      {
        path: '/men',
        element: <Men></Men>
      },
      {
        path: '/women',
        element: <Women></Women>
      },
      {
        path: '/kids',
        element: <Kids></Kids>
      },
      // order pages
      {
        path: '/orderDone',
        element: <OrderDone></OrderDone>
      },
      // login page 
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      // cart page 
      {
        path: '/cart',
        element: <Cart></Cart>
      },
      {
        path: '/singleProductDetailsPage',
        element: <SingleProductDetailsPage></SingleProductDetailsPage>
      },

      {
        path: '*',
        element: <Error></Error>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

)
