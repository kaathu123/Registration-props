import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Registration from './Registration'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>  
  },
  {
    path:'/register',
    element:<Registration/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
