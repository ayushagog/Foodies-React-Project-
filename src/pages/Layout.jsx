import React from 'react'
import RestaurantHeader from '../component/Header'
import { Outlet } from 'react-router-dom'
import RestaurantFooter from '../component/Footer'

export default function Layout() {
  return (
    <>
    <RestaurantHeader />
    <Outlet />
    <RestaurantFooter />
    </>
  )
}
