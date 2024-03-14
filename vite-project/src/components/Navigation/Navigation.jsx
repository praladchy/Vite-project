import React from 'react'
import TopNavigation from './TopNavigation/TopNavigation'
import { BottomNavbar } from './BottomNavbar/BottomNavbar'

const Navigation = () => {
  return (
    <div className='Navigation-Bar'>
    <TopNavigation/>

    <BottomNavbar/>

    </div>
  )
}

export default Navigation