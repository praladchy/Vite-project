import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../page/Home/Home'

const Navpath = () => {
  return (
    <>
<Routes>
    <Route path='/' element={<Home/>}/>
</Routes>
    </>
  )
}

export default Navpath