import React from 'react';

export default function NoorishButton({ text, link, textColor, backgroundColor, borderColor, borderStrength }) {
    const handleClick = () => { window.location.href = link }

    return (
        <button className={`flex rounded-full text-lg ml-40 mt-96 font-outfit font-medium bg-${backgroundColor} text-${textColor} px-10 py-5 border`}
        onClick={handleClick}> {text} </button>
    )
}