import { useState, useRef } from 'react'
import Register from '../components/Register'
import Alert from '../components/Alert'
import BeatLoader from 'react-spinners/BeatLoader'
import { Link, useNavigate } from 'react-router-dom'
import InputElem from '../components/InputElem'
import { GlobalContext } from '../Contexts/GlobalContext'
import { useContext } from 'react'

export default function Login() {

    const { isAlert, alertMsg, setIsAlert, setAlertMsg, } = useContext(GlobalContext)

    const navigate = useNavigate()

    const [isLoader, setIsLoader] = useState(false)

    const [isUsernameInputActive, setIsUsernameInputActive] = useState(false)
    const [isEmailInputActive, setIsEmailInputActive] = useState(false)
    const [isPasswordInputActive, setIsPasswordInputActive] = useState(false)
    const [isRePasswordInputActive, setIsRePasswordInputActive] = useState(false)

    const [isUsernameError, setIsUsernameError] = useState(true)
    const [isEmailError, setIsEmailError] = useState(true)
    const [isPasswordError, setIsPasswordError] = useState(true)
    const [isRePasswordError, setIsRePasswordError] = useState(true)

    const [usernameValue, setUsernameValue] = useState('')
    const usernameValidRef = useRef(null)

    const [emailValue, setEmailValue] = useState('')
    const emailValidRef = useRef(null)

    const [passwordValue, setPasswordValue] = useState('')
    const passwordValidRef = useRef(null)

    const [rePasswordValue, setRePasswordValue] = useState('')

    const usernameInputFocus = () => setIsUsernameInputActive(true)
    const usernameInputBlur = () => setIsUsernameInputActive(false)

    const emialInputFocus = () => setIsEmailInputActive(true)
    const emialInputBlur = () => setIsEmailInputActive(false)

    const passWordInputFocus = () => setIsPasswordInputActive(true)
    const passWordInputBlur = () => setIsPasswordInputActive(false)

    const rePassWordInputFocus = () => setIsRePasswordInputActive(true)
    const rePassWordInputBlur = () => setIsRePasswordInputActive(false)

    const usernameRegex = /^[\d\w]{6,12}$/g
    const emailRegex = /^[a-z\d\.\_]+@gmail.com$/g
    const passwordRegex = /^[\w]{8,12}$/g

    const handelUsernameInput = (event) => {
        const usernameInputValue = event.target.value
        setUsernameValue(usernameInputValue)
        usernameValidRef.current = usernameRegex.test(usernameInputValue)
        setIsUsernameInputActive(usernameValidRef.current)
        setIsUsernameError(usernameValidRef.current)
    }

    const handelEmailInput = (event) => {
        const emailInputValue = event.target.value
        setEmailValue(emailInputValue)
        emailValidRef.current = emailRegex.test(emailInputValue)
        setIsEmailInputActive(emailValidRef.current)
        setIsEmailError(emailValidRef.current)
    }

    const handelPasswordInput = (event) => {
        const passwordInputValue = event.target.value
        setPasswordValue(passwordInputValue)
        passwordValidRef.current = passwordRegex.test(passwordInputValue)
        setIsRePasswordInputActive(passwordValidRef.current)
        setIsPasswordError(passwordValidRef.current)
    }

    const handelRePasswordInput = (event) => {
        const rePasswordInputValue = event.target.value
        setRePasswordValue(rePasswordInputValue)
        if (passwordValue === rePasswordInputValue) {
            setIsPasswordInputActive(true)
            setIsRePasswordError(true)
        } else {
            setIsPasswordInputActive(false)
            setIsRePasswordError(false)
        }
    }

    const singBtnHandler = async (event) => {
        event.preventDefault();
        if (emailValidRef.current && passwordValidRef.current && usernameValidRef.current && passwordValue === rePasswordValue) {
            try {
                setIsLoader(true)
                const response = await fetch('https://tarkhine-test1.liara.run/auth/users/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: usernameValue,
                        email: emailValue,
                        password: passwordValue,
                        re_password: passwordValue,
                    })
                })

                if (!response.ok && response.status !== 400) {
                    throw new Error(`خطای ${response.status}: مشکل در دریافت داده‌ها`);
                } else if (response.status === 201) {
                    setIsAlert('success')
                    setAlertMsg('ثبت نام با موفقیت انجام شد')
                    setIsLoader(false)
                    setTimeout(() => {
                        navigate('/login')
                    }, 2000);
                } else {
                    const result = await response.json()
                    if (result.password && result.password.includes('The password is too similar to the username.')) {
                        setIsAlert('error')
                        setAlertMsg('رمز عبور وارد شده بسیار شبیه به نام کاربری است')
                        setIsLoader(false)
                    } else if (result.password && result.password.includes('This password is too common.')) {
                        setIsAlert('error')
                        setAlertMsg("رمز عبور وارد شده بسیار ساده است")
                        setIsLoader(false)
                    } else if (result.username && result.username.includes("A user with that username already exists.")) {
                        setIsAlert('error')
                        setAlertMsg("کاربری با این نام کاربری از قبل وجود دارد")
                        setIsLoader(false)
                    }
                }
            } catch (error) {
                setIsAlert('error');
                setAlertMsg("مشکلی در ارتباط با سرور رخ داده است");
                setIsLoader(false)
            }
        } else {
            setIsAlert('error')
            setAlertMsg("لطفا مقادیر خواسته شده را به درستی تکمیل کنید")
        }
    }

    const closeAlert = () => setIsAlert(null)

    const remvoeInputValue = () => {
        setUsernameValue("")
        setEmailValue("")
        setPasswordValue("")
        setRePasswordValue("")
    }

    return (
        <Register>
            {
                isAlert === 'success' && (<Alert message={alertMsg} type='success' onClose={closeAlert} />)
            }
            {
                isAlert === 'error' && (<Alert message={alertMsg} type='error' onClose={closeAlert} />)
            }
            <div className='max-w-[330px] w-full pt-5 pb-6 px-6 text-center bg-white rounded-xl'>
                <h3 className='text-Gray-8 font-EstedadBold text-xl mb-4 sm:mb-4.5'>عضویت</h3>
                <p className='mb-5 text-Black font-EstedadRegular'>قبلا ثبت نام کرده اید؟
                    <Link to='/login' className='font-EstedadSemiBold text-Tint-7 mr-1'>وارد شوید</Link>
                </p>
                <form action="#" className='rtl w-full'>
                    <InputElem change={(event) => {
                        handelUsernameInput(event)
                    }} value={usernameValue} errorMsg='نام کاربری باید حداقل ۶ و حداکثر ۱۲ کارکتر باشد' type='text' isError={isUsernameError} isActive={isUsernameInputActive} focus={usernameInputFocus} blur={usernameInputBlur} placeholder='نام کاربری'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 10.75C17.59 10.75 17.25 10.41 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.75 10.41 6.41 10.75 6 10.75C5.59 10.75 5.25 10.41 5.25 10V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8V10C18.75 10.41 18.41 10.75 18 10.75Z" fill="#64748b" />
                            <path d="M12 19.25C10.21 19.25 8.75 17.79 8.75 16C8.75 14.21 10.21 12.75 12 12.75C13.79 12.75 15.25 14.21 15.25 16C15.25 17.79 13.79 19.25 12 19.25ZM12 14.25C11.04 14.25 10.25 15.04 10.25 16C10.25 16.96 11.04 17.75 12 17.75C12.96 17.75 13.75 16.96 13.75 16C13.75 15.04 12.96 14.25 12 14.25Z" fill="#64748b" />
                            <path d="M17 22.75H7C2.59 22.75 1.25 21.41 1.25 17V15C1.25 10.59 2.59 9.25 7 9.25H17C21.41 9.25 22.75 10.59 22.75 15V17C22.75 21.41 21.41 22.75 17 22.75ZM7 10.75C3.42 10.75 2.75 11.43 2.75 15V17C2.75 20.57 3.42 21.25 7 21.25H17C20.58 21.25 21.25 20.57 21.25 17V15C21.25 11.43 20.58 10.75 17 10.75H7Z" fill="#64748b" />
                        </svg>
                    </InputElem>
                    <InputElem change={(event) => {
                        handelEmailInput(event)
                    }} value={emailValue} errorMsg='ایمیل وارد شده معتبر نمی باشد' type='email' isError={isEmailError} isActive={isEmailInputActive} focus={emialInputFocus} blur={emialInputBlur} placeholder='آدرس ایمیل'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25ZM7 4.25C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7Z" fill="#64748b" />
                            <path d="M11.9998 12.87C11.1598 12.87 10.3098 12.61 9.65978 12.08L6.52978 9.57997C6.20978 9.31997 6.14978 8.84997 6.40978 8.52997C6.66978 8.20997 7.13978 8.14997 7.45978 8.40997L10.5898 10.91C11.3498 11.52 12.6398 11.52 13.3998 10.91L16.5298 8.40997C16.8498 8.14997 17.3298 8.19997 17.5798 8.52997C17.8398 8.84997 17.7898 9.32997 17.4598 9.57997L14.3298 12.08C13.6898 12.61 12.8398 12.87 11.9998 12.87Z" fill="#64748b" />
                        </svg>
                    </InputElem>
                    <InputElem change={(event) => {
                        handelPasswordInput(event)
                    }} value={passwordValue} errorMsg='رمزعبور باید حداقل ۸ و حداکثر ۱۲ عدد باشد' type='password' isError={isPasswordError} isActive={isPasswordInputActive} focus={passWordInputFocus} blur={passWordInputBlur} placeholder='رمز عبور'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 10.75C17.59 10.75 17.25 10.41 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.75 10.41 6.41 10.75 6 10.75C5.59 10.75 5.25 10.41 5.25 10V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8V10C18.75 10.41 18.41 10.75 18 10.75Z" fill="#64748b" />
                            <path d="M12 19.25C10.21 19.25 8.75 17.79 8.75 16C8.75 14.21 10.21 12.75 12 12.75C13.79 12.75 15.25 14.21 15.25 16C15.25 17.79 13.79 19.25 12 19.25ZM12 14.25C11.04 14.25 10.25 15.04 10.25 16C10.25 16.96 11.04 17.75 12 17.75C12.96 17.75 13.75 16.96 13.75 16C13.75 15.04 12.96 14.25 12 14.25Z" fill="#64748b" />
                            <path d="M17 22.75H7C2.59 22.75 1.25 21.41 1.25 17V15C1.25 10.59 2.59 9.25 7 9.25H17C21.41 9.25 22.75 10.59 22.75 15V17C22.75 21.41 21.41 22.75 17 22.75ZM7 10.75C3.42 10.75 2.75 11.43 2.75 15V17C2.75 20.57 3.42 21.25 7 21.25H17C20.58 21.25 21.25 20.57 21.25 17V15C21.25 11.43 20.58 10.75 17 10.75H7Z" fill="#64748b" />
                        </svg>
                    </InputElem>
                    <InputElem change={(event) => {
                        handelRePasswordInput(event)
                    }} value={rePasswordValue} errorMsg={'تایید نشده !'} type='password' isError={isRePasswordError} isActive={isRePasswordInputActive} focus={rePassWordInputFocus} blur={rePassWordInputBlur} placeholder='تکرار رمز عبور'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 10.75C17.59 10.75 17.25 10.41 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.75 10.41 6.41 10.75 6 10.75C5.59 10.75 5.25 10.41 5.25 10V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8V10C18.75 10.41 18.41 10.75 18 10.75Z" fill="#64748b" />
                            <path d="M12 19.25C10.21 19.25 8.75 17.79 8.75 16C8.75 14.21 10.21 12.75 12 12.75C13.79 12.75 15.25 14.21 15.25 16C15.25 17.79 13.79 19.25 12 19.25ZM12 14.25C11.04 14.25 10.25 15.04 10.25 16C10.25 16.96 11.04 17.75 12 17.75C12.96 17.75 13.75 16.96 13.75 16C13.75 15.04 12.96 14.25 12 14.25Z" fill="#64748b" />
                            <path d="M17 22.75H7C2.59 22.75 1.25 21.41 1.25 17V15C1.25 10.59 2.59 9.25 7 9.25H17C21.41 9.25 22.75 10.59 22.75 15V17C22.75 21.41 21.41 22.75 17 22.75ZM7 10.75C3.42 10.75 2.75 11.43 2.75 15V17C2.75 20.57 3.42 21.25 7 21.25H17C20.58 21.25 21.25 20.57 21.25 17V15C21.25 11.43 20.58 10.75 17 10.75H7Z" fill="#64748b" />
                        </svg>
                    </InputElem>
                    <button onClick={(event) => singBtnHandler(event)} className='md:mt-5 h-12 w-full px-5 bg-Success text-white rounded-lg font-EstedadMedium cursor-pointer'>
                        {
                            !isLoader && (<div className=' mt-2'>ثبت نام</div>)
                        }
                        <div className='mt-2'>
                            <BeatLoader color='#fff' size={12} loading={isLoader} />
                        </div>
                    </button>
                </form>
            </div>
        </Register>
    )
}

