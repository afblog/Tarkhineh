

export default function ShoppingBoxCart({ title, src, price, description, discount, toPersianDigits, productID, quantity, updateQuantity, removeFromCart, percent }) {

    return (
        <div className='rtl flex items-center xl:gap-x-8 h-[100px] lg:h-40 border border-solid border-Gray-4 hover:shadow-xl transition-all rounded-md shrink-0'>
            <div className='w-[92px] lg:w-52 h-full'>
                <img className='w-full h-full object-cover rounded-r-md' src={src} alt="Shopping Box Cart" />
            </div>
            <div className='w-full h-full p-2 lg:pl-4 flex flex-col justify-center'>
                <div className='flex items-center justify-between'>
                    <>
                        <h3 className='text-sm lg:text-xl text-Gray-8 font-EstedadRegular lg:font-EstedadBold'>{title}</h3>
                        <svg onClick={() => removeFromCart(productID)} className='w-4 h-4 lg:w-6 lg:h-6 cursor-pointer' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.9999 6.72998C20.9799 6.72998 20.9499 6.72998 20.9199 6.72998C15.6299 6.19998 10.3499 5.99998 5.11992 6.52998L3.07992 6.72998C2.65992 6.76998 2.28992 6.46998 2.24992 6.04998C2.20992 5.62998 2.50992 5.26998 2.91992 5.22998L4.95992 5.02998C10.2799 4.48998 15.6699 4.69998 21.0699 5.22998C21.4799 5.26998 21.7799 5.63998 21.7399 6.04998C21.7099 6.43998 21.3799 6.72998 20.9999 6.72998Z" fill="#353535" />
                            <path d="M8.50001 5.72C8.46001 5.72 8.42001 5.72 8.37001 5.71C7.97001 5.64 7.69001 5.25 7.76001 4.85L7.98001 3.54C8.14001 2.58 8.36001 1.25 10.69 1.25H13.31C15.65 1.25 15.87 2.63 16.02 3.55L16.24 4.85C16.31 5.26 16.03 5.65 15.63 5.71C15.22 5.78 14.83 5.5 14.77 5.1L14.55 3.8C14.41 2.93 14.38 2.76 13.32 2.76H10.7C9.64001 2.76 9.62001 2.9 9.47001 3.79L9.24001 5.09C9.18001 5.46 8.86001 5.72 8.50001 5.72Z" fill="#353535" />
                            <path d="M15.2099 22.7501H8.7899C5.2999 22.7501 5.1599 20.8201 5.0499 19.2601L4.3999 9.19007C4.3699 8.78007 4.6899 8.42008 5.0999 8.39008C5.5199 8.37008 5.8699 8.68008 5.8999 9.09008L6.5499 19.1601C6.6599 20.6801 6.6999 21.2501 8.7899 21.2501H15.2099C17.3099 21.2501 17.3499 20.6801 17.4499 19.1601L18.0999 9.09008C18.1299 8.68008 18.4899 8.37008 18.8999 8.39008C19.3099 8.42008 19.6299 8.77007 19.5999 9.19007L18.9499 19.2601C18.8399 20.8201 18.6999 22.7501 15.2099 22.7501Z" fill="#353535" />
                            <path d="M13.6601 17.25H10.3301C9.92008 17.25 9.58008 16.91 9.58008 16.5C9.58008 16.09 9.92008 15.75 10.3301 15.75H13.6601C14.0701 15.75 14.4101 16.09 14.4101 16.5C14.4101 16.91 14.0701 17.25 13.6601 17.25Z" fill="#353535" />
                            <path d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z" fill="#353535" />
                        </svg>
                    </>
                </div>
                <div className='flex items-center justify-between font-EstedadRegular my-1 lg:my-2'>
                    <>
                        <p className='w-1/2 text-[10px] lg:text-sm text-Gray-8 line-clamp-2'>{description}</p>
                        <div>
                            <div className='flex items-center gap-x-2'>
                                {
                                    discount && percent ? (
                                        <>
                                            <del className='text-Gray-4 text-base'>{toPersianDigits(discount)}</del>
                                            <span className='text-xs text-Error bg-ErrorExtralight px-1 rounded-full'>٪{toPersianDigits(percent)}</span>
                                        </>
                                    ) : ""
                                }
                            </div>
                        </div>
                    </>
                </div>
                <div className='flex items-center justify-between'>
                    <>
                        <div className='flex items-center justify-between gap-x-6'>
                            <svg className='w-20 lg:w-30 h-4 lg:h-6' viewBox="0 0 121 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5489 2.92705C11.8483 2.00574 13.1517 2.00574 13.4511 2.92705L14.9697 7.60081C15.1035 8.01284 15.4875 8.2918 15.9207 8.2918H20.835C21.8037 8.2918 22.2065 9.53141 21.4228 10.1008L17.447 12.9894C17.0966 13.244 16.9499 13.6954 17.0838 14.1074L18.6024 18.7812C18.9017 19.7025 17.8472 20.4686 17.0635 19.8992L13.0878 17.0106C12.7373 16.756 12.2627 16.756 11.9122 17.0106L7.93648 19.8992C7.15276 20.4686 6.09828 19.7025 6.39763 18.7812L7.91623 14.1074C8.05011 13.6954 7.90345 13.244 7.55296 12.9894L3.57722 10.1008C2.79351 9.53141 3.19628 8.2918 4.16501 8.2918H9.07929C9.51252 8.2918 9.89647 8.01284 10.0303 7.60081L11.5489 2.92705Z" fill="#F4B740" />
                                <path d="M36.5 0L39.1942 8.2918H47.9127L40.8593 13.4164L43.5534 21.7082L36.5 16.5836L29.4466 21.7082L32.1407 13.4164L25.0873 8.2918H33.8058L36.5 0Z" fill="#F4B740" />
                                <path d="M60.5 0L63.1942 8.2918H71.9127L64.8593 13.4164L67.5534 21.7082L60.5 16.5836L53.4466 21.7082L56.1407 13.4164L49.0873 8.2918H57.8058L60.5 0Z" fill="#F4B740" />
                                <path d="M84.5 0L87.1942 8.2918H95.9127L88.8593 13.4164L91.5534 21.7082L84.5 16.5836L77.4466 21.7082L80.1407 13.4164L73.0873 8.2918H81.8058L84.5 0Z" fill="#F4B740" />
                                <path d="M108.5 0L111.194 8.2918H119.913L112.859 13.4164L115.553 21.7082L108.5 16.5836L101.447 21.7082L104.141 13.4164L97.0873 8.2918H105.806L108.5 0Z" fill="#F4B740" />
                            </svg>
                            <div className='flex items-center font-EstedadRegular text-sm lg:text-xl gap-x-2 bg-Tint-1 rounded-sm p-1 text-Primary'>
                                <button onClick={() => updateQuantity(productID, 1)} className="cursor-pointer" disabled={quantity === '۱۰' ? true : false} >+</button>
                                <span>{
                                    quantity === '۱۰' ? '۱۰' : quantity
                                }</span>
                                <button onClick={() => updateQuantity(productID, -1)} className='cursor-pointer'>-</button>
                            </div>
                        </div>
                        <span className='text-Gray-8 text-sm lg:text-lg font-EstedadRegular tracking-tighter text-nowrap'>{toPersianDigits(price)}تومان</span>
                    </>
                </div>
            </div>
        </div >

    )
}
