import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../page/Home/Home'
import About from '../../page/About/About'
import Contact from "../../page/Contact/Contact"

const Navpath = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Contact' element={<Contact />} />
            </Routes>
        </>
    )
}

export default Navpath