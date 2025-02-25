import React, { useState } from 'react'

export default function SearchBox({ title, price, src, description, discount, addToCart, product, percent }) {

    const toPersianDigits = (num) => num.toLocaleString("fa-IR");

    const [isLike, setIsLike] = useState(false)

    const [isAddShoppingCart, setIsAddShoppingCart] = useState(false)

    return (
        <>
            <div className='hidden sm:block w-72 rounded-lg border border-solid border-Gray-4'>
                <img className='w-full rounded-t-lg h-44 object-cover' src={src} alt="Product img" />
                <div className='p-4'>
                    <h4 className='text-xl font-EstedadBold text-Gray-8 mb-4'>{title}</h4>
                    <div className='flex items-center justify-between mb-2'>
                        <div className='flex items-center gap-x-1 no-select'>
                            {
                                isLike ? (
                                    <svg onClick={() => setIsLike(false)} className='cursor-pointer' width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.44 3.1001C14.63 3.1001 13.01 3.9801 12 5.3301C10.99 3.9801 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.6001 2 8.6901C2 9.8801 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.8801 22 8.6901C22 5.6001 19.51 3.1001 16.44 3.1001Z" fill="#C30000" />
                                    </svg>
                                ) : (
                                    <svg onClick={() => setIsLike(true)} className='cursor-pointer' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99967 14.4336C7.79301 14.4336 7.59301 14.4069 7.42634 14.3469C4.87967 13.4736 0.833008 10.3736 0.833008 5.79356C0.833008 3.46023 2.71967 1.56689 5.03967 1.56689C6.16634 1.56689 7.21967 2.00689 7.99967 2.79356C8.77967 2.00689 9.83301 1.56689 10.9597 1.56689C13.2797 1.56689 15.1663 3.46689 15.1663 5.79356C15.1663 10.3802 11.1197 13.4736 8.57301 14.3469C8.40634 14.4069 8.20634 14.4336 7.99967 14.4336ZM5.03967 2.56689C3.27301 2.56689 1.83301 4.01356 1.83301 5.79356C1.83301 10.3469 6.21301 12.8802 7.75301 13.4069C7.87301 13.4469 8.13301 13.4469 8.25301 13.4069C9.78634 12.8802 14.173 10.3536 14.173 5.79356C14.173 4.01356 12.733 2.56689 10.9663 2.56689C9.95301 2.56689 9.01301 3.04023 8.40634 3.86023C8.21967 4.11356 7.79301 4.11356 7.60634 3.86023C6.98634 3.03356 6.05301 2.56689 5.03967 2.56689Z" fill="#ADADAD" />
                                    </svg>
                                )
                            }
                            <span className='text-xs font-EstedadRegular text-Gray-5'>افزودن به علاقمندی‌ها</span>
                        </div>
                        <div className='flex items-center gap-x-2 font-EstedadRegular text-xs'>
                            <del className='text-Gray-5'>{
                                discount && toPersianDigits(discount)
                            }</del>
                            <span className='bg-ErrorExtralight px-1.5 text-Error rounded-lg'>
                                {
                                    discount && `٪${toPersianDigits(percent)}`
                                }
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-1'>
                            <div className='flex items-center gap-x-1'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0.404509L9.67723 5.56649L9.70529 5.65286H9.79611H15.2237L10.8327 8.84315L10.7592 8.89653L10.7873 8.9829L12.4645 14.1449L8.07347 10.9546L8 10.9012L7.92653 10.9546L3.53548 14.1449L5.21271 8.9829L5.24078 8.89653L5.1673 8.84315L0.776258 5.65286H6.20389H6.29471L6.32277 5.56649L8 0.404509Z" fill="#F4B740" stroke="#CBCBCB" strokeWidth="0.25" />
                                </svg>
                                <span className='font-EstedadMedium text-sm'>۵</span>
                            </div>
                            <span className='text-xs font-EstedadRegular text-Gray-5'>(۵۹ امتیاز)</span>
                        </div>
                        <span className='font-EstedadRegular text-Gray-8'>{toPersianDigits(price)}</span>
                    </div>
                    {
                        isAddShoppingCart ? (
                            <button className='w-full py-1.5 font-EstedadMedium border border-solid border-Primary rounded-sm text-Primary mt-5' disabled>افزوده شد</button>
                        ) : (
                            <button onClick={() => {
                                setIsAddShoppingCart(true)
                                addToCart(product)
                            }} className='w-full py-1.5 font-EstedadMedium bg-Primary hover:bg-Shade-2 rounded-sm text-white cursor-pointer mt-5 transition-all'>افزودن به سبد خرید</button>
                        )
                    }
                </div>
            </div>
            <div className='block sm:hidden w-80 border border-solid border-Gray-4 rounded-md pl-1'>
                <div className='flex items-center h-[100px] gap-x-2'>
                    <div className='w-[115px] h-full'>
                        <img className='w-full h-full object-cover rounded-r-md' src={src} alt="" />
                    </div>
                    <div className='w-full py-2'>
                        <div className='flex items-center justify-between mb-2'>
                            <span className='text-sm font-EstedadMedium text-Gray-8'>{title}</span>
                            <div className='flex items-center gap-x-1 font-EstedadRegular text-xs'>
                                <del className='text-Gray-5'>
                                    {
                                        discount && toPersianDigits(discount)
                                    }
                                </del>
                                <span className='bg-ErrorExtralight px-1.5 text-Error rounded-lg'>
                                    {
                                        discount && `٪${toPersianDigits(percent)}`
                                    }

                                </span>
                            </div>
                        </div>
                        <div className='flex items-center justify-between font-EstedadRegular text-xs'>
                            <p className='line-clamp-1 w-32 text-start'>{description}</p>
                            <span className='text-nowrap'>{toPersianDigits(price)}</span>
                        </div>
                        <div className='flex items-center justify-between mt-3 no-select'>
                            {
                                isLike ? (
                                    <svg onClick={() => setIsLike(false)} width="16" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.44 3.1001C14.63 3.1001 13.01 3.9801 12 5.3301C10.99 3.9801 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.6001 2 8.6901C2 9.8801 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.8801 22 8.6901C22 5.6001 19.51 3.1001 16.44 3.1001Z" fill="#C30000" />
                                    </svg>
                                ) : (
                                    <svg onClick={() => setIsLike(true)} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.00016 14.9333C7.7935 14.9333 7.5935 14.9066 7.42683 14.8467C4.88016 13.9733 0.833496 10.8733 0.833496 6.29332C0.833496 3.95998 2.72016 2.06665 5.04016 2.06665C6.16683 2.06665 7.22016 2.50665 8.00016 3.29332C8.78016 2.50665 9.8335 2.06665 10.9602 2.06665C13.2802 2.06665 15.1668 3.96665 15.1668 6.29332C15.1668 10.88 11.1202 13.9733 8.5735 14.8467C8.40683 14.9066 8.20683 14.9333 8.00016 14.9333ZM5.04016 3.06665C3.2735 3.06665 1.8335 4.51332 1.8335 6.29332C1.8335 10.8466 6.2135 13.38 7.7535 13.9066C7.8735 13.9466 8.1335 13.9466 8.2535 13.9066C9.78683 13.38 14.1735 10.8533 14.1735 6.29332C14.1735 4.51332 12.7335 3.06665 10.9668 3.06665C9.9535 3.06665 9.0135 3.53998 8.40683 4.35998C8.22016 4.61332 7.7935 4.61332 7.60683 4.35998C6.98683 3.53332 6.0535 3.06665 5.04016 3.06665Z" fill="#717171" />
                                    </svg>
                                )
                            }

                            <div>
                                <svg width="80" height="17" viewBox="0 0 80 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0.5L9.79611 6.02786H15.6085L10.9062 9.44427L12.7023 14.9721L8 11.5557L3.29772 14.9721L5.09383 9.44427L0.391548 6.02786H6.20389L8 0.5Z" fill="#F4B740" />
                                    <path d="M24 0.5L25.7961 6.02786H31.6085L26.9062 9.44427L28.7023 14.9721L24 11.5557L19.2977 14.9721L21.0938 9.44427L16.3915 6.02786H22.2039L24 0.5Z" fill="#F4B740" />
                                    <path d="M40 0.5L41.7961 6.02786H47.6085L42.9062 9.44427L44.7023 14.9721L40 11.5557L35.2977 14.9721L37.0938 9.44427L32.3915 6.02786H38.2039L40 0.5Z" fill="#F4B740" />
                                    <path d="M56 0.5L57.7961 6.02786H63.6085L58.9062 9.44427L60.7023 14.9721L56 11.5557L51.2977 14.9721L53.0938 9.44427L48.3915 6.02786H54.2039L56 0.5Z" fill="#F4B740" />
                                    <path d="M72 0.5L73.7961 6.02786H79.6085L74.9062 9.44427L76.7023 14.9721L72 11.5557L67.2977 14.9721L69.0938 9.44427L64.3915 6.02786H70.2039L72 0.5Z" fill="#F4B740" />
                                </svg>
                            </div>
                            {
                                isAddShoppingCart ? (
                                    <button className='w-[100px] h-8 font-EstedadBold text-[10px] text-nowra border border-solid border-Primary rounded-sm text-Primary transition-all'>اضافه شد</button>
                                ) : (
                                    <button onClick={() => {
                                        setIsAddShoppingCart(true)
                                        addToCart(product)
                                    }} className='w-[100px] h-8 font-EstedadBold text-[10px] text-nowrap bg-Primary hover:bg-Shade-2 rounded-sm text-white cursor-pointer transition-all'>افزودن به سبد خرید</button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
