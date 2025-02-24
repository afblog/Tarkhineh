import React from 'react'
import { Link } from 'react-router-dom'



export default function Login({ children }) {
    return (
        <>
            <div className='relative min-h-screen bg-white -z-0'>
                <div className='hidden lg:block absolute top-0 left-0 w-[300px] h-[300px] bg-sky-500 opacity-20 blur-[120px] rounded-full'></div>
                <div className='hidden lg:block absolute bottom-0 right-0 w-[300px] h-[300px] bg-Success opacity-20 blur-[120px] rounded-full'></div>
            </div>
            <div className='fixed inset-0 bg-sky-500/4 z-10'>
                <div className='flex px-4 py-6 flex-col justify-center items-center h-full'>
                    <Link to='/' className='inline-block w-40 md:w-60 mb-5 md:mb-10'>
                        <img src="/Img/svg/site-logo.svg" alt="Site Logo" />
                    </Link>
                    {children}
                    <p className='max-w-[330px] font-EstedadRegular text-sm md:text-base/loose text-Black mt-5 sm:mt-8 text-center'>با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات <span className='text-Success font-EstedadMedium'>ترخینه</span> را پذیرفته اید</p>
                </div>
            </div>
        </>

    )
}