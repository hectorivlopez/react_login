import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home'
import Login from './routes/Login'
import Signup from './routes/Signup'
import { useState } from 'react'

function App() {


	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home user='lo'/>
		},
		{
			path: '/login',
			element: <Login />
		},
		{
			path: '/signup',
			element: <Signup />
		}
	])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App