import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter,RouterProvider } from "react-router";
import { Home } from './pages/user/Home.tsx';
import Login from './pages/user/auth/Login.tsx';
import SignUp from './pages/user/auth/SignOut.tsx';

import { store } from './store.ts';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    },
    {
      path: '/register',
      element: <SignUp/>,
    },
    {
      path: '/login',
      element: <Login />,
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  
    
  </StrictMode>,
)
