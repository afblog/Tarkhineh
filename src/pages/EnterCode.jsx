import React, { useState } from 'react'
import Register from '../components/Register'
import Alert from '../components/Alert'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext'
import { useContext } from 'react'

export default function EnterCode() {

    const { isAlert, setIsAlert } = useContext(GlobalContext)

    const inputRefs = useRef([]);

    const handleInputChange = (e, index) => {
        const { value } = e.target;

        if (!/^\d?$/.test(value)) return;

        if (value && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }

        if (!value && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const closeAlert = () => setIsAlert(null)

    return (
        <Register>

            {
                isAlert === 'success' && (<Alert message='کد تایید با موفقیت ارسال شد' type='success' onClose={closeAlert} />)
            }

            <div className='max-w-[330px] w-full pt-5 pb-6 px-6 text-center bg-white rounded-xl shadow-lg'>
                <h3 className='flex items-center justify-between text-Gray-8 font-EstedadBold text-xl mb-4 sm:mb-4.5'>
                    <Link to='/login'>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.81 22.06C17.18 22.06 16.55 21.91 15.95 21.59L4.36 15.49C3.06 14.81 2.25 13.47 2.25 12C2.25 10.53 3.06 9.19 4.36 8.51L15.95 2.41C17.5 1.6 19.3 1.86 20.55 3.08C21.8 4.3 22.1 6.1 21.32 7.66L19.7 10.9C19.36 11.58 19.36 12.4 19.7 13.09L21.32 16.33C22.1 17.89 21.8 19.69 20.55 20.91C19.78 21.67 18.81 22.06 17.81 22.06ZM17.8 3.44C17.44 3.44 17.05 3.53 16.65 3.74L5.06 9.84C4.24 10.27 3.75 11.08 3.75 12C3.75 12.92 4.24 13.73 5.06 14.16L16.65 20.26C17.81 20.87 18.89 20.45 19.5 19.84C20.12 19.24 20.56 18.17 19.98 17L18.36 13.76C17.81 12.65 17.81 11.34 18.36 10.23L19.98 6.99C20.57 5.82 20.12 4.75 19.5 4.15C19.1 3.76 18.5 3.44 17.8 3.44Z" fill="#353535" />
                        </svg>
                    </Link>
                    کد تایید
                </h3>
                <p className='font-EstedadSemiBold my-4 sm:my-5 text-sm text-Gray-8'>کد تایید به ایمیل شما ارسال شد</p>
                <form action="#" className='flex items-center justify-center gap-x-1'>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            className="w-12 h-12 border bg-[#f3f4f6] border-[#f3f4f6] rounded-lg text-center text-Black font-EstedadBold text-lg focus:outline-none focus:ring-2 focus:ring-Gray-2 "
                            ref={(el) => (inputRefs.current[index] = el)}
                            onChange={(e) => handleInputChange(e, index)}
                        />
                    ))}
                </form>
                <button className='mt-5 h-12 w-full px-5 bg-Success text-white rounded-lg font-EstedadMedium '>تایید</button>
            </div>
        </Register>
    )
}