import Header from '../components/Header'
import Footer from '../components/Footer'
import ShoppingBoxCart from '../components/ShoppingBoxCart'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext'
import BoxGlobal from '../components/BoxGlobal'
import { useState } from 'react'
import ShoppingCartPayment from '../components/ShoppingCartPayment'

export default function ShoppingCart() {

    const { isLogin, mainCourseHandler, cart, setCart, updateQuantity, removeFromCart, totalPrice, toPersianDigits } = useContext(GlobalContext)

    const [isGlobalBox, setIsGlobalBox] = useState(false)

    const [isPayment, setIsPayment] = useState(false)

    const closeSearchBox = () => setIsGlobalBox(false)

    return (
        <>
            {
                isGlobalBox && (
                    <BoxGlobal close={closeSearchBox} headerTitle="حذف محصولات">
                        <p className='text-sm md:text-base font-EstedadRegular text-Gray-8 mb-6 md:mb-8'>همه محصولات سبد خرید شما حذف شود؟</p>
                        <div className='flex items-center gap-x-5 font-EstedadMedium text-sm md:text-base'>
                            <button onClick={closeSearchBox} className='py-1.5 px-8 border border-solid border-Primary rounded-sm text-Primary hover:text-white hover:bg-Primary cursor-pointer transition-all'>بازگشت</button>
                            <button onClick={() => {
                                setCart([])
                                closeSearchBox()
                            }} className='py-1.5 px-10 bg-ErrorExtralight text-Error hover:bg-Error hover:text-ErrorExtralight rounded-sm cursor-pointer transition-all'>حذف</button>
                        </div>
                    </BoxGlobal>
                )
            }
            <Header />
            <main className='rtl w-screen py-12 flex items-start justify-center'>
                {
                    isPayment ? (
                        <ShoppingCartPayment />
                    ) : (
                        <div className='container'>
                            {
                                cart.length === 0 ? (
                                    <div className='relative flex flex-col gap-y-4 md:gap-y-9 items-center justify-center w-full h-[373px] md:h-[422px] border border-solid border-Gray-4 rounded-lg'>
                                        <div className='w-[200px] h-[193px] md:w-[325px] md:h-[313px] absolute -z-10'>
                                            <img className='w-full h-full' src="/Img/svg/shoppingCart-img.svg" alt="Shoppin Cart Empty" />
                                        </div>
                                        <p className='font-EstedadRegular text-sm md:text-xl text-Gray-6'>شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!</p>
                                        <Link to="/menu" onClick={() => mainCourseHandler()} className='py-1.5 px-10 md:px-12 border border-solid border-Primary rounded-sm text-sm md:text-base font-EstedadMedium text-Primary hover:text-white hover:bg-Primary transition-all cursor-pointer'>منوی رستوران</Link>
                                    </div>
                                ) : (
                                    <>
                                        <div className='hidden md:flex items-start gap-x-6'>
                                            <div className='w-2/3 max-h-[554px] flex flex-col gap-y-4 overflow-scroll border border-solid border-Gray-4 rounded-lg p-6'>
                                                {
                                                    cart.length > 0 && cart.map((item) => (
                                                        <div key={item.id}>
                                                            <ShoppingBoxCart removeFromCart={removeFromCart} productID={item.id} updateQuantity={updateQuantity} quantity={toPersianDigits(item.quantity)} title={item.title} src={item.imagemain} price={item.price} description={item.description} discount={item.discount} toPersianDigits={toPersianDigits} />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className='w-1/3 border border-solid border-Gray-4 p-6 divide-y divide-Gray-4 rounded-lg'>
                                                <div className='flex items-center justify-between pb-3'>
                                                    <h5 className='text-Gray-8 text-sm lg:text-base font-EstedadRegular'>سبد خرید <span>{`(${toPersianDigits(cart.length)})`}</span></h5>
                                                    <svg onClick={() => setIsGlobalBox(true)} className='w-4 lg:w-6 h-4 lg:h-6 cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20.9999 6.72998C20.9799 6.72998 20.9499 6.72998 20.9199 6.72998C15.6299 6.19998 10.3499 5.99998 5.11992 6.52998L3.07992 6.72998C2.65992 6.76998 2.28992 6.46998 2.24992 6.04998C2.20992 5.62998 2.50992 5.26998 2.91992 5.22998L4.95992 5.02998C10.2799 4.48998 15.6699 4.69998 21.0699 5.22998C21.4799 5.26998 21.7799 5.63998 21.7399 6.04998C21.7099 6.43998 21.3799 6.72998 20.9999 6.72998Z" fill="#353535" />
                                                        <path d="M8.50001 5.72C8.46001 5.72 8.42001 5.72 8.37001 5.71C7.97001 5.64 7.69001 5.25 7.76001 4.85L7.98001 3.54C8.14001 2.58 8.36001 1.25 10.69 1.25H13.31C15.65 1.25 15.87 2.63 16.02 3.55L16.24 4.85C16.31 5.26 16.03 5.65 15.63 5.71C15.22 5.78 14.83 5.5 14.77 5.1L14.55 3.8C14.41 2.93 14.38 2.76 13.32 2.76H10.7C9.64001 2.76 9.62001 2.9 9.47001 3.79L9.24001 5.09C9.18001 5.46 8.86001 5.72 8.50001 5.72Z" fill="#353535" />
                                                        <path d="M15.2099 22.7501H8.7899C5.2999 22.7501 5.1599 20.8201 5.0499 19.2601L4.3999 9.19007C4.3699 8.78007 4.6899 8.42008 5.0999 8.39008C5.5199 8.37008 5.8699 8.68008 5.8999 9.09008L6.5499 19.1601C6.6599 20.6801 6.6999 21.2501 8.7899 21.2501H15.2099C17.3099 21.2501 17.3499 20.6801 17.4499 19.1601L18.0999 9.09008C18.1299 8.68008 18.4899 8.37008 18.8999 8.39008C19.3099 8.42008 19.6299 8.77007 19.5999 9.19007L18.9499 19.2601C18.8399 20.8201 18.6999 22.7501 15.2099 22.7501Z" fill="#353535" />
                                                        <path d="M13.6601 17.25H10.3301C9.92008 17.25 9.58008 16.91 9.58008 16.5C9.58008 16.09 9.92008 15.75 10.3301 15.75H13.6601C14.0701 15.75 14.4101 16.09 14.4101 16.5C14.4101 16.91 14.0701 17.25 13.6601 17.25Z" fill="#353535" />
                                                        <path d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z" fill="#353535" />
                                                    </svg>
                                                </div>
                                                <div className='flex items-center justify-between py-2 lg:py-3 font-EstedadRegular text-sm text-Gray-8 cursor-pointer'>
                                                    <h5>تخفیف محصولات</h5>
                                                    <h5 className='text-Gray-7'>۶۳٬۰۰۰ تومان</h5>
                                                </div>
                                                <div className='py-2 lg:py-3'>
                                                    <div className='flex items-center justify-between font-EstedadRegular text-sm text-Gray-8 mb-2'>
                                                        <h5>هزینه ارسال</h5>
                                                        <span className='text-Gray-7'>۰ تومان</span>
                                                    </div>
                                                    <div className='flex gap-x-2'>
                                                        <svg className='w-4 lg:w-6 h-4 lg:h-6 shrink-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V7.75C11.25 7.34 11.59 7 12 7C12.41 7 12.75 7.34 12.75 7.75V13C12.75 13.41 12.41 13.75 12 13.75Z" fill="#A9791C" />
                                                            <path d="M12 17.2502C11.73 17.2502 11.48 17.1502 11.29 16.9602C11.2 16.8602 11.13 16.7502 11.07 16.6302C11.02 16.5102 11 16.3802 11 16.2502C11 15.9902 11.11 15.7302 11.29 15.5402C11.66 15.1702 12.34 15.1702 12.71 15.5402C12.89 15.7302 13 15.9902 13 16.2502C13 16.3802 12.97 16.5102 12.92 16.6302C12.87 16.7502 12.8 16.8602 12.71 16.9602C12.52 17.1502 12.27 17.2502 12 17.2502Z" fill="#A9791C" />
                                                            <path d="M12.0002 22.7501C11.3302 22.7501 10.6502 22.5801 10.0502 22.2301L4.11017 18.8001C2.91017 18.1001 2.16016 16.8101 2.16016 15.4201V8.58011C2.16016 7.19011 2.91017 5.90011 4.11017 5.20011L10.0502 1.77012C11.2502 1.07012 12.7402 1.07012 13.9502 1.77012L19.8902 5.20011C21.0902 5.90011 21.8402 7.19011 21.8402 8.58011V15.4201C21.8402 16.8101 21.0902 18.1001 19.8902 18.8001L13.9502 22.2301C13.3502 22.5801 12.6702 22.7501 12.0002 22.7501ZM12.0002 2.7501C11.5902 2.7501 11.1702 2.8601 10.8002 3.0701L4.86017 6.5001C4.12017 6.9301 3.66016 7.72011 3.66016 8.58011V15.4201C3.66016 16.2701 4.12017 17.0701 4.86017 17.5001L10.8002 20.9301C11.5402 21.3601 12.4602 21.3601 13.1902 20.9301L19.1302 17.5001C19.8702 17.0701 20.3302 16.2801 20.3302 15.4201V8.58011C20.3302 7.73011 19.8702 6.9301 19.1302 6.5001L13.1902 3.0701C12.8302 2.8601 12.4102 2.7501 12.0002 2.7501Z" fill="#A9791C" />
                                                        </svg>
                                                        <p className='text-[10px] text-justify lg:text-xs font-EstedadRegular text-Warning'>هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.</p>
                                                    </div>
                                                </div>
                                                <div className='flex items-center justify-between py-3 font-EstedadRegular text-xs lg:text-sm text-Gray-7'>
                                                    <h5>مبلغ قابل پرداخت</h5>
                                                    <span className='text-Primary'>{toPersianDigits(totalPrice)} تومان</span>
                                                </div>
                                                {
                                                    isLogin ? (<button onClick={() => {
                                                        setCart([])
                                                        setIsPayment(true)
                                                    }} className='flex items-center justify-center gap-x-1 w-full py-1.5 bg-Primary hover:bg-Shade-1 text-white font-EstedadMedium text-sm lg:text-base rounded-sm cursor-pointer transition-all'>
                                                        ثبت سفارش
                                                        <svg className='w-4 lg:w-6 h-4 lg:h-6' viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M15.5 20.67C15.31 20.67 15.12 20.6 14.97 20.45L8.45003 13.93C7.39003 12.87 7.39003 11.13 8.45003 10.07L14.97 3.55002C15.26 3.26002 15.74 3.26002 16.03 3.55002C16.32 3.84002 16.32 4.32002 16.03 4.61002L9.51003 11.13C9.03003 11.61 9.03003 12.39 9.51003 12.87L16.03 19.39C16.32 19.68 16.32 20.16 16.03 20.45C15.88 20.59 15.69 20.67 15.5 20.67Z" fill="white" />
                                                        </svg>
                                                    </button>) : (
                                                        <Link to='/login' className='flex items-center justify-center gap-x-2 w-full py-1.5 bg-Primary hover:bg-Shade-1 text-white font-EstedadMedium text-sm lg:text-base rounded-sm cursor-pointer transition-all'>
                                                            <svg className='w-4 lg:w-6 h-4 lg:h-6' viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12.5 12.75C9.33 12.75 6.75 10.17 6.75 7C6.75 3.83 9.33 1.25 12.5 1.25C15.67 1.25 18.25 3.83 18.25 7C18.25 10.17 15.67 12.75 12.5 12.75ZM12.5 2.75C10.16 2.75 8.25 4.66 8.25 7C8.25 9.34 10.16 11.25 12.5 11.25C14.84 11.25 16.75 9.34 16.75 7C16.75 4.66 14.84 2.75 12.5 2.75Z" fill="white" />
                                                                <path d="M21.0901 22.75C20.6801 22.75 20.3401 22.41 20.3401 22C20.3401 18.55 16.8202 15.75 12.5002 15.75C8.18015 15.75 4.66016 18.55 4.66016 22C4.66016 22.41 4.32016 22.75 3.91016 22.75C3.50016 22.75 3.16016 22.41 3.16016 22C3.16016 17.73 7.35015 14.25 12.5002 14.25C17.6502 14.25 21.8401 17.73 21.8401 22C21.8401 22.41 21.5001 22.75 21.0901 22.75Z" fill="white" />
                                                            </svg>
                                                            ورود / ثبت نام
                                                        </Link>
                                                    )
                                                }

                                            </div>
                                        </div>
                                        <div className='flex md:hidden flex-col p-6 border border-solid border-Gray-4 rounded-lg'>
                                            <div className='h-44 overflow-scroll'>
                                                {
                                                    cart.length > 0 && cart.map((item) => (
                                                        <div key={item.id} className='flex items-center justify-between w-full bg-Gray-1 hover:bg-Gray-3 p-2'>
                                                            <div>
                                                                <h5 className='font-EstedadRegular text-Gray-8 text-xs sm:text-sm'>{item.title}</h5>
                                                                <span className='font-EstedadRegular text-[10px] sm:text-sm text-Gray-7'>{toPersianDigits(item.price)} تومان</span>
                                                            </div>
                                                            <div className='flex items-center gap-x-2 bg-Tint-1 px-1 py-2 text-Primary font-EstedadRegular rounded-sm'>
                                                                <button onClick={() => updateQuantity(item.id, 1)} className='text-xl cursor-pointer' disabled={item.quantity === 10 ? true : false}>+</button>
                                                                <span className='text-sm'>
                                                                    {
                                                                        toPersianDigits(item.quantity) === '۱۰' ? '۱۰' : toPersianDigits(item.quantity)
                                                                    }
                                                                </span>
                                                                <svg onClick={() => updateQuantity(item.id, -1)} className='w-4 h-4 cursor-pointer text-Primary' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M20.9999 6.72998C20.9799 6.72998 20.9499 6.72998 20.9199 6.72998C15.6299 6.19998 10.3499 5.99998 5.11992 6.52998L3.07992 6.72998C2.65992 6.76998 2.28992 6.46998 2.24992 6.04998C2.20992 5.62998 2.50992 5.26998 2.91992 5.22998L4.95992 5.02998C10.2799 4.48998 15.6699 4.69998 21.0699 5.22998C21.4799 5.26998 21.7799 5.63998 21.7399 6.04998C21.7099 6.43998 21.3799 6.72998 20.9999 6.72998Z" fill="currentColor" />
                                                                    <path d="M8.50001 5.72C8.46001 5.72 8.42001 5.72 8.37001 5.71C7.97001 5.64 7.69001 5.25 7.76001 4.85L7.98001 3.54C8.14001 2.58 8.36001 1.25 10.69 1.25H13.31C15.65 1.25 15.87 2.63 16.02 3.55L16.24 4.85C16.31 5.26 16.03 5.65 15.63 5.71C15.22 5.78 14.83 5.5 14.77 5.1L14.55 3.8C14.41 2.93 14.38 2.76 13.32 2.76H10.7C9.64001 2.76 9.62001 2.9 9.47001 3.79L9.24001 5.09C9.18001 5.46 8.86001 5.72 8.50001 5.72Z" fill="currentColor" />
                                                                    <path d="M15.2099 22.7501H8.7899C5.2999 22.7501 5.1599 20.8201 5.0499 19.2601L4.3999 9.19007C4.3699 8.78007 4.6899 8.42008 5.0999 8.39008C5.5199 8.37008 5.8699 8.68008 5.8999 9.09008L6.5499 19.1601C6.6599 20.6801 6.6999 21.2501 8.7899 21.2501H15.2099C17.3099 21.2501 17.3499 20.6801 17.4499 19.1601L18.0999 9.09008C18.1299 8.68008 18.4899 8.37008 18.8999 8.39008C19.3099 8.42008 19.6299 8.77007 19.5999 9.19007L18.9499 19.2601C18.8399 20.8201 18.6999 22.7501 15.2099 22.7501Z" fill="currentColor" />
                                                                    <path d="M13.6601 17.25H10.3301C9.92008 17.25 9.58008 16.91 9.58008 16.5C9.58008 16.09 9.92008 15.75 10.3301 15.75H13.6601C14.0701 15.75 14.4101 16.09 14.4101 16.5C14.4101 16.91 14.0701 17.25 13.6601 17.25Z" fill="currentColor" />
                                                                    <path d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z" fill="currentColor" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className='w-full divide-y divide-Gray-4 rounded-lg mt-5'>
                                                <div className='flex items-center justify-between pb-3'>
                                                    <h5 className='text-Gray-8 text-sm lg:text-base font-EstedadRegular'>سبد خرید <span>{`(${toPersianDigits(cart.length)})`}</span></h5>
                                                    <svg onClick={() => setIsGlobalBox(true)} className='w-4 lg:w-6 h-4 lg:h-6 cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20.9999 6.72998C20.9799 6.72998 20.9499 6.72998 20.9199 6.72998C15.6299 6.19998 10.3499 5.99998 5.11992 6.52998L3.07992 6.72998C2.65992 6.76998 2.28992 6.46998 2.24992 6.04998C2.20992 5.62998 2.50992 5.26998 2.91992 5.22998L4.95992 5.02998C10.2799 4.48998 15.6699 4.69998 21.0699 5.22998C21.4799 5.26998 21.7799 5.63998 21.7399 6.04998C21.7099 6.43998 21.3799 6.72998 20.9999 6.72998Z" fill="#353535" />
                                                        <path d="M8.50001 5.72C8.46001 5.72 8.42001 5.72 8.37001 5.71C7.97001 5.64 7.69001 5.25 7.76001 4.85L7.98001 3.54C8.14001 2.58 8.36001 1.25 10.69 1.25H13.31C15.65 1.25 15.87 2.63 16.02 3.55L16.24 4.85C16.31 5.26 16.03 5.65 15.63 5.71C15.22 5.78 14.83 5.5 14.77 5.1L14.55 3.8C14.41 2.93 14.38 2.76 13.32 2.76H10.7C9.64001 2.76 9.62001 2.9 9.47001 3.79L9.24001 5.09C9.18001 5.46 8.86001 5.72 8.50001 5.72Z" fill="#353535" />
                                                        <path d="M15.2099 22.7501H8.7899C5.2999 22.7501 5.1599 20.8201 5.0499 19.2601L4.3999 9.19007C4.3699 8.78007 4.6899 8.42008 5.0999 8.39008C5.5199 8.37008 5.8699 8.68008 5.8999 9.09008L6.5499 19.1601C6.6599 20.6801 6.6999 21.2501 8.7899 21.2501H15.2099C17.3099 21.2501 17.3499 20.6801 17.4499 19.1601L18.0999 9.09008C18.1299 8.68008 18.4899 8.37008 18.8999 8.39008C19.3099 8.42008 19.6299 8.77007 19.5999 9.19007L18.9499 19.2601C18.8399 20.8201 18.6999 22.7501 15.2099 22.7501Z" fill="#353535" />
                                                        <path d="M13.6601 17.25H10.3301C9.92008 17.25 9.58008 16.91 9.58008 16.5C9.58008 16.09 9.92008 15.75 10.3301 15.75H13.6601C14.0701 15.75 14.4101 16.09 14.4101 16.5C14.4101 16.91 14.0701 17.25 13.6601 17.25Z" fill="#353535" />
                                                        <path d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z" fill="#353535" />
                                                    </svg>
                                                </div>
                                                <div className='flex items-center justify-between py-2 lg:py-3 font-EstedadRegular text-sm text-Gray-8'>
                                                    <h5>تخفیف محصولات</h5>
                                                    <h5 className='text-Gray-7'>۶۳٬۰۰۰ تومان</h5>
                                                </div>
                                                <div className='py-2 lg:py-3'>
                                                    <div className='flex items-center justify-between font-EstedadRegular text-sm text-Gray-8 mb-2'>
                                                        <h5>هزینه ارسال</h5>
                                                        <span className='text-Gray-7'>۰ تومان</span>
                                                    </div>
                                                    <div className='flex gap-x-2'>
                                                        <svg className='w-4 lg:w-6 h-4 lg:h-6 shrink-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V7.75C11.25 7.34 11.59 7 12 7C12.41 7 12.75 7.34 12.75 7.75V13C12.75 13.41 12.41 13.75 12 13.75Z" fill="#A9791C" />
                                                            <path d="M12 17.2502C11.73 17.2502 11.48 17.1502 11.29 16.9602C11.2 16.8602 11.13 16.7502 11.07 16.6302C11.02 16.5102 11 16.3802 11 16.2502C11 15.9902 11.11 15.7302 11.29 15.5402C11.66 15.1702 12.34 15.1702 12.71 15.5402C12.89 15.7302 13 15.9902 13 16.2502C13 16.3802 12.97 16.5102 12.92 16.6302C12.87 16.7502 12.8 16.8602 12.71 16.9602C12.52 17.1502 12.27 17.2502 12 17.2502Z" fill="#A9791C" />
                                                            <path d="M12.0002 22.7501C11.3302 22.7501 10.6502 22.5801 10.0502 22.2301L4.11017 18.8001C2.91017 18.1001 2.16016 16.8101 2.16016 15.4201V8.58011C2.16016 7.19011 2.91017 5.90011 4.11017 5.20011L10.0502 1.77012C11.2502 1.07012 12.7402 1.07012 13.9502 1.77012L19.8902 5.20011C21.0902 5.90011 21.8402 7.19011 21.8402 8.58011V15.4201C21.8402 16.8101 21.0902 18.1001 19.8902 18.8001L13.9502 22.2301C13.3502 22.5801 12.6702 22.7501 12.0002 22.7501ZM12.0002 2.7501C11.5902 2.7501 11.1702 2.8601 10.8002 3.0701L4.86017 6.5001C4.12017 6.9301 3.66016 7.72011 3.66016 8.58011V15.4201C3.66016 16.2701 4.12017 17.0701 4.86017 17.5001L10.8002 20.9301C11.5402 21.3601 12.4602 21.3601 13.1902 20.9301L19.1302 17.5001C19.8702 17.0701 20.3302 16.2801 20.3302 15.4201V8.58011C20.3302 7.73011 19.8702 6.9301 19.1302 6.5001L13.1902 3.0701C12.8302 2.8601 12.4102 2.7501 12.0002 2.7501Z" fill="#A9791C" />
                                                        </svg>
                                                        <p className='text-[10px] text-justify lg:text-xs font-EstedadRegular text-Warning'>هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.</p>
                                                    </div>
                                                </div>
                                                <div className='flex items-center justify-between py-3 font-EstedadRegular text-xs lg:text-sm text-Gray-7'>
                                                    <h5>مبلغ قابل پرداخت</h5>
                                                    <span className='text-Primary'>{toPersianDigits(totalPrice)} تومان</span>
                                                </div>
                                                {
                                                    isLogin ? (<button onClick={() => {
                                                        setCart([])
                                                        setIsPayment(true)
                                                    }} className='flex items-center justify-center gap-x-2 w-full py-1.5 bg-Primary hover:bg-Shade-1 text-white font-EstedadMedium text-sm lg:text-base rounded-sm cursor-pointer transition-all'>
                                                        ثبت سفارش
                                                        <svg className='w-4 lg:w-6 h-4 lg:h-6' viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M15.5 20.67C15.31 20.67 15.12 20.6 14.97 20.45L8.45003 13.93C7.39003 12.87 7.39003 11.13 8.45003 10.07L14.97 3.55002C15.26 3.26002 15.74 3.26002 16.03 3.55002C16.32 3.84002 16.32 4.32002 16.03 4.61002L9.51003 11.13C9.03003 11.61 9.03003 12.39 9.51003 12.87L16.03 19.39C16.32 19.68 16.32 20.16 16.03 20.45C15.88 20.59 15.69 20.67 15.5 20.67Z" fill="white" />
                                                        </svg>
                                                    </button>) : (
                                                        <Link to='/login' className='flex items-center justify-center gap-x-2 w-full py-1.5 bg-Primary hover:bg-Shade-1 text-white font-EstedadMedium text-sm lg:text-base rounded-sm cursor-pointer transition-all'>
                                                            <svg className='w-4 lg:w-6 h-4 lg:h-6' viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12.5 12.75C9.33 12.75 6.75 10.17 6.75 7C6.75 3.83 9.33 1.25 12.5 1.25C15.67 1.25 18.25 3.83 18.25 7C18.25 10.17 15.67 12.75 12.5 12.75ZM12.5 2.75C10.16 2.75 8.25 4.66 8.25 7C8.25 9.34 10.16 11.25 12.5 11.25C14.84 11.25 16.75 9.34 16.75 7C16.75 4.66 14.84 2.75 12.5 2.75Z" fill="white" />
                                                                <path d="M21.0901 22.75C20.6801 22.75 20.3401 22.41 20.3401 22C20.3401 18.55 16.8202 15.75 12.5002 15.75C8.18015 15.75 4.66016 18.55 4.66016 22C4.66016 22.41 4.32016 22.75 3.91016 22.75C3.50016 22.75 3.16016 22.41 3.16016 22C3.16016 17.73 7.35015 14.25 12.5002 14.25C17.6502 14.25 21.8401 17.73 21.8401 22C21.8401 22.41 21.5001 22.75 21.0901 22.75Z" fill="white" />
                                                            </svg>
                                                            ورود / ثبت نام
                                                        </Link>
                                                    )
                                                }

                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    )
                }
            </main>
            <Footer />
        </>
    )
}
