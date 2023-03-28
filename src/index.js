import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound'
import Onboard from './components/Onboard'
import GetStarted from './components/GetStarted'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Recovery from './components/Recovery'
import Verify from './components/Verify'
import Resend from './components/Resend'
import Verified from './components/Verified'
import Back from './components/Back'
import Additional from './components/Additional'
import Profile from './components/Profile'
import Video from './components/Video'
import WaitingRoom from './components/WaitingRoom'
import Booking from './components/Booking'
import Message from './components/Message'
import Payment from './components/Payment'
import BookingDetail from './components/BookingDetail'
import Help from './components/Help'
import Schedule from './components/Schedule'
import Notifications from './components/Notifications'
import EnterWaitingRoom from './components/EnterWaitingRoom'
import VerifyNumber from './components/VerifyNumber'
import BottomBar from './components/BottomBar'
import PasswordChanged from './components/PasswordChanged'
import AccountInformation from './components/AccountInformation'
import InsuranceDetail from './components/InsuranceDetail'
import ClinicInfo from './components/ClinicInfo'
import MedicalRecords from './components/MedicalRecords'
import Settings from './components/Settings'

const router = createBrowserRouter([
  {
    path: '/home',
    element: [
      <App key={1} />
    ]
  },
  {
    path: '/',
    element: <Onboard />
  },
  {
    path: '/getstarted',
    element: <GetStarted />
  },
  {
    path: '/signin',
    element: [
      <Back key={1} />,
      <Signin key={2} />
    ]
  },
  {
    path: '/signup',
    element: [
      <Back key={1} />,
      <Signup key={2} />
    ]
  },
  {
    path: '/resend',
    element: [
      <Back key={1} />,
      <Resend key={2} />
    ]
  },
  {
    path: '/verify',
    element: [
      <Back key={1} />,
      <Verify key={2} />
    ]
  },
  {
    path: '/recovery',
    element: [
      <Back key={1} />,
      <Recovery key={2} />
    ]
  },
  {
    path: '/verified',
    element: <Verified />
  },
  {
    path: '/password-changed',
    element: <PasswordChanged />
  },
  {
    path: '/verifynumber',
    element: <VerifyNumber />
  },
  {
    path: '/additional',
    element: [
      <Back key={1} />,
      <Additional key={2} />
    ]
  },
  {
    path: '/notifications',
    element: [
      <Notifications key={1} />
    ]
  },
  {
    path: '/profile',
    element: [
      <Back key={1} />,
      <Profile key={2} />
    ]
  },
  {
    path: '/account-info',
    element: [
      <AccountInformation key={2} />
    ]
  },
  {
    path: '/insurance-detail',
    element: [
      <InsuranceDetail key={2} />
    ]
  },
  {
    path: '/clinic-info',
    element: [
      <ClinicInfo key={2} />
    ]
  },
  {
    path: '/medical-records',
    element: [
      <MedicalRecords key={2} />
    ]
  },
  {
    path: '/settings',
    element: [
      <Settings key={2} />
    ]
  },
  {
    path: '/videocall',
    element: [
      <Back key={1} />,
      <Video key={2} />
    ]
  },
  {
    path: '/waitingroom',
    element: [
      <WaitingRoom key={1} />
    ]
  },
  {
    path: '/waitingtoenter',
    element: [
      <EnterWaitingRoom key={1} />
    ]
  },
  {
    path: '/booking',
    element: [
      <Booking key={1} />
    ]
  },
  {
    path: '/message',
    element: [
      <Back key={1} />,
      <Message key={2} />
    ]
  },
  {
    path: '/payment',
    element: [
      <Back key={1} />,
      <Payment key={2} />
    ]
  },
  {
    path: '/booking-detail',
    element: [
      <Back key={1} />,
      <BookingDetail key={2} />
    ]
  },
  {
    path: '/help',
    element: [
      <Back key={1} />,
      <Help key={2} />
    ]
  },
  {
    path: '/schedule',
    element: [
      <Back key={1} />,
      <Schedule key={2} />
    ]
  },
  {
    path: '*',
    element: [
      <Back key={1} />,
      <NotFound key={2} />
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
