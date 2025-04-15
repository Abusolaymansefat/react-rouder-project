import { StrictMode, Suspense } from 'react'
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
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users2/Users2.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetail from './Components/PostDetail/PostDetail.jsx';

const usersPromis = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: "Mobiles", Component: Mobiles},
      {path: "Loptop", Component: Laptop},
      {
        path: "users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: "users2",
        element: <Suspense fallback= {<span>Loading.....</span>}>
          <Users2 usersPromis= {usersPromis}></Users2>
        </Suspense>
      },
      {
        path:'Users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path: 'posts/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`) ,
        Component: PostDetail
      },
      
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
  },
  {
    path: '*',
    element: <h3>Not Found: 404 status</h3>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router

    }></RouterProvider>
  </StrictMode>,
)
