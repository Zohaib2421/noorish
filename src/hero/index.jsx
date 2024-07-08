import React from 'react'
import Navbar from './navbar'
import NoorishButton from '../components/noorishButton'

// const navItems = [ 'Home', 'Research', 'Recommendations', 'About' ]

export default function Hero() {
    return ( 
        <>
            <Navbar/>
            <NoorishButton text='TAKE A QUIZ' textColor='almostWhite' backgroundColor='almostWhite'/>
        </>
    )
}