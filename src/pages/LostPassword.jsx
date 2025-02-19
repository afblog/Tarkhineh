import { useState, useRef, useEffect } from 'react'
import Register from '../components/Register'
import InputElem from '../components/InputElem'
import Alert from '../components/Alert'
import { useNavigate } from 'react-router-dom'

export default function LostPassword() {

    const [validInput, setValidInput] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (validInput) {
            navigate('/lost-password/enter-code')
        }
    }, [validInput, navigate])

    const [isAlert, setIsAlert] = useState(null)

    const [isEmailInputActive, setIsEmailInputActive] = useState(false)
    const [isEmailError, setIsEmailError] = useState(true)

    const [emailValue, setEmailValue] = useState('')
    const emailValidRef = useRef(null)

    const emialInputFocus = () => setIsEmailInputActive(true)
    const emialInputBlur = () => setIsEmailInputActive(false)

    const emailRegex = /^[a-z\d\.\_]+@gmail.com$/g

    const handelEmailInput = (event) => {
        const emailInputValue = event.target.value
        setEmailValue(emailInputValue)
        emailValidRef.current = emailRegex.test(emailInputValue)
        setIsEmailInputActive(emailValidRef.current)
        setIsEmailError(emailValidRef.current)
    }


    const loginBtnHandler = (event) => {
        event.preventDefault();
        if (emailValidRef.current) {
            // fetch data
            setIsAlert('success')
            setValidInput(true)
        } else {
            setIsAlert('error')
        }
    }

    const closeAlert = () => setIsAlert(null)

    return (
        <Register>
            {
                isAlert === 'success' && (<Alert message='لاگین با موفقیت انجام شد' type='success' onClose={closeAlert} />)
            }
            {
                isAlert === 'error' && (<Alert message='لطفا مقادیر خواسته شده را به  درستی تکمیل کنید' type='error' onClose={closeAlert} />)
            }
            <div className='max-w-[330px] w-full pt-5 pb-6 px-6 text-center bg-white rounded-xl shadow-lg'>
                <h3 className='text-Gray-8 font-EstedadBold text-xl mb-4 sm:mb-4.5'>بازیابی رمز عبور</h3>
                <form action="#" className='rtl w-full'>
                    <InputElem change={(event) => {
                        handelEmailInput(event)
                    }} value={emailValue} errorMsg='ایمیل وارد شده معتبر نمی باشد' type='email' isError={isEmailError} isActive={isEmailInputActive} focus={emialInputFocus} blur={emialInputBlur} placeholder='آدرس ایمیل'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25ZM7 4.25C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7Z" fill="#64748b" />
                            <path d="M11.9998 12.87C11.1598 12.87 10.3098 12.61 9.65978 12.08L6.52978 9.57997C6.20978 9.31997 6.14978 8.84997 6.40978 8.52997C6.66978 8.20997 7.13978 8.14997 7.45978 8.40997L10.5898 10.91C11.3498 11.52 12.6398 11.52 13.3998 10.91L16.5298 8.40997C16.8498 8.14997 17.3298 8.19997 17.5798 8.52997C17.8398 8.84997 17.7898 9.32997 17.4598 9.57997L14.3298 12.08C13.6898 12.61 12.8398 12.87 11.9998 12.87Z" fill="#64748b" />
                        </svg>
                    </InputElem>
                    <button onClick={(event) => loginBtnHandler(event)} className='flex items-center justify-center h-12 w-full px-5 bg-Success text-white rounded-lg font-EstedadMedium'>ادامه</button>
                </form>
            </div>
        </Register >
    )
}
