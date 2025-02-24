import React from 'react'
import { useState, useContext } from 'react'
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Alert from './Alert'
import { GlobalContext } from '../Contexts/GlobalContext'
import BoxGlobal from './BoxGlobal'

export default function Header() {

    const {
        isLogin,
        setIsLogin,
        logoutHandler,
        isAlert,
        alertMsg,
        cart,
        setIsAlert,
        mainCourseHandler,
        appetizerHandler,
        dessertHandler,
        drinkHandler,
        userProfilHandler,
        userOrderHandler,
        userInterestsHandler,
        userAddressHandler,
    } = useContext(GlobalContext)

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const [isSearch, setIsSearch] = useState(false)

    const [searchInputValue, setSearchInputValue] = useState('')

    const toPersianDigits = (num) => num.toLocaleString("fa-IR");

    const navigate = useNavigate()
    const location = useLocation()

    const isShappingCartPage = location.pathname === '/shoppingcart'
    const isSearchPage = location.pathname === '/searchbar'
    const isProfilePage = location.pathname === '/profile'

    const searchBoxHandler = () => {
        sessionStorage.setItem('search-value', searchInputValue)
        navigate('/searchbar')
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            sessionStorage.setItem('search-value', searchInputValue)
            navigate('/searchbar')
        }
    }

    const openMenu = () => setIsOpenMenu(true)
    const openSearchBox = () => setIsSearch(true)

    const closeSearchBox = () => setIsSearch(false)

    const closeAlert = () => setIsAlert(null)

    return (
        <>
            {
                isAlert === 'error' && (<Alert message={alertMsg} type='error' onClose={closeAlert} />)
            }
            {
                isAlert === 'success' && (<Alert message={alertMsg} type='success' onClose={closeAlert} />)
            }
            <header className='py-8 shadow-header'>
                <div className='container'>
                    <div className='rtl hidden md:flex items-center justify-between'>
                        <Link to='/'>
                            <img className='w-[150px] lg:w-[188px]' src="/Img/svg/site-logo.svg" alt="Site Logo" />
                        </Link>
                        <div className='flex gap-x-3 h-16 lg:gap-x-6 items-center font-EstedadRegular text-Gray-7 lg:text-xl tracking-tighter'>
                            <NavLink to='/' className={`${({ isActive }) => (isActive ? "active" : "")} p-1 hover:text-Primary`}>صفحه اصلی</NavLink>
                            <NavLink to='/branch' className='hover:text-Primary p-1' >شعبه</NavLink>
                            <NavLink to="/menu" className='relative group hover:text-Primary p-1 cursor-pointer' >
                                <div onClick={mainCourseHandler} className='flex items-center gap-x-1.5'>
                                    منو
                                    <svg className='rotate-180 group-hover:rotate-0 transition-all delay-150' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.00001 11.7C7.53335 11.7 7.06668 11.52 6.71335 11.1667L2.36668 6.81999C2.17335 6.62666 2.17335 6.30666 2.36668 6.11332C2.56001 5.91999 2.88001 5.91999 3.07335 6.11332L7.42001 10.46C7.74001 10.78 8.26001 10.78 8.58001 10.46L12.9267 6.11332C13.12 5.91999 13.44 5.91999 13.6333 6.11332C13.8267 6.30666 13.8267 6.62666 13.6333 6.81999L9.28668 11.1667C8.93335 11.52 8.46668 11.7 8.00001 11.7Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div className='absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible  flex flex-col justify-center top-9 right-0 w-[144px] z-30 text-sm font-EstedadRegular divide-y divide-Gray-3 text-Gray-8 bg-white rounded-sm shadow-loginBox transition-opacity delay-150'>
                                    <div onClick={() => {
                                        mainCourseHandler()
                                        navigate('/menu')
                                    }} className='inline-block p-2 cursor-pointer hover:text-Primary'>غذای اصلی</div>
                                    <div onClick={() => {
                                        appetizerHandler()
                                        navigate('/menu')
                                    }} className='inline-block p-2 cursor-pointer hover:text-Primary'>پیش غذا</div>
                                    <div onClick={() => {
                                        dessertHandler()
                                        navigate('/menu')
                                    }} className='inline-block p-2 cursor-pointer hover:text-Primary'>دسر</div>
                                    <div onClick={() => {
                                        drinkHandler()
                                        navigate('/menu')
                                    }} className='inline-block p-2 cursor-pointer hover:text-Primary'>نوشیدنی</div>
                                </div>
                            </NavLink>
                            <NavLink to='/franchise' className='hover:text-Primary p-1' >اعطای نمایندگی</NavLink>
                            <NavLink to='/about-us' className='hover:text-Primary  p-1' >درباره ما</NavLink>
                            <NavLink to='/contact-us' className='hover:text-Primary p-1' >تماس با ما</NavLink>
                        </div>
                        <div className='flex items-center gap-x-1 lg:gap-x-2'>
                            <div onClick={openSearchBox} className={`p-1 lg:p-2 rounded-sm  ${isSearchPage ? "bg-Primary" : "bg-Tint-1"} hover:bg-Primary group transition-all cursor-pointer`}>
                                <svg className={`w-6 h-6 ${isSearchPage ? "text-white" : 'text-Primary'} group-hover:text-white`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="currentColor" />
                                    <path d="M22.0004 22.75C21.8104 22.75 21.6204 22.68 21.4704 22.53L19.4704 20.53C19.1804 20.24 19.1804 19.76 19.4704 19.47C19.7604 19.18 20.2404 19.18 20.5304 19.47L22.5304 21.47C22.8204 21.76 22.8204 22.24 22.5304 22.53C22.3804 22.68 22.1904 22.75 22.0004 22.75Z" fill="currentColor" />
                                </svg>
                            </div>
                            <Link to='/shoppingcart' className={`relative p-1 lg:p-2 rounded-sm group ${isShappingCartPage ? "bg-Primary" : "bg-Tint-1"} hover:bg-Primary transition-all cursor-pointer`}>
                                <span className='w-4 h-4 flex items-center justify-center absolute top-1 right-1 text-xs font-EstedadMedium text-white bg-Tint-6 rounded-full'>{toPersianDigits(cart.length)}</span>
                                <svg className={`w-6 h-6 ${isShappingCartPage ? "text-white" : "text-Primary"} group-hover:text-white`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.19 17.75H7.53999C6.54999 17.75 5.59999 17.33 4.92999 16.6C4.25999 15.87 3.92 14.89 4 13.9L4.83 3.94C4.86 3.63 4.74999 3.33001 4.53999 3.10001C4.32999 2.87001 4.04 2.75 3.73 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H3.74001C4.47001 1.25 5.15999 1.56 5.64999 2.09C5.91999 2.39 6.12 2.74 6.23 3.13H18.72C19.73 3.13 20.66 3.53 21.34 4.25C22.01 4.98 22.35 5.93 22.27 6.94L21.73 14.44C21.62 16.27 20.02 17.75 18.19 17.75ZM6.28 4.62L5.5 14.02C5.45 14.6 5.64 15.15 6.03 15.58C6.42 16.01 6.95999 16.24 7.53999 16.24H18.19C19.23 16.24 20.17 15.36 20.25 14.32L20.79 6.82001C20.83 6.23001 20.64 5.67001 20.25 5.26001C19.86 4.84001 19.32 4.60999 18.73 4.60999H6.28V4.62Z" fill="currentColor" />
                                    <path d="M16.25 22.75C15.15 22.75 14.25 21.85 14.25 20.75C14.25 19.65 15.15 18.75 16.25 18.75C17.35 18.75 18.25 19.65 18.25 20.75C18.25 21.85 17.35 22.75 16.25 22.75ZM16.25 20.25C15.97 20.25 15.75 20.47 15.75 20.75C15.75 21.03 15.97 21.25 16.25 21.25C16.53 21.25 16.75 21.03 16.75 20.75C16.75 20.47 16.53 20.25 16.25 20.25Z" fill="currentColor" />
                                    <path d="M8.25 22.75C7.15 22.75 6.25 21.85 6.25 20.75C6.25 19.65 7.15 18.75 8.25 18.75C9.35 18.75 10.25 19.65 10.25 20.75C10.25 21.85 9.35 22.75 8.25 22.75ZM8.25 20.25C7.97 20.25 7.75 20.47 7.75 20.75C7.75 21.03 7.97 21.25 8.25 21.25C8.53 21.25 8.75 21.03 8.75 20.75C8.75 20.47 8.53 20.25 8.25 20.25Z" fill="currentColor" />
                                    <path d="M21 8.75H9C8.59 8.75 8.25 8.41 8.25 8C8.25 7.59 8.59 7.25 9 7.25H21C21.41 7.25 21.75 7.59 21.75 8C21.75 8.41 21.41 8.75 21 8.75Z" fill="currentColor" />
                                </svg>
                            </Link>
                            {
                                !isLogin ? (<Link to='/login' className='p-1 lg:p-2 rounded-sm bg-Tint-1 group hover:bg-Primary transition-all'>
                                    <svg className='w-6 h-6 text-Primary group-hover:text-white' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z" fill="currentColor" />
                                        <path d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z" fill="currentColor" />
                                    </svg>
                                </Link>) : (


                                    <div className='h-14 flex items-center group'>
                                        <div className="relative group-hover:bg-Primary transition-all rounded-sm bg-Tint-1">
                                            <div className='flex items-center gap-x-1 p-1 lg:p-2 cursor-pointer'>
                                                <svg className='w-6 h-6 text-Primary group-hover:text-white' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z" fill="currentColor" />
                                                    <path d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z" fill="currentColor" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                    <div className='rtl flex md:hidden items-center justify-between'>
                        <svg onClick={openMenu} className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_4642_14729)">
                                <path d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z" fill="#417F56" />
                                <path d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z" fill="#417F56" />
                                <path d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z" fill="#417F56" />
                            </g>
                        </svg>
                        <Link to='/'>
                            <img className='w-[102px] md:w-[150px] lg:w-[188px]' src="/Img/svg/site-logo.svg" alt="Site Logo" />
                        </Link>
                        <div className='flex items-center gap-x-1'>
                            <Link to='/shoppingcart' className={`relative p-1 lg:p-2  ${isShappingCartPage ? "bg-Primary" : "bg-Tint-1"} rounded-sm`}>
                                <span className='w-3 h-3 flex items-center justify-center absolute top-0.5 right-0.5 pt-0.5 text-[10px] font-EstedadMedium text-white bg-Tint-6 rounded-full'>{toPersianDigits(cart.length)}</span>
                                <svg className={`w-4 h-4 ${isShappingCartPage ? "text-white" : "text-Primary"} group-hover:text-white`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.19 17.75H7.53999C6.54999 17.75 5.59999 17.33 4.92999 16.6C4.25999 15.87 3.92 14.89 4 13.9L4.83 3.94C4.86 3.63 4.74999 3.33001 4.53999 3.10001C4.32999 2.87001 4.04 2.75 3.73 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H3.74001C4.47001 1.25 5.15999 1.56 5.64999 2.09C5.91999 2.39 6.12 2.74 6.23 3.13H18.72C19.73 3.13 20.66 3.53 21.34 4.25C22.01 4.98 22.35 5.93 22.27 6.94L21.73 14.44C21.62 16.27 20.02 17.75 18.19 17.75ZM6.28 4.62L5.5 14.02C5.45 14.6 5.64 15.15 6.03 15.58C6.42 16.01 6.95999 16.24 7.53999 16.24H18.19C19.23 16.24 20.17 15.36 20.25 14.32L20.79 6.82001C20.83 6.23001 20.64 5.67001 20.25 5.26001C19.86 4.84001 19.32 4.60999 18.73 4.60999H6.28V4.62Z" fill="currentColor" />
                                    <path d="M16.25 22.75C15.15 22.75 14.25 21.85 14.25 20.75C14.25 19.65 15.15 18.75 16.25 18.75C17.35 18.75 18.25 19.65 18.25 20.75C18.25 21.85 17.35 22.75 16.25 22.75ZM16.25 20.25C15.97 20.25 15.75 20.47 15.75 20.75C15.75 21.03 15.97 21.25 16.25 21.25C16.53 21.25 16.75 21.03 16.75 20.75C16.75 20.47 16.53 20.25 16.25 20.25Z" fill="currentColor" />
                                    <path d="M8.25 22.75C7.15 22.75 6.25 21.85 6.25 20.75C6.25 19.65 7.15 18.75 8.25 18.75C9.35 18.75 10.25 19.65 10.25 20.75C10.25 21.85 9.35 22.75 8.25 22.75ZM8.25 20.25C7.97 20.25 7.75 20.47 7.75 20.75C7.75 21.03 7.97 21.25 8.25 21.25C8.53 21.25 8.75 21.03 8.75 20.75C8.75 20.47 8.53 20.25 8.25 20.25Z" fill="currentColor" />
                                    <path d="M21 8.75H9C8.59 8.75 8.25 8.41 8.25 8C8.25 7.59 8.59 7.25 9 7.25H21C21.41 7.25 21.75 7.59 21.75 8C21.75 8.41 21.41 8.75 21 8.75Z" fill="currentColor" />
                                </svg>
                            </Link>
                            {
                                !isLogin ? (
                                    <Link to='/login' className='p-1 lg:p-2 rounded-sm bg-Tint-1'>
                                        <svg className='w-4 h-4 md:w-6 md:h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z" fill="#417F56" />
                                            <path d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z" fill="#417F56" />
                                        </svg>
                                    </Link>
                                ) : (

                                    <div className='flex h-10 items-center group'>
                                        <div className={`relative lg:p-2 rounded-sm ${isProfilePage ? "bg-Primary" : "bg-Tint-1"} cursor-pointer`}>
                                            <div onClick={() => {
                                                navigate('/profile')
                                                userProfilHandler()
                                            }} className='flex items-center gap-x-1 p-1'>
                                                <svg className={`w-4 h-4 md:w-6 md:h-6 ${isProfilePage ? "text-white" : "text-Primary"}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z" fill="currentColor" />
                                                    <path d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z" fill="currentColor" />
                                                </svg>
                                                {
                                                    !isProfilePage && (
                                                        <svg className={`rotate-180 group-hover:rotate-0 ${isProfilePage ? "text-white" : "text-Primary"} w-4 h-4 md:w-6 md:h-6 transition-all`} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.00001 11.2004C7.53335 11.2004 7.06668 11.0204 6.71335 10.6671L2.36668 6.32042C2.17335 6.12708 2.17335 5.80708 2.36668 5.61375C2.56001 5.42042 2.88001 5.42042 3.07335 5.61375L7.42001 9.96042C7.74001 10.2804 8.26001 10.2804 8.58001 9.96042L12.9267 5.61375C13.12 5.42042 13.44 5.42042 13.6333 5.61375C13.8267 5.80708 13.8267 6.12708 13.6333 6.32042L9.28668 10.6671C8.93335 11.0204 8.46668 11.2004 8.00001 11.2004Z" fill="currentColor" />
                                                        </svg>
                                                    )
                                                }
                                            </div>

                                            {
                                                !isProfilePage && (
                                                    <div className='hidden group-hover:flex flex-col gap-y- absolute top-8 left-0 z-40 divide-y divide-Gray-3 w-36 bg-white rounded-sm shadow-loginBox transition-all'>
                                                        <Link to='/profile' onClick={userProfilHandler} className='flex items-center gap-x-1 text-Gray-8 p-2'>
                                                            <svg className='w-4 h-4' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.00033 8.49967C5.88699 8.49967 4.16699 6.77967 4.16699 4.66634C4.16699 2.55301 5.88699 0.833008 8.00033 0.833008C10.1137 0.833008 11.8337 2.55301 11.8337 4.66634C11.8337 6.77967 10.1137 8.49967 8.00033 8.49967ZM8.00033 1.83301C6.44033 1.83301 5.16699 3.10634 5.16699 4.66634C5.16699 6.22634 6.44033 7.49967 8.00033 7.49967C9.56033 7.49967 10.8337 6.22634 10.8337 4.66634C10.8337 3.10634 9.56033 1.83301 8.00033 1.83301Z" fill="#353535" />
                                                                <path d="M13.7268 15.1667C13.4534 15.1667 13.2268 14.94 13.2268 14.6667C13.2268 12.3667 10.8801 10.5 8.0001 10.5C5.1201 10.5 2.77344 12.3667 2.77344 14.6667C2.77344 14.94 2.54677 15.1667 2.27344 15.1667C2.0001 15.1667 1.77344 14.94 1.77344 14.6667C1.77344 11.82 4.56677 9.5 8.0001 9.5C11.4334 9.5 14.2268 11.82 14.2268 14.6667C14.2268 14.94 14.0001 15.1667 13.7268 15.1667Z" fill="#353535" />
                                                            </svg>
                                                            <span className='font-EstedadRegular text-sm'>پروفایل</span>
                                                        </Link>
                                                        <Link to="/profile" onClick={userOrderHandler} className='flex items-center gap-x-1 text-Gray-8  p-2'>
                                                            <svg className='w-4 h-4' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.66699 6.5H4.66699C4.39366 6.5 4.16699 6.27333 4.16699 6C4.16699 5.72667 4.39366 5.5 4.66699 5.5H8.66699C8.94033 5.5 9.16699 5.72667 9.16699 6C9.16699 6.27333 8.94033 6.5 8.66699 6.5Z" fill="#353535" />
                                                                <path d="M12.6936 9.86613C11.6869 9.86613 10.8336 9.11946 10.7536 8.15946C10.7003 7.60613 10.9003 7.06614 11.3003 6.67281C11.6336 6.32614 12.1069 6.13281 12.6069 6.13281H14.0003C14.6603 6.15281 15.1669 6.67278 15.1669 7.31279V8.68616C15.1669 9.32616 14.6603 9.84613 14.0203 9.86613H12.6936ZM13.9802 7.13281H12.6136C12.3803 7.13281 12.1669 7.21948 12.0136 7.37948C11.8203 7.56614 11.7269 7.81946 11.7536 8.07279C11.7869 8.51279 12.2136 8.86613 12.6936 8.86613H14.0003C14.0869 8.86613 14.1669 8.78616 14.1669 8.68616V7.31279C14.1669 7.21279 14.0869 7.13948 13.9802 7.13281Z" fill="#353535" />
                                                                <path d="M10.6663 14.1663H4.66634C2.37301 14.1663 0.833008 12.6263 0.833008 10.333V5.66634C0.833008 3.61301 2.09966 2.12635 4.06632 1.87968C4.24633 1.85301 4.45301 1.83301 4.66634 1.83301H10.6663C10.8263 1.83301 11.033 1.83967 11.2463 1.87301C13.213 2.09967 14.4997 3.59301 14.4997 5.66634V6.63302C14.4997 6.90635 14.273 7.13302 13.9997 7.13302H12.613C12.3797 7.13302 12.1664 7.21968 12.013 7.37968L12.0063 7.38635C11.8197 7.56635 11.733 7.81299 11.753 8.06633C11.7863 8.50633 12.213 8.85966 12.693 8.85966H13.9997C14.273 8.85966 14.4997 9.08633 14.4997 9.35966V10.3263C14.4997 12.6263 12.9597 14.1663 10.6663 14.1663ZM4.66634 2.83301C4.50634 2.83301 4.353 2.84633 4.19967 2.86633C2.733 3.053 1.83301 4.11967 1.83301 5.66634V10.333C1.83301 12.053 2.94634 13.1663 4.66634 13.1663H10.6663C12.3863 13.1663 13.4997 12.053 13.4997 10.333V9.86633H12.693C11.6863 9.86633 10.833 9.11967 10.753 8.15967C10.6997 7.613 10.8997 7.06635 11.2997 6.67969C11.6463 6.32635 12.113 6.13302 12.613 6.13302H13.4997V5.66634C13.4997 4.10634 12.5863 3.03299 11.1063 2.85966C10.9463 2.83299 10.8063 2.83301 10.6663 2.83301H4.66634Z" fill="#353535" />
                                                            </svg>
                                                            <span className='font-EstedadRegular text-sm'>پیگیری سفارش</span>
                                                        </Link>
                                                        <Link to="/profile" onClick={userInterestsHandler} className='flex items-center gap-x-1 text-Gray-8  p-2'>
                                                            <svg className='w-4 h-4' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7.99967 14.4331C7.79301 14.4331 7.59301 14.4064 7.42634 14.3464C4.87967 13.4731 0.833008 10.3731 0.833008 5.79307C0.833008 3.45974 2.71967 1.56641 5.03967 1.56641C6.16634 1.56641 7.21967 2.00641 7.99967 2.79307C8.77967 2.00641 9.83301 1.56641 10.9597 1.56641C13.2797 1.56641 15.1663 3.46641 15.1663 5.79307C15.1663 10.3797 11.1197 13.4731 8.57301 14.3464C8.40634 14.4064 8.20634 14.4331 7.99967 14.4331ZM5.03967 2.56641C3.27301 2.56641 1.83301 4.01307 1.83301 5.79307C1.83301 10.3464 6.21301 12.8797 7.75301 13.4064C7.87301 13.4464 8.13301 13.4464 8.25301 13.4064C9.78634 12.8797 14.173 10.3531 14.173 5.79307C14.173 4.01307 12.733 2.56641 10.9663 2.56641C9.95301 2.56641 9.01301 3.03974 8.40634 3.85974C8.21967 4.11307 7.79301 4.11307 7.60634 3.85974C6.98634 3.03307 6.05301 2.56641 5.03967 2.56641Z" fill="#353535" />
                                                            </svg>
                                                            <span className='font-EstedadRegular text-sm'>علاقه‌مندی‌ها</span>
                                                        </Link>
                                                        <Link to="/profile" onClick={userAddressHandler} className='flex items-center gap-x-1 text-Gray-8  p-2'>
                                                            <svg className='w-4 h-4' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7.99992 9.4463C6.57992 9.4463 5.41992 8.29297 5.41992 6.8663C5.41992 5.43964 6.57992 4.29297 7.99992 4.29297C9.41992 4.29297 10.5799 5.4463 10.5799 6.87297C10.5799 8.29964 9.41992 9.4463 7.99992 9.4463ZM7.99992 5.29297C7.13326 5.29297 6.41992 5.99964 6.41992 6.87297C6.41992 7.7463 7.12659 8.45297 7.99992 8.45297C8.87326 8.45297 9.57992 7.7463 9.57992 6.87297C9.57992 5.99964 8.86659 5.29297 7.99992 5.29297Z" fill="#353535" />
                                                                <path d="M8.00012 15.173C7.01345 15.173 6.02012 14.7997 5.24678 14.0597C3.28012 12.1663 1.10678 9.14634 1.92678 5.55301C2.66678 2.29301 5.51345 0.833008 8.00012 0.833008C8.00012 0.833008 8.00012 0.833008 8.00678 0.833008C10.4935 0.833008 13.3401 2.29301 14.0801 5.55967C14.8934 9.15301 12.7201 12.1663 10.7534 14.0597C9.98012 14.7997 8.98678 15.173 8.00012 15.173ZM8.00012 1.83301C6.06012 1.83301 3.56678 2.86634 2.90678 5.77301C2.18678 8.91301 4.16012 11.6197 5.94678 13.333C7.10012 14.4463 8.90678 14.4463 10.0601 13.333C11.8401 11.6197 13.8134 8.91301 13.1068 5.77301C12.4401 2.86634 9.94012 1.83301 8.00012 1.83301Z" fill="#353535" />
                                                            </svg>
                                                            <span className='font-EstedadRegular text-sm'>آدرس‌های من</span>
                                                        </Link>
                                                        <div onClick={() => {
                                                            logoutHandler()
                                                            navigate('/')
                                                        }} className='flex items-center gap-x-1 text-Error p-2'>
                                                            <svg className='w-4 h-4' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.1597 14.8467H10.073C7.11302 14.8467 5.68635 13.68 5.43968 11.0667C5.41302 10.7933 5.61302 10.5467 5.89302 10.52C6.15968 10.4933 6.41302 10.7 6.43968 10.9733C6.63302 13.0667 7.61968 13.8467 10.0797 13.8467H10.1664C12.8797 13.8467 13.8397 12.8867 13.8397 10.1733V5.82665C13.8397 3.11332 12.8797 2.15332 10.1664 2.15332H10.0797C7.60635 2.15332 6.61968 2.94665 6.43968 5.07999C6.40635 5.35332 6.17302 5.55999 5.89302 5.53332C5.61302 5.51332 5.41302 5.26665 5.43302 4.99332C5.65968 2.33999 7.09302 1.15332 10.073 1.15332H10.1597C13.433 1.15332 14.833 2.55332 14.833 5.82665V10.1733C14.833 13.4467 13.433 14.8467 10.1597 14.8467Z" fill="#353535" />
                                                                <path d="M9.99975 8.5H2.41309C2.13975 8.5 1.91309 8.27333 1.91309 8C1.91309 7.72667 2.13975 7.5 2.41309 7.5H9.99975C10.2731 7.5 10.4998 7.72667 10.4998 8C10.4998 8.27333 10.2731 8.5 9.99975 8.5Z" fill="#353535" />
                                                                <path d="M3.89964 10.7336C3.77297 10.7336 3.6463 10.6869 3.5463 10.5869L1.31297 8.35356C1.11964 8.16022 1.11964 7.84022 1.31297 7.64689L3.5463 5.41355C3.73964 5.22022 4.05964 5.22022 4.25297 5.41355C4.4463 5.60689 4.4463 5.92689 4.25297 6.12022L2.37297 8.00022L4.25297 9.88022C4.4463 10.0736 4.4463 10.3936 4.25297 10.5869C4.15964 10.6869 4.0263 10.7336 3.89964 10.7336Z" fill="#353535" />
                                                            </svg>
                                                            <span className='font-EstedadRegular text-sm'>خروج از حساب</span>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>

                                )
                            }
                        </div>
                    </div>
                </div>
            </header>

            {
                isSearch && (
                    <BoxGlobal close={closeSearchBox} headerTitle="جستجو">
                        <p className='font-EstedadMedium mb-3'>لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.</p>
                        <form action="#" className='flex items-center w-[409px] h-10 px-4 border border-solid border-Gray-4 rounded-lg'>
                            <input onKeyDown={handleKeyDown} onChange={(e) => setSearchInputValue(e.target.value)} value={searchInputValue} type="text" className='w-full h-full bg-transparent outline-none placeholder:font-EstedadRegular' placeholder='جستجو' />
                            <svg onClick={searchBoxHandler} className='mr-3 cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#353535" />
                                <path d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z" fill="#353535" />
                            </svg>
                        </form>
                    </BoxGlobal>
                )
            }

            {isOpenMenu && (
                <div
                    className="block md:hidden fixed inset-0 bg-black/60 backdrop-blur-[2px] z-40 transition-opacity"
                    onClick={() => setIsOpenMenu(false)}
                />
            )}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: isOpenMenu ? "0%" : "100%" }}
                transition={{ type: "spring", stiffness: 150, damping: 25 }}
                className="block md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50"
            >
                <div>
                    <div className='flex justify-between header_menu-mobile p-4 h-[94px]'>
                        <svg onClick={() => setIsOpenMenu(false)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="5.31348" y="7.41406" width="2" height="16" rx="1" transform="rotate(-45 5.31348 7.41406)" fill="white" />
                            <rect x="16.3135" y="6" width="2" height="16" rx="1" transform="rotate(45 16.3135 6)" fill="white" />
                        </svg>
                        <img className='my-auto' src="/Img/svg/site-logo-withe.svg" alt="Site Logo" />
                    </div>

                    <div className='flex flex-col rtl items-end gap-y-3 text-sm px-4 font-EstedadRegular mt-2'>
                        <NavLink to='/' className='w-full flex items-center gap-x-1 hover:text-Primary p-1'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.99997 12.5002C7.72664 12.5002 7.49997 12.2735 7.49997 12.0002V10.0002C7.49997 9.72687 7.72664 9.50021 7.99997 9.50021C8.27331 9.50021 8.49997 9.72687 8.49997 10.0002V12.0002C8.49997 12.2735 8.27331 12.5002 7.99997 12.5002Z" fill="currentColor" />
                                <path d="M11.7333 15.0402H4.26664C3.05331 15.0402 1.94664 14.1069 1.74664 12.9135L0.859974 7.60021C0.713307 6.77354 1.11997 5.71354 1.77997 5.18687L6.39997 1.48687C7.29331 0.766874 8.69997 0.77354 9.59997 1.49354L14.22 5.18687C14.8733 5.71354 15.2733 6.77354 15.14 7.60021L14.2533 12.9069C14.0533 14.0869 12.92 15.0402 11.7333 15.0402ZM7.99331 1.95354C7.63997 1.95354 7.28664 2.06021 7.02664 2.26687L2.40664 5.97354C2.03331 6.27354 1.76664 6.96687 1.84664 7.44021L2.73331 12.7469C2.85331 13.4469 3.55331 14.0402 4.26664 14.0402H11.7333C12.4466 14.0402 13.1466 13.4469 13.2666 12.7402L14.1533 7.43354C14.2266 6.96687 13.96 6.26021 13.5933 5.96687L8.97331 2.27354C8.70664 2.06021 8.34664 1.95354 7.99331 1.95354Z" fill="currentColor" />
                            </svg>
                            صفحه اصلی
                        </NavLink>
                        <NavLink to='/branch' className='w-full flex items-center gap-x-1 hover:text-Primary p-1'>
                            <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.19046 11.3751H1.62045C1.14545 11.3751 0.705454 11.1551 0.420454 10.7701C0.130454 10.3801 0.0454584 9.89011 0.190458 9.42511L2.29545 2.6601C2.48545 2.0301 3.06546 1.6001 3.72546 1.6001H9.87546C10.4805 1.6001 11.0255 1.96014 11.2555 2.52014C11.3805 2.81014 11.4055 3.14015 11.3305 3.46515L9.64546 10.2301C9.48546 10.9051 8.88546 11.3751 8.19046 11.3751ZM3.73045 2.3551C3.40545 2.3551 3.11046 2.57013 3.01546 2.88513L0.91046 9.65015C0.84046 9.88515 0.880455 10.1301 1.03045 10.3301C1.17045 10.5201 1.39046 10.6301 1.62546 10.6301H8.19546C8.54046 10.6301 8.84045 10.3951 8.92045 10.0601L10.6055 3.2901C10.6455 3.1251 10.6355 2.96012 10.5705 2.81512C10.4505 2.53012 10.1855 2.3501 9.88046 2.3501H3.73045V2.3551Z" fill="currentColor" />
                                <path d="M10.39 11.375H8C7.795 11.375 7.625 11.205 7.625 11C7.625 10.795 7.795 10.625 8 10.625H10.39C10.595 10.625 10.785 10.54 10.925 10.39C11.065 10.24 11.135 10.04 11.12 9.83501L10.625 3.02501C10.61 2.82001 10.765 2.63998 10.97 2.62498C11.175 2.61498 11.355 2.76495 11.37 2.96995L11.865 9.78001C11.895 10.19 11.75 10.6 11.47 10.9C11.195 11.205 10.8 11.375 10.39 11.375Z" fill="currentColor" />
                                <path d="M4.83988 3.56486C4.80988 3.56486 4.77989 3.55985 4.74989 3.55485C4.54989 3.50485 4.42489 3.30483 4.47489 3.09983L4.99488 0.939857C5.04488 0.739857 5.24488 0.614832 5.44988 0.664832C5.64988 0.714832 5.77489 0.91485 5.72489 1.11985L5.20489 3.27988C5.16489 3.44988 5.00988 3.56486 4.83988 3.56486Z" fill="currentColor" />
                                <path d="M8.18973 3.56987C8.16473 3.56987 8.13472 3.56986 8.10972 3.55986C7.90972 3.51486 7.77973 3.31485 7.81973 3.11485L8.28972 0.944872C8.33472 0.739872 8.53472 0.614894 8.73472 0.654894C8.93472 0.694894 9.06472 0.89984 9.02472 1.09984L8.55472 3.26988C8.51972 3.44988 8.36473 3.56987 8.18973 3.56987Z" fill="currentColor" />
                                <path d="M7.84961 6.375H3.84961C3.64461 6.375 3.47461 6.205 3.47461 6C3.47461 5.795 3.64461 5.625 3.84961 5.625H7.84961C8.05461 5.625 8.22461 5.795 8.22461 6C8.22461 6.205 8.05461 6.375 7.84961 6.375Z" fill="currentColor" />
                                <path d="M7.34961 8.375H3.34961C3.14461 8.375 2.97461 8.205 2.97461 8C2.97461 7.795 3.14461 7.625 3.34961 7.625H7.34961C7.55461 7.625 7.72461 7.795 7.72461 8C7.72461 8.205 7.55461 8.375 7.34961 8.375Z" fill="currentColor" />
                            </svg>
                            شعبه
                        </NavLink>
                        <NavLink to='/menu' onClick={mainCourseHandler} className='w-full flex items-center gap-x-1 hover:text-Primary p-1'>
                            <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.895 11.3701H3.105C1.735 11.3701 0.625 10.2551 0.625 8.8851V5.1801C0.625 4.5001 1.045 3.6451 1.585 3.2251L4.28 1.1251C5.09 0.495104 6.385 0.465104 7.225 1.0551L10.315 3.2201C10.91 3.6351 11.375 4.5251 11.375 5.2501V8.8901C11.375 10.2551 10.265 11.3701 8.895 11.3701ZM4.74 1.7151L2.045 3.8151C1.69 4.0951 1.375 4.7301 1.375 5.1801V8.8851C1.375 9.8401 2.15 10.6201 3.105 10.6201H8.895C9.85 10.6201 10.625 9.8451 10.625 8.8901V5.2501C10.625 4.7701 10.28 4.1051 9.885 3.8351L6.795 1.6701C6.225 1.2701 5.285 1.2901 4.74 1.7151Z" fill="currentColor" />
                                <path d="M6.75 9.375H5.25C4.215 9.375 3.375 8.535 3.375 7.5V6C3.375 4.965 4.215 4.125 5.25 4.125H6.75C7.785 4.125 8.625 4.965 8.625 6V7.5C8.625 8.535 7.785 9.375 6.75 9.375ZM5.25 4.875C4.63 4.875 4.125 5.38 4.125 6V7.5C4.125 8.12 4.63 8.625 5.25 8.625H6.75C7.37 8.625 7.875 8.12 7.875 7.5V6C7.875 5.38 7.37 4.875 6.75 4.875H5.25Z" fill="currentColor" />
                                <path d="M6 9.375C5.795 9.375 5.625 9.205 5.625 9V4.5C5.625 4.295 5.795 4.125 6 4.125C6.205 4.125 6.375 4.295 6.375 4.5V9C6.375 9.205 6.205 9.375 6 9.375Z" fill="currentColor" />
                                <path d="M8.25 7.125H3.75C3.545 7.125 3.375 6.955 3.375 6.75C3.375 6.545 3.545 6.375 3.75 6.375H8.25C8.455 6.375 8.625 6.545 8.625 6.75C8.625 6.955 8.455 7.125 8.25 7.125Z" fill="currentColor" />
                            </svg>
                            منو
                        </NavLink>
                        <NavLink to='/about-us' className='w-full flex items-center gap-x-1 hover:text-Primary p-1'>
                            <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.58027 5.81C4.56527 5.81 4.55527 5.81 4.54027 5.81C4.51527 5.805 4.48027 5.805 4.45027 5.81C3.00027 5.765 1.90527 4.625 1.90527 3.22C1.90527 1.79 3.07027 0.625 4.50027 0.625C5.93027 0.625 7.09527 1.79 7.09527 3.22C7.09027 4.625 5.99027 5.765 4.59527 5.81C4.59027 5.81 4.58527 5.81 4.58027 5.81ZM4.50027 1.375C3.48527 1.375 2.65527 2.205 2.65527 3.22C2.65527 4.22 3.43527 5.025 4.43027 5.06C4.46027 5.055 4.52527 5.055 4.59027 5.06C5.57027 5.015 6.34027 4.21 6.34527 3.22C6.34527 2.205 5.51527 1.375 4.50027 1.375Z" fill="currentColor" />
                                <path d="M8.27018 5.875C8.25518 5.875 8.24018 5.875 8.22518 5.87C8.02018 5.89 7.81018 5.745 7.79018 5.54C7.77018 5.335 7.89518 5.15 8.10018 5.125C8.16018 5.12 8.22518 5.12 8.28018 5.12C9.01018 5.08 9.58018 4.48 9.58018 3.745C9.58018 2.985 8.96518 2.37 8.20518 2.37C8.00018 2.375 7.83018 2.205 7.83018 2C7.83018 1.795 8.00018 1.625 8.20518 1.625C9.37518 1.625 10.3302 2.58 10.3302 3.75C10.3302 4.9 9.43018 5.83 8.28518 5.875C8.28018 5.875 8.27518 5.875 8.27018 5.875Z" fill="currentColor" />
                                <path d="M4.5848 11.275C3.6048 11.275 2.6198 11.025 1.8748 10.525C1.1798 10.065 0.799805 9.435 0.799805 8.75C0.799805 8.065 1.1798 7.43 1.8748 6.965C3.3748 5.97 5.8048 5.97 7.2948 6.965C7.9848 7.425 8.3698 8.055 8.3698 8.74C8.3698 9.425 7.9898 10.06 7.2948 10.525C6.5448 11.025 5.56481 11.275 4.5848 11.275ZM2.2898 7.595C1.8098 7.915 1.5498 8.325 1.5498 8.755C1.5498 9.18 1.8148 9.59 2.2898 9.905C3.5348 10.74 5.6348 10.74 6.8798 9.905C7.3598 9.585 7.6198 9.175 7.6198 8.745C7.6198 8.32 7.3548 7.91 6.8798 7.595C5.6348 6.765 3.5348 6.765 2.2898 7.595Z" fill="currentColor" />
                                <path d="M9.17008 10.375C8.99508 10.375 8.84008 10.255 8.80508 10.075C8.76508 9.87001 8.89508 9.67501 9.09508 9.63001C9.41008 9.56501 9.70008 9.44001 9.92508 9.26501C10.2101 9.05001 10.3651 8.78001 10.3651 8.49501C10.3651 8.21001 10.2101 7.94001 9.93008 7.73001C9.71008 7.56001 9.43508 7.44001 9.11008 7.36501C8.91008 7.32001 8.78008 7.12001 8.82508 6.91501C8.87008 6.71501 9.07008 6.58501 9.27508 6.63001C9.70508 6.72501 10.0801 6.89501 10.3851 7.13001C10.8501 7.48001 11.1151 7.97501 11.1151 8.49501C11.1151 9.01501 10.8451 9.51001 10.3801 9.86501C10.0701 10.105 9.68008 10.28 9.25008 10.365C9.22008 10.375 9.19508 10.375 9.17008 10.375Z" fill="currentColor" />
                            </svg>
                            درباره ما
                        </NavLink>
                        <NavLink to='/contact-us' className='w-full flex items-center gap-x-1 hover:text-Primary p-1'>
                            <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.725 11.375C8.16 11.375 7.565 11.24 6.95 10.98C6.35 10.725 5.745 10.375 5.155 9.95C4.57 9.52 4.005 9.04 3.47 8.515C2.94 7.98 2.46 7.415 2.035 6.835C1.605 6.235 1.26 5.635 1.015 5.055C0.755 4.435 0.625 3.835 0.625 3.27C0.625 2.88 0.695 2.51 0.83 2.165C0.97 1.81 1.195 1.48 1.5 1.195C1.885 0.815 2.325 0.625 2.795 0.625C2.99 0.625 3.19 0.67 3.36 0.75C3.555 0.84 3.72 0.975 3.84 1.155L5 2.79C5.105 2.935 5.185 3.075 5.24 3.215C5.305 3.365 5.34 3.515 5.34 3.66C5.34 3.85 5.285 4.035 5.18 4.21C5.105 4.345 4.99 4.49 4.845 4.635L4.505 4.99C4.51 5.005 4.515 5.015 4.52 5.025C4.58 5.13 4.7 5.31 4.93 5.58C5.175 5.86 5.405 6.115 5.635 6.35C5.93 6.64 6.175 6.87 6.405 7.06C6.69 7.3 6.875 7.42 6.985 7.475L6.975 7.5L7.34 7.14C7.495 6.985 7.645 6.87 7.79 6.795C8.065 6.625 8.415 6.595 8.765 6.74C8.895 6.795 9.035 6.87 9.185 6.975L10.845 8.155C11.03 8.28 11.165 8.44 11.245 8.63C11.32 8.82 11.355 8.995 11.355 9.17C11.355 9.41 11.3 9.65 11.195 9.875C11.09 10.1 10.96 10.295 10.795 10.475C10.51 10.79 10.2 11.015 9.84 11.16C9.495 11.3 9.12 11.375 8.725 11.375ZM2.795 1.375C2.52 1.375 2.265 1.495 2.02 1.735C1.79 1.95 1.63 2.185 1.53 2.44C1.425 2.7 1.375 2.975 1.375 3.27C1.375 3.735 1.485 4.24 1.705 4.76C1.93 5.29 2.245 5.84 2.645 6.39C3.045 6.94 3.5 7.475 4 7.98C4.5 8.475 5.04 8.935 5.595 9.34C6.135 9.735 6.69 10.055 7.24 10.285C8.095 10.65 8.895 10.735 9.555 10.46C9.81 10.355 10.035 10.195 10.24 9.965C10.355 9.84 10.445 9.705 10.52 9.545C10.58 9.42 10.61 9.29 10.61 9.16C10.61 9.08 10.595 9 10.555 8.91C10.54 8.88 10.51 8.825 10.415 8.76L8.755 7.58C8.655 7.51 8.565 7.46 8.48 7.425C8.37 7.38 8.325 7.335 8.155 7.44C8.055 7.49 7.965 7.565 7.865 7.665L7.485 8.04C7.29 8.23 6.99 8.275 6.76 8.19L6.625 8.13C6.42 8.02 6.18 7.85 5.915 7.625C5.675 7.42 5.415 7.18 5.1 6.87C4.855 6.62 4.61 6.355 4.355 6.06C4.12 5.785 3.95 5.55 3.845 5.355L3.785 5.205C3.755 5.09 3.745 5.025 3.745 4.955C3.745 4.775 3.81 4.615 3.935 4.49L4.31 4.1C4.41 4 4.485 3.905 4.535 3.82C4.575 3.755 4.59 3.7 4.59 3.65C4.59 3.61 4.575 3.55 4.55 3.49C4.515 3.41 4.46 3.32 4.39 3.225L3.23 1.585C3.18 1.515 3.12 1.465 3.045 1.43C2.965 1.395 2.88 1.375 2.795 1.375ZM6.975 7.505L6.895 7.845L7.03 7.495C7.005 7.49 6.985 7.495 6.975 7.505Z" fill="currentColor" />
                                <path d="M9.25 4.875C9.045 4.875 8.875 4.705 8.875 4.5C8.875 4.32 8.695 3.945 8.395 3.625C8.1 3.31 7.775 3.125 7.5 3.125C7.295 3.125 7.125 2.955 7.125 2.75C7.125 2.545 7.295 2.375 7.5 2.375C7.985 2.375 8.495 2.635 8.94 3.11C9.355 3.555 9.625 4.1 9.625 4.5C9.625 4.705 9.455 4.875 9.25 4.875Z" fill="currentColor" />
                                <path d="M11 4.875C10.795 4.875 10.625 4.705 10.625 4.5C10.625 2.775 9.225 1.375 7.5 1.375C7.295 1.375 7.125 1.205 7.125 1C7.125 0.795 7.295 0.625 7.5 0.625C9.635 0.625 11.375 2.365 11.375 4.5C11.375 4.705 11.205 4.875 11 4.875Z" fill="currentColor" />
                            </svg>
                            تماس با ما
                        </NavLink>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
