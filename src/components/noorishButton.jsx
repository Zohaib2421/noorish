import React from 'react';

export default function NoorishButton({ text, link, textColor, backgroundColor, borderColor, borderStrength }) {
    return (
        <button className='flex rounded-3xl bg-noorishGreen text-almostWhite px-4 py-4 border'> {text} </button>
    )
}