import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout(){
    return(
        <div className="root-layout">
           <header>
            <nav>
            <h1>Jane Hopkins</h1>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
            </div>
            </nav>
           </header>

           <main>
            <Outlet />
           </main>
        </div>
    )
}