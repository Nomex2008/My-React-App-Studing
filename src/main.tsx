import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {AuthProvider} from './AuthContext'
import AboutUs from './components/AboutUs/AboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<div>error 404</div>
  },
  {
    path: "/about-us",
    element: <AboutUs/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
