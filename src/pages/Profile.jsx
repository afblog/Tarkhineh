import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { GlobalContext } from '../Contexts/GlobalContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect, useRef } from 'react'
import Cookies from 'js-cookie'
import IranMap from '../components/IranMap'
import Alert from '../components/Alert'

export default function Profile() {

    const navigate = useNavigate()

    const [isEditeUser, setIsEditeUser] = useState(false)

    const [isMap, setIsMap] = useState(false)

    const [address, setAddress] = useState("هیچ مکانی انتخاب نشده است");
    const mapRef = useRef(null);

    const [user, setUser] = useState({})
    const [editedUser, setEditedUser] = useState({})

    const goToUserLocation = () => {
        if (!navigator.geolocation) {
            alert("مرورگر شما از موقعیت‌یابی پشتیبانی نمی‌کند!");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                if (mapRef.current) {
                    mapRef.current.flyTo([latitude, longitude], 13);
                }
            },
            (error) => {
                alert("دسترسی به موقعیت کاربر رد شد یا مشکلی پیش آمد!");
            },
            { enableHighAccuracy: true }
        );
    };

    const getAllUsers = async () => {
        const response = await fetch('https://tarkhine-test1.liara.run/auth/users/')
        const data = response.json()
        console.log(data);

    }

    const {
        isUserProfil,
        isUserOrder,
        isUserInterests,
        isUserAddress,
        userProfilHandler,
        userOrderHandler,
        userInterestsHandler,
        userAddressHandler,
        logoutHandler,
        isAlert,
        alertMsg,
        setAlertMsg,
        setIsAlert
    } = useContext(GlobalContext)

    const getUserData = async () => {
        try {
            const accessToken = Cookies.get("accessToken");

            if (!accessToken) {
                console.error("No access token found");
                return;
            }

            const response = await fetch('https://tarkhine-test1.liara.run/auth/users/me/', {
                method: "GET",
                headers: {
                    "Authorization": `JWT ${accessToken}`,
                    "Content-Type": "application/json"
                }
            })
            if (!response.ok) {
                throw new Error
            } else {
                const data = await response.json()
                setUser(data)
                setEditedUser(data)
            }
        } catch (err) {
            if (err.message === 'Failed to fetch') {
                setIsAlert('error')
                setAlertMsg('مشکلی در ارتباط با سرور رخ داده است')
            }
        }
    }

    const editUserData = async (e) => {
        e.preventDefault()
        // try {
        //     const response = await fetch('https://tarkhine-test1.liara.run/auth/users/me/', {
        //         method: 'PATCH',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(editedUser)
        //     })
        //     if (!response.ok) {
        //         throw new Error
        //     } else {
        //         setIsEditeUser(false)
        //         getUserData()
        //         setIsAlert('success')
        //         setAlertMsg('اطلاعات با موفقیت بروز شدن')
        //     }
        // } catch (err) {
        //     if (err.message === 'Failed to fetch') {
        //         setIsAlert('error')
        //         setAlertMsg('مشکلی در ارتباط با سرور رخ داده است')
        //     }
        // }
        getAllUsers()
        
    }

    useEffect(() => {
        getUserData()
    }, [])

    const addressBtnHandler = () => {
        setIsMap(true)
    }

    const closeAlert = () => setIsAlert(null)
    const closeMap = () => setIsMap(false)

    return (
        <>
            {
                isAlert === 'warning' && (<Alert message={alertMsg} type='warning' onClose={closeAlert} />)
            }
            {
                isAlert === 'success' && (<Alert message={alertMsg} type='success' onClose={closeAlert} />)
            }

            {
                isAlert === 'error' && (<Alert message={alertMsg} type='error' onClose={closeAlert} />)
            }

            {
                isMap && (
                    <>
                        <div onClick={closeMap} className='fixed inset-0 hidden md:flex items-center justify-center bg-black/60 z-40 backdrop-blur-xs transition-all'>
                        </div>
                        <div className='fixed inset-0 md:m-auto h-svh z-40 w-full md:w-[600px] md:mt-30'>
                            <div className='flex items-center w-full p-4 md:p-6 bg-Gray-3 md:rounded-t-lg'>
                                <svg onClick={closeMap} className='absolute w-6 md:w-10 h-6 md:h-10 cursor-pointer text-Gray-7 hover:text-Gray-5 transition-all' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="3.72611" height="29.8089" rx="1.86305" transform="matrix(0.698447 -0.715662 0.698447 0.715662 8.45508 11.667)" fill="currentColor" />
                                    <rect width="3.72611" height="29.8089" rx="1.86305" transform="matrix(0.698447 0.715662 -0.698447 0.715662 28.6973 9.00049)" fill="currentColor" />
                                </svg>
                                <span className='inline-block mx-auto shrink-0 font-EstedadMedium md:font-EstedadBold text-sm md:text-xl'>افزودن آدرس</span>
                            </div>
                            <div className='relative w-full h-full md:h-[500px] md:rounded-b-lg'>
                                <div className='w-full h-full absolute z-10'>
                                    <IranMap setAddress={setAddress} mapRef={mapRef} />
                                </div>
                                <div className='rtl flex items-center justify-center absolute bottom-40 md:bottom-20 w-full z-20'>
                                    <p className="p-2 shadow-2xl flex items-center gap-x-1 font-EstedadRegular w-[300px] sm:w-[420px] text-Gray-8 text-sm bg-white rounded-sm">
                                        <svg className='shrink-0' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9989 14.1699C9.86891 14.1699 8.12891 12.4399 8.12891 10.2999C8.12891 8.15994 9.86891 6.43994 11.9989 6.43994C14.1289 6.43994 15.8689 8.16994 15.8689 10.3099C15.8689 12.4499 14.1289 14.1699 11.9989 14.1699ZM11.9989 7.93994C10.6989 7.93994 9.62891 8.99994 9.62891 10.3099C9.62891 11.6199 10.6889 12.6799 11.9989 12.6799C13.3089 12.6799 14.3689 11.6199 14.3689 10.3099C14.3689 8.99994 13.2989 7.93994 11.9989 7.93994Z" fill="#717171" />
                                            <path d="M12.0016 22.76C10.5216 22.76 9.03164 22.2 7.87164 21.09C4.92164 18.25 1.66164 13.72 2.89164 8.33C4.00164 3.44 8.27164 1.25 12.0016 1.25C12.0016 1.25 12.0016 1.25 12.0116 1.25C15.7416 1.25 20.0116 3.44 21.1216 8.34C22.3416 13.73 19.0816 18.25 16.1316 21.09C14.9716 22.2 13.4816 22.76 12.0016 22.76ZM12.0016 2.75C9.09164 2.75 5.35164 4.3 4.36164 8.66C3.28164 13.37 6.24164 17.43 8.92164 20C10.6516 21.67 13.3616 21.67 15.0916 20C17.7616 17.43 20.7216 13.37 19.6616 8.66C18.6616 4.3 14.9116 2.75 12.0016 2.75Z" fill="#717171" />
                                        </svg>
                                        {
                                            address ? address : "آدرس معتبر نمی باشد"
                                        }
                                    </p>
                                </div>
                                <div className='absolute z-20 bottom-24 md:bottom-5 left-0 right-0 flex items-center justify-center'>
                                    <button className='text-white bg-Primary text-base font-EstedadMedium py-1.5 px-20 rounded-sm cursor-pointer'>ثبت موقعیت</button>
                                </div>
                                <button onClick={goToUserLocation} className='absolute z-20 top-8 right-6 bg-white py-1.5 px-6 rounded-sm flex items-center gap-x-1 font-EstedadMedium text-base text-Primary cursor-pointer'>
                                    موقعیت من
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 20.25C7.45 20.25 3.75 16.55 3.75 12C3.75 7.45 7.45 3.75 12 3.75C16.55 3.75 20.25 7.45 20.25 12C20.25 16.55 16.55 20.25 12 20.25ZM12 5.25C8.28 5.25 5.25 8.28 5.25 12C5.25 15.72 8.28 18.75 12 18.75C15.72 18.75 18.75 15.72 18.75 12C18.75 8.28 15.72 5.25 12 5.25Z" fill="#417F56" />
                                        <path d="M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z" fill="#417F56" />
                                        <path d="M12 4.75C11.59 4.75 11.25 4.41 11.25 4V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V4C12.75 4.41 12.41 4.75 12 4.75Z" fill="#417F56" />
                                        <path d="M4 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H4C4.41 11.25 4.75 11.59 4.75 12C4.75 12.41 4.41 12.75 4 12.75Z" fill="#417F56" />
                                        <path d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V20C11.25 19.59 11.59 19.25 12 19.25C12.41 19.25 12.75 19.59 12.75 20V22C12.75 22.41 12.41 22.75 12 22.75Z" fill="#417F56" />
                                        <path d="M22 12.75H20C19.59 12.75 19.25 12.41 19.25 12C19.25 11.59 19.59 11.25 20 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.41 12.75 22 12.75Z" fill="#417F56" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </>
                )
            }

            <Header />
            <main className='rtl container py-5 lg:py-12'>
                <div className='hidden lg:flex justify-between gap-x-6'>
                    <div className='w-1/4 h-[342px] py-4 px-2 border border-solid border-Gray-4 rounded-lg'>
                        <div className='flex items-center gap-x-6'>
                            <div className='w-20 border border-solid border-Gray-4 rounded-full'>
                                <img className='w-full' src="../public/img/png/profile-img.png" alt="" />
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <p className='text-base font-EstedadRegular text-Gray-8'>کاربر ترخینه</p>
                                <span className='text-xs font-EstedadRegular text-Gray-7'>abolfaz@gmail.com</span>
                            </div>
                        </div>
                        <div className='w-full h-px bg-Gray-6 my-2'></div>
                        <div className='flex flex-col gap-y-1'>
                            <span onClick={userProfilHandler} className={`inline-flex  w-fit items-center gap-x-1 p-2 text-base font-EstedadRegular text-Gray-8 ${isUserProfil ? "relative text-Primary before:absolute before:right-0 before:w-0.5 before:bg-Primary before:h-full before:rounded-l-sm" : ""} hover:text-Primary transition-all cursor-pointer`}>
                                <svg className='w-4 h-4' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0007 10C12.3018 10 14.1673 8.13454 14.1673 5.83335C14.1673 3.53217 12.3018 1.66669 10.0007 1.66669C7.69946 1.66669 5.83398 3.53217 5.83398 5.83335C5.83398 8.13454 7.69946 10 10.0007 10Z" fill="currentColor" />
                                    <path d="M10.0008 12.0833C5.82578 12.0833 2.42578 14.8833 2.42578 18.3333C2.42578 18.5666 2.60911 18.75 2.84245 18.75H17.1591C17.3924 18.75 17.5758 18.5666 17.5758 18.3333C17.5758 14.8833 14.1758 12.0833 10.0008 12.0833Z" fill="currentColor" />
                                </svg>
                                پروفایل
                            </span>
                            <span onClick={userOrderHandler} className={`inline-flex w-fit items-center gap-x-1 p-2 text-base font-EstedadRegular text-Gray-8  ${isUserOrder ? "relative text-Primary before:absolute before:right-0 before:w-0.5 before:bg-Primary before:h-full before:rounded-l-sm" : ""} hover:text-Primary transition-all cursor-pointer`}>
                                <svg className='w-4 h-4' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.66602 6.5H4.66602C4.39268 6.5 4.16602 6.27333 4.16602 6C4.16602 5.72667 4.39268 5.5 4.66602 5.5H8.66602C8.93935 5.5 9.16602 5.72667 9.16602 6C9.16602 6.27333 8.93935 6.5 8.66602 6.5Z" fill="currentColor" />
                                    <path d="M12.6926 9.86662C11.6859 9.86662 10.8326 9.11995 10.7526 8.15995C10.6993 7.60662 10.8993 7.06663 11.2993 6.6733C11.6326 6.32663 12.1059 6.1333 12.6059 6.1333H13.9993C14.6593 6.1533 15.166 6.67327 15.166 7.31327V8.68665C15.166 9.32665 14.6593 9.84662 14.0193 9.86662H12.6926ZM13.9793 7.1333H12.6126C12.3793 7.1333 12.166 7.21996 12.0126 7.37996C11.8193 7.56663 11.726 7.81995 11.7526 8.07328C11.786 8.51328 12.2126 8.86662 12.6926 8.86662H13.9993C14.086 8.86662 14.166 8.78665 14.166 8.68665V7.31327C14.166 7.21327 14.0859 7.13997 13.9793 7.1333Z" fill="currentColor" />
                                    <path d="M10.6673 14.1666H4.66732C2.37398 14.1666 0.833984 12.6266 0.833984 10.3333V5.66665C0.833984 3.61331 2.10063 2.12665 4.0673 1.87998C4.2473 1.85332 4.45398 1.83331 4.66732 1.83331H10.6673C10.8273 1.83331 11.034 1.83998 11.2473 1.87331C13.214 2.09998 14.5007 3.59331 14.5007 5.66665V6.63332C14.5007 6.90665 14.274 7.13332 14.0007 7.13332H12.614C12.3806 7.13332 12.1673 7.21998 12.014 7.37998L12.0073 7.38666C11.8207 7.56666 11.734 7.8133 11.754 8.06663C11.7873 8.50663 12.214 8.85997 12.694 8.85997H14.0007C14.274 8.85997 14.5007 9.08663 14.5007 9.35997V10.3266C14.5007 12.6266 12.9607 14.1666 10.6673 14.1666ZM4.66732 2.83331C4.50732 2.83331 4.35398 2.84664 4.20064 2.86664C2.73398 3.0533 1.83398 4.11998 1.83398 5.66665V10.3333C1.83398 12.0533 2.94732 13.1666 4.66732 13.1666H10.6673C12.3873 13.1666 13.5007 12.0533 13.5007 10.3333V9.86664H12.694C11.6873 9.86664 10.834 9.11997 10.754 8.15997C10.7007 7.61331 10.9007 7.06666 11.3007 6.67999C11.6473 6.32666 12.114 6.13332 12.614 6.13332H13.5007V5.66665C13.5007 4.10665 12.5873 3.0333 11.1073 2.85997C10.9473 2.8333 10.8073 2.83331 10.6673 2.83331H4.66732Z" fill="currentColor" />
                                </svg>
                                پیگیری سفارشات
                            </span>
                            <span onClick={userInterestsHandler} className={`inline-flex w-fit items-center gap-x-1 p-2 text-base font-EstedadRegular text-Gray-8  ${isUserInterests ? "relative text-Primary before:absolute before:right-0 before:w-0.5 before:bg-Primary before:h-full before:rounded-l-sm" : ""} hover:text-Primary transition-all cursor-pointer`}>
                                <svg className='w-4 h-4' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00065 14.4333C7.79398 14.4333 7.59398 14.4066 7.42732 14.3467C4.88065 13.4733 0.833984 10.3733 0.833984 5.79332C0.833984 3.45998 2.72065 1.56665 5.04065 1.56665C6.16732 1.56665 7.22065 2.00665 8.00065 2.79332C8.78065 2.00665 9.83399 1.56665 10.9607 1.56665C13.2807 1.56665 15.1673 3.46665 15.1673 5.79332C15.1673 10.38 11.1207 13.4733 8.57398 14.3467C8.40732 14.4066 8.20732 14.4333 8.00065 14.4333ZM5.04065 2.56665C3.27398 2.56665 1.83398 4.01332 1.83398 5.79332C1.83398 10.3466 6.21398 12.88 7.75398 13.4066C7.87398 13.4466 8.13398 13.4466 8.25398 13.4066C9.78732 12.88 14.174 10.3533 14.174 5.79332C14.174 4.01332 12.734 2.56665 10.9673 2.56665C9.95399 2.56665 9.01398 3.03998 8.40732 3.85998C8.22065 4.11332 7.79398 4.11332 7.60732 3.85998C6.98732 3.03332 6.05398 2.56665 5.04065 2.56665Z" fill="currentColor" />
                                </svg>
                                علاقمندی‌ها
                            </span>
                            <span onClick={userAddressHandler} className={`inline-flex w-fit items-center gap-x-1 p-2 text-base font-EstedadRegular text-Gray-8  ${isUserAddress ? "relative text-Primary before:absolute before:right-0 before:w-0.5 before:bg-Primary before:h-full before:rounded-l-sm" : ""} hover:text-Primary transition-all cursor-pointer`}>
                                <svg className='w-4 h-4' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.99992 9.44667C6.57992 9.44667 5.41992 8.29333 5.41992 6.86667C5.41992 5.44 6.57992 4.29333 7.99992 4.29333C9.41992 4.29333 10.5799 5.44667 10.5799 6.87334C10.5799 8.3 9.41992 9.44667 7.99992 9.44667ZM7.99992 5.29333C7.13326 5.29333 6.41992 6 6.41992 6.87334C6.41992 7.74667 7.12659 8.45333 7.99992 8.45333C8.87326 8.45333 9.57992 7.74667 9.57992 6.87334C9.57992 6 8.86659 5.29333 7.99992 5.29333Z" fill="currentColor" />
                                    <path d="M7.99914 15.1733C7.01247 15.1733 6.01914 14.8 5.24581 14.06C3.27914 12.1666 1.10581 9.14665 1.92581 5.55331C2.66581 2.29331 5.51247 0.833313 7.99914 0.833313C7.99914 0.833313 7.99914 0.833313 8.00581 0.833313C10.4925 0.833313 13.3391 2.29331 14.0791 5.55998C14.8925 9.15331 12.7191 12.1666 10.7525 14.06C9.97914 14.8 8.98581 15.1733 7.99914 15.1733ZM7.99914 1.83331C6.05914 1.83331 3.56581 2.86665 2.90581 5.77331C2.18581 8.91331 4.15914 11.62 5.94581 13.3333C7.09914 14.4466 8.90581 14.4466 10.0591 13.3333C11.8391 11.62 13.8125 8.91331 13.1058 5.77331C12.4391 2.86665 9.93914 1.83331 7.99914 1.83331Z" fill="currentColor" />
                                </svg>
                                آدرس‌های من
                            </span>
                            <span onClick={() => {
                                logoutHandler()
                                navigate('/')
                            }} className='inline-flex w-fit items-center gap-x-1 p-2 text-base font-EstedadRegular text-Error cursor-pointer'>
                                <svg className='w-4 h-4' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.1597 14.8467H10.073C7.11302 14.8467 5.68635 13.68 5.43968 11.0667C5.41302 10.7933 5.61302 10.5467 5.89302 10.52C6.15968 10.4933 6.41302 10.7 6.43968 10.9733C6.63302 13.0667 7.61968 13.8467 10.0797 13.8467H10.1664C12.8797 13.8467 13.8397 12.8867 13.8397 10.1733V5.82665C13.8397 3.11332 12.8797 2.15332 10.1664 2.15332H10.0797C7.60635 2.15332 6.61968 2.94665 6.43968 5.07999C6.40635 5.35332 6.17302 5.55999 5.89302 5.53332C5.61302 5.51332 5.41302 5.26665 5.43302 4.99332C5.65968 2.33999 7.09302 1.15332 10.073 1.15332H10.1597C13.433 1.15332 14.833 2.55332 14.833 5.82665V10.1733C14.833 13.4467 13.433 14.8467 10.1597 14.8467Z" fill="currentColor" />
                                    <path d="M10.0007 8.5H2.41406C2.14073 8.5 1.91406 8.27333 1.91406 8C1.91406 7.72667 2.14073 7.5 2.41406 7.5H10.0007C10.2741 7.5 10.5007 7.72667 10.5007 8C10.5007 8.27333 10.2741 8.5 10.0007 8.5Z" fill="currentColor" />
                                    <path d="M3.89964 10.7333C3.77297 10.7333 3.6463 10.6866 3.5463 10.5866L1.31297 8.35331C1.11964 8.15998 1.11964 7.83998 1.31297 7.64664L3.5463 5.41331C3.73964 5.21998 4.05964 5.21998 4.25297 5.41331C4.4463 5.60664 4.4463 5.92664 4.25297 6.11998L2.37297 7.99998L4.25297 9.87998C4.4463 10.0733 4.4463 10.3933 4.25297 10.5866C4.15964 10.6866 4.0263 10.7333 3.89964 10.7333Z" fill="currentColor" />
                                </svg>
                                خروج
                            </span>
                        </div>
                    </div>
                    {
                        isUserProfil && (
                            <div className='w-3/4 h-[495px] p-6 border border-solid border-Gray-4 rounded-lg'>
                                {
                                    isEditeUser ? (
                                        <h3 className='text-xl font-EstedadExtraBold pb-2 text-Gray-8 border-b border-Gray-4'>ویرایش اطلاعات شخصی</h3>
                                    ) : (
                                        <h3 className='text-xl font-EstedadExtraBold pb-2 text-Gray-8 border-b border-Gray-4'>پروفایل من</h3>
                                    )
                                }
                                <form action="#" className='grid grid-cols-2 mt-12 gap-x-4 gap-y-6 px-20'>
                                    {
                                        isEditeUser ? (
                                            <>

                                                <input type="text" onChange={(e) => setEditedUser(prev => ({ ...prev, first_name: e.target.value }))} value={editedUser.first_name || ""} className='w-full py-2 px-4 text-Gray-8 font-EstedadRegular border border-solid border-Gray-4 rounded-sm outline-none placeholder:font-EstedadRegular placeholder:text-sm cursor-auto' placeholder='نام' />
                                                <input type="text" onChange={(e) => setEditedUser(prev => ({ ...prev, last_name: e.target.value }))} value={editedUser.last_name || ""} className='w-full py-2 px-4 text-Gray-8 font-EstedadRegular border border-solid border-Gray-4 rounded-sm outline-none placeholder:font-EstedadRegular placeholder:text-sm cursor-auto' placeholder='نام خانوادگی' />
                                                <input type="text" onChange={(e) => setEditedUser(prev => ({ ...prev, email: e.target.value }))} value={editedUser.email || ""} className='w-full py-2 px-4 text-Gray-8 font-EstedadRegular border border-solid border-Gray-4 rounded-sm outline-none placeholder:font-EstedadRegular placeholder:text-sm cursor-auto' placeholder='آدرس ایمیل' />
                                                <input type="text" onChange={(e) => setEditedUser(prev => ({ ...prev, username: e.target.value }))} value={editedUser.username || ""} className='w-full py-2 px-4 text-Gray-8 font-EstedadRegular border border-solid border-Gray-4 rounded-sm outline-none placeholder:font-EstedadRegular placeholder:text-sm cursor-auto' placeholder='نام کاربری' />
                                                <div className='flex items-center gap-x-4 col-span-2 justify-self-end'>
                                                    <button onClick={(e) => {
                                                        e.preventDefault()
                                                        setIsEditeUser(false)
                                                    }} className='px-10 py-1.5 mt-2 rounded-sm cursor-pointer text-base font-EstedadMedium text-Primary border border-solid border-Primary'>
                                                        انصراف
                                                    </button>
                                                    <button onClick={editUserData} className='px-4 py-1.5 mt-2 rounded-sm cursor-pointer text-base font-EstedadMedium text-white bg-Primary'>
                                                        ذخیره اطلاعات
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <input type="text" value={user.first_name || ""} className='w-full py-2 px-4 text-Gray-8 font-EstedadRegular border border-solid border-Gray-4 rounded-sm outline-none placeholder:font-EstedadRegular placeholder:text-sm cursor-auto' placeholder='نام' readOnly />
                                                <input type="text" value={user.last_name || ""} className='w-full py-2 px-4 text-Gray-8 font-EstedadRegular border border-solid border-Gray-4 rounded-sm outline-none placeholder:font-EstedadRegular placeholder:text-sm cursor-auto' placeholder='نام خانوادگی' readOnly />
                                                <input type="text" value={user.email || ""} className='w-full py-2 px-4 text-Gray-8 font-EstedadRegular border border-solid border-Gray-4 rounded-sm outline-none placeholder:font-EstedadRegular placeholder:text-sm cursor-auto' placeholder='آدرس ایمیل' readOnly />
                                                <input type="text" value={user.username || ""} className='w-full py-2 px-4 text-Gray-8 font-EstedadRegular border border-solid border-Gray-4 rounded-sm outline-none placeholder:font-EstedadRegular placeholder:text-sm cursor-auto' placeholder='نام کاربری' readOnly />
                                                <button onClick={(e) => {
                                                    e.preventDefault()
                                                    setIsEditeUser(true)
                                                }} className='flex col-span-2 items-center justify-center px-10 py-1.5 mt-2 rounded-sm cursor-pointer gap-x-2 text-base font-EstedadMedium text-Primary hover:bg-Primary hover:text-white border border-solid border-Primary justify-self-center transition-all'>
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.03999 19.52C5.42999 19.52 4.85999 19.31 4.44999 18.92C3.92999 18.43 3.67999 17.69 3.76999 16.89L4.13999 13.65C4.20999 13.04 4.57999 12.23 5.00999 11.79L13.22 3.09999C15.27 0.929988 17.41 0.869988 19.58 2.91999C21.75 4.96999 21.81 7.10999 19.76 9.27999L11.55 17.97C11.13 18.42 10.35 18.84 9.73999 18.94L6.51999 19.49C6.34999 19.5 6.19999 19.52 6.03999 19.52ZM16.43 2.90999C15.66 2.90999 14.99 3.38999 14.31 4.10999L6.09999 12.81C5.89999 13.02 5.66999 13.52 5.62999 13.81L5.25999 17.05C5.21999 17.38 5.29999 17.65 5.47999 17.82C5.65999 17.99 5.92999 18.05 6.25999 18L9.47999 17.45C9.76999 17.4 10.25 17.14 10.45 16.93L18.66 8.23999C19.9 6.91999 20.35 5.69999 18.54 3.99999C17.74 3.22999 17.05 2.90999 16.43 2.90999Z" fill="currentColor" />
                                                        <path d="M17.8404 10.95C17.8204 10.95 17.7904 10.95 17.7704 10.95C14.6504 10.64 12.1404 8.26997 11.6604 5.16997C11.6004 4.75997 11.8804 4.37997 12.2904 4.30997C12.7004 4.24997 13.0804 4.52997 13.1504 4.93997C13.5304 7.35997 15.4904 9.21997 17.9304 9.45997C18.3404 9.49997 18.6404 9.86997 18.6004 10.28C18.5504 10.66 18.2204 10.95 17.8404 10.95Z" fill="currentColor" />
                                                        <path d="M21.5 22.75H3.5C3.09 22.75 2.75 22.41 2.75 22C2.75 21.59 3.09 21.25 3.5 21.25H21.5C21.91 21.25 22.25 21.59 22.25 22C22.25 22.41 21.91 22.75 21.5 22.75Z" fill="currentColor" />
                                                    </svg>
                                                    ویرایش اطلاعات شخصی
                                                </button>
                                            </>
                                        )
                                    }
                                </form>
                            </div>
                        )
                    }
                    {
                        isUserOrder && (
                            <div className='flex items-center justify-center w-3/4 h-[495px] p-6 border border-solid border-Gray-4 rounded-lg'>
                                <h3 className='font-EstedadBold text-2xl text-Primary'>بزودی ...</h3>
                            </div>
                        )
                    }
                    {
                        isUserInterests && (
                            <div className='w-3/4 h-[342px] py-4 px-2 border border-solid border-Gray-4 rounded-lg'></div>
                        )
                    }
                    {
                        isUserAddress && (
                            <div className='relative h-[495px] flex flex-col items-center justify-center w-3/4 py-4 px-2 border border-solid border-Gray-4 rounded-lg'>
                                <div className='w-[325px] h-[313px] absolute -z-10'>
                                    <img className='w-full h-full' src="../public/img/svg/shoppingCart-img.svg" alt="Shoppin Cart Empty" />
                                </div>
                                <p className='font-EstedadRegular text-sm md:text-xl text-Gray-6 mb-8'>شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!</p>
                                <button onClick={addressBtnHandler} className='py-1.5 px-12 border border-solid border-Primary rounded-sm text-base font-EstedadMedium text-Primary hover:text-white hover:bg-Primary transition-all cursor-pointer'>افزودن آدرس</button>
                            </div>
                        )
                    }
                </div>
                <div className='flex flex-col lg:hidden'>
                    <div className='flex items-center gap-x-2 sm:gap-x-6'>
                        <div className='w-12 sm:w-20 border border-solid border-Gray-4 rounded-full'>
                            <img className='w-full' src="../public/img/png/profile-img.png" alt="" />
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <p className='text-sm sm:text-base font-EstedadRegular text-Gray-8'>کاربر ترخینه</p>
                            <span className='text-xs font-EstedadRegular text-Gray-7'>abolfaz@gmail.com</span>
                        </div>
                    </div>
                    <div className='w-full h-px bg-Gray-6 my-2'></div>
                    <div className='flex flex-col gap-y-1'>
                        <span onClick={userProfilHandler} className={`inline-flex items-center gap-x-1 p-2 text-sm sm:text-base font-EstedadRegular text-Gray-8 ${isUserProfil ? "relative text-Primary before:absolute before:right-0 before:w-0.5 before:bg-Primary before:h-full before:rounded-l-sm" : ""} hover:text-Primary transition-all cursor-pointer`}>
                            <svg className='w-4 h-4' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0007 10C12.3018 10 14.1673 8.13454 14.1673 5.83335C14.1673 3.53217 12.3018 1.66669 10.0007 1.66669C7.69946 1.66669 5.83398 3.53217 5.83398 5.83335C5.83398 8.13454 7.69946 10 10.0007 10Z" fill="currentColor" />
                                <path d="M10.0008 12.0833C5.82578 12.0833 2.42578 14.8833 2.42578 18.3333C2.42578 18.5666 2.60911 18.75 2.84245 18.75H17.1591C17.3924 18.75 17.5758 18.5666 17.5758 18.3333C17.5758 14.8833 14.1758 12.0833 10.0008 12.0833Z" fill="currentColor" />
                            </svg>
                            پروفایل
                        </span>
                        <span onClick={userOrderHandler} className={`inline-flex items-center gap-x-1 p-2 text-sm sm:text-base font-EstedadRegular text-Gray-8  ${isUserOrder ? "relative text-Primary before:absolute before:right-0 before:w-0.5 before:bg-Primary before:h-full before:rounded-l-sm" : ""} hover:text-Primary transition-all cursor-pointer`}>
                            <svg className='w-4 h-4' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.66602 6.5H4.66602C4.39268 6.5 4.16602 6.27333 4.16602 6C4.16602 5.72667 4.39268 5.5 4.66602 5.5H8.66602C8.93935 5.5 9.16602 5.72667 9.16602 6C9.16602 6.27333 8.93935 6.5 8.66602 6.5Z" fill="currentColor" />
                                <path d="M12.6926 9.86662C11.6859 9.86662 10.8326 9.11995 10.7526 8.15995C10.6993 7.60662 10.8993 7.06663 11.2993 6.6733C11.6326 6.32663 12.1059 6.1333 12.6059 6.1333H13.9993C14.6593 6.1533 15.166 6.67327 15.166 7.31327V8.68665C15.166 9.32665 14.6593 9.84662 14.0193 9.86662H12.6926ZM13.9793 7.1333H12.6126C12.3793 7.1333 12.166 7.21996 12.0126 7.37996C11.8193 7.56663 11.726 7.81995 11.7526 8.07328C11.786 8.51328 12.2126 8.86662 12.6926 8.86662H13.9993C14.086 8.86662 14.166 8.78665 14.166 8.68665V7.31327C14.166 7.21327 14.0859 7.13997 13.9793 7.1333Z" fill="currentColor" />
                                <path d="M10.6673 14.1666H4.66732C2.37398 14.1666 0.833984 12.6266 0.833984 10.3333V5.66665C0.833984 3.61331 2.10063 2.12665 4.0673 1.87998C4.2473 1.85332 4.45398 1.83331 4.66732 1.83331H10.6673C10.8273 1.83331 11.034 1.83998 11.2473 1.87331C13.214 2.09998 14.5007 3.59331 14.5007 5.66665V6.63332C14.5007 6.90665 14.274 7.13332 14.0007 7.13332H12.614C12.3806 7.13332 12.1673 7.21998 12.014 7.37998L12.0073 7.38666C11.8207 7.56666 11.734 7.8133 11.754 8.06663C11.7873 8.50663 12.214 8.85997 12.694 8.85997H14.0007C14.274 8.85997 14.5007 9.08663 14.5007 9.35997V10.3266C14.5007 12.6266 12.9607 14.1666 10.6673 14.1666ZM4.66732 2.83331C4.50732 2.83331 4.35398 2.84664 4.20064 2.86664C2.73398 3.0533 1.83398 4.11998 1.83398 5.66665V10.3333C1.83398 12.0533 2.94732 13.1666 4.66732 13.1666H10.6673C12.3873 13.1666 13.5007 12.0533 13.5007 10.3333V9.86664H12.694C11.6873 9.86664 10.834 9.11997 10.754 8.15997C10.7007 7.61331 10.9007 7.06666 11.3007 6.67999C11.6473 6.32666 12.114 6.13332 12.614 6.13332H13.5007V5.66665C13.5007 4.10665 12.5873 3.0333 11.1073 2.85997C10.9473 2.8333 10.8073 2.83331 10.6673 2.83331H4.66732Z" fill="currentColor" />
                            </svg>
                            پیگیری سفارشات
                        </span>
                        <span onClick={userInterestsHandler} className={`inline-flex items-center gap-x-1 p-2 text-sm sm:text-base font-EstedadRegular text-Gray-8  ${isUserInterests ? "relative text-Primary before:absolute before:right-0 before:w-0.5 before:bg-Primary before:h-full before:rounded-l-sm" : ""} hover:text-Primary transition-all cursor-pointer`}>
                            <svg className='w-4 h-4' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00065 14.4333C7.79398 14.4333 7.59398 14.4066 7.42732 14.3467C4.88065 13.4733 0.833984 10.3733 0.833984 5.79332C0.833984 3.45998 2.72065 1.56665 5.04065 1.56665C6.16732 1.56665 7.22065 2.00665 8.00065 2.79332C8.78065 2.00665 9.83399 1.56665 10.9607 1.56665C13.2807 1.56665 15.1673 3.46665 15.1673 5.79332C15.1673 10.38 11.1207 13.4733 8.57398 14.3467C8.40732 14.4066 8.20732 14.4333 8.00065 14.4333ZM5.04065 2.56665C3.27398 2.56665 1.83398 4.01332 1.83398 5.79332C1.83398 10.3466 6.21398 12.88 7.75398 13.4066C7.87398 13.4466 8.13398 13.4466 8.25398 13.4066C9.78732 12.88 14.174 10.3533 14.174 5.79332C14.174 4.01332 12.734 2.56665 10.9673 2.56665C9.95399 2.56665 9.01398 3.03998 8.40732 3.85998C8.22065 4.11332 7.79398 4.11332 7.60732 3.85998C6.98732 3.03332 6.05398 2.56665 5.04065 2.56665Z" fill="currentColor" />
                            </svg>
                            علاقمندی‌ها
                        </span>
                        <span onClick={userAddressHandler} className={`inline-flex items-center gap-x-1 p-2 text-sm sm:text-base font-EstedadRegular text-Gray-8  ${isUserAddress ? "relative text-Primary before:absolute before:right-0 before:w-0.5 before:bg-Primary before:h-full before:rounded-l-sm" : ""} hover:text-Primary transition-all cursor-pointer`}>
                            <svg className='w-4 h-4' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.99992 9.44667C6.57992 9.44667 5.41992 8.29333 5.41992 6.86667C5.41992 5.44 6.57992 4.29333 7.99992 4.29333C9.41992 4.29333 10.5799 5.44667 10.5799 6.87334C10.5799 8.3 9.41992 9.44667 7.99992 9.44667ZM7.99992 5.29333C7.13326 5.29333 6.41992 6 6.41992 6.87334C6.41992 7.74667 7.12659 8.45333 7.99992 8.45333C8.87326 8.45333 9.57992 7.74667 9.57992 6.87334C9.57992 6 8.86659 5.29333 7.99992 5.29333Z" fill="currentColor" />
                                <path d="M7.99914 15.1733C7.01247 15.1733 6.01914 14.8 5.24581 14.06C3.27914 12.1666 1.10581 9.14665 1.92581 5.55331C2.66581 2.29331 5.51247 0.833313 7.99914 0.833313C7.99914 0.833313 7.99914 0.833313 8.00581 0.833313C10.4925 0.833313 13.3391 2.29331 14.0791 5.55998C14.8925 9.15331 12.7191 12.1666 10.7525 14.06C9.97914 14.8 8.98581 15.1733 7.99914 15.1733ZM7.99914 1.83331C6.05914 1.83331 3.56581 2.86665 2.90581 5.77331C2.18581 8.91331 4.15914 11.62 5.94581 13.3333C7.09914 14.4466 8.90581 14.4466 10.0591 13.3333C11.8391 11.62 13.8125 8.91331 13.1058 5.77331C12.4391 2.86665 9.93914 1.83331 7.99914 1.83331Z" fill="currentColor" />
                            </svg>
                            آدرس‌های من
                        </span>
                        <span onClick={() => {
                            logoutHandler()
                            navigate('/')
                        }} className='inline-flex items-center gap-x-1 p-2 text-sm sm:text-base font-EstedadRegular text-Error cursor-pointer'>
                            <svg className='w-4 h-4' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.1597 14.8467H10.073C7.11302 14.8467 5.68635 13.68 5.43968 11.0667C5.41302 10.7933 5.61302 10.5467 5.89302 10.52C6.15968 10.4933 6.41302 10.7 6.43968 10.9733C6.63302 13.0667 7.61968 13.8467 10.0797 13.8467H10.1664C12.8797 13.8467 13.8397 12.8867 13.8397 10.1733V5.82665C13.8397 3.11332 12.8797 2.15332 10.1664 2.15332H10.0797C7.60635 2.15332 6.61968 2.94665 6.43968 5.07999C6.40635 5.35332 6.17302 5.55999 5.89302 5.53332C5.61302 5.51332 5.41302 5.26665 5.43302 4.99332C5.65968 2.33999 7.09302 1.15332 10.073 1.15332H10.1597C13.433 1.15332 14.833 2.55332 14.833 5.82665V10.1733C14.833 13.4467 13.433 14.8467 10.1597 14.8467Z" fill="currentColor" />
                                <path d="M10.0007 8.5H2.41406C2.14073 8.5 1.91406 8.27333 1.91406 8C1.91406 7.72667 2.14073 7.5 2.41406 7.5H10.0007C10.2741 7.5 10.5007 7.72667 10.5007 8C10.5007 8.27333 10.2741 8.5 10.0007 8.5Z" fill="currentColor" />
                                <path d="M3.89964 10.7333C3.77297 10.7333 3.6463 10.6866 3.5463 10.5866L1.31297 8.35331C1.11964 8.15998 1.11964 7.83998 1.31297 7.64664L3.5463 5.41331C3.73964 5.21998 4.05964 5.21998 4.25297 5.41331C4.4463 5.60664 4.4463 5.92664 4.25297 6.11998L2.37297 7.99998L4.25297 9.87998C4.4463 10.0733 4.4463 10.3933 4.25297 10.5866C4.15964 10.6866 4.0263 10.7333 3.89964 10.7333Z" fill="currentColor" />
                            </svg>
                            خروج
                        </span>
                    </div>
                    {
                        isUserProfil && (
                            <div className='w-full h-[495px] px-5 mt-6'>
                                {
                                    isEditeUser ? (
                                        <h3 className='text-base sm:text-xl font-EstedadExtraBold pb-2 text-Gray-8 text-center'>ویرایش اطلاعات شخصی</h3>
                                    ) : (
                                        <h3 className='text-base sm:text-xl font-EstedadExtraBold pb-2 text-Gray-8 text-center'>پروفایل</h3>
                                    )
                                }
                                <form action="#" className='flex flex-col items-center mt-6 gap-x-4 gap-y-3'>
                                    {
                                        isEditeUser ? (
                                            <>
                                                <input type="text" className='w-full sm:w-[400px] py-2 px-4 text-Gray-8 font-EstedadRegular border border-solid border-Gray-4 rounded-sm outline-none placeholder:font-EstedadRegular placeholder:text-sm cursor-auto' placeholder='نام' />
                                                <input type="text" className='w-full sm:w-[400px] py-2 px-4 text-Gray-8 font-EstedadRegular border border-solid border-Gray-4 rounded-sm outline-none placeholder:font-EstedadRegular placeholder:text-sm cursor-auto' placeholder='نام خانوادگی' />
                                                <input type="text" className='w-full sm:w-[400px] py-2 px-4 text-Gray-8 font-EstedadRegular border border-solid border-Gray-4 rounded-sm outline-none placeholder:font-EstedadRegular placeholder:text-sm cursor-auto' placeholder='آدرس ایمیل' />
                                                <input type="text" className='w-full sm:w-[400px] py-2 px-4 text-Gray-8 font-EstedadRegular border border-solid border-Gray-4 rounded-sm outline-none placeholder:font-EstedadRegular placeholder:text-sm cursor-auto' placeholder='شماره تماس' />
                                                <input type="text" className='w-full sm:w-[400px] py-2 px-4 text-Gray-8 font-EstedadRegular border border-solid border-Gray-4 rounded-sm outline-none placeholder:font-EstedadRegular placeholder:text-sm cursor-auto' placeholder='تاریخ تولد' />
                                                <input type="text" className='w-full sm:w-[400px] py-2 px-4 text-Gray-8 font-EstedadRegular border border-solid border-Gray-4 rounded-sm outline-none placeholder:font-EstedadRegular placeholder:text-sm cursor-auto' placeholder='نام کاربری' />
                                                <div className='w-full flex items-center gap-x-4'>
                                                    <button onClick={(e) => {
                                                        e.preventDefault()
                                                        setIsEditeUser(false)
                                                    }} className='w-full py-1.5 mt-2 rounded-sm cursor-pointer text-base font-EstedadMedium text-Primary border border-solid border-Primary'>
                                                        انصراف
                                                    </button>
                                                    <button className='w-full py-1.5 mt-2 rounded-sm cursor-pointer text-base font-EstedadMedium text-white bg-Primary'>
                                                        ذخیره اطلاعات
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <input type="text" className='w-full sm:w-[400px] py-2 px-4 text-Gray-8 font-EstedadRegular border border-solid border-Gray-4 rounded-sm outline-none placeholder:font-EstedadRegular placeholder:text-sm cursor-auto' placeholder='نام' readOnly />
                                                <input type="text" className='w-full sm:w-[400px] py-2 px-4 text-Gray-8 font-EstedadRegular border border-solid border-Gray-4 rounded-sm outline-none placeholder:font-EstedadRegular placeholder:text-sm cursor-auto' placeholder='نام خانوادگی' readOnly />
                                                <input type="text" className='w-full sm:w-[400px] py-2 px-4 text-Gray-8 font-EstedadRegular border border-solid border-Gray-4 rounded-sm outline-none placeholder:font-EstedadRegular placeholder:text-sm cursor-auto' placeholder='آدرس ایمیل' readOnly />
                                                <input type="text" className='w-full sm:w-[400px] py-2 px-4 text-Gray-8 font-EstedadRegular border border-solid border-Gray-4 rounded-sm outline-none placeholder:font-EstedadRegular placeholder:text-sm cursor-auto' placeholder='شماره تماس' readOnly />
                                                <input type="text" className='w-full sm:w-[400px] py-2 px-4 text-Gray-8 font-EstedadRegular border border-solid border-Gray-4 rounded-sm outline-none placeholder:font-EstedadRegular placeholder:text-sm cursor-auto' placeholder='تاریخ تولد' readOnly />
                                                <input type="text" className='w-full sm:w-[400px] py-2 px-4 text-Gray-8 font-EstedadRegular border border-solid border-Gray-4 rounded-sm outline-none placeholder:font-EstedadRegular placeholder:text-sm cursor-auto' placeholder='نام کاربری' readOnly />
                                                <button onClick={(e) => {
                                                    e.preventDefault()
                                                    setIsEditeUser(true)
                                                }} className='flex items-center justify-center w-full sm:w-[400px] py-1.5 mt-2 rounded-sm cursor-pointer gap-x-2 text-sm sm:text-base font-EstedadMedium text-Primary hover:bg-Primary hover:text-white border border-solid border-Primary transition-all'>
                                                    <svg className='w-4 sm:w-6 h-4 sm:h-6' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.03999 19.52C5.42999 19.52 4.85999 19.31 4.44999 18.92C3.92999 18.43 3.67999 17.69 3.76999 16.89L4.13999 13.65C4.20999 13.04 4.57999 12.23 5.00999 11.79L13.22 3.09999C15.27 0.929988 17.41 0.869988 19.58 2.91999C21.75 4.96999 21.81 7.10999 19.76 9.27999L11.55 17.97C11.13 18.42 10.35 18.84 9.73999 18.94L6.51999 19.49C6.34999 19.5 6.19999 19.52 6.03999 19.52ZM16.43 2.90999C15.66 2.90999 14.99 3.38999 14.31 4.10999L6.09999 12.81C5.89999 13.02 5.66999 13.52 5.62999 13.81L5.25999 17.05C5.21999 17.38 5.29999 17.65 5.47999 17.82C5.65999 17.99 5.92999 18.05 6.25999 18L9.47999 17.45C9.76999 17.4 10.25 17.14 10.45 16.93L18.66 8.23999C19.9 6.91999 20.35 5.69999 18.54 3.99999C17.74 3.22999 17.05 2.90999 16.43 2.90999Z" fill="currentColor" />
                                                        <path d="M17.8404 10.95C17.8204 10.95 17.7904 10.95 17.7704 10.95C14.6504 10.64 12.1404 8.26997 11.6604 5.16997C11.6004 4.75997 11.8804 4.37997 12.2904 4.30997C12.7004 4.24997 13.0804 4.52997 13.1504 4.93997C13.5304 7.35997 15.4904 9.21997 17.9304 9.45997C18.3404 9.49997 18.6404 9.86997 18.6004 10.28C18.5504 10.66 18.2204 10.95 17.8404 10.95Z" fill="currentColor" />
                                                        <path d="M21.5 22.75H3.5C3.09 22.75 2.75 22.41 2.75 22C2.75 21.59 3.09 21.25 3.5 21.25H21.5C21.91 21.25 22.25 21.59 22.25 22C22.25 22.41 21.91 22.75 21.5 22.75Z" fill="currentColor" />
                                                    </svg>
                                                    ویرایش اطلاعات شخصی
                                                </button>
                                            </>
                                        )
                                    }
                                </form>
                            </div>
                        )
                    }
                    {
                        isUserOrder && (
                            <div className='w-full flex items-center justify-center h-40 p-6 border border-solid border-Gray-4 rounded-lg mt-5'>
                                <h3 className='font-EstedadBold text-base sm:text-2xl text-Primary'>بزودی ...</h3>
                            </div>
                        )
                    }
                    {
                        isUserAddress && (
                            <div className='relative h-[256px] w-full flex flex-col items-center justify-center py-4 px-2 border border-solid border-Gray-4 rounded-lg mt-6'>
                                <div className='w-[200px] h-[193px] absolute -z-10'>
                                    <img className='w-full h-full' src="../public/img/svg/shoppingCart-img.svg" alt="Shoppin Cart Empty" />
                                </div>
                                <p className='font-EstedadRegular text-sm text-Gray-6 mb-8'>شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!</p>
                                <button onClick={addressBtnHandler} className='py-1.5 px-10 border border-solid border-Primary rounded-sm text-sm font-EstedadMedium text-Primary hover:text-white hover:bg-Primary transition-all cursor-pointer'>افزودن آدرس</button>
                            </div>
                        )
                    }
                </div>
            </main >
            <Footer />
        </>
    )
}
