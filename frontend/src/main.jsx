import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Login from './components/Navbar/Login/Login.jsx'
import Search from './components/Navbar/Search/Search.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    {/* Webside Layout */}
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<LandingPage/>}/>
      </Route>
    
    {/* Standalone routes */}
      <Route path='login' element={<Login />} />
      <Route path='search' element={<Search />} />

    </>
    
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
