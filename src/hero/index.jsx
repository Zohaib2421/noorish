import React from 'react'
import Navbar from './navbar'

const navItems = [ 'Home', 'Research', 'Recommendations', 'About' ]

export default function hero() {
    return ( <Navbar navItems={navItems}/> )
}