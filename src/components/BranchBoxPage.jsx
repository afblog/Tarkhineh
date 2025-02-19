import React from 'react'
import { Link } from 'react-router-dom'

export default function BranchBoxPage({ title, src, address, phone }) {
    return (
        <div className='rtl w-full lg:h-[280px] flex flex-col lg:flex-row lg:items-center border border-solid border-Gray-4 rounded-md hover:shadow-2xl group transition-all'>
            <img className='w-full h-[112px] md:h-[490px] lg:w-1/2 lg:h-full object-cover rounded-t-md lg:rounded-r-md' src={src} alt="Branch Img" />
            <div className='w-full lg:w-1/2 text-center lg:h-[278px] px-4 md:px-0 py-4 md:py-6'>
                <h4 className='font-EstedadMedium md:font-EstedadBold text-sm md:text-lg lg:text-xl text-Gray-8 mb-5 md:mb-8'>{title}</h4>
                <div className='flex flex-col items-center gap-y-2 font-EstedadRegular text-sm md:text-lg text-Gray-7'>
                    <p>{address}</p>
                    <p>شماره تماس: <span className='ltr'>{phone}</span></p>
                    <p>ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روز‌های تعطیل</p>
                </div>
                <div className='hidden group-hover:flex items-center justify-center gap-x-5 text-sm md:text-base font-EstedadRegular md:font-EstedadMedium transition-all mt-5 md:mt-10'>
                    <Link to='/branch' className='text-Primary border border-solid border-Primary rounded-sm px-6 py-1 md:py-1.5'>صفحه شعبه</Link>
                    <Link to="#" className='text-white bg-Primary rounded-sm px-6 py-1 md:py-1.5'>دیدن در نقشه</Link>
                </div>
            </div>
        </div>
    )
}
