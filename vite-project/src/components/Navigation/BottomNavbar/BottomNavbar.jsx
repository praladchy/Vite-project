import React from 'react'
import "./BottomNavbar.css";
import "../../../page/Home/Home"
import { Link } from "react-router-dom"

export const BottomNavbar = () => {
    return (
        <>
            <div className='Bottom-Navigation-Main-Container'>
              
                    <nav>
                      
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                
            </div>
        </>
    )
}
