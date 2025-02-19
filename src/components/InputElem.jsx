import React from 'react'

export default function InputElem({ isActive, errorMsg, isError, blur, value, focus, change, type, placeholder, children }) {
    return (
        <>
            <div className={`flex items-center ${isActive ? "activeInput" : ""} ${isError ? 'mb-4 bg-[#f3f4f6]' : 'errorInput bg-ErrorExtralight'} px-4 rounded-lg`}>
                <input value={value} onChange={change} onBlur={blur} onFocus={focus} type={type} placeholder={placeholder} className='w-full h-14 outline-none text-Black placeholder:font-EstedadMedium placeholder:text-sm' />
                {children}
            </div>
            {
                !isError && (
                    <p className='text-Errorlight text-xs md:text-sm font-EstedadLight text-start mt-1 mb-4'>{errorMsg}</p>
                )
            }</>
    )
}
