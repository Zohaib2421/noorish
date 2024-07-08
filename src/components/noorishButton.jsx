import React from 'react';

export default function NoorishButton({ text, link, textColor, backgroundColor, borderColor, borderStrength }) {
    return (
        <button className='flex rounded-full text-lg ml-40 mt-96 font-outfit font-medium bg-almostWhite text-buttonTextColor px-10 py-5 border'> {text} </button>
    )
}