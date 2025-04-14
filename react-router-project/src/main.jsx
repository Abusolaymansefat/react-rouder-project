import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Mobiles from './Components/Mobiles/Mobiles.jsx';
import Laptop from './Components/Loptop/Laptop.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: "Mobiles", Component: Mobiles},
      {path: "Loptop", Component: Laptop}
    ]
  },
  {
    path: "/about",
    element: <div>Hellow About</div>
  },
  {
    path: "/blogs",
    element: <div>Hello World react router blogs</div>,
  },
  {
    path: "/Home",
    element: <div>Hello World react router Home.....</div>,
  },
  {
    path: "app",
    Component: App,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router

    }></RouterProvider>
  </StrictMode>,
)
