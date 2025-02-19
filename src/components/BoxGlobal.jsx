import React from 'react'

export default function BoxGlobal({ children, close, headerTitle }) {

    return (
        <>
            <div onClick={close} className='fixed inset-0 flex items-center justify-center bg-black/60 z-40 backdrop-blur-xs transition-all'>
            </div>
            <div className='fixed inset-0 m-auto z-50 w-[320px] md:w-[600px] h-[170px]'>
                <div className='flex items-center w-full p-4 md:p-6 bg-Gray-3 rounded-t-lg'>
                    <svg onClick={close} className='absolute w-6 md:w-10 h-6 md:h-10 cursor-pointer text-Gray-7 hover:text-Gray-5 transition-all' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="3.72611" height="29.8089" rx="1.86305" transform="matrix(0.698447 -0.715662 0.698447 0.715662 8.45508 11.667)" fill="currentColor" />
                        <rect width="3.72611" height="29.8089" rx="1.86305" transform="matrix(0.698447 0.715662 -0.698447 0.715662 28.6973 9.00049)" fill="currentColor" />
                    </svg>
                    <span className='inline-block mx-auto shrink-0 font-EstedadMedium md:font-EstedadBold text-sm md:text-xl'>{headerTitle}</span>
                </div>
                <div className='rtl flex flex-col items-center justify-center w-full py-4 md:pt-8 md:pb-6 bg-white rounded-b-lg'>
                    {children}
                </div>
            </div>
        </>
    )
}
