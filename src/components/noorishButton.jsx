import React from 'react';

export default function NoorishButton({ text, link, textColor, backgroundColor, borderColor = 'none', borderStrength = 'none' }) {
    const handleClick = () => { window.location.href = link }
    const border = borderStrength === 'none' ? '' : `${borderStrength} solid ${borderColor}`
    return (
        <button className={`flex rounded-full text-lg ml-40 mt-96 font-outfit font-medium bg-${backgroundColor} text-${textColor} px-10 py-5`}
        onClick={handleClick}> {text} </button>
    )
}