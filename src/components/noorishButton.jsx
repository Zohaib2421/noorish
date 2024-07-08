import React from 'react';

export default function NoorishButton({ text, link, textColor, backgroundColor, borderColor, borderStrength }) {
    return (
        <button className='flex rounded-full text-lg ml-40 mt-96 bg-noorishGreen text-almostWhite px-10 py-5 border'> {text} </button>
    )
}