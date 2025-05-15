import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter,RouterProvider } from "react-router";
import { Home } from './pages/user/Home.tsx';
import Login from './pages/user/auth/Login.tsx';
import SignUp from './pages/user/auth/SignOut.tsx';

import { store,persistor } from './store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import ForgotPassword from './pages/user/auth/ForgotPassword.tsx';
import VerifyPasswordOtp from './pages/user/auth/VerifyPasswordOtp.tsx';
import ChangePassword from './pages/user/auth/ChangePassword.tsx';
import SellerPlan from './pages/user/seller/SellerPlan.tsx';
import SellerDashboard from './pages/user/seller/SellerDashboard.tsx';
import SellerProducts from './pages/user/seller/SellerProducts.tsx';
import AddProduct from './pages/user/seller/AddProduct.tsx';
import ConfirmSubscription from './pages/user/seller/ConfirmSubscription.tsx';
import UpdateProduct from './pages/user/seller/UpdateProduct.tsx';
import Review from './pages/user/seller/Review.tsx';

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
    },
    {
      path:'/forgotten-password',
      element:<ForgotPassword/>,
    },
    {
      path: '/verify-otp-password',
      element:<VerifyPasswordOtp/>
    },
    {
      path:"/change-password",
      element:<ChangePassword/>
    },
    {
      path: '/plans',
      element: <SellerPlan />,
    },
    {
      'path':'/dashboard',
      'element':<SellerDashboard/>
    },
    {
      'path':'/seller/product/:id',
      'element':<SellerProducts/>
    },
    {
      path: '/seller/product/add',
      element: <AddProduct />,
    },
    {
      path:'/seller/product/review/:id',
      element:<Review/>
    },
    {
      path:'/seller/product/update/:sellerId/:id',
      element:<UpdateProduct/>
    },
    {
      path: '/subscription-confirmation',
      element:<ConfirmSubscription/>
    },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PersistGate persistor={persistor}>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    </PersistGate>
  </StrictMode>,
)
