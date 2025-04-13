import React, { useState, useRef } from 'react'
import Register from '../components/Register'
import Alert from '../components/Alert'
import BeatLoader from 'react-spinners/BeatLoader'
import { Link, useNavigate } from 'react-router-dom'
import InputElem from '../components/InputElem'
import { GlobalContext } from '../Contexts/GlobalContext'
import { useContext } from 'react'

export default function Login() {

    const navigate = useNavigate()

    const [isLoader, setIsLoader] = useState(false)

    const { isAlert, alertMsg, setIsAlert, setAlertMsg, } = useContext(GlobalContext)

    const [isUsernameInputActive, setIsUsernameInputActive] = useState(false)
    const [isUsernameError, setIsUsernameError] = useState(true)


    const [isPasswordInputActive, setIsPasswordInputActive] = useState(false)
    const [isPasswordError, setIsPasswordError] = useState(true)

    const [usernameValue, setUsernameValue] = useState('')
    const usernameValidRef = useRef(null)

    const [passwordValue, setPasswordValue] = useState('')
    const passwordValidRef = useRef(null)

    const usernameInputFocus = () => setIsUsernameInputActive(true)
    const usernameInputBlur = () => setIsUsernameInputActive(false)

    const passWordInputFocus = () => setIsPasswordInputActive(true)
    const passWordInputBlur = () => setIsPasswordInputActive(false)

    const usernameRegex = /^[\d\w]{6,12}$/g
    const passwordRegex = /^[\w]{8,12}$/g

    const handelUsernameInput = (event) => {
        const usernameInputValue = event.target.value
        setUsernameValue(usernameInputValue)
        usernameValidRef.current = usernameRegex.test(usernameInputValue)
        setIsUsernameInputActive(usernameValidRef.current)
        setIsUsernameError(usernameValidRef.current)
    }

    const handelPasswordInput = (event) => {
        const passwordInputValue = event.target.value
        setPasswordValue(passwordInputValue)
        passwordValidRef.current = passwordRegex.test(passwordInputValue)
        setIsPasswordInputActive(passwordValidRef.current)
        setIsPasswordError(passwordValidRef.current)
    }

    const loginBtnHandler = async (event) => {
        event.preventDefault();
        if (usernameValidRef.current && passwordValidRef.current) {
            try {
                setIsLoader(true)

                const response = await fetch('https://tarkhine-test1.liara.run/auth/jwt/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: usernameValue,
                        password: passwordValue
                    })
                })

                if (!response.ok && response.status !== 401) {
                    throw new Error('نام کاربری یا رمز عبور اشتباه است');
                }

                const result = await response.json()
                if (result.detail && result.detail.includes('No active account found with the given credentials')) {
                    setIsAlert('error')
                    setAlertMsg('کاربری با این مشخصات یافت نشد')
                    setIsLoader(false)
                } else {
                    setIsLoader(false)
                    setIsAlert('success')
                    setAlertMsg('لاگین با موفقیت انجام شد')
                    setTimeout(() => {
                        navigate('/')
                    }, 1000);
                }

            } catch (error) {
                if (error.message === 'Failed to fetch') {
                    setIsAlert('error')
                    setAlertMsg('مشکلی در ارتباط با سرور رخ داده است')
                    setIsLoader(false)
                } else {
                    setIsLoader(false)
                    setIsAlert('error')
                    setAlertMsg(error.message)
                    remvoeInputValue()
                }
            }
        } else {
            setIsAlert('error')
            setAlertMsg('لطفا مقادیر خواسته شده را به درستی تکمیل کنید')
        }
    }

    const closeAlert = () => setIsAlert(null)

    const remvoeInputValue = () => {
        setUsernameValue("")
        setPasswordValue("")
    }

    return (
        <>
            <Register>
                {
                    isAlert === 'success' && (<Alert message={alertMsg} type='success' onClose={closeAlert} />)
                }

                {
                    isAlert === 'error' && (<Alert message={alertMsg} type='error' onClose={closeAlert} />)
                }
                <div className='max-w-[330px] w-full p-4 md:p-6 text-center bg-white rounded-xl shadow-lg'>
                    <h3 className='text-Gray-8 font-EstedadBold text-lg md:text-xl mb-2 sm:mb-4.5'>ورود</h3>
                    <p className='mb-4 md:mb-5 text-Black text-sm md:text-base font-EstedadRegular'>حساب کاربری ندارید؟
                        <Link to='/signup' className='font-EstedadSemiBold text-Success mr-1'>ثبت نام کنید</Link>
                    </p>
                    <form action="#" className='rtl w-full'>
                        <InputElem change={(event) => {
                            handelUsernameInput(event)
                        }} value={usernameValue} errorMsg='نام کاربری باید حداقل ۶ و حداکثر ۱۲ کارکتر باشد' type='text' isError={isUsernameError} isActive={isUsernameInputActive} focus={usernameInputFocus} blur={usernameInputBlur} placeholder='نام کاربری'>
                            <svg className='md:w-5 w-6 md:h-5 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.1601 11.62C12.1301 11.62 12.1101 11.62 12.0801 11.62C12.0301 11.61 11.9601 11.61 11.9001 11.62C9.00006 11.53 6.81006 9.25 6.81006 6.44C6.81006 3.58 9.14006 1.25 12.0001 1.25C14.8601 1.25 17.1901 3.58 17.1901 6.44C17.1801 9.25 14.9801 11.53 12.1901 11.62C12.1801 11.62 12.1701 11.62 12.1601 11.62ZM12.0001 2.75C9.97006 2.75 8.31006 4.41 8.31006 6.44C8.31006 8.44 9.87006 10.05 11.8601 10.12C11.9101 10.11 12.0501 10.11 12.1801 10.12C14.1401 10.03 15.6801 8.42 15.6901 6.44C15.6901 4.41 14.0301 2.75 12.0001 2.75Z" fill="#64748b" />
                                <path d="M12.1701 22.55C10.2101 22.55 8.2401 22.05 6.7501 21.05C5.3601 20.13 4.6001 18.87 4.6001 17.5C4.6001 16.13 5.3601 14.86 6.7501 13.93C9.7501 11.94 14.6101 11.94 17.5901 13.93C18.9701 14.85 19.7401 16.11 19.7401 17.48C19.7401 18.85 18.9801 20.12 17.5901 21.05C16.0901 22.05 14.1301 22.55 12.1701 22.55ZM7.5801 15.19C6.6201 15.83 6.1001 16.65 6.1001 17.51C6.1001 18.36 6.6301 19.18 7.5801 19.81C10.0701 21.48 14.2701 21.48 16.7601 19.81C17.7201 19.17 18.2401 18.35 18.2401 17.49C18.2401 16.64 17.7101 15.82 16.7601 15.19C14.2701 13.53 10.0701 13.53 7.5801 15.19Z" fill="#64748b" />
                            </svg>
                        </InputElem>
                        <InputElem change={(event) => {
                            handelPasswordInput(event)
                        }} value={passwordValue} errorMsg='رمزعبور باید حداقل ۸ و حداکثر ۱۲ کاراکتر باشد' type='password' isError={isPasswordError} isActive={isPasswordInputActive} focus={passWordInputFocus} blur={passWordInputBlur} placeholder='رمز عبور'>
                            <svg className='md:w-5 w-6 md:h-5 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 10.75C17.59 10.75 17.25 10.41 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.75 10.41 6.41 10.75 6 10.75C5.59 10.75 5.25 10.41 5.25 10V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8V10C18.75 10.41 18.41 10.75 18 10.75Z" fill="#64748b" />
                                <path d="M12 19.25C10.21 19.25 8.75 17.79 8.75 16C8.75 14.21 10.21 12.75 12 12.75C13.79 12.75 15.25 14.21 15.25 16C15.25 17.79 13.79 19.25 12 19.25ZM12 14.25C11.04 14.25 10.25 15.04 10.25 16C10.25 16.96 11.04 17.75 12 17.75C12.96 17.75 13.75 16.96 13.75 16C13.75 15.04 12.96 14.25 12 14.25Z" fill="#64748b" />
                                <path d="M17 22.75H7C2.59 22.75 1.25 21.41 1.25 17V15C1.25 10.59 2.59 9.25 7 9.25H17C21.41 9.25 22.75 10.59 22.75 15V17C22.75 21.41 21.41 22.75 17 22.75ZM7 10.75C3.42 10.75 2.75 11.43 2.75 15V17C2.75 20.57 3.42 21.25 7 21.25H17C20.58 21.25 21.25 20.57 21.25 17V15C21.25 11.43 20.58 10.75 17 10.75H7Z" fill="#64748b" />
                            </svg>
                        </InputElem>
                        <button onClick={(event) => loginBtnHandler(event)} className='md:mt-5 h-12 w-full px-5 bg-Success text-white rounded-lg font-EstedadMedium cursor-pointer'>
                            {
                                !isLoader && (<div className=' mt-2'>ورود</div>)
                            }
                            <div className='mt-2'>
                                <BeatLoader color='#fff' size={12} loading={isLoader} />
                            </div>
                        </button>
                    </form>
                    <Link to='/lost-password' className='inline-block underline underline-offset-2 mt-4 md:mt-5 text-[#64748b]'>فراموشی رمز عبور</Link>
                </div>
            </Register>

        </>
    )
}

