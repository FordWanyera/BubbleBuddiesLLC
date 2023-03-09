import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout(){
    return(
        <div className="root-layout">
           <header>
            <nav>
            <h1>Bubble Buddies Pharma Study</h1>
            <hr
            style={{
                background: "#47B5FF",
                height: "2px",
                border: "none",
             }}
             />
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="jane-hopkins">Jane Hopkins</NavLink>
                <NavLink to="fda">FDA</NavLink>
                <NavLink to="bavaria">Bavaria</NavLink>
            </div>
            </nav>
           </header>

           <main>
            <Outlet />
           </main>
        </div>
    )
}