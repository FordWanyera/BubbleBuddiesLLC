import React from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'

export default function RootLayout(){
    return(
        <div className="root-layout">
           
           <h1>Bubble Buddies</h1>

            <div className="navLinks">
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="jane-hopkins">Jane Hopkins</NavLink>
                <NavLink to="fda">FDA</NavLink>
                <NavLink to="bavaria">Bavaria</NavLink>
            </div>

           <main>
            <Outlet />
           </main>
        </div>
    )
}