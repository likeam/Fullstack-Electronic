import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './ui/Layout.tsx'

const RouterLayout = () =>{
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

const router = createBrowserRouter([{
  path: '/',
  element: <RouterLayout />,
  children: [
    { path: '/', element: <App /> }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
