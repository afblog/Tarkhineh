import React from 'react'

export default function HeaderPages({ title, bgimg }) {

    return (
        <div className={`rtl flex items-center justify-center relative w-full h-44 md:h-[336px] ${bgimg} bg-center bg-cover`}>
            <div className='absolute inset-0 bg-gradient-to-b from-[#21402B80] to-[#0000008C] z-10'></div>
            <p className='absolute text-base md:text-4xl font-EstedadBold text-Tint-1 z-20'>{title}</p>
        </div>
    )
}
