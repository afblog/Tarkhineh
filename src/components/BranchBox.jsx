import React from 'react'
import { Link } from 'react-router-dom'

export default function BranchBox({ src, title, description }) {
    return (
        <>
            <Link to="/contact-us" className='hidden md:block max-w-72 h-[344px] border border-solid border-Gray-4 hover:border-Primary rounded-lg justify-self-center group transition-all'>
                <div className='relative'>
                    <img className='rounded-t-lg w-full h-[230px]' src={src} alt="Branch Section Img" />
                    <div className='hidden absolute inset-0 bg-black/60 rounded-t-lg group-hover:block transition-all'></div>
                </div>
                <h3 className='text-xl font-EstedadMedium my-2'>{title}</h3>
                <p className='h-12.5 px-2 font-EstedadMedium text-sm/6 text-Gray-7'>{description}</p>
            </Link>

            <Link to="/contact-us" className='flex items-center md:hidden max-w-[318px] h-20 border border-solid border-Gray-4 hover:border-Primary hover:scale-105 rounded-lg justify-self-center'>
                <img className='rounded-r-lg w-36 h-full' src={src} alt="Branch Section Img" />
                <div className='flex flex-col items-center justify-center'>
                    <h3 className='text-sm font-EstedadMedium mt-2 mb-1'>{title}</h3>
                    <p className='max-w-40 px-1 font-EstedadRegular text-[10px] text-Gray-7'>{description}</p>
                </div>
            </Link>
        </>
    )
}
