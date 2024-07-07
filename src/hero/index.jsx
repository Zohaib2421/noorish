import React from 'react'
import Navbar from './navbar'

const navItems = [ 'Home', 'Research', 'Recommendations', 'About' ]

export default function hero() {
    return (
        <div className="bg-noorishGreen">
            <Navbar navItems={navItems} />
        </div>)
}