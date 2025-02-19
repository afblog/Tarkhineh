import React from 'react'

export default function TitleMenuBox({ title, children }) {
    return (
        <div className='w-full flex items-center justify-between'>
            <h3 className='text-Gray-8 font-EstedadBold md:text-2xl'>{title}</h3>
            {children}
        </div>
    )
}
