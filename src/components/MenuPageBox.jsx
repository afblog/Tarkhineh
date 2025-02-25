import { useContext } from 'react';
import { GlobalContext } from '../Contexts/GlobalContext';
import { useState } from 'react';

export default function MenuPageBox({ title, src, price, description, discount, product, percent }) {

    const { addToCart } = useContext(GlobalContext)

    const [isAddShoppingCart, setIsAddShoppingCart] = useState(false)

    const [isLike, setIsLike] = useState(false)

    const toPersianDigits = (num) => num.toLocaleString("fa-IR");


    return (
        <>
            <div className='rtl flex items-center xl:gap-x-8 h-[100px] lg:h-40 border border-solid border-Gray-4 hover:shadow-xl transition-all rounded-md'>
                <div className='w-[92px] lg:w-52 h-full'>
                    <img className='w-full h-full object-cover rounded-r-md' src={src} alt="" />
                </div>
                <div className='w-full h-full p-2 lg:pl-4 flex flex-col justify-center'>
                    <div className='flex items-center justify-between'>
                        <>
                            <h3 className='text-xs md:text-sm lg:text-xl text-Gray-8 font-EstedadRegular lg:font-EstedadBold'>{title}</h3>
                            {
                                isLike ? (
                                    <svg onClick={() => setIsLike(false)} className='w-6 h-6 hidden lg:block cursor-pointer' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.44 3.1001C14.63 3.1001 13.01 3.9801 12 5.3301C10.99 3.9801 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.6001 2 8.6901C2 9.8801 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.8801 22 8.6901C22 5.6001 19.51 3.1001 16.44 3.1001Z" fill="#C30000" />
                                    </svg>
                                ) : (
                                    <svg onClick={() => setIsLike(true)} className='w-6 h-6 hidden lg:block cursor-pointer' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 21.65C11.69 21.65 11.39 21.61 11.14 21.52C7.32 20.21 1.25 15.56 1.25 8.68998C1.25 5.18998 4.08 2.34998 7.56 2.34998C9.25 2.34998 10.83 3.00998 12 4.18998C13.17 3.00998 14.75 2.34998 16.44 2.34998C19.92 2.34998 22.75 5.19998 22.75 8.68998C22.75 15.57 16.68 20.21 12.86 21.52C12.61 21.61 12.31 21.65 12 21.65ZM7.56 3.84998C4.91 3.84998 2.75 6.01998 2.75 8.68998C2.75 15.52 9.32 19.32 11.63 20.11C11.81 20.17 12.2 20.17 12.38 20.11C14.68 19.32 21.26 15.53 21.26 8.68998C21.26 6.01998 19.1 3.84998 16.45 3.84998C14.93 3.84998 13.52 4.55998 12.61 5.78998C12.33 6.16998 11.69 6.16998 11.41 5.78998C10.48 4.54998 9.08 3.84998 7.56 3.84998Z" fill="#717171" />
                                    </svg>
                                )
                            }
                            <div className='flex lg:hidden items-center gap-x-2'>
                                {
                                    discount && percent ? (
                                        <>
                                            <del className='text-Gray-4 text-[10px] md:text-sm font-EstedadRegular lg:text-base'>{toPersianDigits(discount)}</del>
                                            <span className='text-xs text-Error bg-ErrorExtralight px-1 rounded-full'>٪{toPersianDigits(percent)}</span>
                                        </>
                                    ) : ""
                                }
                            </div>
                        </>
                    </div>
                    <div className='flex items-center justify-between font-EstedadRegular my-1 lg:my-2'>
                        <>
                            <p className='w-1/2 text-[10px] lg:text-sm text-Gray-8 line-clamp-1 md:line-clamp-2'>{description}</p>
                            <div>
                                <div className='hidden lg:flex items-center gap-x-2'>
                                    {
                                        discount && percent ? (
                                            <>
                                                <del className='text-Gray-4 text-base'>{toPersianDigits(discount)}</del>
                                                <span className='text-xs text-Error bg-ErrorExtralight px-1 rounded-full'>٪{toPersianDigits(percent)}</span>
                                            </>
                                        ) : ""
                                    }
                                </div>
                                <span className='text-Gray-8 text-[10px] md:text-sm lg:text-lg tracking-tighter text-nowrap'>
                                    {
                                        price ? `${toPersianDigits(price)}تومان` : "۰"
                                    }
                                </span>
                            </div>
                        </>
                    </div>
                    <div className='flex items-center justify-between'>

                        <>
                            <div className='flex items-center justify-between gap-x-2'>
                                {
                                    isLike ? (
                                        <svg onClick={() => setIsLike(false)} className='w-4 h-4 block lg:hidden' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.44 3.1001C14.63 3.1001 13.01 3.9801 12 5.3301C10.99 3.9801 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.6001 2 8.6901C2 9.8801 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.8801 22 8.6901C22 5.6001 19.51 3.1001 16.44 3.1001Z" fill="#C30000" />
                                        </svg>
                                    ) : (
                                        <svg onClick={() => setIsLike(true)} className='w-4 h-4 block lg:hidden' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 21.65C11.69 21.65 11.39 21.61 11.14 21.52C7.32 20.21 1.25 15.56 1.25 8.68998C1.25 5.18998 4.08 2.34998 7.56 2.34998C9.25 2.34998 10.83 3.00998 12 4.18998C13.17 3.00998 14.75 2.34998 16.44 2.34998C19.92 2.34998 22.75 5.19998 22.75 8.68998C22.75 15.57 16.68 20.21 12.86 21.52C12.61 21.61 12.31 21.65 12 21.65ZM7.56 3.84998C4.91 3.84998 2.75 6.01998 2.75 8.68998C2.75 15.52 9.32 19.32 11.63 20.11C11.81 20.17 12.2 20.17 12.38 20.11C14.68 19.32 21.26 15.53 21.26 8.68998C21.26 6.01998 19.1 3.84998 16.45 3.84998C14.93 3.84998 13.52 4.55998 12.61 5.78998C12.33 6.16998 11.69 6.16998 11.41 5.78998C10.48 4.54998 9.08 3.84998 7.56 3.84998Z" fill="#717171" />
                                        </svg>
                                    )
                                }
                                <svg className='w-20 lg:w-30 h-4 lg:h-6' viewBox="0 0 121 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5489 2.92705C11.8483 2.00574 13.1517 2.00574 13.4511 2.92705L14.9697 7.60081C15.1035 8.01284 15.4875 8.2918 15.9207 8.2918H20.835C21.8037 8.2918 22.2065 9.53141 21.4228 10.1008L17.447 12.9894C17.0966 13.244 16.9499 13.6954 17.0838 14.1074L18.6024 18.7812C18.9017 19.7025 17.8472 20.4686 17.0635 19.8992L13.0878 17.0106C12.7373 16.756 12.2627 16.756 11.9122 17.0106L7.93648 19.8992C7.15276 20.4686 6.09828 19.7025 6.39763 18.7812L7.91623 14.1074C8.05011 13.6954 7.90345 13.244 7.55296 12.9894L3.57722 10.1008C2.79351 9.53141 3.19628 8.2918 4.16501 8.2918H9.07929C9.51252 8.2918 9.89647 8.01284 10.0303 7.60081L11.5489 2.92705Z" fill="#F4B740" />
                                    <path d="M36.5 0L39.1942 8.2918H47.9127L40.8593 13.4164L43.5534 21.7082L36.5 16.5836L29.4466 21.7082L32.1407 13.4164L25.0873 8.2918H33.8058L36.5 0Z" fill="#F4B740" />
                                    <path d="M60.5 0L63.1942 8.2918H71.9127L64.8593 13.4164L67.5534 21.7082L60.5 16.5836L53.4466 21.7082L56.1407 13.4164L49.0873 8.2918H57.8058L60.5 0Z" fill="#F4B740" />
                                    <path d="M84.5 0L87.1942 8.2918H95.9127L88.8593 13.4164L91.5534 21.7082L84.5 16.5836L77.4466 21.7082L80.1407 13.4164L73.0873 8.2918H81.8058L84.5 0Z" fill="#F4B740" />
                                    <path d="M108.5 0L111.194 8.2918H119.913L112.859 13.4164L115.553 21.7082L108.5 16.5836L101.447 21.7082L104.141 13.4164L97.0873 8.2918H105.806L108.5 0Z" fill="#F4B740" />
                                </svg>
                            </div>
                            {
                                isAddShoppingCart ? (
                                    <button className='py-1.5 px-1 md:px-2 xl:px-14 border border-solid border-Primary text-Primary text-[10px] md:text-xs lg:text-base font-EstedadRegular lg:font-EstedadMedium rounded-sm text-nowrap'>اضافه شد</button>
                                ) : (
                                    <button onClick={() => {
                                        setIsAddShoppingCart(true)
                                        addToCart(product)
                                    }} className='py-1.5 px-1 md:px-2 xl:px-14 bg-Primary text-white text-[10px] md:text-xs lg:text-base font-EstedadRegular lg:font-EstedadMedium rounded-sm cursor-pointer hover:bg-Shade-1 transition-all text-nowrap'>افزودن به سبد خرید</button>
                                )
                            }
                        </>

                    </div>
                </div>
            </div >
        </>
    )
}
